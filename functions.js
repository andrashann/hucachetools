var joinedMultiPointsGeoJSON // this will be used to store the joined multicache points

function joinMultiPoints() {
  /* there is a 'data' variable defined in the window, it is a list of lists.
  one element looks like this: 
  [3895, 3277, "47.863133", "20.146333", "M", "K", "M115:M", "Mátra 115",
  "N", "M", "MK"]
  [0] and [1] are ids of the cache. [2] and [3] are coordinates. [4] is the
  type of the cache. [5] is the status (can be found?). [6] is the point id. 
  [7] is the name of the cache. [8] is find status (N = not yet found by the
  logged in user; everything is N if not logged in). [9] is the point type
  (M = starting point of a multi-cache, T = additional point of a multi-cache),
  [10] is a one-field summary of [8] and [9].
  */

  var newData = data.filter(point => (
    // we only care if the logged-in user has not found the cache yet to
    // save resources.
    point[8] == "N"
    // the cache should not be archived
    && point[5] != "C"
    // and the point should be the starting or additional point of 
    // a multi-cache
    && (point[9] == "M" || point[9] == "T")
  ))
  var sortedData = newData.sort(
    // we want to sort the caches based on ID and rank within the multi
    // unfortunately, the rank can only be extracted from the point id
    // field and it is a non-zero-padded number in a string. hence this.
    function (a, b) {
      return (
        (a[0] * 100 + Number(a[6].split(':')[1].substring(1))) -
        (b[0] * 100 + Number(b[6].split(':')[1].substring(1)))
      )
    }
  );

  // initialize an empty list for all the GeoJSON LineStrings we will create
  // and another one for actual GeoJSON objects
  var myLines = [];
  var myGeoJSONLines = []
  // the coordinates that go in the "current" LineString as we iterate through
  // the points
  var currentCoordinates = [];
  for (let i = 0; i < sortedData.length - 1; i++) {
    // add the current point to the list
    currentCoordinates.push([
      // coordinates are switched because GeoJSON uses x, y coordinates,
      // which is longitude and latitude in a geographical coordinate
      // system, while geographical coordinates are normally referred to
      // as lat-lon pairs (and this is the order in the data as well).
      sortedData[i][3], sortedData[i][2]
    ])

    // if we have arrived at a point where the next one belongs to a cache
    // with a different ID, we should finish and append our line to myLines
    if (sortedData[i + 1][0] != sortedData[i][0]) {
      // but only if there is more than one point (some multi-caches have
      // only one published point, and one point is not a line)
      if (currentCoordinates.length > 1) {
        // we push a GeoJSON LineString object
        // https://datatracker.ietf.org/doc/html/rfc7946#appendix-A.2
        const geom = {
          "type": "LineString",
          "coordinates": currentCoordinates
        }
        myLines.push(geom)
        myGeoJSONLines.push({
          "type": "Feature",
          "geometry": geom,
          "properties": {
            "name": sortedData[i][6].split(':')[0] // the sort code of the cache
          }
        })
      }

      currentCoordinates = []
    }
  }

  // the main page has Leaflet loaded and an object called "map" that
  // holds the map. let's add our data as a layer to it.
  var linesLayer = L.geoJSON().addTo(map);
  linesLayer.addData(myLines);

  joinedMultiPointsGeoJSON = { "type": "FeatureCollection", "features": myGeoJSONLines }
}

function dlMultiPointJoins() {
  if (typeof joinedMultiPointsGeoJSON === 'undefined') {
    joinMultiPoints()
  }

  var element = document.createElement('a');
  element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(togpx(joinedMultiPointsGeoJSON)));
  element.setAttribute('download', 'multipoints_connected.gpx');

  element.style.display = 'none';
  document.body.appendChild(element);

  element.click();

  document.body.removeChild(element);
}

function loadGPX() {
  // these are the colors that the leaflet-color markers package has 
  // (https://github.com/pointhi/leaflet-color-markers) with the relevant route
  // colors
  const gpxColors = {
    blue: '#2A81CB',
    gold: '#FFD326',
    red: '#CB2B3E',
    green: '#2AAD27',
    orange: '#CB8427',
    yellow: '#CAC428',
    violet: '#9C2BCB',
    grey: '#7B7B7B',
    black: '#3D3D3D',
  }

  // open a prompt to select a gpx file
  const fileSelector = document.createElement('input');
  fileSelector.setAttribute('type', 'file');
  fileSelector.setAttribute('accept', '.gpx,.GPX');
  fileSelector.click();

  fileSelector.addEventListener(
    'change', // when a file is loaded
    function () {
      if (fileSelector.files.length == 1) {
        const theFile = fileSelector.files[0]
        // let the user pick a color from the list (this is a string input, so 
        // ther might be a typo, but there is a default just in case
        let color = prompt("Válassz színt az alábbiak közül/Select one of these colors: 'blue', 'gold', 'red', 'green', 'orange', 'yellow', 'violet', 'grey', 'black'", "violet");
        if (!color in gpxColors) { color = 'violet' }

        const reader = new FileReader()
        reader.readAsText(theFile, 'UTF-8')
        reader.onload = (e) => {
          const parsedGPX = parser.parse(e.target.result, {
            attributeNamePrefix: '',
            // this is very important as lat and lon won't be loaded otherwise:
            ignoreAttributes: false,
            parseNodeValue: true,
            parseAttributeValue: true,
            arrayMode: /^trk/,
          })

          const tracks = parsedGPX.gpx.trk
          const points = parsedGPX.gpx.wpt
          console.log(tracks)

          if (points) {
            // if we have waypoints, add them as it is customary in Leaflet
            points.forEach((wpt) => {
              var marker = L.marker([wpt.lat, wpt.lon], {
                icon: L.icon({
                  iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-' + color + '.png',
                  iconSize: [25, 41],
                  iconAnchor: [12, 41],
                  popupAnchor: [1, -34],
                })
              });
              // we add a popup with the name and description of the waypoint
              // (opened when clicked)
              marker.bindPopup('<b>' + wpt.name + ':</b> ' + wpt.desc);
              marker.addTo(map);
            })
          }

          tracks.forEach((trk) => {
            // add each track -- n.b. the trk and trkseg objects are part of 
            // the gpx specification
            trk.trkseg.forEach((trkseg => {
              const latLons = trkseg.trkpt.map((p) => [p.lat, p.lon])
              const pL = L.polyline(latLons, { color: gpxColors[color], weight: 8, opacity: 0.4 })
              // highlight the track on mouseover for better visibility
              pL.on('mouseover', function (e) {
                e.target.setStyle({ opacity: 0.8, color: 'white' });
              });
              pL.on('mouseout', function (e) {
                e.target.setStyle({ opacity: 0.4, color: gpxColors[color] });
              });
              pL.bindPopup(trk.name + '');
              pL.addTo(map);
            }))
          })
        }
      }
      // destroy the fileSelector element as we don't need it anymore
      fileSelector.remove()
    },
  );
}
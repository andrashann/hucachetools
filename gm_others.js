// add new base layer to baseMaps variable
baseMaps['Mapy Base'] = L.tileLayer('https://m4.mapserver.mapy.cz/base-m/{z}-{x}-{y}.png', { minZoom: 5, maxZoom: 18 })
overlayMaps['WaymarkedTrails'] = L.tileLayer('https://tile.waymarkedtrails.org/hiking/{z}/{x}/{y}.png', { minZoom: 5, maxZoom: 18 })

// remove the original layer control because we will create a new one
document.getElementsByClassName('leaflet-control-layers leaflet-control')[0].remove()

// add new layer control
L.control.layers(baseMaps, overlayMaps).addTo(map);

// if we change to one of our new layers, don't add it to LocalStorage as that can't
// be read back properly later on (because the layer is not defined when the page
// is loaded from the server, only later on, when the extension loads).
map.on("baselayerchange", function (e) {
    if (!(['Mapy Base'].includes(e.name))) {
        localStorage.mp = e.name;
    } else {
        localStorage.mp = "OSM Mapnik";
    }

});
// add new base layer to baseMaps variable
overlayMaps["WaymarkedTrails"] = L.tileLayer(
  "https://tile.waymarkedtrails.org/hiking/{z}/{x}/{y}.png",
  { minZoom: 5, maxZoom: 18 }
);
overlayMaps["Védett területek"] = L.tileLayer.wms(
  "https://webgis.okir.hu/geoserver/tirweb/wms?",
  {
    layers: "nptkttte",
    transparent: true,
    format: "image/png",
    opacity: 0.7,
  }
);

// remove the original layer control because we will create a new one
document
  .getElementsByClassName("leaflet-control-layers leaflet-control")[0]
  .remove();

// add new layer control
L.control.layers(baseMaps, overlayMaps).addTo(map);

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
    attribution:
      'Védettség &copy; <a href="https://web.okir.hu/hu/tart/index/234/Interaktiv_termeszetvedelmi_terkep">OKIR</a>',
  }
);
overlayMaps["Lápok és szikes tavak"] = L.tileLayer.wms(
  "https://webgis.okir.hu/geoserver/tirweb/wms?",
  {
    layers: "TI_OW_VE_SZIKES,TI_OW_VE_LAP",
    transparent: true,
    format: "image/png",
    opacity: 0.7,
    attribution:
      'Szikes tavak és lápok &copy; <a href="https://web.okir.hu/hu/tart/index/234/Interaktiv_termeszetvedelmi_terkep">OKIR</a>',
  }
);
overlayMaps["Natura2000"] = L.tileLayer.wms(
  "https://webgis.okir.hu/geoserver/tirweb/wms?",
  {
    layers: "natura2000_sac_2017",
    transparent: true,
    format: "image/png",
    opacity: 0.7,
    attribution:
      'Natura 2000 &copy; <a href="https://web.okir.hu/hu/tart/index/234/Interaktiv_termeszetvedelmi_terkep">OKIR</a>',
  }
);
overlayMaps["Erdők védettsége"] = L.tileLayer.wms(
  "https://erdoterkep.nebih.gov.hu/geoserver/nebih/wms?",
  {
    layers: "KUL_RESZLET_VW",
    styles: "vedettseg",
    transparent: true,
    format: "image/png",
    opacity: 0.7,
    attribution:
      'Erdők védettsége &copy; <a href="https://erdoterkep.nebih.gov.hu/">NÉBIH</a>',
  }
);

// remove the original layer control because we will create a new one
document
  .getElementsByClassName("leaflet-control-layers leaflet-control")[0]
  .remove();

// add new layer control
L.control.layers(baseMaps, overlayMaps).addTo(map);

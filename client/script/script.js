let marker, iconCaption, markers, popupInfo, headerPopup;
let spo, school, dou, podved, dop, trosta, scoc, kvant, itcube, masterskaya;
let types = ["spo", "school", "dou", "podved", "dop"];

DG.then(async function() {
  return DG.plugin("https://unpkg.com/leaflet.markercluster@1.4.1/dist/leaflet.markercluster.js");
}).then(async function() {
  const data = await fetch("/api/polygons").then((res) => res.json()).catch((error) => console.log(error));

  markers = DG.markerClusterGroup();

  podved = DG.markerClusterGroup();
  spo = DG.markerClusterGroup();
  school = DG.markerClusterGroup();
  dou = DG.markerClusterGroup();
  dop = DG.markerClusterGroup();

  trosta = DG.markerClusterGroup();
  scoc = DG.markerClusterGroup();
  kvant = DG.markerClusterGroup();
  itcube = DG.markerClusterGroup();
  masterskaya = DG.markerClusterGroup();

  let map = DG.map("map", {                                   // инициализация и настройка карты
    center: DG.latLng(51.742136, 94.01699),
    zoom: 7,
    minZoom: 7,
    maxZoom: 18,
    maxBounds: [[56.42569105147632, 85.74332423905955], [46.77389234789008, 103.13590236405958]],
    maxBoundsViscosity: 0.1,
    zoomControl: false,
    fullscreenControl: false
  });

  DG.geoJson(data,
    {
      color: "#ff0522",
      fillColor: "#708dff",
      fillOpacity: 0.2,
      stroke: "red",
      weight: 1,
      opacity: 0.3
    }).addTo(map);

  RenderByType("spo", markers, spo);
  RenderByType("school", markers, school);
  RenderByType("dop", markers, dop);
  RenderByType("dou", markers, dou);
  RenderByType("podved", markers, podved);

  map.addLayer(markers);                                       //добавление слоя с маркерами на карту

  FilterByType("spo", markers, spo);
  FilterByType("school", markers, school);
  FilterByType("dop", markers, dop);
  FilterByType("dou", markers, dou);
  FilterByType("podved", markers, podved);

  FilterByProperty("trosta", markers, trosta);
  FilterByProperty("scoc", markers, scoc);
  FilterByProperty("kvant", markers, kvant);
  FilterByProperty("itcube", markers, itcube);
  FilterByProperty("masterskaya", markers, masterskaya);
});
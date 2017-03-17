
// initialize the map
var map = L.map('map').setView([14.6560006,121.02956280000001], 12);

// load a tile layer
L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v9/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWdtYWxhbmEiLCJhIjoiY2owZGhiZXJqMDAyOTJxbnEyY3ZtdHQ5OSJ9.HimLQZIkTrcNQknoEOxU7A',
  {
    attribution: 'Tiles by <a href="http://mapc.org">MAPC</a>, Data by <a href="http://mass.gov/mgis">MassGIS</a>',
    maxZoom: 17,
    minZoom: 9
  }).addTo(map);


// add markers
var markers = new L.MarkerClusterGroup();

//set icon
var busIcon = L.icon({
    iconUrl: 'assets/images/ic_directions_bus_black_24dp_2x.png',
});

var latlons = [[14.7162,121.003],[14.6329,121.045],[14.6247,121.049],[14.3813,121.04],
                [14.589,121.057],[14.4833,121.045],[14194,121.046],[14.4035,121.04],
                [14.3703,121.05], [14.3574,121.06], [14.5964,121.06], [14.3483,121.065],
                [14.4804,121.045]];

for(let latlon of latlons){
    markers.addLayer(L.marker(latlon, {icon: busIcon}));
}

markers.addTo(map);


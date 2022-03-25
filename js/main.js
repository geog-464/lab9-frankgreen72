// Created by Francis Grenier, 2022

//initialize function called when the script loads
function initialize(){
    loadMap();
};

function loadMap(){
  //create a basemap style. You can find other options at https://leaflet-extras.github.io/leaflet-providers/preview/
	var CartoDB_Positron = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
	maxZoom: 19,
	attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  })

  var Thunderforest_SpinalMap = L.tileLayer('https://{s}.tile.thunderforest.com/spinal-map/{z}/{x}/{y}.png?apikey={apikey}', {
	attribution: '&copy; <a href="http://www.thunderforest.com/">Thunderforest</a>, &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
	apikey: 'ea9b7fb93e24485791953aaf358e2696',
	maxZoom: 22
  });

	//add this basemap style to a JS object, to which you could also add other baselayers. This object is loaded as a basemap selector as seen further down
	var baseLayers = {
		"CartoDB": CartoDB_Positron,
		"FireMap": Thunderforest_SpinalMap
	};

	// create the map
	var mymap = L.map('mapdiv', {
		center: [25, 10]
		,zoom: 2
		,maxZoom: 18
		,minZoom: 2
		,layers: Thunderforest_SpinalMap
	});


	// parse json object (var geojsonData) and turn into loadable layer
  geojsonLayer = L.geoJSON(geojsonData);

	//add geojsonData to map
	geojsonLayer.addTo(mymap);// add json element to map

	//declare basemap selector widget
	var lcontrol = L.control.layers(baseLayers);
	//add it to the map
	lcontrol.addTo(mymap);
};

//call the initialize function when the window has loaded
window.onload = initialize();

'use strict';

psychicOctoNinjaApp.factory('MapService', ['NotificationService', function(NotificationService) {

	var map;

	var MapService = function() {
		
	};


	MapService.prototype = {
		init: function(position){
			var latitude = position ? position.coords.latitude : 0.69847032728747;
			var longitude = position ? position.coords.longitude : -73.9514422416687;

			map = L.map('map').setView([latitude, longitude], 17);

			L.tileLayer('http://{s}.tile.cloudmade.com/1c7e87133ec043f793feebe28707fb4e/997/256/{z}/{x}/{y}.png', {
			    maxZoom: 17
			}).addTo(map);

			this.addMarker(longitude, latitude);

			function onMapClick(e) {
			    alert("You clicked the map at " + e.latlng);
			}

			map.on('click', onMapClick);
		},
		disable: function(){
			$("#map").addClass("blur");
		},
		enable: function(){
			$("#map").removeClass("blur");
		},
		addMarker: function (lon, lat, color, symbol, title, desc){
			L.marker([lat, lon]).addTo(map);
		},
		getCurrLat: function(){

		},
		getCurrLon: function(){

		}
	}

	return new MapService();
}]);

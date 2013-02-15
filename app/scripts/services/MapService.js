'use strict';

psychicOctoNinjaApp.factory('MapService', function() {
	var map = mapbox.map('map');
	var mapLayer = mapbox.layer().id('examples.map-zr0njcqy');

	var MapService = function() {
		var initMap = function(position){
			var latitude = position ? position.coords.latitude : 0.69847032728747;
			var longitude = position ? position.coords.longitude : -73.9514422416687;

			map.addLayer(mapLayer);

			map.centerzoom({
				lat: latitude,
				lon: longitude
			}, 17);

			map.draw();
		};

		//get current location
		navigator.geolocation.getCurrentPosition(
			function(position){
				if(position.coords.accuracy > 50){
					NotificationService.warning('Geoposition Inaccurate', 'Cant find your current address :(');
				}

				initMap(position);
			},
			function(position){
				NotificationService.warning('Geolocation Unavailable', 'geolocation not supported!');
				initMap();
			},
			{ enableHighAccuracy: true, maximumAge: 0, timeout: 30000 }
		);
	};


	MapService.prototype = {
		foo: function(params){
			// stuff..
		}
	}

	return new MapService();
});

'use strict';

psychicOctoNinjaApp.factory('MapService', ['NotificationService', function(NotificationService) {
	var map = mapbox.map('map', null, null, []);
	var mapLayer = mapbox.layer().id('examples.map-zr0njcqy');
	var markerLayer = mapbox.markers.layer();

	var MapService = function() {
		var initMap = function(position){
			var latitude = position ? position.coords.latitude : 0.69847032728747;
			var longitude = position ? position.coords.longitude : -73.9514422416687;

			//init layers
			map.addLayer(mapLayer);
			mapbox.markers.interaction(markerLayer);
  			map.addLayer(markerLayer);

  			if(position.coords.accuracy <= 50){
	  			//add marker for current location
	  			markerLayer.add_feature({
	  				geometry: {
	  					coordinates: [longitude, latitude]
	  				},
	  				properties: {
	  					'marker-color': '#00bfff',
	  					'marker-symbol': 'pitch',
	  					title: 'You is this!',
	  					description: 'This is ready to have fun!'
	  				}
	  			});
  			}

			//init user view
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
		disable: function(){
			$("#map").addClass("blur");
		},
		enable: function(){
			$("#map").removeClass("blur");
		}
	}

	return new MapService();
}]);

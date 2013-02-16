'use strict';

psychicOctoNinjaApp.factory('MapService', ['NotificationService', function(NotificationService) {
	//var map = mapbox.map('map', null, null, []);
	var map = mapbox.map('map', null);
	//var mapLayer = mapbox.layer().url('http://a.tiles.mapbox.com/v3/markenranosa.map-kkq63ne4.jsonp');
	var mapLayer = mapbox.layer().id('examples.map-vyofok3q');
	var markerLayer = mapbox.markers.layer();
	var currLat;
	var currLon;

	var MapService = function() {
		
	};


	MapService.prototype = {
		init: function(position){
			var latitude = position ? position.coords.latitude : 0.69847032728747;
			var longitude = position ? position.coords.longitude : -73.9514422416687;

			//init layers
			map.addLayer(mapLayer);
			mapbox.markers.interaction(markerLayer);
  			map.addLayer(markerLayer);

  			//TODO add user marker for now for testing, only show me after if accurate
  			//TODO add user capability to correct his/her current address
  			//if(position.coords.accuracy <= 50){
	  			//add marker for current location

	  			currLat = latitude;
	  			currLon = longitude;

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
  			//}

			//init user view
			map.centerzoom({
				lat: latitude,
				lon: longitude
			}, 17, true);

			map.draw();
		},
		disable: function(){
			$("#map").addClass("blur");
		},
		enable: function(){
			$("#map").removeClass("blur");
		},
		addMarker: function (lon, lat, color, symbol, title, desc){
			markerLayer.add_feature({
				geometry: {
					coordinates: [lon, lat]
				},
				properties: {
					'marker-color': (color ? color : '#000'),
					'marker-symbol': (symbol ? symbol : 'pitch'),
					title: (title ? title : 'Come!'),
					description: (desc ? desc : 'Lets Party!')
				}
			});

			// map.centerzoom({
			// 	lat: lat,
			// 	lon: lon
			// }, 17, true);
		},
		getCurrLat: function(){
			return currLat;
		},
		getCurrLon: function(){
			return currLon
		}
	}

	return new MapService();
}]);

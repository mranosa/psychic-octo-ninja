'use strict';

psychicOctoNinjaApp.controller('MapCtrl', [ 
	'$scope', 'NotificationService', 
	function($scope, NotificationService) {

	var map = mapbox.map('map');
	var mapLayer = mapbox.layer().id('examples.map-zr0njcqy');

	$scope.init = function(position){
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

			$scope.init(position);
		},
		function(position){
			NotificationService.warning('Geolocation Unavailable', 'geolocation not supported!');
			$scope.init();
		},
		{ enableHighAccuracy: true, maximumAge: 0, timeout: 30000 }
	);

}]);

'use strict';

psychicOctoNinjaApp.controller('MapCtrl', [ 
	'$scope', 'NotificationService', 
	function($scope, NotificationService) {

	var map = mapbox.map('map');
	var mapLayer = mapbox.layer().id('examples.map-zr0njcqy');

	$scope.init = function(position){
		map.addLayer(mapLayer);

		map.centerzoom({
			lat: position.coords.latitude,
			lon: position.coords.longitude
		}, 17);

		map.draw();
	};

	//get current location
	navigator.geolocation.getCurrentPosition(
		function(position){
			NotificationService.warning('Geoposition Inaccurate', 'Cant find your current address :(');
			if(position.coords.accuracy > 50){
				NotificationService.warning('Geoposition Inaccurate', 'Cant find your current address :(');
			}

			$scope.init(position);
		},
		function(position){
			alert('geolocation not supported!');
		},
		{ enableHighAccuracy: true, maximumAge: 0, timeout: 30000 }
	);

}]);

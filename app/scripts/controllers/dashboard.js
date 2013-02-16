'use strict';

psychicOctoNinjaApp.controller('DashboardCtrl', [ 
	'$scope', 'MapService', 'NotificationService',
	function($scope, MapService, NotificationService) {
  
		//TODO remove me after testing
		// function loadTestData(){
		// 		MapService.addMarker(
		// 		MapService.getCurrLon() - 0.001, 
		// 		MapService.getCurrLat() - 0.001
		// 	);

		// 	MapService.addMarker(
		// 		MapService.getCurrLon() + 0.002, 
		// 		MapService.getCurrLat() + 0.002
		// 	);

		// 	MapService.addMarker(
		// 		MapService.getCurrLon() - 0.002, 
		// 		MapService.getCurrLat() + 0.001
		// 	);

		// 	MapService.addMarker(
		// 		MapService.getCurrLon() + 0.002, 
		// 		MapService.getCurrLat() - 0.001
		// 	);
		// }

		//get current location
		navigator.geolocation.getCurrentPosition(
			function(position){
				if(position.coords.accuracy > 50){
					NotificationService.warning('Geoposition Inaccurate', 'Cant find your current address :(');
				}

				MapService.init(position);
				// loadTestData();
			},
			function(position){
				NotificationService.warning('Geolocation Unavailable', 'geolocation not supported!');
				MapService.init(position);
				// loadTestData();
			},
			{ enableHighAccuracy: true, maximumAge: 0, timeout: 30000 }
		);

}]);

'use strict';

psychicOctoNinjaApp.controller('DashboardCtrl', [ 
	'$scope', 'MapService',
	function($scope, MapService) {
  
  		MapService.enable();

		MapService.addMarker(
			MapService.getCurrLon() - 0.001, 
			MapService.getCurrLat() - 0.001
		);

		MapService.addMarker(
			MapService.getCurrLon() + 0.002, 
			MapService.getCurrLat() + 0.002
		);

		MapService.addMarker(
			MapService.getCurrLon() - 0.002, 
			MapService.getCurrLat() + 0.001
		);

		MapService.addMarker(
			MapService.getCurrLon() + 0.002, 
			MapService.getCurrLat() - 0.001
		);

}]);

'use strict';

psychicOctoNinjaApp.controller('MainCtrl', [ 
	'$scope', 'MapService', '$timeout',
	function($scope, MapService, $timeout) {
	
	$scope.message = "Welcome to Quarterland<br>Relax now your Quarter is loading";

	MapService.disable();

	$timeout(function() {
		$scope.message = "Before you dig in, some remarks";
		$timeout(function() {
			$scope.message = "‘The world, as we perceive it, is our own invention.‘ Heinz von Foerster";
			$timeout(function() {
				MapService.enable();
				$("#map-ui").addClass("hide");
				//wishlist! transition from blur or transition to blur effect
			}, 3000);
		}, 3000);
	}, 3000);

}]);

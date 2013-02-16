'use strict';

psychicOctoNinjaApp.controller('MainCtrl', [ 
	'$scope', 'MapService', '$timeout', '$location',
	function($scope, MapService, $timeout, $location) {
	
	$scope.message = "Welcome to Quarterland<br>Relax now your Quarter is loading";

	MapService.disable();

	//TODO remove cheat after
	$timeout(function() {
		$scope.message = "Before you dig in, some remarks";
		$timeout(function() {
			$scope.message = "‘The world, as we perceive it, is our own invention.‘ Heinz von Foerster";
			$timeout(function() {
				MapService.enable();
			$("#map-ui").addClass("hide");
				$location.path('/dashboard');
			}, 3000);
		}, 3000);
	}, 3000);

}]);

'use strict';

psychicOctoNinjaApp.controller('MainCtrl', [ 
	'$scope', 'MapService', '$timeout', '$location', 'NotificationService', 'UserService',
	function($scope, MapService, $timeout, $location, NotificationService, UserService) {
	
	$scope.message = "Welcome to Quarterland<br>Relax now your Quarter is loading";

	$scope.doLoading = function doLoading(){
		$timeout(function() {
			$scope.message = "Before you dig in, some remarks";
			$timeout(function() {
				$scope.message = "‘The world, as we perceive it, is our own invention.‘ Heinz von Foerster";
				$timeout(function() {
					MapService.enable();
			        $("#map-ui").addClass("animated fadeOut");
			        $timeout(function() {
			        	//TODO of status is bum go to dashboard
			        	//TODO of status is creator go to event
			        	//TODO of status is joiner go to event
						$location.path('/dashboard');
					}, 1000);
				}, 1000);
			}, 1000);
		}, 1000);
	}

	MapService.disable();

	//get current location
	navigator.geolocation.getCurrentPosition(
		function(position){
			if(position.coords.accuracy > 50){
				NotificationService.warning('Geoposition Inaccurate', 'Cant find your current address :(');
			}

			MapService.init(position);
			$scope.doLoading();
		},
		function(position){
			NotificationService.warning('Geolocation Unavailable', 'geolocation not supported!');
			MapService.init(position);
			$scope.doLoading();
		},
		{ enableHighAccuracy: true, maximumAge: 0, timeout: 5000 }
	);

}]);

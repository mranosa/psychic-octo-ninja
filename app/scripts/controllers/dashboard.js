'use strict';

psychicOctoNinjaApp.controller('DashboardCtrl', [ 
	'$scope', 'MapService', 'NotificationService', '$timeout', '$location', 'EventService',
	function($scope, MapService, NotificationService, $timeout, $location, EventService) {

		$scope.newActivity = function(){
			$("#ctrl-new-ui").addClass("animated rotateOut");

	        $timeout(function() {
	            $("#ctrl-new-ui").removeClass("animated rotateOut");
	            $location.path('/activity/new');
	        }, 1000);
		};

		$("#ctrl-new-ui").addClass("animated bounceInDown");
		$timeout(function() {
	            $("#ctrl-new-ui").removeClass("animated bounceInDown");
		}, 1000);

		if(!MapService.getMap()){
	 		//get current location
			navigator.geolocation.getCurrentPosition(
				function(position){
					if(position.coords.accuracy > 50){
						NotificationService.warning('Geoposition Inaccurate', 'Cant find your current address :(');
					}
					 MapService.init(position);
				},
				function(position){
					NotificationService.warning('Geolocation Unavailable', 'geolocation not supported!');
					MapService.init(position);
				},
				{ enableHighAccuracy: true, maximumAge: 0, timeout: 30000 }
			);
	 	}

}]);

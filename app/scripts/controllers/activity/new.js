'use strict';

psychicOctoNinjaApp.controller('Activity/NewCtrl', [
	'$scope', 'MapService', 'NotificationService', '$timeout', '$location',
 	function($scope, MapService, NotificationService, $timeout, $location) {

 	$scope.backText = 'Back';
 	$scope.nextText = 'Next&nbsp;<i class="icon-arrow-right icon-white"></i>';
 	$scope.currIndex = 0;
 	$scope.form = {
 		title: [
 			'What is happening in Quarterland?',
 			'Drag your map to your exact position',
 			'How long are you going to do it?',
 			'How can you be found?',
 			'Got something to say?',
 			'Review your announcement'
 		]
 	}

 	$scope.doNext = function(){
 		$scope.currIndex += 1;

 		if($scope.currIndex === 5){
 			$scope.nextText = 'Publish!';
 		}

 		if($scope.currIndex === 6){
 			$("#form-new-title").addClass("animated fadeOut");
 			$("#ctrl-new-ui-next").addClass("animated fadeOut");
 			$("#ctrl-new-ui-back").addClass("animated fadeOut");

	        $timeout(function() {
				MapService.addMarker(L.marker(MapService.getCurrLatLng()));
				$location.path('/dashboard');
			}, 500);
 		}
 	}

 	$scope.doBack = function(){
 		if($scope.currIndex < 6){
 			$scope.nextText = 'Next&nbsp;<i class="icon-arrow-right icon-white"></i>';
 		}

 		if($scope.currIndex === 0){
 			$("#form-new-title").addClass("animated fadeOut");
 			$("#ctrl-new-ui-next").addClass("animated fadeOut");
 			$("#ctrl-new-ui-back").addClass("animated fadeOut");

 			$timeout(function() {
	            $location.path('/dashboard');
	        }, 500);
 		}

 		$scope.currIndex -= 1;	
 	};

// ----------------------- test
//TODO remove me after testing
		function loadTestData(){
			var latitude = MapService.getCurrLatLng().lat;
			var longitude = MapService.getCurrLatLng().lng;
			MapService.addMarker(
				L.marker([
					latitude - 0.001, 
					longitude - 0.001
				])
			);

			MapService.addMarker(
				L.marker([
					latitude + 0.002, 
					longitude + 0.002
				])
			);

			MapService.addMarker(
				L.marker([
					latitude - 0.002, 
					longitude + 0.001
				])
			);

			MapService.addMarker(
				L.marker([
					latitude + 0.002, 
					longitude - 0.001
				])
			);
		}

		//get current location
		navigator.geolocation.getCurrentPosition(
			function(position){
				if(position.coords.accuracy > 50){
					NotificationService.warning('Geoposition Inaccurate', 'Cant find your current address :(');
				}

				if(!MapService.getMap()) MapService.init(position);
				loadTestData();
			},
			function(position){
				NotificationService.warning('Geolocation Unavailable', 'geolocation not supported!');
				if(!MapService.getMap()) MapService.init(position);
				loadTestData();
			},
			{ enableHighAccuracy: true, maximumAge: 0, timeout: 30000 }
		);
		//test end

}]);

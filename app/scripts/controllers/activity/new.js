'use strict';

psychicOctoNinjaApp.controller('Activity/NewCtrl', [
	'$scope', 'MapService', 'NotificationService', '$timeout', '$location', 'EventService',
 	function($scope, MapService, NotificationService, $timeout, $location, EventService) {

 	$scope.backText = 'Back';
 	$scope.nextText = 'Next&nbsp;<i class="icon-arrow-right icon-white"></i>';
 	$scope.currIndex = 0;
 	$scope.form = {
 		what: '',
 		how: '',
 		extra: '',
 		title: [
 			'What is happening in Quarterland?',
 			'Drag your map to your exact position',
 			'How can you be found?',
 			'Got something to say?',
 			'Review your announcement'
 		],
 		page: [
 			true,
 			false,
 			false,
 			false,
 			false
 		]
 	};

 	function showPage(index){
 		$scope.form.page[0] = false;
 		$scope.form.page[1] = false;
 		$scope.form.page[2] = false;
 		$scope.form.page[3] = false;
 		$scope.form.page[4] = false;

		$scope.form.page[index] = true;
 	};

 	$scope.doNext = function(){
 		$scope.currIndex += 1;
 		showPage($scope.currIndex);

 		if($scope.currIndex === 4){
 			$scope.nextText = 'Publish!';
 		}

 		if($scope.currIndex === 5){
 			$("#form-new-title").addClass("animated fadeOut");
 			$("#ctrl-new-ui-next").addClass("animated fadeOut");
 			$("#ctrl-new-ui-back").addClass("animated fadeOut");

	        $timeout(function() {
	        	var newEvent = {
					latlng: MapService.getCurrLatLng(),
					what: $scope.form.what,
			 		how: $scope.form.how,
			 		extra: $scope.form.extra
				};
	        	MapService.closeMePopup();
				MapService.addEvent(newEvent);
				EventService.addEvent(newEvent);
				$location.path('/dashboard');
			}, 500);
 		}
 	}

 	$scope.doBack = function(){
 		if($scope.currIndex < 5){
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
 		showPage($scope.currIndex);
 	};



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

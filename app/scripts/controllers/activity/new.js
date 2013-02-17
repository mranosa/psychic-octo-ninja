'use strict';

psychicOctoNinjaApp.controller('Activity/NewCtrl', [
	'$scope', 'MapService', 'NotificationService', '$timeout', '$location',
 	function($scope, MapService, NotificationService, $timeout, $location) {


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

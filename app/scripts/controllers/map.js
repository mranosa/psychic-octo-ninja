'use strict';

psychicOctoNinjaApp.controller('MapCtrl', [ 
	'$scope', 'NotificationService', 'MapService', 'CookieIDService',
	function($scope, NotificationService, MapService, CookieIDService) {
	
	$scope.$on('new_event', function(eventObject, newEvent){
		//TODO notify only if event was created within 3-5mins! must timestamp!
		NotificationService.info('New Event!', 'New activity in your area! :)');
		MapService.addMarker(L.marker(newEvent.latlng));
	});
}]);

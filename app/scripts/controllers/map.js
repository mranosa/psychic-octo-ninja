'use strict';

psychicOctoNinjaApp.controller('MapCtrl', [ 
	'$scope', 'NotificationService', 'MapService', 'CookieIDService',
	function($scope, NotificationService, MapService, CookieIDService) {
		console.log(CookieIDService.getId());
		console.log($.cookie());
}]);

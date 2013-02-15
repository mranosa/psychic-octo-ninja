'use strict';

psychicOctoNinjaApp.controller('MainCtrl', [ 
	'$scope', 'MapService', '$timeout',
	function($scope, MapService, $timeout) {
	

	MapService.disable();

	$timeout(function() {
          MapService.enable();
    }, 5000);

}]);

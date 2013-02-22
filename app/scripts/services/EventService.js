'use strict';

psychicOctoNinjaApp.factory('EventService',[
	'$rootScope', 'NotificationService',
	function($rootScope, NotificationService) {

	var eventsRef = new Firebase('https://hanael.firebaseIO.com/events');

	var EventService = function() {
		eventsRef.on('child_added', function(dataSnapshot) {
			var newEvent = dataSnapshot.val();
			$rootScope.$broadcast('new_event', newEvent);
		});
	};

	EventService.prototype = {
		addEvent: function(event){
			eventsRef.push(event);
		}
	}

	return new EventService();
}]);

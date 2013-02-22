'use strict';

psychicOctoNinjaApp.factory('EventService',['$rootScope', function($rootScope) {

	var eventsRef = new Firebase('https://hanael.firebaseIO.com/events');

	var EventService = function() {
		eventsRef.on('value', function(dataSnapshot) {
			var newEvent = dataSnapshot.val();
			NotificationService.info('New Event!', 'New activity in your area! :)');
			$rootScope.$broadcast('new_event', newEvent);
		});
	};

	EventService.prototype = {
		addEvent: function(event){
			eventsRef.push(event);
		}
	}

	return new EventService();
});

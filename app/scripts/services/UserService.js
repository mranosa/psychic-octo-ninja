'use strict';

psychicOctoNinjaApp.factory('UserService', ['CookieIDService', 'NotificationService', function(CookieIDService, NotificationService) {

	var userRef = new Firebase('https://hanael.firebaseIO.com/users/' + CookieIDService.getId());
	var userStatus;
	var userEvent;

	var UserService = function() {
		userRef.once('value', function(dataSnapshot) {
			if(dataSnapshot.val() === null){
				userRef.update({status: 'bum', event: null});
			}
		});
		userRef.on('value', function(dataSnapshot) {
			var currUserInfo = dataSnapshot.val();
			NotificationService.info('Status Changed', 'Your status is now ' + currUserInfo.status);
			userStatus = currUserInfo.status;
			userEvent = currUserInfo.event;
		});
	};

	UserService.prototype = {
		getStatus: function(){
			return userStatus;
		}
	}

	return new UserService();
}]);

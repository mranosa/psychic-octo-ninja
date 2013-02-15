'use strict';

psychicOctoNinjaApp.factory('NotificationService', function() {
	
	var NotificationService = function() {
	    //global setting for pines notify
	    $.pnotify.defaults.delay = 1000;
	    $.pnotify.defaults.history = false;
	};

NotificationService.prototype = {
	show: function(title, message, iconCls){
		$.pnotify({
			title: title,
			text: message,
			addclass: 'custom',
			icon: iconCls,
			opacity: 0.8,
			nonblock: true,
			nonblock_opacity: 0.2
		});
	},
	error: function(title, message){
		this.show(title, message, 'picon picon-32 picon-dialog-error');
	},
	warning: function(title, message){
		this.show(title, message, 'picon picon-32 picon-dialog-warning');
	},
	info: function(title, message){
		this.show(title, message, 'picon picon-32 picon-dialog-information');
	},
	success: function(title, message){
		this.show(title, message, 'picon picon-32 picon-task-complete');
	}
}

return new NotificationService();
});

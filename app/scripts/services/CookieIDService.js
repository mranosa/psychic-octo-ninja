'use strict';

psychicOctoNinjaApp.factory('CookieIDService', function() {

	var CookieIDService = function() {
	    
	};

	CookieIDService.prototype = {
		getId: function(){
			if(!$.cookie('quarterland_for_life_id')){
				$.cookie('quarterland_for_life_id', uuid.v4(), { expires: 365000, path: '/' });
			}
			
			return $.cookie('quarterland_for_life_id');
		}
	}

	return new CookieIDService();
});

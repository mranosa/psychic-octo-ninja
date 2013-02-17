'use strict';

psychicOctoNinjaApp.factory('MapService', ['NotificationService', function(NotificationService) {

	var map;
	var meMarker;
	var meIcon = L.icon({
			    iconUrl: 'images/marker_icons/me_marker.png',
			    iconAnchor: [15, 10]
			});

	var MapService = function() {
		
	};


	MapService.prototype = {
		init: function(position){
			var latitude = position ? position.coords.latitude : 0.69847032728747;
			var longitude = position ? position.coords.longitude : -73.9514422416687;

			map = L.map('map', {
				minZoom: 15,
				maxZoom: 17,
				zoomControl: false,
				attributionControl: false,
				fadeAnimation: true,
				zoomAnimation: true,
				markerZoomAnimation: true
			}).setView([latitude, longitude], 17, true);

			L.tileLayer('http://{s}.tile.cloudmade.com/1c7e87133ec043f793feebe28707fb4e/997/256/{z}/{x}/{y}.png', {
			    maxZoom: 17
			}).addTo(map);

			meMarker = L.marker([latitude, longitude], 
				{
					draggable:true,
					icon: meIcon,
					riseOnHover: true
				});

			this.addMarker(meMarker);

			meMarker.bindPopup("<b>This is YOU!</b><br>Drag me to correct location.").openPopup();
		},
		disable: function(){
			$("#map").addClass("blur");
		},
		enable: function(){
			$("#map").removeClass("blur");
		},
		removeMarker: function(marker){
			map.removeLayer(marker);
		},
		addMarker: function (marker){
			marker.addTo(map);

			marker.bindPopup("<b>Party Party!</b><br>Lorem ipsum dolor.");

			var lat = marker.getLatLng().lat;
			var lng = marker.getLatLng().lng;

			//center on click
			marker.on('dblclick', function(){
				map.panTo(marker.getLatLng());
			});
		},
		getCurrLatLng: function(){
			return meMarker.getLatLng();
		}, 
		getMap: function(){
			return map;
		},
		addTestData: function(){
			var latitude = this.getCurrLatLng().lat;
			var longitude = this.getCurrLatLng().lng;
			this.addMarker(
				L.marker([
					latitude - 0.001, 
					longitude - 0.001
				])
			);

			this.addMarker(
				L.marker([
					latitude + 0.002, 
					longitude + 0.002
				])
			);

			this.addMarker(
				L.marker([
					latitude - 0.002, 
					longitude + 0.001
				])
			);

			this.addMarker(
				L.marker([
					latitude + 0.002, 
					longitude - 0.001
				])
			);
		}
	}

	return new MapService();
}]);

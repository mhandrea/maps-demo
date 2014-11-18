/* app.js -- our application code */

"use strict";

// UW coordinates:
// lat: 47.655
// lng: -122.3080

$(document).ready(function() {
	var map_elem = document.getElementById('map');
	
	function create_map(elem, center, zoom) {
		var map = new google.maps.Map(elem, {
			center: center,
			zoom: zoom,
			mapTypeId: google.maps.MapTypeId.SATELLITE
		});

		var marker = new google.maps.Marker({
			position: center,
			map: map,
			animation: google.maps.Animation.DROP
		});
	
	} 

	var center = {
		lat: 47.655,
		lng: -122.3080
	};

	create_map(map_elem, center, 14);
});

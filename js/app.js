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
		});

		var marker = new google.maps.Marker({
			position: center,
			map: map,
			animation: google.maps.Animation.DROP
		});
	
		var info_win = new google.maps.InfoWindow();
		info_win.setContent("<h2>Here I Am!</h2><p>Don't you wish you were here?</p>");

		google.maps.event.addListener(marker, 'click', function() {
			console.log('marker was clicked');
			info_win.open(map, marker);
		});
	} 

	var center = {
		lat: 47.655,
		lng: -122.3080
	};

	function on_success(pos) {
		var cur_pos = {
			lat: position.coords.latitude,
			lng: position.coords.longitude
		};

		create_map(map_elem, cur_pos, 16);
	}

	function on_error(error) {
		console.log(error);
		create_map(map_elem, center, 14);
	}

	if (navigator && navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(on_success, on_error, {
			enableHighAccuracy: true,
			maximumAge: 100000
		});
	}
	else {
		create_map(map_elem, center, 14);
	}
});

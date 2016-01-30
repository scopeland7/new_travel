// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require_tree 
//= require underscore
//= require gmaps/google

$(document).ready(function(){

	function initialize() {
		var myLatlng = new google.maps.LatLng(33.7751395,-84.2957382);
		var mapOptions = {
			center: myLatlng,
			zoom: 15,
			scrollwheel: false
		};

		var map = new google.maps.Map(document.getElementById('map-canvas'),
			mapOptions);

		var image = "<%= asset_path 'scottish_flag.png' %>";

		var marker = new google.maps.Marker({
			position: myLatlng,
			map: map,
			title: 'The Best Restaurant of all Time',
			// icon: image	
			animation: google.maps.Animation.DROP
		});

		var contentString = '<h2>The Brickstore Pub</h2>' + '<p>This is one of my favorite restaurants of all time!</p>';
		var infowindow = new google.maps.InfoWindow({
			content: contentString
		});

		google.maps.event.addListener(marker, 'click', function() {
			infowindow.open(map, marker);
		});
	}

	google.maps.event.addDomListener(window, 'load', initialize);
});
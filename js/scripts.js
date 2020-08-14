/*placeholder*/
$(document).ready(function(){
        $.Placeholder.init({ color : "#797979" });
 });

jQuery(document).ready(function($){
	// browser window scroll (in pixels) after which the "back to top" link is shown
	var offset = 300,
		//browser window scroll (in pixels) after which the "back to top" link opacity is reduced
		offset_opacity = 800,
		//duration of the top scrolling animation (in ms)
		scroll_top_duration = 700,
		//grab the "back to top" link
		$back_to_top = $('.cd-top');

	//hide or show the "back to top" link
	$(window).scroll(function(){
		( $(this).scrollTop() > offset ) ? $back_to_top.addClass('cd-is-visible') : $back_to_top.removeClass('cd-is-visible cd-fade-out');
		if( $(this).scrollTop() > offset_opacity ) { 
			$back_to_top.addClass('cd-fade-out');
		}
	});

	//smooth scroll to top
	$back_to_top.on('click', function(event){
		event.preventDefault();
		$('body,html').animate({
			scrollTop: 0 ,
		 	}, scroll_top_duration
		);
	});

});

(function($) {
		$(function() {
			$('input, select').styler({
				selectSearch: true
			});
		});
		})(jQuery);
		
		var map;
var egglabs = new google.maps.LatLng(55.75222, 37.61556 );
var mapCoordinates = new google.maps.LatLng(55.75222, 37.61556 );


var markers = [];
var image = new google.maps.MarkerImage(
    'images/ico-marker.png',
    new google.maps.Size(63,62),
    new google.maps.Point(0,0),
    new google.maps.Point(02,81)
	
  );

function addMarker() 
{
      markers.push(new google.maps.Marker({
      position: egglabs,
      raiseOnDrag: false,
	  icon: image,
      map: map,
      draggable: false,
	
	  
      }));
      
}

function initialize() {
  var mapOptions = {
	
    zoom: 10,
	disableDefaultUI: false,
    center: mapCoordinates,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
	  scrollwheel: true,
	styles: [
    {
        "featureType": "road",
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "transit",
        "elementType": "labels.text",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    }
]};
map = new google.maps.Map(document.getElementById('map-canvas'),mapOptions);
addMarker();
}
google.maps.event.addDomListener(window, 'load', initialize);

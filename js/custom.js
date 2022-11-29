// wow js linking
jQuery(function($) {
$(document).ready( function() {
  //wow js initilize
   new WOW().init();
});
});


// counter section 
jQuery(document).ready(function ($) {
	$('.counter').counterUp({
		delay: 10,
		time: 1000
	});
});

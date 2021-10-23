// JavaScript Document
/*
var lastScrTop = 0;
var currentTop = $('.nav2').offset().top;
$(document).ready(function() {
	$(window).scroll(function() {
	var scrTop = $(this).scrollTop();
	if (scrTop > lastScrTop) {
		if (scrTop >= currentTop) {
		$('.nav2').css( "marginTop", scrTop - currentTop );
		}
	}
	if (lastScrTop > scrTop) {
		$('.nav2').css( "marginTop", scrTop - currentTop );
		if ( scrTop <= currentTop ) {
			$('.nav2').css( "marginTop", 0 );
			}
		}
	lastScrTop = scrTop;
	});
});
*/

var lastScrTop = 0;
var currentTop = $('.nav2').offset().top;
$(document).ready(function() {
    $(window).scroll(function() {
	var scrTop = $(this).scrollTop();
	if (scrTop > lastScrTop) {
		if (scrTop >= currentTop) {
		$('.nav2').css({ "position": "fixed", "marginTop": -currentTop });
		}
	}
	if (lastScrTop > scrTop) {
		//$('.nav2').css( "marginTop", scrTop - currentTop );
		if ( scrTop <= currentTop ) {
			$('.nav2').css({ "position": "relative", "marginTop": 0 });
			}
		}
	lastScrTop = scrTop;
	});
});
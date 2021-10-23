;(function() {
    
	var slides = document.querySelectorAll( '#slides-wrapper a img' );
	var info = document.querySelectorAll( '#slides-wrapper a span em' );

	function mouseOver(n) {
		var timer = null,
			opMinus = 1;
		clearInterval(timer);	
		timer = setInterval( function() {
			if ( opMinus >= 0.2 ) {
				opMinus -= 0.01;
				slides[n].style.opacity = opMinus;
			}
		}, 1);
		info[n].style.visibility = 'visible';
	}

	function mouseOut(n) {
		var timer = null,
			opPlus = 0.2;
		clearInterval(timer);	
		timer = setInterval( function() {
			if ( opPlus <= 1 ) {
				opPlus += 0.01;
				slides[n].style.opacity = opPlus;
			}
		}, 1);
		info[n].style.visibility = 'hidden';
	}

	function init() {
		var i, len = slides.length;	
		for ( var i = 0; i < len; i++ ) {
			slides[i].setAttribute('data-img' , i);
			slides[i].addEventListener('mouseover', function () { 
				mouseOver(this.getAttribute('data-img')); 
			}, false);
			slides[i].addEventListener('mouseout', function () { 
				mouseOut(this.getAttribute('data-img')); 
			}, false);
		}
	}

	window.addEventListener('load', init, false);

}());
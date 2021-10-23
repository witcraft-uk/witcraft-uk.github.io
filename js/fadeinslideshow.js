// JavaScript Document for fade-in slideshow by Divyesh Patel


var picplus = 0;
var running = true;
var optimer = null;
var pptimer = null;

function fadeinslideshowauto () {
	if (running == true) {
	var pics = fadeinslideshow.getElementsByTagName("img");
	var op_plus = 0;
	var op_minus = 1;
	clearInterval(optimer);
	optimer = setInterval(function start () { 
		if ( picplus == pics.length ) { picplus = 0; }
		if ( op_plus <= 1 ) {
			op_plus += 0.1;
			pics[picplus].style.opacity = op_plus; 
		}
		var a = picplus - 1;
		if ( a == -1 ) { a = pics.length - 1; }
		if ( op_minus >= 0 ) {
			op_minus -= 0.1;
			pics[a].style.opacity = op_minus; 
		}
	},100);
	picplus++;
	}
	else {
		return false;	
	}
}

function startslideshow () {
	if (running == true) {
		clearInterval(pptimer);
		pptimer = setInterval(fadeinslideshowauto,2000);
		pause.style.display = 'block';
	}
	else {
		return false;
	}
	startit.style.display = 'none';
}

function startagain () { 
	running = true; 
	play.style.display = 'none';
	pause.style.display = 'block';
}

function stopforabit () { 
	running = false; 
	pause.style.display = 'none';
	play.style.display = 'block';
}

function setallup () {
	addEventHandler(play, "click", startagain, false);
	addEventHandler(pause, "click", stopforabit, false);
	addEventHandler(startit, "click", startslideshow, false);
}

addEventHandler(window, "load", setallup, false);


// JavaScript Document

function scroll() {
    
//setInterval (function ()
		//{
		var y = window.scrollY;
		if (!window.scrollY) {
		var y = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop; 
		}
		
		if (y > 400) { 
		document.getElementById('temp').style.display = "block"; 
		}
		else {
		document.getElementById('temp').style.display = "none"; 
		}
		
//	}, 1);
}

window.onscroll = scroll;


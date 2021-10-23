// JavaScript Document

var lastScrTop = 0;
var currentTop = nav2.offsetTop;

/*
function scrollprintnav() {
		var y = window.scrollY;
		if (!window.scrollY) {
		var y = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop; 
		}
		if (y > lastScrTop) {
			if (y >= currentTop) {
			nav2.style.marginTop = y - currentTop + "px"; 
			}
		}
		if (lastScrTop > y) {
		nav2.style.marginTop = y - currentTop + "px";
			if ( y <= currentTop ) {
			nav2.style.marginTop = "0px";
			} 
		}
	lastScrTop = y;
}
*/

function scrollprintnav() {
    	var y = window.scrollY;
		if (!window.scrollY) {
		var y = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop; 
		}
		if (y > lastScrTop) {
			if (y >= currentTop) {
			nav2.style.marginTop = - currentTop + "px"; 
            nav2.style.position = "fixed"; 
			}
		}
		if (lastScrTop > y) {
		//nav2.style.marginTop = y - currentTop + "px";
			if ( y <= currentTop ) {
			nav2.style.marginTop = "0px";
            nav2.style.position = "relative"; 
			} 
		}
	lastScrTop = y;
}

window.onscroll = scrollprintnav;

var hyperlinks = document.getElementById('buttons-wrapper').getElementsByTagName("a");
var ex = 0;

function setActiveBtn(no) {
    hyperlinks[ex].style.color = '';
    hyperlinks[no].style.color = '#fff';
    ex = no;
}

function init() {
    
    for (var i=0; i<hyperlinks.length; i++) {
        hyperlinks[i].setAttribute('data-link' , i);
    	hyperlinks[i].addEventListener('click', function() {setActiveBtn(this.getAttribute('data-link'));}, false);
	}
    
    setActiveBtn(ex);

}

init();






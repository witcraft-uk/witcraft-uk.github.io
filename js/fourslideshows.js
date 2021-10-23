// JavaScript Document - Four slideshows by Divyesh Patel


// slideshow 1 - z-index method
function oneslideshow () {
	next1.style.display = "none";
	var timer = null;
	var z = 1;
	var pics1 = slideshow1.getElementsByTagName("img");
	clearInterval(timer);
	timer = setInterval(function start () {
		if (z == pics1.length) { z = 0;}
		pics1[z].style.zIndex = 1;
		var i = z - 1;
		if (i == -1) {i = pics1.length - 1;}
		pics1[i].style.zIndex = 0;
		z++;
	},2000);
}

// slideshow 2 - built-in API re-writes the NodeList array object
function twoslideshow () {
	next2.style.display = "none";
	var timer = null;
	clearInterval(timer);
	timer = setInterval(function start () {
		var firstpic = slideshow2.getElementsByTagName("img")[0];
		slideshow2.appendChild(firstpic);
	},2000);
}

// slideshow 3 - step through the NodeList array
function threeslideshow () {
	next3.style.display = "none";
	var timer = null;
	var p = 1;
	var pics3 = slideshow3.getElementsByTagName("img");
	clearInterval(timer);
	timer = setInterval(function start () {
		if (p == pics3.length) {p = 0;}
		pics3[p].style.display = 'block';
		var k = p - 1;
		if (k == -1) {k = pics3.length - 1;}
		pics3[k].style.display = 'none';
		p++;
	},2000);
}
	
// slideshow 4 - stand still and let the array come to you
function fourslideshow () {
	next4.style.display = "none";
	var timer = null;
	var pics4 = slideshow4.getElementsByTagName("img");
	var pics = ["fournature0.jpg" , "fournature1.jpg" , "fournature2.jpg" , "fournature3.jpg" ];
	var firstpic = pics[0];
	clearInterval(timer);
	timer = setInterval( function start () {
	   for ( var i = 0; i < pics.length - 1; i++ ) {
		pics[i] = pics[i+1];
		}
		pics[pics.length - 1] = firstpic;
		firstpic = pics[0];
		
		//for ( var i = 0; i < pics.length; i++ ) {
			//pics4[i].src = "slideshows/" + pics[i];
		//} 
		//use this technique when there are images
		//already loaded in the DOM, and you assign
		//new src attr to each <img> element using for loop
		
		pics4[0].src = "images/slideshows/" + pics[0];
	},2000);
}

/************************************************
slideshow 5 - Change the innerHTML, but this
is not an effecient method.

*************************************************
function fiveslideshow () { 
	var timer = null;
	var c = 1;
	clearInterval(timer);
	timer = setInterval(function start () {
		if (c == 4) {c = 0;}
		slideshow.innerHTML = '<img src="images/picname' + c + '.jpg" />';
		c++;
	},2000);
}

************************************************/

function setup () {
	addEventHandler(next1, "click", oneslideshow, false);
	addEventHandler(next2, "click", twoslideshow, false);
	addEventHandler(next3, "click", threeslideshow, false);
	addEventHandler(next4, "click", fourslideshow, false);
}

addEventHandler(window, "load", setup, false);

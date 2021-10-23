// JavaScript Document by Divyesh Patel 22/09/2013

var picx = wipeslideshow2.getElementsByTagName("img");
var btnpicx = wipessbtns.getElementsByTagName("img");

var nxt = 1;
var userid = 0;
var show = false;
var wipetimer = null;
var picnotimer = null;
var ready = "yes";
var clickevnts = false;

function slidepic (lr) {	

if (ready == "yes") {
	ready = "no";
	
	startwss2.style.display = 'none';
	var pic1;
	var pic2;
	var curr = nxt - 1;
	if (curr == -1) { curr = 0; } 

	if (show == true) {
		pic1 =  picx[userid];	
		pic2 =  picx[curr];
		nxt = userid;
        show = false;
		startslidepic();
	}
	else {
		if (nxt == picx.length) {nxt = 0;}
		if (nxt == 0) { curr = picx.length - 1; }
		pic1 =  picx[nxt];
		pic2 =  picx[curr];
	}
		
	pic1.style.display = "block";
	pic2.style.left = "0px";
	pic1.style.left = "600px";
	
	var left1 = 600;
	var left2 = 0;
	var incr = -50;

	if (lr == 'l') {
		pic1.style.left = "-600px";
		left1 = -600;
		incr = 50;
	}
	
	clearInterval(wipetimer);
	
	wipetimer = setInterval(function () {
		if ( left1 <= -50 || left1 >= 50) {
			left1 += incr; 
			left2 += incr;
			pic1.style.left = left1 + "px"; 
			pic2.style.left = left2 + "px"; 
			
			btnpicx[nxt-1].style.border = '1px solid #0f0';
			btnpicx[curr].style.border = 'none';

		}
		else {
			pic2.style.display = "none";
			ready = "yes";
		}
	},1);
	nxt++;
	}
}

function showuser(d) {
	
	if (d == nxt-1) { return false; }
	
	userid = d;
	show = true;

	if (d > nxt-1) { slidepic('r'); }
	if (d < nxt-1) { slidepic('l'); }
	
	if (d == nxt-1) { clearInterval(picnotimer); }
	
}

function setbtndata () {
    for (var i=0; i<btnpicx.length; i++) {
		btnpicx[i].setAttribute('data-btn' , i);
	}
}

function findbtnelement () {
	setbtndata();
	var mybtn = this.getAttribute('data-btn');
	showuser (mybtn);
}

function startslidepic() {
	clearInterval(picnotimer);
	picnotimer = setInterval(slidepic,2000);
	
	if (clickevnts == false) { 
		clickevnts = true;
		wipessbtns.style.cursor = 'pointer'; 
        
	    for (var i=0; i<btnpicx.length; i++) {
    	    addEventHandler(btnpicx[i], 'click', findbtnelement, false);
	    }
		
		addEventHandler(wipeslideshow2, "mouseover", function(){ clearInterval(picnotimer); }, false);
    	addEventHandler(wipeslideshow2, "mouseout",  startslidepic, false);
        addEventHandler(wipessbtns, "mouseover", function(){ clearInterval(picnotimer); }, false);
        addEventHandler(wipessbtns, "mouseout",  startslidepic, false);
	}
}


function juststart() {
    addEventHandler(startwss2, "click", startslidepic, false);
}

addEventHandler(window, "load", juststart, false);
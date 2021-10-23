// JavaScript Document for subpages by Divyesh Patel 24/07/2013

var pics = document.images;
var container = document.getElementById("container");
var divs = document.querySelectorAll(".bgimg");

//function resize()
//{
//setInterval (function () {
//    if (document.body && document.body.offsetWidth) {
//	winW = document.body.offsetWidth;
//	winH = document.body.offsetHeight;
//	}
//	if (document.compatMode=='CSS1Compat' &&
//	document.documentElement &&
//	document.documentElement.offsetWidth ) {
//	winW = document.documentElement.offsetWidth;
//	winH = document.documentElement.offsetHeight;
//	}
//	if (window.innerWidth && window.innerHeight) {
//	winW = window.innerWidth;
//	winH = window.innerHeight;
//	}
//	
//	var imageWidth;
//	var imageHeight;
//	
//	var winW;
//	var winH;
//	var ratio = 1.8;
//	
//	if ((winW / winH) < 1.8) {imageHeight = winH; imageWidth = imageHeight * ratio;}
//	if ((winW / winH) > 1.8) {imageWidth = winW; imageHeight = imageWidth / ratio;}
//	
//	for (var i=0; i<=pics.length; i++) {
//	pics[i].style.width = imageWidth + 'px';
//	pics[i].style.height = imageHeight + 'px';
//	}
//	},1);
//}

//function setSize() {
//        var width = window.innerWidth;
//        var height = window.innerHeight;
//        for (var i=0; i<divs.length; i++) {
//        	divs[i].style.width = width + 'px';
//        	divs[i].style.height = height + 'px';
//	    }
//}

function giveanswer() {
	document.getElementsByTagName('span')[1].style.display='inline';
}

var op = 1;
var readyNext = "yes";

function changeBG () {
    if (readyNext == "yes") {
         readyNext = "no";
          
	if (divs.length == 1) {return false;}
	
    var timer = null;
	var op_plus = 0;
    var op_minus = 1;
	
	timer = setInterval(function () {
        
		if ( op == divs.length ) { op = 0; }
        
		if ( op_plus <= 1 ) {
			op_plus += 0.1;
			divs[op].style.opacity = op_plus; 
		}
		var a = op - 1;
		if ( a == -1 ) { a = divs.length - 1; }
		
        if ( op_minus >= 0 ) {
			op_minus -= 0.1;
			divs[a].style.opacity = op_minus;
            
		}
        else { 
            readyNext = "yes";
            clearInterval(timer);
            op++;
        }
	},50);
    }    
}

function onClickEvents () {
    
    

	//addEventHandler(container, "click", changeBG, false);
    container.addEventListener("click", changeBG, false);

	if (divs.length == 1) {
		divs[0].style.cursor = 'auto';
	}
	//addEventHandler(document.getElementsByTagName('span')[0], "click", giveanswer, false);
    document.getElementsByTagName('span')[0].addEventListener("click", giveanswer, false);
}


//window.addEventListener("load", setSize, false);
window.addEventListener("load", onClickEvents, false);





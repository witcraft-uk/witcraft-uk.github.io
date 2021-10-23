// JavaScript Document for wipe slideshow by Divyesh Patel

var pics = wipeslideshow.getElementsByTagName("img");
var no = 1;
var no2;
var timer = null;
var readynxt = "yes";
//var timerrunning = false;
 
function nextpic() {
    
    if (readynxt == "yes") {
        readynxt = "no";
    
	no2 = no - 1;
	if (no == pics.length) { no = 0; }
	if (no == 0) { no2 = pics.length - 1; }
	
	var pic1 =  pics[no];
	var pic2 =  pics[no2];
	
	pic1.style.display = "block";
	pic1.style.left = "600px";
	pic2.style.left = "0px";
	
	clearInterval(timer);
	
	var left1 = 600;
	var left2 = 0;
	
	timer = setInterval(function start() {
		if ( left1 >= 50 ) {
			left1 -= 50; 
			left2 -= 50;
			pic1.style.left = left1 + "px"; 
			pic2.style.left = left2 + "px"; 
		}
		else {
			pic2.style.display = "none";
            readynxt = "yes";
		}
	},1);
	no++;
    }
} 

function prevpic() {
    
    if (readynxt == "yes") {
        readynxt = "no";
	no -= 1; 
	if (no == -1) { no = pics.length - 1; } 
	no2 = no - 1; 
	if (no2 == -1) { no2 = pics.length - 1; } 

	var pic1 =  pics[no];
	var pic2 =  pics[no2];
	
	pic2.style.display = "block";
	pic2.style.left = "-600px";
	pic1.style.left = "0px";
	
	clearInterval(timer);
	
	var left1 = 0;
	var left2 = -600;
	
	timer = setInterval(function start() {
		if ( left1 <= 550 ) {
			left1 += 50; 
			left2 += 50;
			pic1.style.left = left1 + "px"; 
			pic2.style.left = left2 + "px"; 
		}
		else {
			pic1.style.display = "none";
            readynxt = "yes";
		}
	},1);
 }
}

addEventHandler(next, "click", nextpic, false);
addEventHandler(prev, "click", prevpic, false);


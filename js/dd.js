// JavaScript Document by Divyesh Patel

var deskmob = document.getElementById("deskmob");	
var u = 0; // record open ids

var getDivs = document.getElementById("main_content_area");
var mainContent = getDivs.getElementsByTagName("div");

var getButtonDivs = document.getElementById("main_button_area");
var allButtons = getButtonDivs.getElementsByTagName("div");

var dropdown = document.getElementById("dropdown");
var option;

var j = 0; //close open div 

function showItem(i) { //button function
	mainContent[j].style.display = 'none';
	allButtons[j].setAttribute("class", "not_selected");
	mainContent[i].style.display = 'block';
	allButtons[i].setAttribute("class", "selected");
	dropdown.selectedIndex = i;
	j = i;
	}

function dd() { //dropdown function
	var ddvalue = dropdown.options[dropdown.selectedIndex].value;
	showItem(ddvalue);
}	

function doOnLoad (){
	for (i=0; i<=mainContent.length; i++) {
	mainContent[i].style.display='none';	
	mainContent[0].style.display='block';
	allButtons[0].setAttribute("class", "selected");
	allButtons[i].setAttribute("class", "not_selected");
	allButtons[i].setAttribute("onclick", "showItem(" + i + ")"); 
	option = document.createElement('option');
	option.innerHTML = allButtons[i].innerHTML;
    option.setAttribute('value', i);
	dropdown.appendChild(option);
	dropdown.setAttribute("onchange", "dd()"); 
	dropdown.style.display = "none";
	}
}

function _switch () {
	u++;
	if (u == 1) {
	dropdown.style.display = "block";
	getButtonDivs.style.display = "none";
	}
	if (u == 2) u = 0;
	if (u == 0) {
		dropdown.style.display = "none"; 
		getButtonDivs.style.display = "block";
	}
}

addEventHandler(window, "load", doOnLoad, false);
addEventHandler(deskmob, "click", _switch, false);



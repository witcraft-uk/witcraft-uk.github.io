// JavaScript Document

function interactiveColor () { 
	document.getElementById("interactive").style.color = "#FFF";
}

function printColor () { 
	document.getElementById("print").style.color = "#FFF";
}

function setUpOnClickOnLoad (){
    addEventHandler( document.getElementById("interactive"), "click", function(){interactiveColor(); }, false );
    addEventHandler( document.getElementById("print"), "click", function(){ printColor(); }, false );
}

addEventHandler(window, "load", setUpOnClickOnLoad, false);

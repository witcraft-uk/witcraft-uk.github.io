// JavaScript Document


var mynodelist = mylist.getElementsByTagName("li");
var hyperlinks = mylist.getElementsByTagName("a");
var indexpageitem = document.querySelectorAll('div.index-page-item');

function hideshow (d) {
    
    for (var i=0; i<indexpageitem.length; i++) {
        if (d == 0) {
            indexpageitem[i].style.display = "block";
            } 
        else {
            indexpageitem[i].style.display = "none";
    	    indexpageitem[d].style.display = "block";
        }
    }
            
	white (d);
    scrollWindow();
}

function scrollWindow()
{
window.scrollTo(0,0);
}

function hover () { //keep the CSS hover effect - apply colour, remove colour, keep CSS hover effect
	for (i=0; i<=5; i++) {
	hyperlinks[i].style.color = "";
	}	
}

function white (d) {
	hover ();
	hyperlinks[d].style.color = "#FFF";
}

function interactEvents() {
	hyperlinks[0].style.color = "#FFF";
	
	for (var i=0; i<mynodelist.length; i++) {
        mynodelist[i].setAttribute('data-elem' , i);
    	//addEventHandler(mynodelist[i], 'click', hideshow, false);
	}
}

addEventHandler(window, "load", interactEvents, false);



$( document ).ready(function() {
    $('#mylist li').click(
        function () { hideshow(jQuery(this).attr('data-elem'));  
    });
});

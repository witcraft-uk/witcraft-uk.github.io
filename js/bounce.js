// JavaScript Document

var keys = [];
window.addEventListener("keydown",
    function(e){
      /*  keys[e.keyCode] = true;
        switch(e.keyCode){
            case 37: move1(); 
            case 39: move2();// case 38: // case 40: // Arrow keys
            case 32: e.preventDefault(); break; // Space
            default: break; // do not block other keys
        }*/
        if ((e.keyCode) == 48)
        {
        e.preventDefault();
        //movedown();
		//hideballheadline ();
        
        }
    },
false);

window.addEventListener('keyup',
    function(e){
        keys[e.keyCode] = false;
    },
false);

var leftloc = 2;
var toploc = 2;

function movedown() 
{
   
  window.clearInterval(innit);
  innit = self.setInterval(function(){pingpong()},50);
  
}
 
var innit = null;
   
       
var _x = new Array();
var _y = new Array();
var tan = new Array();
var angle = new Array();
var incrementX = new Array();
var incrementY = new Array();
var balls = new Array();
var increment = 0.1;
var numberofballs = 15;
function hello()
{
     
    for ( var i = 0; i < numberofballs; i++ )
    {
     tan[i] = increment;
     increment += 0.1;
     
    }
    
    for ( var i = 0; i < numberofballs; i++ )
    {
     angle[i] = Math.atan(tan[i]);
    }
    for ( var i = 0; i < numberofballs; i++ )
    {
      incrementX[i] = Math.cos(angle[i]);
      incrementY[i] = Math.sin(angle[i]);
    }
    for ( var i = 0; i < numberofballs; i++ )
    {
      _ball = 'ball' + i;
      balls[i] = document.getElementById(_ball);
    }
    for ( var i = 0; i < numberofballs; i++ )
    {
      _x[i] = 5;
      _y[i] = 5;
    }
 }
 
var intViewportWidth = window.innerWidth;
var intViewportHeight = window.innerHeight;
 
 
function pingpong()
{
 
 for ( var i=0; i<numberofballs; i++ )
 {
     if ( _x[i] >=intViewportWidth-50 || _x[i] <5)
     incrementX[i] = -1 * incrementX[i];
     
     if ( _y[i] >=intViewportHeight-290 || _y[i] <5)
     incrementY[i] = -1 * incrementY[i];
     
 }
 
 for ( var i=0; i<numberofballs; i++ )
 {
     _x[i] = _x[i] + incrementX[i]*15;
     _y[i] = _y[i] + incrementY[i]*15;
 }
 for ( var i=0; i<numberofballs; i++ )
 {
     balls[i].style.left = _x[i] + 'px';
     balls[i].style.bottom = _y[i] + 'px';
	 
 }
  
}

function hideballheadline () {
	document.getElementById('ballheadline').style.visibility = 'hidden';
}

window.addEventListener("load", hello, false);
window.addEventListener("load", movedown, false);

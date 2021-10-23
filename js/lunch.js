// JavaScript Document
	
var x = "";
var y = "";
var now = new Date();
var then = new Date();
then.setMonth(9);
then.setDate(2);
then.setFullYear(2012);
var interval = now.getTime() - then.getTime();
interval = Math.floor(interval / (1000 * 60 * 60 * 24));
function lunchHour() {
	if(interval%2) {
	x = "<span style='color:blue';>Ali G, Nicky O, Smita : 12:30</span><span style='color:red';> <br/><br/> Claire, Nicky B, Natalie : 13:30</span>";
	document.getElementById("lunch").innerHTML=x;
	}
	else
	{
	y = "<span style='color:red';>Ali G, Nicky O, Smita : 13:30</span><span style='color:blue';><br/><br/> Claire, Nicky B, Natalie : 12:30</span>";
	document.getElementById("lunch").innerHTML=y;
	}
}


  $(function() {
        // run the currently selected effect
        function runEffect() {
            // get effect type from
            var selectedEffect = $( "#effectTypes" ).val();
 
            // most effect types need no options passed by default
            var options = {};
            // some effects have required parameters
            if ( selectedEffect === "scale" ) {
                options = { percent: 0 };
            } else if ( selectedEffect === "transfer" ) {
                options = { to: "#button", className: "ui-effects-transfer" };
            } else if ( selectedEffect === "size" ) {
                options = { to: { width: 200, height: 60 } };
            }
 
            // run the effect
            $( "#effect" ).effect( selectedEffect, options, 500, callback );
        };
 
        // callback function to bring a hidden box back
        function callback() {
            setTimeout(function() {
                $( "#effect" ).removeAttr( "style" ).hide().fadeIn();
            }, 1000 );
        };
 
        // set effect from select menu value
        $( "#button" ).click(function() {
            runEffect();
            return false;
        });
    });
	
	
addEventHandler(window, "load", lunchHour, false);

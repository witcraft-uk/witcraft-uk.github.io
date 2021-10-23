//By Divyesh Patel 


// Accordion JavaScript source code

var timer = null;
var temp4div = "temp4div0"; //open div
var timerrunning = false;
var c = 0; //open div number

function accordion(id){
	var divtoopen = "temp4div" + id;

	if (divtoopen != temp4div){ // run if id (div) is not open
	if (timerrunning === false){
		timerrunning = true; 
	var divid = document.getElementById(divtoopen);
	var divid2 = document.getElementById(temp4div);
	
	var arrows = document.getElementsByClassName("arrow") || document.querySelectorAll(".arrow");

	arrows[c].style.marginRight = "-50px";
	arrows[id].style.marginRight = "0px";
	
	c=id;

	temp4div = divtoopen; // give open div id back
	
	clearInterval(timer);
	var height1 = 0;
	var height2 = 530;
	timer = setInterval(function start() {
		if (height1<540){
			divid.style.height = height1 + "px";
			height1+=53;
			divid2.style.height = height2 + "px";
			height2-=53;
		}
		},1);
		timerrunning = false;
	 }
	}
}


/*

Accordion PHP source code

<?php
class mytemplate {
	public function generatehtml() {
	
    for ($i=0; $i<=2; $i++) {	
		echo "<div class=\"headline-home point\" onclick=\"accordion('".$i."');\">";
    	echo "Lorem ipsum";
		if ($i==0) {
		echo "<div class=\"arrowholder\">";
    	echo  "<img alt=\"\" class=\"arrow\" src=\"images/accoarrows.png\" />";
		echo "</div>";
		}
		else {
		echo "<div class=\"arrowholder\">";
		echo "<img alt=\"\" class=\"arrow items\" src=\"images/accoarrows.png\" />";
		echo "</div>";
		}
    	echo "</div>";
		if ($i==0) {
		echo "<div id=\"temp4div".$i."\" class=\"temp4div\">";
		}
		else {
		echo "<div id=\"temp4div".$i."\" class=\"temp4div\" >";
		}
		echo "<div class=\"home-hero-holder\">";
		echo "<img alt=\"\" src=\"images/accordion".$i.".jpg\" />";
		echo "</div>";
        echo "<div class=\"copy-home\">";
        echo "Lorem ipsum";
       echo "</div>";
    echo "</div>";
	}
	}
}

$acc = new mytemplate;
$acc->generatehtml();

?>

*/
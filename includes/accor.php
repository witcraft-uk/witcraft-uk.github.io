<?php
class mytemplate {
	public function generatehtml() {
	
    for ($i=0, $j=3; $i<=2, $j<=5; $i++, $j++) {	
		echo "<div class=\"headline-home point\" onclick=\"accordion('".$i."');\">";
    	echo "Object-oriented PHP, JavaScript accordion";
		if ($i==0) {
		echo "<div class=\"arrowholder\">";
    	echo  "<img alt=\"\" class=\"arrow\" src=\"images/controls/accoarrows.png\" />";
		echo "</div>";
		}
		else {
		echo "<div class=\"arrowholder\">";
		echo "<img alt=\"\" class=\"arrow items\" src=\"images/controls/accoarrows.png\" />";
		echo "</div>";
		}
    	echo "</div>";
		if ($i==0) {
		echo "<div id=\"temp4div".$i."\" class=\"temp4div\">";//accordion show hide area stars here
		}
		else {
		echo "<div id=\"temp4div".$i."\" class=\"temp4div\" >";
		}
		echo "<div class=\"home-hero-holder\">";
		echo "<img alt=\"\" src=\"images/slideshows/flower".$j.".jpg\" />";
		echo "</div>";
        echo "<div class=\"copy-home\">";
        echo "PHP program that powers this accordion is extensible and scalable owing to the object class and its public method. The object instance generates the markup on the server at run time. On the web browser my hand&ndash;coded good old JavaScript takes care of the animation. You can <a href=\"js/accor.js\" target=\"_blank\">view the source code</a> here, and <a href=\"contact.php\">let me know</a> what you think.";
       echo "</div>";
    echo "</div>"; //accordion show hide area ends here
	}
	}
}

$acc = new mytemplate;
$acc->generatehtml();

?>


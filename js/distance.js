// JavaScript Document by Divyesh Patel

//Ajax PHP - Distance calculator

function showUser(strFrom, strTo) {
	if (strFrom == "" || strTo == "")
	{
	document.getElementById("txtHint").innerHTML="";
	return;
	} 
	{ 
	if (window.XMLHttpRequest)
	{// code for IE7+, Firefox, Chrome, Opera, Safari
	xmlhttp=new XMLHttpRequest();
	}
	else
	{// code for IE6, IE5
	xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
	}
	xmlhttp.onreadystatechange=function()
	{
	if (xmlhttp.readyState==4 && xmlhttp.status==200)
	{
	document.getElementById("txtHint").innerHTML=xmlhttp.responseText;
	}
	}
	xmlhttp.open("GET","calculate.php?q="+strFrom+"&q2="+strTo,true);
	xmlhttp.send();
	}
}

function stopDefault(e) {
 var e = window.event;
 if (e.preventDefault) e.preventDefault();
 e.returnValue = false;
 return false;
}

function getvalue() { 
	var from = document.getElementById('from');
	var to = document.getElementById('to');
	var strFrom = from.options[from.selectedIndex].value;
	var strTo = to.options[to.selectedIndex].value;
	showUser(strFrom, strTo);
}

function setUpClickEvents() {
	addEventHandler(document.getElementById("calculate"), "click", stopDefault, false);
    addEventHandler(document.getElementById("calculate"), "click", getvalue, false);
}

addEventHandler(window, "load", setUpClickEvents, false);


/*
<?php
$from = $_GET["q"];
$to = $_GET["q2"];

$worker_x=array(
		'select'=>1,
		'Adam'=>23,
		'Alison'=>75, 
		'Alistair'=>41, 
		'Amy'=>23,
		'Charlie'=>8,
		'Claire'=>41, 
		'Craig'=>3, 
		'Divyesh'=>53,
		'Donna'=>58,
		'Garry'=>53, 
		'Gemma'=>3, 
		'Ian'=>3,
		'Jon'=>3,
		'Jonathan'=>70, 
		'Kate'=>70, 
		'Kevin'=>36,
		'Kirsty'=>70,
		'Lee'=>58, 
		'Lou'=>8, 
		'Lynda'=>53,
		'Mandy'=>75,
		'Michala'=>58, 
		'Natalie'=>41, 
		'Natasha'=>8,
		'NickyB'=>36,
		'NickyO'=>36, 
		'Richard'=>8, 
		'Ruban'=>58,
		'Sarah'=>53,
		'Smita'=>36, 
		'Steven'=>18, 
		'Tim'=>23,
		'Wei'=>41
		);
		
$worker_y=array(
		'select'=>1,
		'Adam'=>15,
		'Alison'=>15, 
		'Alistair'=>10, 
		'Amy'=>10,
		'Charlie'=>15,
		'Claire'=>15, 
		'Craig'=>3, 
		'Divyesh'=>3,
		'Donna'=>3,
		'Garry'=>15, 
		'Gemma'=>10, 
		'Ian'=>15,
		'Jon'=>26,
		'Jonathan'=>3, 
		'Kate'=>15, 
		'Kevin'=>3,
		'Kirsty'=>10,
		'Lee'=>15, 
		'Lou'=>10, 
		'Lynda'=>26,
		'Mandy'=>10,
		'Michala'=>26, 
		'Natalie'=>26, 
		'Natasha'=>3,
		'NickyB'=>10,
		'NickyO'=>15, 
		'Richard'=>26, 
		'Ruban'=>10,
		'Sarah'=>10,
		'Smita'=>26, 
		'Steven'=>15, 
		'Tim'=>26,
		'Wei'=>3
		);		


$distance=sqrt((($worker_x[$from])-($worker_x[$to]))*(($worker_x[$from])-($worker_x[$to]))+(($worker_y[$from])-($worker_y[$to]))*(($worker_y[$from])-($worker_y[$to])));

$distance=number_format($distance, 1);

$distance2 = (int)$distance;

if(isset($from, $to)){
	if($distance==0 || $from==select || $to==select)
	{
	echo"<div class='write';>";
	echo"Please select two names";
	echo"</div>";
	}
	elseif ($distance2/$distance==1) 
	{
echo "<div class='write'>";
echo "Distance from <span style=color:blue;>{$from}</span> to <span style=color:blue;>{$to}</span> is <span style=color:red;>{$distance2}</span> feet.";
echo "</div>";

	}
else{
echo "<div class='write'>";
echo "Distance from <span style=color:blue;>{$from}</span> to <span style=color:blue;>{$to}</span> is <span style=color:red;>{$distance}</span> feet.";
echo "</div>";

	}
}

?>
*/






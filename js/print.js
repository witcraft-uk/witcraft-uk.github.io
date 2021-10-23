// JavaScript Document by Divyesh Patel 30/3/2013
// Home page slides

var mynodelist = document.getElementById('mylist').getElementsByTagName("li");
var hyperlinks = document.getElementById('mylist').getElementsByTagName("a");

var total = new Array();
total[0] = ["alphabets",225]; //Digital illus - personal
total[1] = ["able",225]; //Brand ID - Digital illus
total[2] = ["green",150]; //Brand ID
total[3] = ["ampersand",225]; //- personal
total[4] = ["abm",225]; //Brand ID
total[5] = ["harmonyid",225]; //Brand ID
total[6] = ["sevacarehands",225]; //Brand ID
total[7] = ["sevacareid",225]; //Brand ID
total[8] = ["sevacaregraphic",300]; //change from 280 to 300 - Brand ID - Digital illus
total[9] = ["eeid",225]; //Brand ID
total[10] = ["eegraphic",300]; //change from 290 to 300 - Brand ID - Digital illus
total[11] = ["figurationid",225]; //Brand ID
total[12] = ["figurationbc",225]; //Brand ID
total[13] = ["figurationbags",225]; //Brand ID, packaging
total[14] = ["colorcographic1",150]; //Brand ID
total[15] = ["colorcographic2",150]; // - Digital illus
total[16] = ["niddshopid",225]; //Brand ID
total[17] = ["niddshopgraphic",225]; //Brand ID  - Digital illus
total[18] = ["niddshopbags",225]; //Brand ID, packaging
total[19] = ["niddshoppattern",225]; //Brand ID, digi illus
total[20] = ["niddshopproducts",300]; //Brand ID, packaging
total[21] = ["teamtalkid",225]; //publication - Brand ID
total[22] = ["teamtalkcover",225]; //publication
total[23] = ["pencils",225]; //Brand ID
total[24] = ["studioid",240]; //changed from 225 to 240 - Brand ID
total[25] = ["bournedesid",150]; //Brand ID, digital illus
total[26] = ["bridelesscover",225]; //publication, digital illus
total[27] = ["bridelessgraphic1",150]; // - Digital illus
total[28] = ["bridelessgraphic2",150]; // - Digital illus
total[29] = ["happynewyear",208]; //- personal, digital illus
total[30] = ["kevin",250]; // - Digital illus - personal
total[31] = ["designer",225]; // - Digital illus - personal
total[32] = ["ampersand-pic",225]; //- personal

var timer = null;
var sOpen = new Array();
var aLen = 0;

function slides (d) {
 
    if (d == 0) { //All projects
    sOpen[0] = 0;
	sOpen[1] = 1;
	sOpen[2] = 2;
	sOpen[3] = 3;
	sOpen[4] = 4;
	sOpen[5] = 5;
	sOpen[6] = 6;
	sOpen[7] = 7;
	sOpen[8] = 8;
	sOpen[9] = 9;
	sOpen[10] = 10;
	sOpen[11] = 11;
	sOpen[12] = 12;
	sOpen[13] = 13;
	sOpen[14] = 14;
	sOpen[15] = 15;
	sOpen[16] = 16;
	sOpen[17] = 17;
	sOpen[18] = 18;
	sOpen[19] = 19;
	sOpen[20] = 20;
	sOpen[21] = 21;
	sOpen[22] = 22;
	sOpen[23] = 23;
	sOpen[24] = 24;
	sOpen[25] = 25;
	sOpen[26] = 26;
	sOpen[27] = 27;
	sOpen[28] = 28;
	sOpen[29] = 29;
	sOpen[30] = 30;
	sOpen[31] = 31;
	sOpen[32] = 32;
	aLen = 33;
	}
	else if (d == 1) { //Branding and identities
	sOpen[0] = 1; //ABLE
	sOpen[1] = 2; //Green Team
	sOpen[2] = 4; // ABM
	sOpen[3] = 5; // Harmony identity
	sOpen[4] = 6; // sevacare hands photo
	sOpen[5] = 7; // sevacare identity
	sOpen[6] = 8; // sevacare graphic
	sOpen[7] = 9; // ee identity
	sOpen[8] = 10; // ee graphic
	sOpen[9] = 11; // figuration identity
	sOpen[10] = 12; // figuration bc
	sOpen[11] = 13; // figuration bags
	sOpen[12] = 14; // colorco typo-graphic
	sOpen[13] = 16; // nidd shop 1
	sOpen[14] = 17; // nidd shop 2
	sOpen[15] = 18; // nidd shop 3
	sOpen[16] = 19; // nidd shop 4
	sOpen[17] = 20; // nidd shop 5
	sOpen[18] = 21; // teamtalk identity
	sOpen[19] = 23; // pencils photo
	sOpen[20] = 24; // studio identity
	sOpen[21] = 25; // bourne designers logo
	aLen = 22;
	}
	else if (d == 2) { //Publication design
	sOpen[0] = 21; // teamtalk 1
	sOpen[1] = 22; // teamtalk 2
	sOpen[2] = 26; // brideless cover
	aLen = 3;
	}
	else if (d == 3) { //Digital illustrations
	sOpen[0] = 0; // alpha illus
	sOpen[1] = 1; // ABLE
	sOpen[2] = 8; // sevacare graphic
	sOpen[3] = 10; // ee graphic
	sOpen[4] = 15; // colorco graphic
	sOpen[5] = 17; // niddshop graphic
	sOpen[6] = 19; // niddshop pattern
	sOpen[7] = 25; // bourne identity
	sOpen[8] = 26; // brideless cover
	sOpen[9] = 27; // brideless illus 1
	sOpen[10] = 28; // brideless illus 2
	sOpen[11] = 29; // happy new year
	sOpen[12] = 30; // kevin
	sOpen[13] = 31; // designer
	aLen = 14;
	}
	else if (d == 4) { //Packaging design
	sOpen[0] = 13; // figuration bags
	sOpen[1] = 18; // nidd bags
	sOpen[2] = 20; // nidd products
	aLen = 3; //
	}
	else if (d == 5) { //Personal projects
	sOpen[0] = 0; // alpha illus
	sOpen[1] = 3; // ampersand typo
	sOpen[2] = 32; // ampersand pic
	sOpen[3] = 29; // happy new year
	sOpen[4] = 30; // kevin
	sOpen[5] = 31; // designer
	aLen = 6; //
	}
	common ();
	white (d);
}
		
function hover () { 
	for (d=0; d<=5; d++) {
	hyperlinks[d].style.color = "";
	}	
}

function white (d) {
	hover ();
	hyperlinks[d].style.color = "#FFF";
}

function common ()
{ 
    var b =0;
	var wd = 0;
	
	clearInterval(timer);
	timer = setInterval(function (){
	
	  for (var i = 0; i < total.length; i++)
	  {
		b=0; 
		for ( var j = 0; j < aLen; j++ )
		{
			if ( i == sOpen[j])
			 b = 1;
		}
		if (b == 0) {
		document.getElementById(total[i][0]).style.width = '0px';
		document.getElementById(total[i][0]).style.marginRight = '0px';
		document.getElementById(total[i][0]).style.marginBottom = '0px';
		}
	  }
	  for ( var i = 0; i < aLen; i++)
	{
		if ( wd <= total[sOpen[i]][1]) {
		document.getElementById(total[sOpen[i]][0]).style.width = wd + 'px';
		document.getElementById(total[sOpen[i]][0]).style.marginRight = '10px';
		document.getElementById(total[sOpen[i]][0]).style.marginBottom = '10px';
		}
	}
	wd = wd + 5;
	},1);
}

function setUpOnLoad() {
	hyperlinks[0].style.color = "#FFF";
    
    for (var i=0; i<mynodelist.length; i++) {
        mynodelist[i].setAttribute('data-elem' , i);
    	//addEventHandler(mynodelist[i], 'click', function() {slides(this.getAttribute('data-elem'));}, false);
	}
}

addEventHandler(window, "load", setUpOnLoad, false);


$( document ).ready(function() {
    $('#mylist li').click(
        function () { slides(jQuery(this).attr('data-elem'));  
    });
});

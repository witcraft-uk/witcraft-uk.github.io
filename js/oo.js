// OO-JavaScript Document by Divyesh Patel

var animateAlpha;
var alphacolor = "";
var timer = null;
var number = 0;

function Myobject(textvalue, objectColor){
    this.textvalue = textvalue;
	this.objectColor = objectColor;
}

Myobject.prototype = {
	get_random_color: function () {
    var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.round(Math.random() * 15)];
    }
	this.objectColor = color;
    return color;
	}
}

var alphabets = new Array(26);

function start() {
	for ( var i = 0; i <= 25; i++)
	{
	alphabets[i] = new Myobject("", "");
	}
	alphabets[0].textvalue = "Aa";
	alphabets[1].textvalue = "Bb";
	alphabets[2].textvalue = "Cc";
	alphabets[3].textvalue = "Dd";
	alphabets[4].textvalue = "Ee";
	alphabets[5].textvalue = "Ff";
	alphabets[6].textvalue = "Gg";
	alphabets[7].textvalue = "Hh";
	alphabets[8].textvalue = "Ii";
	alphabets[9].textvalue = "Jj";
	alphabets[10].textvalue = "Kk";
	alphabets[11].textvalue = "Ll";
	alphabets[12].textvalue = "Mm";
	alphabets[13].textvalue = "Nn";
	alphabets[14].textvalue = "Oo";
	alphabets[15].textvalue = "Pp";
	alphabets[16].textvalue = "Qq";
	alphabets[17].textvalue = "Rr";
	alphabets[18].textvalue = "Ss";
	alphabets[19].textvalue = "Tt";
	alphabets[20].textvalue = "Uu";
	alphabets[21].textvalue = "Vv";
	alphabets[22].textvalue = "Ww";
	alphabets[23].textvalue = "Xx";
	alphabets[24].textvalue = "Yy";
	alphabets[25].textvalue = "Zz";

	var div2 = document.getElementById('div2');
	div2.innerHTML='<div style="font-size:325px; left:0px; position:relative; text-align:center; top:175px;">' + alphabets[0].textvalue + '</div>';
	div2.style.color = alphabets[0].get_random_color();
	alphacolor = alphabets[0].objectColor;
	 
	addEventHandler(oonext, "click", function(){ buttonclick ('div1' , 'left'); }, false);
    addEventHandler(ooprev, "click", function(){ buttonclick ('div3' , 'right'); }, false);    
}

function buttonclick (_dummydiv,rightOrleft)
{
	var dummydiv = document.getElementById(_dummydiv);
	var div2 = document.getElementById('div2');
	div2.style.width= "0px";
	dummydiv.style.width= "600px";

	if (_dummydiv == 'div1')
	{
	dummydiv.innerHTML='<div style="font-size:325px; left:0px; position:relative;text-align:center;top:175px;" id="left">' + alphabets[number].textvalue + '</div>';
	number += 1;
	if (number == 26) number = 0;
	animateAlpha = 0;
	div2.style.backgroundPosition="0% 50%";
	div2.innerHTML='<div style="font-size:325px; left:0px; position:relative;text-align:center;top:175px;">' + alphabets[number].textvalue + '</div>';
    }
	else
	{
    dummydiv.innerHTML='<div style="font-size:325px; position:relative;text-align:center;top:175px;">' + alphabets[number].textvalue + '</div>';
	number -= 1;
	if (number == -1) number = 25;
	div2.innerHTML='<div style="font-size:325px; left:-600px; position:relative;text-align:center;top:175px;" id="right">' + alphabets[number].textvalue + '</div>';
	animateAlpha = -600;
	}
	
	dummydiv.style.color = alphacolor;
	div2.style.color = alphabets[number].get_random_color();
	alphacolor = alphabets[number].objectColor;
	timerclick(_dummydiv,'div2',rightOrleft);
}

function timerclick(dmin,dmax,rightOrleft){
	var widthmax = 600;
	var widthmin = 0;
	var divmin = document.getElementById(dmin);
	var divmax = document.getElementById(dmax);
	clearInterval(timer);
		timer = setInterval( function(){
		if (widthmin < 600) {
		widthmin += 50;
		widthmax -= 50;
		if (rightOrleft == 'right') {
		divmax.style.backgroundPosition="100% 50%";
		animateAlpha+=50;
		}
		else {
		animateAlpha-=50;
		}
		}
		divmax.style.width= widthmin +"px";
		divmin.style.width= widthmax +"px";
		document.getElementById(rightOrleft).style.left= animateAlpha + "px";
		},1);
}

addEventHandler(window, "load", start, false);



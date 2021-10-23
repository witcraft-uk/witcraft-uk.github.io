/*---------------------------------------------------------------------
Solutions By Divyesh Patel


-----------------------------------------------------------------------
1. Complete the function countOnes(n) that takes a positive integer n and 
counts the total number of 1s in all the integers from 0 to n, inclusive.

---------------------------------------------------------------------*/

function fCountOnes(n) {
	var intCount = 0;
	var arrN = [];
	
	for (var i=0; i<= n; i++) {
		arrN[i] = i;
	}
	
	var sN = arrN.toString();
	var sBigN = sN.replace(/,/g , "");
	
	
	for (var i=0; i<=sBigN.length; i++) {
		if (sBigN[i] === "1") intCount += 1;
	   }
	return intCount;
}


/*---------------------------------------------------------------------
2. Write a function that takes a positive integer n and returns the 
complement of n in the decimal of a value.

---------------------------------------------------------------------*/

function fGetIntegerComplementDec(n){

var sBinary = parseInt(n).toString(2);
var sInvert = "";

for( var i=0; i < sBinary.length; i++ ) {
	sInvert +=  (sBinary[i] === "0") ? 1 : 0 ;
	}
	return parseInt( sInvert, 2 );
}


/*---------------------------------------------------------------------
3. Consider a function that takes a positive integer n and returns the 
number of 1s in the decimal representation of all the integers from 
0 to n, inclusive. For example, f(13) = 6, for the numbers 1, 10, 11 
(twice, for two 1s), 12 and 13. Notice that f(1) = 1. After 1, what is 
the next largest n for which f(n) = n?

---------------------------------------------------------------------*/

function sumOfDecimalRep (n) {
	var str = n.toString(); 
	var _1s = str.length - 1;
	if (str[str.length - 1] == '1')
	_1s += 1;
	return _1s;
}

function fCountOnes(num) {
	var total = 0;
	for (var i = 1; i <= num; i++) {
		  total = total + sumOfDecimalRep(i);
		}
	if (num == total) {
		 return true;
		}
	else {
		return false;
	}
}

function sendNos () {
	var result = false;
	var num = 2;
	while (result == false) {
		result = fCountOnes(num);
		num++;
	}
	return num-1;
}

sendNos();


/*---------------------------------------------------------------------
4. Write a function that finds the longest palindrome in a string.

---------------------------------------------------------------------*/

function fPalindrome(s) {
    var sBig = s.toLowerCase().replace(/\s+/g, "");
	var arrOne = [];
	var sWord = "";
	var cnt = 0;
	for (var i=0; i< sBig.length; i++) {
	    sWord = sBig[i];
		for (var j=i+1; j< sBig.length; j++) {
			sWord +=  sBig[j];
			arrOne[cnt] = sWord;
			cnt++;
		}
	}
	return sReverse (arrOne);
}

function sReverse (arrOne) {
    var collect = [];
    var cnt = 0;
    for (var i=0; i< arrOne.length; i++) {
		 if(arrOne[i] ===  arrOne[i].split("").reverse().join("")) {
		 collect[cnt] = arrOne[i];
		 cnt++;
    	 }
	}
    return largest (collect);
}


function largest(collect) {
   var length = 0;
   var index = 0;
   for (var i=0; i< collect.length; i++) {
     if (collect[i].length > length) {
     length = collect[i].length;
     index = i;
     }
  }
    return collect[index];
}

fPalindrome("enter string here");


/*---------------------------------------------------------------------
5. Given an array of integers, output a list of four integers that sum to 
zero (the same input integer cannot be used multiple times), or indicate 
that no such set of four integers exists. For example, given the array 
[2, 3, 1, 0, -4, -1], the set of four integers (3 1 0 -4) sums to zero.

---------------------------------------------------------------------*/

function fSumZero(N) {

    var a = 0;
    var b = 0;
    var c = 0;
    var d = 0;
    var sum = 0;
    var valueFound = false;

	for (var i=0; i<= N.length; i++) {
	   a = N[i];
	   for (var j=i+1; j<= N.length; j++) {
	       b = N[j];
	       for (var k=j+1; k<= N.length; k++) {
	           c = N[k];
	            for (var m=k+1; m<= N.length; m++) {
	               d = N[m];
	              sum = a + b + c + d;
	              if (sum == 0) {
	              alert (a + "," + b + "," + c + "," + d);
	              valueFound = true;
	              }
	           }
	       }
	   }
	}
	if (valueFound == false) alert("Not found");
}


/*---------------------------------------------------------------------
6. By starting from the number 1, and repeatedly adding 5 and multiplying 
by 3, an infinite amount of new numbers can be produced. Write a function 
that, given a number, finds a sequence of additions and multiplications 
that produce that number.

---------------------------------------------------------------------*/

var icol = new Array();
var result=1;
var _result = '';
var loopNo = 0;
var loopCount = 0;
var resultFound = false;

function startOfFn() {
	loopCount = 0;
	loopNo = 0;
	resultFound = false;
	for( var i = 0; i<10; i++ )
	{
		if (resultFound == true) 
		break;
		loopCount = loopCount + 1;
		recur();
	}
}

function recur() {
	loopNo += 1;
	for (var i = 3; i <= 5; i += 2) 
	{
	icol[loopNo - 1] = i;
	if ( loopNo != loopCount)
	{
		recur();
	}
	else
	{
		combine(loopNo);
	}
	if (resultFound == true) 
	break;
	}
	loopNo = loopNo - 1;
}

function combine(b) {
	result = 1;
	_result = '1';
	for ( var i = 0; i < b; i++ )
	{
		if (icol[i] == 3)
		{
			result = result * 3;
			_result = '(' + _result + ' * 3)';
		}
		else
		{
			result = result + 5;
			_result = '(' + _result + ' + 5)';
		}
		if (result == n)
		{  
			alert(_result);
			resultFound = true;
			break;
		}
	}
}

var n = enter a positive integer here;
startOfFn();


/*---------------------------------------------------------------------
7. Write an algorithm or pseudo-code to determine whether the two rectangles 
(x0, y0) (x'0, y'0) and (x1, y1) (x'1, y'1) overlap at all (partially or 
completely), where both rectangles sides are parallel to the axes.

---------------------------------------------------------------------*/

function checkOverlap (aX1, aY1, aX2, aY2, bX1, bY1, bX2, bY2) {
	var overlap;
	if ( ( ((bX1 >= aX1 && bX1 <= aX2) || (bX2 >= aX1 && bX2 <= aX2)) && ((bY1 >= aY1 && bY1 <= aY2) || (bY2 >= aY1 && bY2 <= aY2)) ) || ( ((aX1 >= bX1 && aX1 <= bX2) || (aX2 >= bX1 && aX2 <= bX2)) && ((aY1 >= bY1 && aY1 <= bY2) || (aY2 >= bY1 && aY2 <= bY2)) ) ) {
		overlap = true;
	}
	else {
		overlap = false;
	}
	console.log(overlap);
}

checkOverlap (6, 3, 11, 7, 10, 5, 15, 9); // => true

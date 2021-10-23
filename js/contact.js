// contact form javascript by Divyesh Patel

function validateAndSubmit()
	{
	if( document.myform.name.value == "Your name" || document.myform.message.value == "Your message" )
	{
	alert( "Invalid input" );
	return false;
	}
	var x=document.forms["myform"]["email"].value;
	var atpos=x.indexOf("@");
	var dotpos=x.lastIndexOf(".");
	if (atpos<1 || dotpos<atpos+2 || dotpos+2>=x.length)
	{
	alert("Not a valid e-mail address");
	return false;
	}
	submitform();
}

function submitform() {
	document.myform.submit();
}

function blank(a) { 
	if(a.value == a.defaultValue) a.value = ""; 
}

function unblank(a) { 
	if(a.value == "") a.value = a.defaultValue; 
}
   
function autoresize(textarea) {
	textarea.style.height = 'auto';
	textarea.style.height = textarea.scrollHeight + 1 + 'px';
}


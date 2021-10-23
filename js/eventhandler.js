// JavaScript Document


function addEventHandler(oNode, evt, oFunc, bCaptures)
{
	if (typeof(oNode.attachEvent) != "undefined") {
		oNode.attachEvent("on"+evt, oFunc);
	}
	else {
		oNode.addEventListener(evt, oFunc, bCaptures);
	}
}

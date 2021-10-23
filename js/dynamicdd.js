// JavaScript Document

$(function() {
$("#country").change(function() {
	$("#cities").load("textdata/" + $(this).val() + ".txt");
});
});

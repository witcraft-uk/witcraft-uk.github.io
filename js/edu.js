// jQuery Document by Divyesh Patel

var letter = ["_0", "_1", "_2", "_3", "_4", "_5", "_6", "_7", "_8", "_9", "_10", "_11", "_12", "_13", "_14", "_15", "_16", "_17", "_18", "_19", "_20", "_21", "_22", "_23", "_24", "_25" ];

$.each(letter, function(key, value) {
	$("." + key).click(function(){
	$(this).hide();
	});
	$("." + key).click(function(){
	$("." + value).show(100);
	});
	$("." + value).mousemove(function(){
	$("." + key).fadeIn(2000);
	}); 
}); 

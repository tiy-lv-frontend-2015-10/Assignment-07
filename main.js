$(document).ready(function(){/* opening document.ready*/
	$("#addBtn").on("click", function(){/*Click Event begins here*/
		var val1 = $("#num_one").val();
		var val2 = $("#num_two").val();
		$("#answer").html(parseInt(val1, 10) + parseInt(val2, 10));
	});
	
	$("#subtractBtn").on("click", function(){
		var val1 = $("#num_one").val();
		var val2 = $("#num_two").val();
		$("#answer").html(parseInt(val1, 10) - parseInt(val2, 10));
	});
	$("#multiplyBtn").on("click", function(){
		var val1 = $("#num_one").val();
		var val2 = $("#num_two").val();
		$("#answer").html(parseInt(val1, 10) * parseInt(val2, 10));
	});
	$("#divideBtn").on("click", function(){
		var val1 = $("#num_one").val();
		var val2 = $("#num_two").val();
		$("#answer").html(parseInt(val1, 10) / parseInt(val2, 10));
	});
});/* closing document.ready*/
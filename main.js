$(document).ready(function(){
	$("#addBtn").on("click", function(){
		var num_one = $("#num_one").val();
		var num_two = $("#num_two").val();
		$("#answer").html(parseInt(num_one, 10) + parseInt(num_two, 10));
	});
	
	$("#subtractBtn").on("click", function(){
		var num_one = $("#num_one").val();
		var num_two = $("#num_two").val();
		$("#answer").html(parseInt(num_one, 10) - parseInt(num_two, 10));
	});
	$("#multiplyBtn").on("click", function(){
		var num_one = $("#num_one").val();
		var num_two = $("#num_two").val();
		$("#answer").html(parseInt(num_one, 10) * parseInt(num_two, 10));
	});
	$("#divideBtn").on("click", function(){
		var num_one = $("#num_one").val();
		var num_two = $("#num_two").val();
		$("#answer").html(parseInt(num_one, 10) / parseInt(num_two, 10));
	});
});
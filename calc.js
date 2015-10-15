$(document).ready(function(){
	
	$("#calculateBtn1").on("click", function(){
		var value1 = $("#num_one").val();
		var value2 = $("#num_two").val();
		$("#answer").html(parseInt(value1, 10) + parseInt(value2, 10));
	});



	
	$("#calculateBtn2").on("click", function(){
		var value1 = $("#num_one").val();
		var value2 = $("#num_two").val();
		$("#answer").html(parseInt(value1, 10) - parseInt(value2, 10));
	});




	
	$("#calculateBtn3").on("click", function(){
		var value1 = $("#num_one").val();
		var value2 = $("#num_two").val();
		$("#answer").html(parseInt(value1, 10) / parseInt(value2, 10));
	});



	
	$("#calculateBtn4").on("click", function(){
		var value1 = $("#num_one").val();
		var value2 = $("#num_two").val();
		$("#answer").html(parseInt(value1, 10) * parseInt(value2, 10));
	});



	});
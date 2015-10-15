$(document).ready(function(){
	$("#addBtn").on("click",function(){
		var value1 = $("#num_one").val();
		var value2 = $("#num_two").val();
		$("#result").html(add(value1, value2));
	})


function add(value1 , value2){
	return parseInt(value1,10) + parseInt(value2,10);
}


$("#substractBtn").on("click",function(){
		var value1 = $("#num_one").val();
		var value2 = $("#num_two").val();
		$("#result").html(substract(value1, value2));
	})

function substract(value1 , value2){
	return parseInt(value1,10) - parseInt(value2, 10);
}



$("#multiplyBtn").on("click",function(){
		var value1 = $("#num_one").val();
		var value2 = $("#num_two").val();
		$("#result").html(multiply(value1, value2));
	})



function multiply(value1 , value2){
	return parseInt(value1,10) * parseInt(value2, 10);
}

$("#divisionBtn").on("click",function(){
		var value1 = $("#num_one").val();
		var value2 = $("#num_two").val();
		$("#result").html(division(value1, value2));
	})



function division(value1 , value2){
	return parseInt(value1,10) /  parseInt(value2, 10);
}


});
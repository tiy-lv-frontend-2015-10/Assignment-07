/******
When I click the "calculate" button, the values in the first box should be 
added, subtracted, multiplied or divided by the value in the second box.
You'll need to convert the values to a number (think Number(value)) in order to process them.
Your output should be injected into the answer element

*****/
$(document).ready(function(){



	//1. Make button *on click* calculate the answer 
	//2.get value input from num_one should get innerHTML 
	
	
		//2.1 convert values into a number
			

	//3. get value input num_two should get innerHTML 		
	//3.1 combine two inputs by whatever the user wants to calculate by 
		
	
		//3.3 pass *number(value)* to input nume_one(numbers here)

 		// pass answer to answer id
	$("#addBtn").click(function (cal_answer) {
		var numInput_1 = $("#num_one").val();
		var numInput_2 = $("#num_two").val();
		$("#answer").html(parseInt(numInput_1, 10) + parseInt(numInput_2, 10));
	});

	$("#subBtn").click(function (cal_answer){
		var numInput_1 = $("#num_one").val();
		var numInput_2 = $("#num_two").val();
		$("#answer").html(parseInt(numInput_1, 10) - parseInt(numInput_2, 10));
	});

	$("#multiBtn").click(function (cal_answer){
		var numInput_1 = $("#num_one").val();
		var numInput_2 = $("#num_two").val();
		$("#answer").html(parseInt(numInput_1, 10) * parseInt(numInput_2, 10));
	});

	$("#divBtn").click(function (cal_answer){
		var numInput_1 = $("#num_one").val();
		var numInput_2 = $("#num_two").val();
		$("#answer").html(parseInt(numInput_1, 10) / parseInt(numInput_2, 10));
	});

		





});

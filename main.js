$(document).ready(function(){


var add = function(num1, num2) {  //for the four functions in this section, creating a variable for each type of math and using 2 numbers as parameters
	return parseInt(num1, 10) + parseInt(num2, 10); // then parse the numbers from the DOM into integers so that math can be done
}

var subtract = function(num1, num2) {
	return parseInt(num1, 10) - parseInt(num2, 10);
}

var multiply = function(num1, num2) {
	return parseInt(num1, 10) * parseInt(num2, 10);
}

var divide = function(num1, num2) {
	return parseInt(num1, 10) / parseInt(num2, 10);
}


$("#add").on("click", function() {  //in this section, for each of the four type of equations, set up an event where the click calculates
	var num_1 = $("#num_one").val(); //the equation with the two numbers entered onto the page and then returns the answer
    var num_2 = $("#num_two").val();  // into the html page
    $("#answer").html(add(num_1, num_2));
})

$("#subtract").on("click", function() {
	var num_1 = $("#num_one").val();
    var num_2 = $("#num_two").val();
    $("#answer").html(subtract(num_1, num_2));
})

$("#multiply").on("click", function() {
	var num_1 = $("#num_one").val();
    var num_2 = $("#num_two").val();
    $("#answer").html(multiply(num_1, num_2));
})

$("#divide").on("click", function() {
	var num_1 = $("#num_one").val();
    var num_2 = $("#num_two").val();
    $("#answer").html(divide(num_1, num_2));
});

});
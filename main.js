function crunch(n1, n2, operation) {
	var solution = 0;
	switch (operation) {
		case "plus":
		solution = parseFloat(n1) + parseFloat(n2);
		break;

		case 'minus':
		solution = parseFloat(n1) - parseFloat(n2);
		break;

		case "times":
		solution = parseFloat(n1) * parseFloat(n2);
		break;

		case "over":
		solution = parseFloat(n1) / parseFloat(n2);
		break;

		default:
			solution = 0;

	}
		return solution;

}




$(document).ready(function(){

	$("#calculateBtn").on('click', function(){
		var figOne = $("#num_one").val();
		var figTwo = $("#num_two").val();
		var operand = $("input:radio[name=operator]:checked").val();
		console.log(operand);
		console.log(figOne);
		console.log(figTwo);
		$("#answer").html(crunch(figOne, figTwo, operand)).css('color', 'green');

	});


});

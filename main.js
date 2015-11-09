$(document).ready(function(){

	
	$('#add').on("click",function() {
		
		$("#answer").append("+");
	});
	$('#subtract').on("click",function() {

		$("#answer").append("-");
	});
	$('#multiply').on("click",function() {
		
		$("#answer").append("*")
	});
	$('#divide').on("click",function() {
		
		$("#answer").append("/");
	});

	$('#clear').on("click",function() {
		
		$("#answer").html("");
	});

	$('#equal').on("click",function(){
		
		sum();
	});
	function sum() {
			var ans = eval($("#answer").html());
			$("#answer").html(ans)
		};
		
	
	$("#")
	$("#0").on("click",function(){
		$("#answer").append(0);


	});
	$("#1").on("click",function(){
		$("#answer").append(1);

	});
	$("#2").on("click",function(){
		$("#answer").append(2);

	});
	$("#3").on("click",function(){
		$("#answer").append(3);

	});
	$("#4").on("click",function(){
		$("#answer").append(4);

	});
	$("#5").on("click",function(){
		$("#answer").append(5);

	});
	$("#6").on("click",function(){
		$("#answer").append(6);

	});
	$("#7").on("click",function(){
		$("#answer").append(7);

	});
	$("#8").on("click",function(){
		$("#answer").append(8);

	});
	$("#9").on("click",function(){
		$("#answer").append(9);

	});





});

















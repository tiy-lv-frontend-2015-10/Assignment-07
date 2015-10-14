$(document).ready(function(){

	
$('#add').on("click",function() {
	var num_1=$("#num_1").val();
	var num_2=$("#num_2").val();
	$("#answer").html(add(num_1,num_2));
});
$('#subtract').on("click",function() {
	var num_1=$("#num_1").val();
	var num_2=$("#num_2").val();
	$("#answer").html(subtract(num_1,num_2));
});
$('#multiply').on("click",function() {
	var num_1=$("#num_1").val();
	var num_2=$("#num_2").val();
	$("#answer").html(multiply(num_1,num_2))
});
$('#divide').on("click",function() {
	var num_1=$("#num_1").val();
	var num_2=$("#num_2").val();
	$("#answer").html(divide(num_1,num_2));
});







var add= function(num_1,num_2) {
	return parseInt(num_1,10) + parseInt(num_2,10);
}
var subtract= function(num_1,num_2) {
	return parseInt(num_1,10) - parseInt(num_2,10);
}
var multiply= function(num_1,num_2) {
	return parseInt(num_1,10) * parseInt(num_2,10);
}
var divide= function(num_1,num_2) {
	return parseInt(num_1,10) / parseInt(num_2,10);
}


});




















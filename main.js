$(document).ready(function() {
    
    $("#addBtn").on("click", function(){
        var value1 = $("#numA").val();
        var value2 = $("#numB").val();
        var sum = add(value1, value2);
        $("#answer").html(sum);
    })
    
    $("#subtractBtn").on("click", function() {
        var value1 = $("#numA").val();
        var value2 = $("#numB").val();
        var sum = subtract(value1, value1);
        $("#answer").html(sum);
    })
    
    $("#multiplyBtn").on("click", function() {
        var value1 = $("#numA").val();
        var value2 = $("#numB").val();
        var sum = multiply (value1, value2);
        $("#answer").html(sum);
    })
    
    $("#divideBtn").on("click", function () {
        var value1 = $("#numA").val();
        var value2 = $("#numB").val();
        var sum = divide (value1, value2);
        $("#answer").html(sum);
    })
    
});
                    
function add (num1, num2) {
    return parseInt(num1, 10) + parseInt(num2, 10);
}      

function subtract (numA, numB) {
    return parseInt(numA, 10) - parseInt(numB, 10);
}

function multiply (num1, num2) {
    return (parseInt(num1, 10) * parseInt(num2, 10));
}

function divide (num1, num2) {
    return parseInt(num1, 10) / parseInt(num2, 10);
}
                  
                  
                  
                  
                  
                  
                  
                  
                  
                  
                  
                  
                  
                  

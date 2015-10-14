$(document).ready(function() {



  var add = function(num1, num2) {
    return parseInt(num1, 10) + parseInt(num2, 10);
  }

   var subtract = function(num1, num2) {
    return parseInt(num1, 10) - parseInt(num2, 10);
  }


   var multiply = function(num1, num2) {
    return parseInt(num1, 10) * parseInt(num2, 10);
  }


   var divide = function(num1, num2) {
    return (parseInt(num1, 10) / parseInt(num2, 10));
  }

    $("#add").on("click" ,function () {
      var num_1 = $("#num_one").val();
      var num_2 = $("#num_two").val();
      $("#answer").html(add(num_1, num_2));
    });

    $("#subtract").on("click" ,function () {
      var num_1 = $("#num_one").val();
      var num_2 = $("#num_two").val();
      $("#answer").html(subtract(num_1, num_2));
    });
    $("#multiply").on("click" ,function () {
      var num_1 = $("#num_one").val();
      var num_2 = $("#num_two").val();
      $("#answer").html(multiply(num_1, num_2));
    });
    $("#divide").on("click" ,function () {
      var num_1 = $("#num_one").val();
      var num_2 = $("#num_two").val();
      $("#answer").html(divide(num_1, num_2));
    });
});
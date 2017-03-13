$(document).ready(function(){
    var expression = "";
    $('.allbtn').on('click',function(){
        var value = $(this).html();
        if(value == "=") {
            $('.display').html(eval(expression))
        } else if (value == 'C') {
            $('.display').html('');
        } else {
            expression+=value;
            $('.display').html(expression);
        }
    });
})

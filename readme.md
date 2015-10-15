# 10/14/15

___This homework is due by 8am, on 10/15/2015___


## Description
This exercise will help you understand how to use JavaScript functions as well as to start interacting with the DOM.

## Objectives

### Learning Objectives

After completing this assignment, you should…

* Understand how JavaScript functions work
* Understand the basics of the DOM (Document Object Model)


### Performance Objectives

After completing this assignment, you be able to effectively use

* Be able to create re-usable functions
* Be able to create HTML elements and interact with them via JavaScript



## Details

### Deliverables

* A repo containing at least:
  * `main.js`
  * `index.html`
  * `readme.md`
  * `.gitignore`
* A link to the deployed project on gh-pages

### Requirements

* No JavaScript warnings or errors


## Normal Mode

1. Use the HTML provided in `index.html` and set up a new project
2. Create a `main.js` file and link it to your `index.html` file
3. Using the DOM API and the elements on the page, set up the following:

    * When I click the "calculate" button, the values in the first box should be added, subtracted, multiplied or divided by the value in the second box.
    * You'll need to convert the values to a number (think `Number(value)`) in order to process them.
    * Your output should be injected into the answer element

4. Add some styles to this project and make it something pretty to look at.

            
## Hard Mode

Taking what you have learned, create the below image in HTML/CSS and add the functionality (JS) you see below.

| Mockup                       | In Action                    |
| ---------------------------- | ---------------------------- |
| ![](./images/calculator.png) | ![](./images/calculator.gif) |
            

## Additional Resources

* [Understanding the DOM](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model)


































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
		

	$("#addBtn").click(function (cal_answer) {
		var numInput_1 = $("#num_one").val();
		var numInput_2 = $("#num_two").val();
		$("#answer").html(parseInt(numInput_1, 10) + parseInt(numInput_2, 10));
	});

	$("#subBtn").click(function (cal_answer){
		var numInput_1 = $("#num_one").val();
		var numInput_2 = $("#num_two").val();
		return (numInput_1 - numInput_2);
	});

	$("#multiBtn").click(function (cal_answer){

		return (numInput_1 * numInput_2);
	});

	$("#divBtn").click(function (cal_answer){
		return (numInput_1 / numInput_2);
	});

		



		//3.3 pass *number(value)* to input nume_one(numbers here)

 		// pass answer to answer id


});


















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
		

	$("#addBtn").click(function (cal_answer) {
		var numInput_1 = $("#num_one").val();
		var numInput_2 = $("#num_two").val();
		$("#answer").html(parseInt(numInput_1, 10) + parseInt(numInput_2, 10));
	});

	$("#subBtn").click(function (cal_answer){
		var numInput_1 = $("#num_one").val();
		var numInput_2 = $("#num_two").val();
		return (numInput_1 - numInput_2);
	});

	$("#multiBtn").click(function (cal_answer){

		return (numInput_1 * numInput_2);
	});

	$("#divBtn").click(function (cal_answer){
		return (numInput_1 / numInput_2);
	});

		



		//3.3 pass *number(value)* to input nume_one(numbers here)

 		// pass answer to answer id


});
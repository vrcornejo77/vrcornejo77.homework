//Author: Victor R. Cornejo
//Homework Assignment #2 = Javascript Logic and Loopos

//Part 1 - Evaluating Variable's Value
function evalValue(num){

	//if statement that will compare the value of variable num to the value of the number 10.
	//If this condition is met, an alert box will appear to notify the user.
	//If the condition is not met, the user will be notified through the console that the variable was greater then 10.

	if (num <= 10){
		//An alert message box will appear to notify the user when this condition is met.
		alert(num + " is less than or equal to 10.");
	}
	else {
		//A message will be displayed in the console that will notify the user that this other condition was met.
		console.log("Your variable " + num + " is greater than 10.");
	}//End of if-else statement.

}//End of function


//Three statments that will call upon evalValue with three different values;
evalValue(5);
evalValue(10);
evalValue(26);
//End of Part 1


//Part 2 - Evaluating String Length
function evalString(str){

 		//if statement that will compare the length of a string that is storred in a variable "word".
 		//If this condition is met and the length is greater than 10 characters, an alert box will appear to notify the user.
 		//If the condition is not met and the length is less than 10 characters, the user will be notified through the console that the variable was less than 10 characters.
 		if (str.length > 10){
 			//An alert message box will appear to notify the user when this condition is met.
 			alert("The word \"" + str + "\" is greater than 10 characters long.");
 		}
 		else {
 			//A message will be displayed in the console that will notify the user that this other condition was met.
 			console.log("Your variable \"" + str + "\" is less than 10 characters.");
 		}//End of if-else statement.
 	
 	 }//End of function
 	
//Three statments that will call upon evalString with three different string with different lengths;
evalString("superstition");
evalString("board");
evalString("Polymorphism");
//End of Part 2



//Part 3 - Three functions demonstrating the use of console.log or alert

//Function 1
//Function that will check if a variable is divisible by 3. 
//The user will be notified by an alert that the variable is divisible by three or not.
function divisibleByThree(num){

 	//If-else statement that will evaluate that the variable is divisible by 3.
 	if(num % 3 == 0){
 		//An alert message will appear stating that the variable is divible by 3.
 		alert(num + " is divisible by 3."); 			
 	}
 	else {
 		//An alert message will appear stating that the variable is not divible by 3.
 		alert(num + " is not divible by 3.");		
 	}//End of if-else statement.


 }//End of function

//Three statements that will call upon divisibleByThree function with three different values.
divisibleByThree(1);
divisibleByThree(23);
divisibleByThree(18);


//Function 2
/* This function that will compare the length of two strings and will alert the user, via an alert message, 
which string variable is longer than the other. If both strings have equal lengths, then the user will be 
receive an alert message stating this information.  The function will return each variable and their respected
length, which will be displayed to the user via console.log when the function is called. */
function compareLength(str1, str2) {

	var lenResult;

	//if-else statement that will handle the comparison between two string lengths.
	if (str1.length > str2.length) {

		alert("The word \"" + str1 +"\" has the longer string length than the word \"" + str2 + ".\"");

	}
	else if (str2.length > str1.length) {

		alert("The word \"" + str2 +"\" has the longer string length than the word \"" + str1 + ".\"");

	}
	else {

		alert("Both words \"" + str1 +"\" and \"" + str2 + "\" have both equal string lengths.\"");

	}//End of if-else statement.

	//The variables and their respected lengths are stored in the variable 'lenResult'
	lenResult = "Word: " + str1 + " -- Character Length: " + str1.length + " | Word: " + str2 + " -- Character Length: " + str2.length;

	//Return statement that will return the value stored in the variable 'lenResult'. 
	return lenResult;

}//End of function

//Four statements that will call upon compareLength function with three different values.
//The results of the call will be displayed on the console
console.log("RESULT: " + compareLength("storage", "warehouse"));
console.log("RESULT: " + compareLength("bone", "door"));
console.log("RESULT: " + compareLength("supplementary", "complimentary"));
console.log("RESULT: " + compareLength("superstition", "subscript"));


//Function 3
/* This function will take and array that contains eight numerical values ranging from 1 to 100 and will sort
the array in ascending order via a Bubble Sort.  The sorted array will be displayed once the sort is complete
via the console.log.*/
function sortArray(numArray){
	//Declaration of a variable "temp"
	var temp;

	//Outer for loop that will control the number of iterations the inner For loop will run. 
	//This loop will run until it reaches the value length of the array.
	for(var loop = 0; loop < numArray.length; loop++){

		//Inner for loop that will transvers the length of the array.
		for(var index = 0; index < numArray.length; index++){

			//If statement that will compare values between elements at numArray[index] amd numArray[index+1].
			//If numArray[index] is greater than numArray[index+1], the values are switched.
			if (numArray[index] > numArray[index+1]){

				temp = numArray[index+1]; //Stores value in numArray[index+1] into temp;
				numArray[index+1] = numArray[index]; //stores value in numArray[index] into numArray[index+1]. 
				numArray[index] = temp; //Stores value in temp into numArray[index]

			}//End if statement.
		}//End of inner for loop.
	}//End of outer for loop.

	//For loop used to display the sorted array onto the console.
	for(var x = 0; x < numArray.length; x++){
		console.log("The Sorted Array at index: " + x + " - Value: " + numArray[x]);
	}

}//End of function


//Declaration of an array and establishing values for each element in the array.
var arrayOrigin = [8, 16, 9, 98, 2, 66, 42, 10];

//Call to sortArray function passing in arrayOrigin as a parameter.
sortArray(arrayOrigin);
//End of Part 3



//Part 4 - Array of Verbs
//Example of using an array, for loop, and console.log
function verbUsage(arr){
	//For loop that will write on the console a sentence and inserting and a verb that is withing the array.
	for(var index = 0; index < arr.length; index++){
		console.log("Jimmy took the ball and " + arr[index] + " it across the room.");
	}

}

//Declaring an array called "verbArray" that contains four verbs
var verbArray = ["threw", "kicked", "slid", "rolled"];

//Call to function verbUsage
verbUsage(verbArray);
//End of Part 4
//Author: Victor R. Cornejo
//Homework Assignment #1 = Basic Javascript Homework

//Part 1: Adding two variables containing number values
//Two Variables that each store a number value
var number1 = 20;
var number2 = 45;

//Variable result will store the sum of number1 and number2 when added.
var result = number1 + number2;

//The results will be outputted to the console.
console.log("The result of adding " + number1 + " with " + number2 + " is " + result + ".");

//Part 2: Variable Array
//Variable "items" contains 5 items 
var items = ['water', 'books', 'food', 'sheets', 'medkit'];

//Displaying each item contained in the "items" array;
console.log(items[0]);
console.log(items[1]);
console.log(items[2]);
console.log(items[3]);
console.log(items[4]);

//Part 3: Variable Object
var person = {
	firstName: "Victor",
	middleIntial: "R.",
	lastName: "Cornejo",
	height: "5ft. 7in.",
	hairColor: "Dark Brown",
	eyeColor: "Hazel",
	nationality: "Asian",
	netWorth: 15000.52,
	employed: false,
};

//Outputing properties of the variable object.
console.log("Full Name: " + person.firstName + " " + person.middleIntial + " " + person.lastName);
console.log("Height: " + person.height);
console.log("Race: " + person.nationality);
console.log("NetWorth: $" + person.netWorth);
console.log("Employed: " + person.employed); 
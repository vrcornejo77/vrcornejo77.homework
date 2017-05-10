//Author: Victor R. Cornejo
//Homework Assignment #3 = Object Oriented Javascript

//Creation of 3 JavaScript Objects
//Object #1 - An object that describes myself.
var descriptionMe = {
	name: "Victor R. Cornejo",
	age: 39,
	height: "5ft. 7.5in.",
	weight: 350,
	hairColor: "dark brown",
	eyeColor: "hazel",
	hobbies: ["drawing", "reading", "playing video games", "working out", "cycling", "watching movies"],
	intro: function() {
		console.log("Hello. My name is " + this.name + ". Welcome!");
	}

};

//Object #2 - Object with information regarding a favorite game I play.
var favGame = {
	title: "Final Fantasy Brave Exvius",
	producer: "Square Enix",
	teamCharacters: ["Rain", "Fina", "Olive", "Noctis", "ExaDeath"],

	//This method will add a new member to the teamCharacter array.
	addMember: function(member){
		console.log("Time to add another member to the team. Welcome " + member + " to the team.");
		this.teamCharacters.push(member);
	}
};

//Object #3 - An object containing a list of chores that need to be done.
var cleaningList = {
	dusting: "Home Office",
	carWashing: "Toyota Rav4",
	moppingFloors: ["kitchen", "dinning room", "study"],
	painting: "outside fence",
	planting: ["roses", "lilies", "daisies"],
	removeListItem: function(item){
			delete this[item];
			return item + " deleted from list."
	}	
};


/*Function that will transverse a object's property, which contains an array of elements. 
  The property of the object that contains an array is passed as the first parameter.
  The second parameter is the item in the array that is being sought after and when found,
  that item willl be replaced by the item passed as a third parameter. The function will return a 
  message stating the success or failure.

  NOTE: This function can be used on any object that has a property that contains an array of elements.
  For this assignment, this function can be used for descriptionMe, favGame, and cleaningList objects.
  */
function replaceItem(objArr, targetItem, replaceItem){

	//Variable that stores a boolean value of false.  Mainly used as a flag.
	var found = false;

	//For loop that will transverse the objects array.
	for(var index = 0; index < objArr.length; index++){

		//If statement that checks if an item in the object array is the same as the target item.
		if(objArr[index] == targetItem){

			objArr[index] = replaceItem; //Replaces target item with the replacement item.
			found = true; //Boolean flag set to false.
			break; //Break statement that breaks the loop.

		}
	}

	//if-else statement that checks the value of the boolean flag.
	//If true, returns a success statement. Else, it will return a failure statement.
	if (found == true){

		return "Item found and replaced";

	}
	else{

		return "Target item not found";
	}

}

//Function that will display the property containing an array within stored in an object.
//The only parameter being passed is the 
function displayArray(objArray){

	//For loop that will transverse the objects array.
	for(var index = 0; index < objArray.length; index++){

		console.log(objArray[index]); //Will display each item in the array via the console.
	}
}

//The following are calles to functions and object methods.
descriptionMe.intro();
console.log("My hobbies are: ");
displayArray(descriptionMe.hobbies);

console.log("My favorite game is \"" + favGame.title + "\"." );
console.log(replaceItem(favGame.teamCharacters, "Olive", "Gau"));
displayArray(favGame.teamCharacters);

//This iteration is to show what happens with you try to replace a character that is not in the list.
console.log(replaceItem(favGame.teamCharacters, "Cecil", "Cloud"));
displayArray(favGame.teamCharacters);

//This is a call to a method of an object that will add a new item to teamCharacter array.
favGame.addMember("Cloud");
displayArray(favGame.teamCharacters);

//This is display the key properties of the third object cleaningList.
console.log("Here is my cleaning list I have to do: " + Object.keys(cleaningList));

//This is a call to a method of an object that will delete a property from the object cleaningList.
console.log(cleaningList.removeListItem("painting"));
console.log("This is what my cleaning list looks now: " + Object.keys(cleaningList));

//This iteration will replace a value for one of the properties in the cleaningList object
console.log("Last thing I will do is dust my " + cleaningList.dusting +".");
cleaningList.dusting = "Living Room";
console.log("Change of plans.  I will dust the " + cleaningList.dusting +" instead.");

//This will add a new property to the cleaningList object.
cleaningList.mowing = "Front Lawn";
console.log("This is what my cleaning list looks at this point: " + Object.keys(cleaningList));


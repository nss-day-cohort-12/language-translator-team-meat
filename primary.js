// Declare initial element variables
// Text Area
var userInput = document.getElementById("input");

// Radio Buttons
var port = document.getElementById("port");
var latin = document.getElementById("latin");
var norwegian = document.getElementById("norwegian");

// Translate Button
var button = document.getElementById("translate");


// var userInput= document.getElementById("input");


// Event listener/hander for the translate button
button.addEventListener("click", function(){
	// Array that will hold the separate words of the user-submitted string
	var separated = [];	
	// store the user's input string into a variable
	text = userInput.value;
	console.log("User Text: ", text);
	// Declare a new array for the space-delimited strings of the initial user input, all set to lower case
	separated = text.toLowerCase().split(" ");
	console.log("Separated Array: ", separated);


	// Check to see which radio button is selected, then run corresponding IIFE translate method
	// Add your function underneath the console log for your language
	if (port.checked) {
		console.log("port checked");
	} else if (latin.checked) {
		console.log("latin checked");
		// Latin.getLatin(separated); Example (takes separated array as argument)
	} else if (norwegian.checked) {
		console.log("norwegian checked");
	} else {
		console.log("please check a button");
	}
});

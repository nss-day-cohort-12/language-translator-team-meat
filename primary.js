// Declare initial element variables
// Text Area
var userInput = document.getElementById("input");

// Radio Buttons
var port = document.getElementById("port");
var latin = document.getElementById("latin");
var norwegian = document.getElementById("norwegian");

// Select dropdown
var select = document.getElementById("select");

// Translate Button
var button = document.getElementById("translate");


// var userInput= document.getElementById("input");


// Event listener/hander for the translate button
button.addEventListener("click", function(){
	// Dropdown value capture
	var selection = select.value;


	// Array that will hold the separate words of the user-submitted string
	var separated = [];	
	// store the user's input string into a variable
  text = userInput.value;
	console.log("User Text: ", text);

	// Declare new variable for output element
	var translatedOutput = ""
	// Declare a new array for the space-delimited strings of the initial user input, all set to lower case
	separated = text.toLowerCase().split(" ");
	console.log("Separated Array: ", separated);

	// Function to handle transforming translated text into an HTML format
	function toHTML(translatedArray, language) {
		var translatedHTML = `<p>${language} Translation:</p><p>${translatedArray}</p>`;
		container.innerHTML = translatedHTML;
		console.log("HTML injected");
	};

	// Declare empty variable to store IIFE method return
	var returnedTranslation = "";

	// Voice Synthesis function, takes a text string argument
	function voiceSynthesis(toSpeak){
		// Copy/pasted from MDN, even the variable names
		var synth = window.speechSynthesis;
		var utterThis = new SpeechSynthesisUtterance(toSpeak);
		// utterThis.lang = 'en-US';
		utterThis.lang = 'ar';
		synth.speak(utterThis);
	};

	// Check to see which input option is selected, then run corresponding IIFE translate method
	if (selection === "Portuguese") {
		console.log("Portuguese selected");
		// Fill returnedTranslation variable with the return value called from the individual language translation method (using the "separated" variable)
		returnedTranslation = Translator.translateToPortuguese(separated);
		// use above toHTML function to insert returnedTranslation and transform it into usable HTML, then insert it onto the page
		toHTML(returnedTranslation, "Portuguese");
		// Call the voice synthesis function using returnedTranslation (note: not the HTML, but the original text)
		voiceSynthesis(returnedTranslation);
	} else if (selection === "Latin") {
		console.log("Latin selected");
		returnedTranslation = Translator.translateToLatin(separated);
		toHTML(returnedTranslation, "Latin");
		voiceSynthesis(returnedTranslation);
	} else if (selection === "Norwegian") {
		console.log("Norwegian selected");
		returnedTranslation = Translator.translateToNorwegian(separated);
		toHTML(returnedTranslation, "Norwegian");
		voiceSynthesis(returnedTranslation);
	} else {
		console.log("Please check a button");
	}
});

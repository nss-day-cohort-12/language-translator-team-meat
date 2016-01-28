var text = "";
var container = document.getElementById('container');
// Event listener to button

// for (var i = 0; i < separated.length; i++) {
// 	if (separated[i] === lexicon.propertyname)
// 		separated[i] = lexicon.value
// }

// Latin IIFE Start
var Latin = (function() {
	// // Array that will hold the separate words of the user-submitted string
	// var separated = [];	
	// button.addEventListener("click", function(){
	// 	// store the user's input string into a variable
	// 	text = userInput.value;
	// 	console.log("user text: ", text);
	// 	// Declare a new array for the space-delimited strings of the initial user input, all set to lower case
	// 	separated = text.toLowerCase().split(" ");
	// 	console.log("separated: ", separated);
	// });

	var lexicon = {
		"merry": "epulari",
		"christmas": "festum nativitatis Christi",
		"and": "et",
		"happy": "laeta",
		"new": "novus",
		"year": "anno",
	};


	return {
		// Publicly accessible translator function for global "text" input variable
		getLatin: function(textArr) {
			// New array for pushing translated content into
			var translatedArr = [];
			console.log("getLatin test");
			// Loop through the separated array and search for a corresponding property name within the lexicon object
			// for (var i = 0; i < separated.length; i++) {
			// 	// Note using the separated string as the bracket notated property value of lexicon
			// 	if (lexicon[separated[i]] !== undefined) {
			// 		console.log("separated[" + i + "]: ", separated[i]);
			// 		console.log("lexicon[" + i + "]: ", lexicon[separated[i]]);
			// 		separated[i] = lexicon[separated[i]];
			// 	}
			// }
			// forEach variation of the above For loop

			// separated.forEach(function(element){
			// 	if (lexicon[element] !== undefined) {
			// 		console.log("element: ", element);
			// 		console.log("lexicon[element]: ", lexicon[element]);
			// 		element = lexicon[element];
			// 	}
			// });

			var translatedOutput = textArr.map(function(element){
				if (lexicon[element] !== undefined) {
					console.log("element: ", element);
					console.log("lexicon[element]: ", lexicon[element]);
					// instead of altering element as in the for loop and forEach, map requires a "return" statement to alter each element
					return lexicon[element];
				}
			}).join(" "); // stealth join method at the end ;D
			console.log(translatedOutput);

			// Declare translatedOutput for above for loop and forEach options (need join variable)
			// var translatedOutput = textArr.join(" ");

			container.innerHTML = `<p>Latin Translation:</p><p>${translatedOutput}</p>`;
			return translatedOutput; // Console log return

		}
	}

})();



var text = "";
var container = document.getElementById('container');
	

// IIFE Start
var Translator = (function() {

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
		translateToLatin: function(textArr) {
			// New array for pushing translated content into
			var translatedArr = [];
			console.log("getLatin test");
			
			// using "map" method option (probably best option here since map moves returned objects into a new array) 
			var translatedOutput = textArr.map(function(element){
				if (lexicon[element] !== undefined) {
					// instead of altering element as in the for loop and forEach, map requires a "return" statement to alter and push each element into the new array translatedOutput
					return lexicon[element];
				}
			}).join(" "); // join chained at the end instead of defining another variable

			
			return translatedOutput;

		}
	}

})();



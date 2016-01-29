
var text = "";
var portResult = document.getElementById("vessel");  // top of the page outside the object

// Use parameter originalIIFE to indicate what should be passed to the function later as an argument
var transPort = (function (originalIIFE) {  //Changed name from Language to Translator (to match Joe's in-class comment about naming augment IIFEs the same as the original IIFE)

  var portu = {
		"merry": "feliz",
		"christmas": "natal",
		"and": "e",
		"happy": "feliz",
		"new": "ano",
		"year": "novo"
	};


	// Parameter is array, not seperated (array) because its a fucntion that is taking an argument.  Originally ran with no arguement and seperated (array) ref'd in for loop and it made it pertain only to that one array.
	originalIIFE.translateToPortuguese = function (array) {     
	// The property is toTranslate and the function is the value.  When linking js IIFE's the toTranslate: function (which worked for individual page, changes to linkedIife.toTranslate =)
		var translated = [];
		for (var i = 0; i < array.length; i++) {

			if (portu[array[i]] !== undefined) {
				translated.push(portu[array[i]]);
			}
			console.log("translated", translated);
		}
		var endResult = translated.join(" ");
		// Returns the reassembled text string
		return endResult;
	};
	

})(Translator); // Takes original 









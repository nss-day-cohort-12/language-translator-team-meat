
var norwegian = document.getElementById("norwegian");
var matrix = document.getElementById("matrix");
var button = document.getElementById("translate");

var Translator = (function (translatorParameter) { //Changed name from Language to Translator (to match Joe's in-class comment about naming augment IIFEs the same as the original IIFE)
	var wordNor = {
		"merry":"munter",
		"christmas":"jul", 
		"and":"og", 
		"happy":"lykkelig", 
		"new":"ny", 
		"year":"år"
	};	

	translatorParameter.translateToNorwegian = function(word) {
		var newArray = [];

		for (var i = 0; i < word.length; i++) {
			if (wordNor[word[i]] !== undefined) {

				newArray.push(wordNor[word[i]]);
				console.log("newArray", newArray);
			}
			var translated = newArray.join(" ");
			console.log("translated", translated);
		};

		return translated;
	};
})(Translator);
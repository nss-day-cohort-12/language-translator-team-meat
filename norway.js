
var norwegian= document.getElementById("norwegian");
var matrix= document.getElementById("matrix");
var button = document.getElementById("translate");

var language = (function(translatorParameter) {
	var wordNor= {"merry":"munter",
				 "christmas":"jul", 
				 "and":"og", 
				 "happy":"lykkelig", 
				 "new":"ny", 
				 "year":"år"};	

	return {
		 

		translatorParameter.translateNor = function(word) {
		var newArray = [];
	// 	for (var i=0; i < words.length; i++) {
	// 		if (words  !== undefined)
	// 		translated.push(words); 	
	
		// }

		for (var i = 0; i < word.length; i++) {
			if (wordNor[word[i]] !== undefined) {

				newArray.push(wordNor[word[i]]);
				console.log("newArray", newArray);
			}
			var translated = newArray.join(" ");
			console.log("translated", translated);

		};
			var synth = window.speechSynthesis;
            var utterThis = new SpeechSynthesisUtterance(translated);
            // utterThis.lang = 'en-US';
            utterThis.lang = 'ar';
            synth.speak(utterThis);

		 matrix.innerHTML = translated;
	}

	// button.addEventListener("click", function(){});	


	// 	}
	
};
})(Translator);
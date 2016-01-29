
// var transPort = (function () {

// 	var button = document.getElementById("translate");
// 	var bigString = userInput;
// 	var separate = [];

// 	var capture = (function () {
// 		separate = bigString.split(",");
// 		console.log("separate", separate); 
// 	})();


// 	return {
		
// 		}


// })();

// button.addEventListener("click", translate);


// translate portuguese saying into english



// var userInput= document.getElementById("input");


var text = "";
var portResult = document.getElementById("vessel");  // top of the page outside the object

var transPort = (function (marksBigIife) {  // Parameter from Mark's function

  var portu = {
		"merry": "feliz",
		"christmas": "natal",
		"and": "e",
		"happy": "feliz",
		"new": "ano",
		"year": "novo"
	};


	// Parameter is array, not seperated (array) because its a fucntion that is taking an argument.  Originally ran with no arguement and seperated (array) ref'd in for loop and it made it pertain only to that one array.
	marksBigIife.translateToPortuguese = function (array) {     
	// The property is toTranslate and the function is the value.  When linking js IIFE's the toTranslate: function (which worked for individual page, changes to linkedIife.toTranslate =)
		var translated = [];
		for (var i = 0; i < array.length; i++) {
			if (portu[array[i]] !== undefined) {
				translated.push(portu[array[i]]);
			}
			console.log("translated", translated);
		}
		var endResult = translated.join(" ");
		console.log("endResult: ", endResult);			
		portResult.innerHTML = endResult;
		var synth = window.speechSynthesis;
    var utterThis = new SpeechSynthesisUtterance(endResult);
    // utterThis.lang = 'en-US';
    utterThis.lang = 'ar';
    synth.speak(utterThis);  
	};
	

})(Translator); // Takes original 









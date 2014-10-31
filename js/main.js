// JavaScript Document

//yepnopejs

/*if (Modernizr.canvas) {
	// canvas is support
	var theCanvas = document.getElementById("Canvas1");
	var ctx = theCanvas.getContext("2d");
	
	//draw text
	
	ctx.font = "25pt Verdana";
	ctx.fillText("Canvas is supported", 50, 75);
	}
	else {
		// canvas is not support - polyfills here
		
	}


if(Modernizr.draganddrop) {
	ctx.font = "25pt Verdana";
	ctx.fillText("Drag and Drop works", 50, 150);
}
else {
	//polyfills
}*/

Modernizr.load({
	test: Modernizr.inputtypes.date,
	yep: "js/success.js",
	nope: "js/fail.js",
	complete: function (){
		console.log('the test is done');
		}
	
	});


//console.log(Modernizr);
//
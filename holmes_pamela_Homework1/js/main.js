/*
     Name:
     Date:
     Class & Section:  WIA-####
     Comments: "HTML5 Canvas Drawing"
 */


/*******************************************
HTML5 Shape Drawing Activity
    1.  Setup the canvas and 2d context
    2.  Draw out each shape in the sections below
     
********************************************/
if (Modernizr.canvas) {
	// canvas is support
	var theCanvas = document.getElementById("Canvas1");
	var ctx = theCanvas.getContext("2d");
	
	//draw text
	
	ctx.font = "bold 21pt Cursive";
	ctx.fillText(" - Canvas is supported", 350, 125);


/*******************************************
FILE SETUP

// Setup up 7 different Canvases in index.html one for each problem.
//Link Modernizr.js
// Link the main.js file
// Setup the call to that canvas and get it's 2d context
//Use Modernizr to verify that your browser supports canvas, include a fallback message


/*******************************************
PART 1

Draw a rectangle starting at point (0 ,0)
That has a width of 50 px and a heigh of 100px
Set the color of the rectangle to a shade of blue.
Set the stroke color to black and the dimension of the stroke are the same as the rectangle.

Reminder - set the style first then draw.
********************************************/

//Draw Rectangle here
 myCanvas = document.getElementById("Canvas2");
 if (myCanvas && myCanvas.getContext) {
 ctx = myCanvas.getContext("2d");
		if (ctx) {
		ctx.save();
		ctx.fillStyle= "#4099ff";
		ctx.fillRect(0,0, 50, 100);
		
		ctx.strokeStyle = "black";
		ctx.strokeRect(0,0, 50, 100)
		}
 }

/*******************************************
PART 2

Draw a circle starting at point (50 ,50)
That has a radius of 20 px 
Set the color of the circle to a shade of red and set the alpha to .5
Set the stroke color to black and use a radius of 30px for this circle.

Reminder - set the style first then draw.
Use the arc method
********************************************/


//Draw Circle here

 myCanvas = document.getElementById("Canvas3");
 if (myCanvas && myCanvas.getContext) {
	ctx = myCanvas.getContext("2d");
		if (ctx) {
		ctx.save();
		ctx.beginPath();
		ctx.arc(50,50,20,0,2*Math.PI);
	 	ctx.fillStyle = 'rgba(215, 44, 44, 0.5)';
      	ctx.fill();
      	ctx.lineWidth = 30;	
      	ctx.strokeStyle = '#000';
      	ctx.stroke();
		}
 }


/*******************************************
PART 3

Practice using Path drawing.
Create a 5-point star shaped pattern using the lineTo method.
Begin this shape at (100, 100)

Height and width and color are up to you.

********************************************/


//Draw Star here


 myCanvas = document.getElementById("Canvas4");
 if (myCanvas && myCanvas.getContext) {
	ctx = myCanvas.getContext("2d");
		if (ctx) {
		ctx.save();
		
		ctx.lineWidth = 5;
		ctx.fillStyle= "#FFB6C1";
		ctx.beginPath();
		ctx.moveTo(100, 0.0);
		ctx.lineTo(130, 39);
		ctx.lineTo(170, 40);
		ctx.lineTo(150, 80);
		ctx.lineTo(165, 150);
		ctx.lineTo(100, 120);
		ctx.lineTo(40, 150);
		ctx.lineTo(60, 100);
		ctx.lineTo(25, 50);
		ctx.lineTo(70, 40);
		ctx.lineTo(100, 0.0);
		ctx.closePath();
		ctx.stroke();
		ctx.fill();
		}
 }

/*******************************************
PART 4

Practice drawing with Bezier curves.
Try drawing the top to an umbrella.
This should have one large arc (a half circle) on the top and scalloped edges on the bottom.

Position, height, width and color are your choice.
Do not overlap any other object.

********************************************/

//Draw Umbrella top here

 myCanvas = document.getElementById("Canvas5");
 if (myCanvas && myCanvas.getContext) {
 ctx = myCanvas.getContext("2d");
		if(ctx) {
		ctx.save();
		ctx.lineWidth = 4;
		
      ctx.strokeStyle = 'orange';
     
	 ctx.beginPath();
     ctx.moveTo(20, 80);
	ctx.bezierCurveTo(20, -2, 100, -2, 100,10);
	//ctx.stroke();
	ctx.moveTo(100, 10);
      ctx.bezierCurveTo(100, -2, 180, -2, 180,10);
	//ctx.stroke();
	ctx.moveTo(180, 10);
      ctx.bezierCurveTo(180, -2, 260, -2, 260,80);
	 
	ctx.stroke();
		}
 }

/*******************************************
PART 5

Practice using text.
Draw text into your canvas.  It can said whatever you would like in any color.

********************************************/

//Draw text here
myCanvas = document.getElementById("Canvas6");
if (myCanvas && myCanvas.getContext) {
	 ctx = myCanvas.getContext("2d");
		if (ctx) {
		ctx.save();
		var myString = "This assigment is tougher than I thought, but I like pink!";
			
		ctx.font = "16pt Verdana";
		ctx.fillStyle = "#ff69b4";
		ctx.fillText(myString, 0, 150);	
		}
}
/*******************************************
PART 6

Pixel manipulation.
Draw the image logo.png into the canvas in the following 3 ways.
1. The image exactly as it is.
2. Shrink the image by 50%
3. Slice a section of the logo out and draw that onto the canvas.

Reminder to use the drawImage method for all 3 of the ways.

********************************************/

//Draw images here

myCanvas = document.getElementById("Canvas7");
if (myCanvas && myCanvas.getContext) {
	 ctx = myCanvas.getContext("2d");
		if (ctx) {
		var srcimg = document.getElementById("img1");
		
		//original
		ctx.drawImage(srcimg, 0, 0);
		
		//scaled down
		ctx.drawImage(srcimg, 0, 80, 330, 110);
		
		
		// slice
		ctx.drawImage(srcimg, 400, 600, 300, 200, 400, 0, 200, 100);
		}
}
/*******************************************
PART 7

Putting it all together. 

Using a combination of all the methods. 
Create a complex scene.
You must use at least 3 different methods.

********************************************/

// Draw scene here
myCanvas = document.getElementById("Canvas8");
if (myCanvas && myCanvas.getContext) {
	 ctx = myCanvas.getContext("2d");
		if (ctx) {
		var srcimg = document.getElementById("img1");
		//scaled down
		ctx.drawImage(srcimg, 0, 200, 330, 110);
		
		var myString = "Is Interesting!";
			
		ctx.font = "22pt Verdana";
		ctx.fillStyle = "#cc0000";
		ctx.fillText(myString, 350, 275);	
		ctx.beginPath();
		ctx.arc(400, 200, 30, 0, 2 * Math.PI, false);
		ctx.fillStyle = '#cc0000';
		ctx.fill();
		ctx.lineWidth = 8;
		ctx.strokeStyle = '#003366';
      	ctx.stroke();
		}
}

}

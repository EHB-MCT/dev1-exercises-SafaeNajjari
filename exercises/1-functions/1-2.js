"use stricts";

let canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let context = canvas.getContext("2d");

drawLine();

function drawLine() {
    // mothode longue
	// red cross
	context.lineWidth = 5;
	context.strokeStyle = "red";
	context.beginPath();
	context.moveTo(50, 50);
	context.lineTo(150, 150);
	context.stroke();

	context.lineWidth = 5;
	context.strokeStyle = "red";
	context.beginPath();
	context.moveTo(50, 150);
	context.lineTo(150, 50);
	context.stroke();
	//  black square
	context.lineWidth = 5;
	context.strokeStyle = "#000";
	context.beginPath();
	context.moveTo(50, 150);
	context.lineTo(150, 150);
	context.stroke();
	context.lineWidth = 5;
	context.strokeStyle = "#000";
	context.beginPath();
	context.moveTo(150, 50);
	context.lineTo(150, 150);
	context.stroke();

	context.lineWidth = 5;
	context.strokeStyle = "#000";
	context.beginPath();
	context.moveTo(50, 150);
	context.lineTo(150, 150);
	context.stroke();
	context.lineWidth = 5;
	context.strokeStyle = "#000";
	context.beginPath();
	context.moveTo(50, 50);
	context.lineTo(150, 50);
	context.stroke();

	context.lineWidth = 5;
	context.strokeStyle = "#000";
	context.beginPath();
	context.moveTo(50, 150);
	context.lineTo(150, 150);
	context.stroke();
	context.lineWidth = 5;
	context.strokeStyle = "#000";
	context.beginPath();
	context.moveTo(50, 50);
	context.lineTo(50, 150);
	context.stroke();

    //methode courte
	//draw cross
	context.lineWidth = 5;
	context.strokeStyle = "red";
	context.beginPath();
	context.moveTo(350, 50);
	context.lineTo(200, 200);
	context.moveTo(200, 50);
	context.lineTo(350, 200);
	context.stroke();

	//draw square
	context.strokeStyle = "black";
	context.beginPath();
	context.moveTo(350, 200);
	context.lineTo(200, 200);
	context.lineTo(200, 50);
	context.lineTo(350, 50);
	context.lineTo(350, 200);
	context.stroke();
}

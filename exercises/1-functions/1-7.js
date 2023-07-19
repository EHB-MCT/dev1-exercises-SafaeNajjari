"use strict";

drawStarryNight();

function drawStarryNight() {
	//get canvas context
	let canvas = document.querySelector("canvas");
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;
	let context = canvas.getContext("2d");

	context.lineWidth = 10;

	//Star shape
	context.fillStyle = "orange";
	context.beginPath();
	//cote gauche en haut
	context.arc(50, 50, 200, 0, Math.PI / 2);
	//cote gauche en bas
	context.arc(50, 450, 200, (Math.PI * 2 * 3) / 4, 0);
	//cote droit en bas
	context.arc(450, 450, 200, Math.PI, (Math.PI * 2 * 3) / 4);
	// cote droit en haut
	context.arc(450, 50, 200, Math.PI / 2, Math.PI);
	context.fill();
}

"use strict";

drawRect();

function drawRect() {
	let canvas = document.querySelector("canvas");
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;
	let context = canvas.getContext("2d");

	context.fillStyle = "orange";
	context.fillRect(50, 50, 300, 300);
	//sun
	context.beginPath();
	context.fillStyle = "Yellow";
	context.arc(200, 250, 100, 0, Math.PI, true);
	context.fill();
	//ocean
	context.fillStyle = "blue";
	context.fillRect(50, 250, 300, 100);
}

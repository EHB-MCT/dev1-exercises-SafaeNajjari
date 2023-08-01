"use strict";

drawLine();

function drawLine(){
    let canvas = document.querySelector("canvas");
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;
	let context = canvas.getContext("2d");

 //variabel qui fait en sorte que le margin change, quand tu la change toutes les ligne de code ou ons a etuliser cette variable changeront automatiquement.
let margin = 40 ; 
context.strokeStyle = "red";
let width = context.canvas.width;


    context.lineWidth = 5;
	context.strokeStyle = "black";
	context.beginPath();
	context.moveTo(0 + margin, 0);
	context.lineTo(canvas.width -margin, 0);
    context.lineTo(0+ margin,100);
    context.lineTo(canvas.width - margin, 100);

    context.moveTo(0 + margin, 100);
	context.lineTo(canvas.width -margin, 100);
    context.lineTo(0+ margin,200);
    context.lineTo(canvas.width - margin, 200);

    context.moveTo(0 + margin, 200);
	context.lineTo(canvas.width -margin, 200);
    context.lineTo(0+ margin,300);
    context.lineTo(canvas.width - margin, 300);

    context.moveTo(0 + margin, 300);
	context.lineTo(canvas.width -margin, 300);
    context.lineTo(0+ margin,400);
    context.lineTo(canvas.width - margin, 400);
    
    context.moveTo(0 + margin, 400);
	context.lineTo(canvas.width -margin, 400);
    context.lineTo(0+ margin,500);
    context.lineTo(canvas.width - margin, 500);
    
    context.moveTo(0 + margin, 500);
	context.lineTo(canvas.width -margin, 500);
    context.lineTo(0+ margin,600);
    context.lineTo(canvas.width - margin, 600);

    context.moveTo(0 + margin, 0);
	context.lineTo(canvas.width -margin, 600);
    
	context.stroke();
}

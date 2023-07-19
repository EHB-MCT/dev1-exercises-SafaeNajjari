"use strict";

drawRectangles();

function drawRectangles() {
    
    let canvas = document.querySelector("canvas");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    let context = canvas.getContext("2d");

    //avec context.stokeStyle tu dessin que les ligne
    //red squares
    context.strokeStyle = "red";
    context.strokeRect(50, 50, 150, 150);
    context.strokeRect(200, 200, 150, 150);
    context.strokeRect(75, 275, 50, 50);
    context.strokeRect(275, 75, 50, 50);

    //black squares
    context.fillRect(50, 325, 25, 25);
    context.fillRect(325, 50, 25, 25);

    //big square
    context.beginPath();
    context.rect(125, 125, 150, 150);
    context.fill();
    context.stroke();
}
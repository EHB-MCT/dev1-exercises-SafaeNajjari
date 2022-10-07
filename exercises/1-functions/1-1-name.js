"use stricts"; 

let canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
 canvas.height = window.innerHeight;
let context = canvas.getContext("2d");

drawLine();

function drawLine(){
  //  
    context.lineWidth = 5;
   context.strokeStyle = 'purple';
   context.beginPath();
   context.moveTo(30, 27);
   context.lineTo(43,300);
   context.stroke();

   context.lineWidth = 5;
   context.strokeStyle = 'purple';
   context.beginPath();
   context.moveTo(200, 30);
   context.lineTo(30, 30);
   context.stroke();
//
   context.lineWidth = 5;
   context.strokeStyle = 'purple';
   context.beginPath();
   context.moveTo(200, 300);
   context.lineTo(41, 300);
   context.stroke(); 
//
   context.lineWidth = 5;
   context.strokeStyle = 'purple';
   context.beginPath();
   context.moveTo(200, 299);
   context.lineTo(200, 500);
   context.stroke(); 
//
   context.lineWidth = 5;
   context.strokeStyle = 'purple';
   context.beginPath();
   context.moveTo(40, 470);
   context.lineTo(200,500);
   context.stroke();
// 
context.lineWidth = 5;
context.strokeStyle = 'YELLOW';
context.beginPath();
context.moveTo(300, 27);
context.lineTo(300,500);
context.stroke();
//
context.lineWidth = 5;
context.strokeStyle = 'YELLOW';
context.beginPath();
context.moveTo(300, 27);
context.lineTo(500,500);
context.stroke();
//
context.lineWidth = 5;
context.strokeStyle = 'YELLOW';
context.beginPath();
context.moveTo(150, 127);
context.lineTo(500,300);
context.stroke();

context.lineWidth = 5;
context.strokeStyle = 'green';
context.beginPath();
context.moveTo(500, 50);
context.lineTo(700,50);
context.stroke();

context.lineWidth = 5;
   context.strokeStyle = 'green';
   context.beginPath();
   context.moveTo(500, 50);
   context.lineTo(530, 500);
   context.stroke();

   context.lineWidth = 5;
context.strokeStyle = 'green';
context.beginPath();
context.moveTo(518, 250);
context.lineTo(700,250);
context.stroke();



}


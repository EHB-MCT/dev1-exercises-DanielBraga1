"use strict";
let canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let context = canvas.getContext('2d');

drawbox();

function drawbox() {
    context.beginPath();
   context.moveTo(150, 50);
    context.lineTo(150, 150);
    context.lineTo(250, 150);
    context.lineTo(250, 50);
    context.lineTo(150, 50);
    context.stroke();

}


context.beginPath();{
   context.moveTo(150, 50);
    context.lineTo(250, 150);
    context.strokeStyle = 'red';
    context.moveTo(150, 150);
    context.lineTo(250, 50);


    context.stroke();

}

   
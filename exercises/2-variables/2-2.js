"use strict";

let canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerWidth;
let context = canvas.getContext("2d");


drawRect(0,0,700,700);
drawRect(50,50,600,600);
drawRect(100,100,500,500);
drawRect(150,150,400,400);
drawRect(200,200,300,300);
drawRect(250,250,200,200);
drawRect(300,300,100,100);

function drawRect(x,y,size) {
context.beginPath();
let red = Math.floor (Math.random() *255)
let blue = Math.floor (Math.random() *255)
let green = Math.floor (Math.random() *255)
let color = "rgb(" + red + "," + blue + "," + green + ")"

context.moveTo(50,50);
context.fillStyle = color;
context.rect(x,y,size,size);
context.stroke();
context.fill();
}
"use strict";

let canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerWidth;
let context = canvas.getContext("2d");

let width = context.canvas.width;
let height = context.canvas.height;

let margin = 50

drawfigure();

function drawsides();{

context.beginPath();
context.fillStyle = "#2c3e50";
context.rect(0,0, width * 1/3, height);
context.rect(width* 2/3,0,width * 1/3, height);
context.stroke();
context.fill();
}

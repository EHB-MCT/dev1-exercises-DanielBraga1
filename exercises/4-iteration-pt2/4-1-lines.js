"use strict"
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

let height = 300;
let width = 600;

let verticalLines = 30;
let horizontalLines = 60;

drawLines();

function drawLines() {
    context.fillStyle = 'orange';
    context.fillRect(0, 0, width, height);

    let step = width / horizontalLines;

    for (let i = 0; i < horizontalLines; i++) {
        context.strokeStyle = 'white';
        context.lineWidth = '2';
        Utils.drawLine(step * i, 0, width - (step * i), height);
    }

    for (let i = 0; i < verticalLines; i++) {
        Utils.drawLine(0, step * i, width, height - (step * i));
    }

}
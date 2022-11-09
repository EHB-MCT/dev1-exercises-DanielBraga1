"use strict";

import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

let width = context.canvas.width;
let height = context.canvas.height;

drawBackground();

drawMaze();

function drawBackground() {
	Utils.drawBackground(0, 0, width, height);
}

function drawMaze() {
	context.lineWidth = 5;

	context.lineCap = "square";

	for (let j = 0; j < 200; j++) {
		for (let i = 0; i < 200; i++) {
			context.strokeStyle = Utils.rgb(Math.random() * 255, Math.random() * 255, Math.random() * 255);

			if (Math.round(Math.random()) == 1) {
				Utils.drawLine(0 + 10 * i, 0 + j * 10, 10 + 10 * i, 10 + j * 10);
			} else {
				Utils.drawLine(10 + 10 * i, 0 + j * 10, 0 + 10 * i, 10 + j * 10);
			}
		}
	}
}

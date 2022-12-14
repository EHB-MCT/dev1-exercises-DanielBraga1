"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

let width = context.canvas.width;
let height = context.canvas.height;

drawBackground();
strokeBubbles();

function drawBackground() {
	Utils.drawBackground(0, 0, width, height);
}
function strokeBubbles() {
	for (let i = 0; i <= 90; i++) {
		let x = 200 + math.random() * (width - 400);
		let y = 200 + math.random() * (height - 400);
		let radius = Math.random() * 60;
		Utils.strokeBubbles(x, y, radius);
	}
}

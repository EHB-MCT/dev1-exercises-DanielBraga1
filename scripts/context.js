"use strict";

/**
 *  @type {CanvasRenderingContext2D}
 */

let context;

setupContext();

export default context;

function setupContext() {
    let canvas = document.querySelector("canvas");
    canvas.width = window.innerWidth;
    canvas.height = window.innerWidth;
    context = canvas.getContext("2d");

}
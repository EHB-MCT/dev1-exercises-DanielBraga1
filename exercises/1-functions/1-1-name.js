"use strict";
let canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let context = canvas.getContext('2d');

drawName();

function drawName() {
    context.beginPath();
    context.strokeStyle = 'red';
    context.moveTo(100, 500);
    context.lineTo(100, 300);
    context.lineTo(150, 410);
    context.lineTo(100, 500);
    context.stroke();
}

    context.beginPath(); {
    context.strokeStyle = 'green';
    context.moveTo(175, 500);
    context.lineTo(175, 300);
    context.lineTo(250, 300);
    context.lineTo(250, 400);
    context.lineTo(175, 400);
    context.lineTo(250, 400);
    context.lineTo(250, 500);
    context.stroke();
    }

    context.beginPath(); {
        context.strokeStyle = 'green';
        context.moveTo(300, 500);
        context.lineTo(300, 300);
        context.lineTo(370, 500);
        context.lineTo(370, 300);
        context.stroke();
    }

    context.beginPath(); {
        context.strokeStyle = 'red';
        context.moveTo(400, 500);
        context.lineTo(400, 300);

        context.stroke();
    }

    context.beginPath(); {
        context.strokeStyle = 'green';
        context.moveTo(500, 500);
        context.lineTo(450, 500);
        context.lineTo(450, 400);
        context.lineTo(500, 400);
        context.lineTo(450, 400);
        context.lineTo(450, 300);
        context.lineTo(500, 300);
        context.stroke();
    }
    context.beginPath(); {
        context.strokeStyle = 'red';
        context.moveTo(550, 300);
        context.lineTo(550, 500);
        context.lineTo(600, 500);


        context.stroke();

}
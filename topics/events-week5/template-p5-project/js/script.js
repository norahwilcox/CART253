/**
 * Events in Plain Java Script
 * Norah Wilcox
 * 
 * Experimenting with event handling
 */

"use strict";

// Info about the possible background fills
const bg = {
    fill: "#000000",
    fills: {
        black: "000000",
        white: "#ffffff"
    }
}

/**
 * Creates the canvas
*/
function setup() {
    createCanvas(400, 400);

    window.addEventListener("keydown", changeBG);
}

/**
 * Displays the background
*/
function draw() {
    background(bg.fill);
}

function changeBG(event) {
    if (event.keyCode === bg.switchKey) {}
    if (bg.fill === bg.fills.black) {
        bg.fill = bg.fills.white;
    }
    else {
        bg.fill = bg.fills.black;
    }
}

function keyPressed() {

}


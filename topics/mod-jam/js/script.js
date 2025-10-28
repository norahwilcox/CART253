/**
 * Mod Jam
 * Norah Wilcox
 * 
 * 
 */

"use strict";

let file;
let pond;
let frogMouthClosed;
let frogMouthOpen;

let yom;

let x = 425; //constrain(mouseX, 113, 687);
let y = 248; //constrain(mouseY, 93, 507);
let targetX = 425;
let targetY = 248;

const tongue = {
    x: 425,
    y: 248,
    size: 8,
};

// Preloads the backdrop and frog 
function preload() {
    file = loadImage('/assets/images/frog-file-background.png');
    pond = loadImage('/assets/images/frog-pond-setting.png');
    frogMouthClosed = loadImage('/assets/images/frog-mouth-closed.png');
    frogMouthOpen = loadImage('/assets/images/frog-mouth-open.png');
    yom = new Audio("./assets/sounds/yom.wav");
};

// Creates the canvas
function setup() {
    createCanvas(800, 600);
}

// Draws the backdrop and frog, creates the frog open and closed mouth animation with mouse click
function draw() {
    background(255);
    image(file, 0, 0, 800, 600);
    image(pond, 0, 0, 800, 600);
    image(frogMouthClosed, -45, -20, 850, 650);
    if (mouseIsPressed) {
        image(frogMouthOpen, -45, -20, 850, 650);
        yom.play();
        drawTongue();
        moveTongue();
    }
};

function moveTongue() {
    x = lerp(x, targetX, 0.08);
    y = lerp(y, targetY, 0.08);
};

function mouseClicked() {
    x = mouseX
    y = mouseY
}

// Draws the tongue's tip and shape
function drawTongue() {
    // Draws the tongue tip
    push();
    fill("#94502b");
    noStroke();
    ellipse(x, y, tongue.size);
    pop();

    // Draws the rest of the tongue
    push();
    stroke("#94502b");
    strokeWeight(tongue.size);
    line(x, y, tongue.x, tongue.y);
    pop();
}
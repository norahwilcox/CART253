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
let counter;

let fly 
let flyPosX = 150;
let flyPosY = 150;
let flySizeX = 0;
let flySizeY = 0;

let yom;
let miss;

let x = 425; //constrain(mouseX, 113, 687);
let y = 248; //constrain(mouseY, 93, 507);
let targetX = 425;
let targetY = 248;

const tongue = {
    x: 440,
    y: 280,
    size: 8,
};

// Preloads the backdrop and frog 
function preload() {
    file = loadImage('/assets/images/frog-file-background.png');
    pond = loadImage('/assets/images/frog-pond-setting.png');
    frogMouthClosed = loadImage('/assets/images/frog-mouth-closed.png');
    frogMouthOpen = loadImage('/assets/images/frog-mouth-open.png');
    fly = loadImage('/assets/images/frog-fly.png');
    counter = loadImage('/assets/images/frog-counter.png');
    yom = new Audio("./assets/sounds/yom.wav");
    miss = new Audio("./assets/sounds/miss.wav");
};

// Creates the canvas
function setup() {
    createCanvas(800, 700);
}

// Draws the backdrop and frog, animates the frog eating with mouse click and moves the tongue
function draw() {
    background(255);

    image(pond, 0, 0, 0, 0);
    image(frogMouthClosed, 0, 0, 0, 0);

    createFly();
    animateFrog();
    checkFlyOverlap();

    image(file, 0, 0, 0, 0);
    createCounter();
    debug();
};

function createCounter() {
    push();
    noStroke();
    fill(161, 190, 96);
    rect(690, 580, 40, 20);
    pop();
    image(counter, 0, 0, 0, 0);
};

// Creates frog animation and sound when mouse is pressed
function animateFrog() {
    image(frogMouthClosed, 0, 0, 0, 0);
    if (mouseIsPressed) {
        image(frogMouthOpen, 0, 0, 0, 0);
        miss.play();
        drawTongue();
        moveTongue();
    }
};

// Draws and sets the fly's position
function createFly() {
    image(fly, flyPosX, flyPosY, flySizeX, flySizeY);
    // Resests the fly when it flies off canvas
    if (flyPosX > 700 || flyPosY > 650) {
        flyPosX = 150
        flyPosY = 150
    }
    // Creates flying animation!
    else {
        flyPosX += 3
        flyPosY += random(2.8, -3)
    }
};


function checkFlyOverlap() {
// Get distance from tongue to fly
    const d = dist(tongue.x, tongue.y, flyPosX, flyPosY);
    // Check if it's an overlap
    if (d < tongue.size + flySizeX + flySizeY) {
        // Success! Resets the fly and plays gom sound
        flyPosX = 150
        flyPosY = 150
        yom.play();
    }
};

// Gives the tongue delayed movement towards the target area
function moveTongue() {
    x = lerp(x, targetX, 0.08);
    y = lerp(y, targetY, 0.08);
};

// Sets x and y when the user clicks the mouse 
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

function debug() {
    console.log();
}
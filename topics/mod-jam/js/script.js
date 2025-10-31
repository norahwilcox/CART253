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
let flyX = 150;
let flyY = 150;
let flyW = 65;
let flyH = 65;

let yom;
let miss;
let success;
let music;

let playing = false;
let ended = false;

let x = 425; 
let y = 248; 
let targetX = 425;
let targetY = 248;

const risingCounter = {
    x: 690,
    y: 600,
    w: 40,
    h: -20,
};

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
    success = new Audio("./assets/sounds/success.wav");
    music = new Audio ("./assets/sounds/music.wav");
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
    endingSuccess();
    debug();
};

function createCounter() {
    push();
    noStroke();
    fill(161, 190, 96);
    rect(risingCounter.x, risingCounter.y, risingCounter.w, risingCounter.h);
    pop();
    image(counter, 0, 0, 0, 0);
    if (risingCounter.h <= -500) {
        risingCounter.h = -500
        music.pause();
        success.play();
        success.onended(handleEnd);
        flyX = 50
        flyY = 150
    } 
    else {
        music.play();
    }
};

function endingSuccess() {
    if (playing === false) {
        playing = true;
        success.play();
    }
};

function handleEnd() {
    ended = false;
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
    image(fly, flyX, flyY, flyW, flyH);
    // Resests the fly when it flies off canvas
    if (flyX > 700 || flyY > 650) {
        flyX = 150
        flyY = 150
    }
    // Creates flying animation!
    else {
        flyX += 3
        flyY += random(2.8, -3)
    }
};


function checkFlyOverlap() {
// Get distance from tongue to fly
    const d = dist(tongue.x, tongue.y, flyX, flyY);
    // Check if it's an overlap
    if (d < tongue.size + flyW + flyH) {
        // Success! Resets the fly and plays gom sound
        flyX = 150
        flyY = 150
        yom.play();
        risingCounter.h -= 40
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
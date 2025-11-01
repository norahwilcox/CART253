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
let timer;

const fly = {
    x: 150,
    y: 150,
    size: 10,
};

let yom;
let miss;
let success;
let music;
let failure;

let x = 425; 
let y = 248; 
let targetX = 425;
let targetY = 248;

const fillTimer = {
    x: 75,
    y: 600,
    w: 40,
    h: -500,
};

const risingCounter = {
    x: 690,
    y: 600,
    w: 40,
    h: -2,
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
    counter = loadImage('/assets/images/frog-counter.png');
    timer = loadImage('/assets/images/frog-timer.png');
    
    yom = new Audio("./assets/sounds/yom.wav");
    miss = new Audio("./assets/sounds/miss.wav");
    success = new Audio("./assets/sounds/success.wav");
    music = new Audio("./assets/sounds/music.wav");
    failure = new Audio ("./assets/sounds/failure.wav");
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
    createTimer();
    debug();
};

function createTimer() {
    push();
    noStroke();
    fill(161, 190, 96);
    rect(fillTimer.x, fillTimer.y, fillTimer.w, fillTimer.h);
    pop();
    image(timer, 0, 0, 0, 0);
    if (fillTimer.h >= 0) {
        fillTimer.h = -500
        music.pause();
        failure.play();
        fly.x = 50
        fly.y = 150
    } 
    else if (risingCounter.h <= -500){
        fillTimer.h = -500
    }
    else {
        fillTimer.h  += 0.2
        music.play();
    }
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
        fly.x = 50
        fly.y = 150
        music.pause();
    } 
    else if (risingCounter.h < -500) {
        success.play();
    }
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
    push();
    noStroke();
    fill(0);
    rect(fly.x, fly.y, fly.size, fly.size);
    pop();
    // Resests the fly when it flies off canvas
    if (fly.x > 700 || fly.y > 650) {
        fly.x = 150
        fly.y = 150
    }
    // Creates flying animation!
    else {
        fly.x += 3
        fly.y += random(3, -3)
    }
};


function checkFlyOverlap() {
// Get distance from tongue to fly
    const d = dist(x, y, fly.x, fly.y);
    // Check if it's an overlap
    if (d < tongue.size / 2 + fly.size / 2) {
        // Success! Resets the fly and plays gom sound
        fly.x = 150
        fly.y = 150
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
    console.log(x);
}
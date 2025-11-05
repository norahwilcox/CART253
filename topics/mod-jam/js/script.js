/**
 * Mod Jam: "You Look Fly!"
 * Norah Wilcox
 * 
 * A game about catching flies as a little frog on a rock!
 * 
 * Use mouse-clicks to try and catch the flies and fill the counter on the right 
 * before the timer on the left runs out. 
 */

"use strict";

// Creates variable for which screen will display to players
var whichscreen = "start"

// Delares imported images of the backdrop, frog and counters
let file;
let pond;
let frogMouthClosed;
let frogMouthOpen;
let counter;
let timer;

// Declares imported images of the start, success and failure screens 
let title1;
let title2;
let title3;

// Declares all sound effects 
let yom;
let miss;
let success;
let music;
let failure;

// Creates reference values for the fly
const fly = {
    x: 150,
    y: 150,
    size: 8,
};

// Creates reference values for the frog's tounge
const tongue = {
    x: 440,
    y: 280,
    size: 8,
};

// Declares the return point for the frog's tounge
let x = 425; 
let y = 248; 
let targetX = 425;
let targetY = 248;

// Creates reference values for the shrinking timer
const fillTimer = {
    x: 75,
    y: 600,
    w: 40,
    h: -500,
};

// Creates reference values for the rising counter
const risingCounter = {
    x: 690,
    y: 600,
    w: 40,
    h: -2,
};

/** 
 * Preloads all image and sound assets before frame 1
 */
function preload() {
    // loads all image assets 
    file = loadImage('./assets/images/frog-file-background.png');
    pond = loadImage('./assets/images/frog-pond-setting.png');
    frogMouthClosed = loadImage('./assets/images/frog-mouth-closed.png');
    frogMouthOpen = loadImage('./assets/images/frog-mouth-open.png');
    counter = loadImage('./assets/images/frog-counter.png');
    timer = loadImage('./assets/images/frog-timer.png');

    title1 = loadImage('./assets/images/title-1.png');
    title2 = loadImage('./assets/images/title-2.png');
    title3 = loadImage('./assets/images/title-3.png');
    
    // loads all audio assets 
    yom = new Audio("./assets/sounds/yom.wav");
    miss = new Audio("./assets/sounds/miss.wav");
    music = new Audio("./assets/sounds/music.wav");
};

/** 
 * Creates the canvas
 */ 
function setup() {
    createCanvas(800, 700);
};

/** 
 * Draws each screen seen by the player
 */
function draw() {
    // When the page loads, the start screen appears
    if (whichscreen === "start") {
        startScreen()
    }
    // When the player clicks the mouse, the game screen appears
    else if (whichscreen === "game") {
        gameScreen()
    }
    // When the player wins the game, the success screen appears
    else if (whichscreen === "success") {
        successScreen()
    }
    // When the player loses the game, the failure screen appears
    else {
        failureScreen()
    }
};

/** 
 * Draws/ Assembles the start screen
 */ 
function startScreen() {
    background(255);
    // Draws the start screen image 
    image(title1, 160, 100, 0, 0);

    // If the mouse is pressed, the game screen is called and the music begins to play
    if (mouseIsPressed) {
        whichscreen = "game"
        music.play();
    }

    // Draws the file background 
    image(file, 0, 0, 0, 0);
};

/** 
 * Draws/ Assembles the game screen
 */
function gameScreen() {
    background(255);

    // Draws the pond image 
    image(pond, 160, 100, 0, 0);
    
    // Draws the fly and frog and checks when the tongue overlaps with the fly
    createFly();
    animateFrog();
    checkFlyOverlap();

    // If the player fills the counter before the timer runs out, they win!
    if (risingCounter.h <= -500) {
        whichscreen = "success"
    }
    // If the player's timer runs out before the counter is full, they lose
    else if (fillTimer.h >= 1) {
        whichscreen = "failure"
    }
  
    // Draws the file background in front of the game elements to keep them contained
    image(file, 0, 0, 0, 0);

    // Draws the counter and timer in front of the file image
    createCounter();
    createTimer();
};

/** 
 * Draws/ Assembles the success screen
 */
function successScreen() {
    // Draws the success screen image 
    image(title2, 160, 100, 0, 0);
   
    // Pauses the music when the player wins
    music.pause();

    // Draws the file background 
    image(file, 0, 0, 0, 0);
};

/** 
 * Draws/ Assembles the failure screen 
 */
function failureScreen() {
    // Draws the failure screen image 
    image(title3, 160, 100, 0, 0);

    // Pauses the music when the player fails 
    music.pause();

    // Draws the file background 
    image(file, 0, 0, 0, 0);
}; 

/**
 * Draws the timer image and animation
 */
function createTimer() {
    push();
    noStroke();
    fill(247, 178, 163);
    // Draws a rectangle to go inside the timer image which starts filled
    rect(fillTimer.x, fillTimer.y, fillTimer.w, fillTimer.h);
    // The rectangle's height is consistenly lowered to represent shortening time
    fillTimer.h += 0.2
    pop();

    // Draws the timer image over the timer rectangle 
    image(timer, 63, 80, 0, 0);
};

/**
 * Draws the counter image and animation
 */
function createCounter() {
    push();
    noStroke();
    fill(161, 190, 96);
    // Creates a rectangle to go inside the counter image which starts empty
    // The rectangle's height increases when the player catches a fly
    rect(risingCounter.x, risingCounter.y, risingCounter.w, risingCounter.h);
    pop();

    // Draws the counter image over the counter rectangle 
    image(counter, 675, 80, 0, 0);
};

/**
 * Creates the frog + tongue animation and sound when mouse is pressed
 */
function animateFrog() {
    // Draws the frog's closed mouth frame underneath 
    image(frogMouthClosed, 410, 261, 0, 0);

    // Only when the mouse is clicked...
    if (mouseIsPressed) {
        // the frog's open mouth frame is drawn,
        image(frogMouthOpen, 410, 253, 0, 0);
        // the miss sound effect is played 
        miss.play();
        // and the tongue and the tounge's animation is drawn
        drawTongue();
        moveTongue();
    }
};

/**
 * Creates and sets the fly's position
 */
function createFly() {
    push();
    noStroke();
    fill(0);
    // Draws the fly's inicial poition and size
    rect(fly.x, fly.y, fly.size, fly.size);
    pop();

    // Resests the fly when it goes off the canvas
    if (fly.x > 700 || fly.y > 650) {
        fly.x = 150
        fly.y = 150
    }
    // Creates the flying animation!
    else {
        fly.x += 3
        fly.y += random(4, -4)
    }
};

/**
 * Checks if the fly is caught by the tongue and raises the counter 
 */
function checkFlyOverlap() {
    // Get distance from tongue to fly
    const d = dist(x, y, fly.x, fly.y);

    // Check if it's an overlap
    if (d < tongue.size / 2 + fly.size / 2) {
        // Success! Resets the fly and plays yom sound
        fly.x = 150
        fly.y = 150
        yom.play();
        risingCounter.h -= 40
    }
};

/**
 * Gives tongue delayed movement towards the target area
 */
function moveTongue() {
    // Moves x and y toward the target
    x = lerp(x, targetX, 0.1);
    y = lerp(y, targetY, 0.1);
};

/**
 * Sets x and y when the user clicks the mouse 
 */
function mouseClicked() {
    x = mouseX
    y = mouseY
};

/**
 *  Draws the tongue
 */ 
function drawTongue() {
    // Draws the tongue's tip
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
};

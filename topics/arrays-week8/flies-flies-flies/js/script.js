/**
 * Flies flies flies!
 * Norah Wilcox
 * 
 * A project 
 */

"use strict";

// Our array of flies (specifically "fly data" really)
// Each fly has a position and a size
let flies = [
    {
        x: 100,
        y: 125,
        size: 10,
        buzziness: 2
    },
    {
        x: 160,
        y: 170,
        size: 14,
        buzziness: 4
    },
    {
        x: 180,
        y: 50,
        size: 5,
        buzziness: 6
    }
];

/**
 * Creates the canvas
 */
function setup() {
    createCanvas(300, 300);
}

/**
 * Returns a random fly
 */
function createFly() {
    // Generate random fly
    let fly = {
        x: random(0, width),
        y: random(0, height),
        size: random(2, 10),
        buzziness: random(2, 8)
    }
    return fly;
}

/**
 * Moves and displays the flies
 */
function draw() {
    background("#87ceeb");

    // Go through all the flies
    for (let fly of flies) {
        moveFly(fly);
        drawFly(fly);
    }
}

/**
 * Moves the fly by changing its position randomly
 * according to its buzziness
 */
function moveFly(fly) {
    fly.x += random(-fly.buzziness, fly.buzziness);
    fly.y += random(-fly.buzziness, fly.buzziness);
}

/**
 * Draws the fly parameter to canvas
 */
function drawFly(fly) {
    push();
    noStroke();
    fill(0);
    ellipse(fly.x, fly.y, fly.size);
    pop();
}

/**
 * Adds a random fly on a key pressed
 */
function keyPressed() {
    // Add a new fly to the flies array
    const newFly = createFly();
    flies.push(newFly);
}

/**
 * Remove a fly from the array if clicked
 */
function mousePressed() {
    // Check all the flies 
    for (let fly of flies) {
        // Checks if the mouse is touching
        const d = dist(mouseX, mouseY, fly.x, fly.y);
        if (d < fly.size / 2) {
            // This fly was clixked
            // Get the index of this fly
            const index = flies.indexOf(fly);
            // Splice it out of the array, no longer in the array
            flies.splice(index, 1);
        }
    }
}
/**
 * Introducing Events 
 * Noarh Wilcox
 */

"use strict";

/**
 * OH LOOK I DIDN'T DESCRIBE SETUP!!
*/
function setup() {
    createCanvas(400, 400);
    background(0);
}


/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {

}

// Draws a circle at the mouse location
function mousePressed() {
    push();
    noStroke();
    fill(255, 255, 0);
    ellipse(mouseX, mouseY, 50);
    pop();
}
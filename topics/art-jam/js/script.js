/**
 * Art Jam
 * Norah Wilcox
 * 
 * Creates a self-portrait with shapes
 */

"use strict";

/**
 * Creates the canvas 
*/
function setup() {
    createCanvas(640, 720);
}

/**
 * Draws the character and background
*/
function draw() {
    // Draws the background
    background(150, 200, 250);
    // Draws the character
    drawHead();
    drawEyes();

    // Rotates the eye
   
}

/**
 * Draws the head, neck and ears. 
 */
function drawHead() {
    push();
    noStroke();
    fill(255, 211, 5);
    // Draws the head
    ellipse(370, 290, 150, 140);
    triangle(160, 350, 335, 225, 370, 365);
    // Draws the ears
    triangle(310, 245, 340, 100, 370, 235);
    triangle(370, 250, 405, 100, 440, 265);
    // Draws the neck 
    rect(370, 350, 30, 60);
    pop();
}

/**
 * Draws the eyes
 */
function drawEyes() {
    // Draws the eye white
    push();
    translate(365, 300);
    angleMode(DEGREES);
    let angleToMouse = atan2(mouseY - height / 2, mouseX - width / 2);
    translate(width / 2, height / 2);
    rotate(angleToMouse);
    noStroke();
    fill(255, 255, 255);
    arc(0, 0, 70, 70, 90, 270);
    pop();
    // Draws the pupil
    push();
    translate(365, 300);
    angleMode(DEGREES);
    let angleToMouse = atan2(mouseY - height / 2, mouseX - width / 2);
    translate(width / 2, height / 2);
    rotate(angleToMouse);
    noStroke();
    fill(0);
    arc(0, 0, 70, 70, 270, 450);
    pop();

    // Rotates the eye to follow the curser
    //angle = angle + 1;
}
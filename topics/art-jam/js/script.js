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
    // Sets angle mode to degrees
    angleMode(DEGREES);
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
    drawBody();
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
 * Draws and animates the eyes
 */
function drawEyes() {
    // Draws and moves the eye white
    push();
    translate(365, 300);
    rotate(mouseX + mouseY);
    noStroke();
    fill(255, 255, 255);
    arc(0, 0, 70, 70, 90, 270);
    pop();
    // Draws and moves the pupil
    push();
    translate(365, 300);
    rotate(mouseX + mouseY);
    noStroke();
    fill(0);
    arc(0, 0, 70, 70, 270, 450);
    pop();
}

/**
 * Draws the Body
 */
function drawBody() {
    drawUpperBody();
}

/**
 * Draws the chest
 */
function drawUpperBody() {
    push();
    noStroke();
    fill(222, 57, 24);
    // Draws the torso
    rect(330, 400, 115, 240);
    // Draws the shoulders 
    ellipse(340, 415, 50);
    ellipse(430, 415, 50);
    // Draws bottom of sweater
    rect(320, 630, 135, 30);
    pop();

    // Draws right arm 
    push();
    noStroke();
    fill(222, 57, 24);
    translate(430);
    rect(0, 0);

    // Draws left arm
    translate();
    rect(0, 0);
    
    pop();
    // Draws the hands 
    drawRightHand();
    drawLeftHand();
}

/**
 * Draws the Hands 
 */
// Draws right hand
function drawRightHand() {
    
}
// Draws left hand
function drawLeftHand() {
    
}

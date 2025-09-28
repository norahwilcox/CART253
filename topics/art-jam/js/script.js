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
    drawCatMe();
    drawBug();
}

/**
 * Draws the whole character and moves the eye
 */
function drawCatMe() {
    // Draws the character
    push();
    drawHead();
    drawLowerBody();
    drawUpperBody();

    // Rotates the eye with the mouse
    translate(365, 300);
    let x = mouseX - 365;
    let y = mouseY - 300;
    let a = atan2(y, x);
    rotate(a);
    drawEye();
    pop();
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
    triangle(160, 350, 335, 225, 375, 360);
    // Draws the ears
    triangle(310, 245, 340, 100, 370, 235);
    triangle(370, 250, 405, 100, 440, 265);
    // Draws the neck 
    rect(370, 350, 30, 60);
    pop();
}

/**
 * Draws the eye
 */
function drawEye() {
    // Draws the eye white
    push();
    noStroke();
    fill(255, 255, 255);
    arc(0, 0, 70, 70, 90, 270);
    pop();
    // Draws the pupil
    push();
    noStroke();
    fill(0);
    arc(0, 0, 70, 70, 270, 450);
    pop();
}

/**
 * Draws the lower body
 */
function drawLowerBody() {
    push();
    noStroke();
    fill(19, 26, 107);
    rect(335, 640, 105, 240);
    pop();
}

/**
 * Draws the upper body 
 */
function drawUpperBody() {
    push();
    noStroke();
    fill(222, 57, 24);
    // Draws the torso
    rect(330, 400, 115, 240);
    // Draws the shoulders (left, right)
    ellipse(340, 410, 50);
    ellipse(425, 410, 50);
    // Draws the trim of the sweater
    rect(320, 630, 135, 30);
    pop();

    // Joins the arms with the upper body
    drawLeftArm();
    drawRightArm();
}

/**
 * Draws the arms
 */
// Draws the left arm 
function drawLeftArm() {
    // Draws upper left arm 
    push();
    noStroke();
    fill(222, 57, 24);
    translate(325, 390);
    rotate(45);
    rect(0, 0, 40, 145);
    pop();
    // Draws left elbow and forearm
    push();
    noStroke();
    fill(222, 57, 24);
    ellipse(234, 508, 45);
    translate(245, 495);
    rotate(130);
    rect(0, 0, 40, 130);
    pop();

    // Joins the left arm and hand
    drawLeftHand(); 
}
// Draws the right arm 
function drawRightArm() {
    // Draws upper right arm 
    push();
    noStroke();
    fill(222, 57, 24);
    translate(410, 415);
    rotate(332);
    rect(0, 0, 40, 150);
    pop();
    // Draws right elbow and forearm
    push();
    noStroke();
    fill(222, 57, 24);
    ellipse(500, 535, 45);
    translate(522, 540);
    rotate(200);
    rect(0, 0, 40, 125);
    pop();
    
    // Joins the right arm and hand
    drawRightHand();
}

/**
 * Draws the Hands 
 */
// Draws left hand
function drawLeftHand() {
    push();
    noStroke();
    fill(255, 211, 5);
    // Draws the palm of the hand
    ellipse(110, 415, 70, 40);
    // Draws the thumb
    ellipse(135, 400, 20, 40);
    pop();
}
// Draws right hand
function drawRightHand() {
    push();
    noStroke();
    fill(255, 211, 5);
    // Draws the palm of the hand
    ellipse(560, 400, 70, 40);
    // Draws the thumb
    ellipse(535, 385, 20, 40);
    pop();
}

/**
 * Draws the bug and attaches it to the mouse
 */
function drawBug() {
    push();
    noStroke();
    fill(0);
    ellipse(mouseX, mouseY, 15);
    stroke(0);
    fill(225, 255, 255);
    ellipse(mouseX - 10, mouseY, 10);
    ellipse(mouseX + 10, mouseY, 10);
    pop();
}


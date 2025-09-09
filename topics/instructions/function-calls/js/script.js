/**
 * The Greatest Record of all Time 
 * Norah Wilcox
 * 
 * Displays the createst record of all time
 */

"use strict";

/**
 * Creates square canvas
 */

function setup() {
    createCanvas(640, 640);
}

/**
 * Displays the background 
 */
function draw() {
    // Grey background 
    background(150);

    // The main part of the record 
    push();
    fill(255, 0, 0);
    stroke(255);
    ellipse(320, 320, 480);
    pop();

    // the label of the rcord 
    push();
    fill('white');
    noStroke();
    ellipse(320, 320, 140);
    pop();

    // The hole in the record 
    push();
    fill("#000000");
    noStroke();
    ellipse(320, 320, 20);
    pop();
}
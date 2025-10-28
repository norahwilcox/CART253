/**
 * Speech! Speech!
 * Norah
 * 
 * Interactive speech-playing interface
 */

"use strict";

// The speech itself
const speech = ["Veni.", "Vidi", "Vici.", "I feel bad."];
// Which scentance in speech to display
let speechIndex = 0;

/**
 * OH LOOK I DIDN'T DESCRIBE SETUP!!
*/
function setup() {
    createCanvas(600, 100);
}

/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {
    background(0);

    // Get the current line of the speech
    let currentLine = speech[speechIndex];

    // Display the line
    push();
    fill(255);
    textSize(32);
    textAlign(CENTER, CENTER);
    text(currentLine, width / 2, height / 2);
    pop();
}

/**
 * Advances the speech on mouse click
 */
function mousePressed() {
    // Next line
    speechIndex = speechIndex + 1;
    // Handle the end of the speech, react to the end of the array
    if (speechIndex >= speech.length) {
        // Start over 
        speechIndex = 0;
    }
}
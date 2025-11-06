/**
 * Lines
 * Pippin Barr
 * 
 * A series of lines across the canvas
 */

"use strict";

/**
 * Creates the canvas
 */
function setup() {
    createCanvas(500, 500);
}

/**
 * Draws lines across the canvas with increasing thickness and
 * gradually lightening colour
 */
function draw() {
    background("pink");

    let x;
    let y = 25;

        // Draw vertical lines using a loop.
        for (let x = 0; x < 500; x += 1.5) {
            stroke(0 + y)
            line(x, 1, x, 500);
    
            // Increment by 20.
            y += 0.5;
        }
    
    x = 50;
    y = 25;

  // Repeat as long as x < 100
    while (x < 500) {
        stroke(0 + y)
        line(x, 0, x, 500);

        stroke(0 + y)
        line(0, x, 500, x);

        // Increment by 20.
        x += 50;
        y += 25;
    }

}
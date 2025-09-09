/**
 * The Blank Page
 * Norah Wilcox
 * 
 * An exploration of the existential angst of a novelist
 * who must sit down at their pink desk and confront the 
 * abyss that is a page of paper.
 * 
 * The program is non-ingteractive to convey the inability 
 * to get started on the project. Try typing! Just try it!
 */

"use strict";

/**
 * Creates the canvas for our masterpiece
 */

function setup() {
    // Create the canvas at a standard resolution
    createCanvas(640, 480);
}

/**
 * Draws the writer's desktop and a blank piece of paper
 */
function draw() {
    // The pink desktop
    background(255, 100, 100);
    // The piece of paper
    rect(200, 80, 240, 320);
}
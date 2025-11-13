/**
 * In class data
 * Author Name
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";

const CELL_SIZE = 125;
const NUM_COLS = 4;
const NUM_ROWS = 4;
let currentMazee = null;
let jsonData;

function preload() {
    jsonData = loadJSON("js/spript.json");
}

function setup() {
    createCanvas(500, 500);

}


function draw() {
    background(0);

    for (let i = 0; i < NUM_COLS; i++) {
        for (let j = 0; j < NUM_ROWS; j++) {
            drawCell(i, j);
        }
    }
};

function drawCell(i, j) {
    fill("red");
    rectMode(CORNER);
    rect(i * CELL_SIZE, j * CELL_SIZE, CELL_SIZE, CELL_SIZE);
}
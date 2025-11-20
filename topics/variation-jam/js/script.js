/**
 * Variation Jam
 * Norah Wilcox
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";

var whichscreen = "start"

let button1;
let startButtonUp;
let startButtonDown;
let title;
let namez;

function preload() {
    startButtonUp = loadImage('./assets/images/Start_button_up.png');
    startButtonDown = loadImage('./assets/images/Start_button_down.png');
    title = loadImage('./assets/images/Title_screen.png');
    namez = loadImage('./assets/images/name.png');
}

function setup() {
  createCanvas(1200, 800);
  button1 = new Button(495, 450, startButtonUp);
}

function draw() {
    background(175, 183, 231);

    if (whichscreen === "start") {
        startScreen()
    }
    else if (whichscreen === "game") {
        gameScreen()
    }
    else if (whichscreen === "world") {
        worldScreen()
    }
    else {
        productScreen()
    }
}

function startScreen() {
    image(title, 370, 200);
    image(namez, 460, 310);
    button1.display();
}

class Button {
  
  constructor(inX, inY, inImg) {
    this.x = inX;
    this.y = inY;
    this.startButtonUp = inImg;
  }
  
  display() {
    
    // tint the image on mouse hover
    if (this.over()) {
        image(startButtonDown, this.x, this.y);
    } else {
        image(this.startButtonUp, this.x, this.y);
    }
  }
  
  // over automatically matches the width & height of the image read from the file
  // see this.img.width and this.img.height below
  over() {
    if (mouseX > this.x && mouseX < this.x + this.startButtonUp.width && mouseY > this.y && mouseY < this.y + this.startButtonUp.height) {
      return true;
    } else {
      return false;
    }
  }
}
/**
 * Variation Jam
 * Norah Wilcox
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";

var whichscreen = "start"
var whichfile = "head"

let start;
let startButtonUp;
let startButtonDown;
let title;
let namez;
let file;
let openTab;
let closedTab;

/** 
let faceText;
let hairText;
let endText;
let headText;
*/

function preload() {
  startButtonUp = loadImage('./assets/images/Start_button_up.png');
  startButtonDown = loadImage('./assets/images/Start_button_down.png');
  title = loadImage('./assets/images/Title_screen.png');
  namez = loadImage('./assets/images/name.png');
  
  file = loadImage('./assets/images/file.png');
  openTab = loadImage('./assets/images/file.tab.light.png');
  closedTab = loadImage('./assets/images/file.tab.dark.png');

  /** 
  faceText = loadImage('./assets/images/Face.png');
  headText = loadImage('./assets/images/Head.png');
  hairText = loadImage('./assets/images/Hair.png');
  endText = loadImage('./assets/images/End.png');
  */
}

function setup() {
  createCanvas(1200, 800);
  start = new Start(495, 520, startButtonUp);
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
  start.display();
}

function gameScreen() {
  if (whichfile === "head") {
        headFile()
    }
    else if (whichfile === "face") {
        faceFile()
    }
    else if (whichfile === "hair") {
        hairFile()
    }
    else {
        endFile()
  }

  image(file, 430, 150);
}

function headFile() {
  image(openTab, 460, 110);

  image(closedTab, 617, 110);

  image(closedTab, 774, 110);

  image(closedTab, 931, 110);
}

function faceFile() {
  image(closedTab, 460, 110);

  image(openTab, 617, 110);

  image(closedTab, 774, 110);

  image(closedTab, 931, 110);
}

function hairFile() {
  image(closedTab, 460, 110);

  image(closedTab, 617, 110);

  image(openTab, 774, 110);

  image(closedTab, 931, 110);
}

function endFile() {
  image(closedTab, 460, 110);

  image(closedTab, 617, 110);

  image(closedTab, 774, 110);

  image(openTab, 931, 110);
}


class Start {
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
    if (mouseX > this.x && mouseX < this.x + this.startButtonUp.width && mouseY >
        this.y && mouseY < this.y + this.startButtonUp.height) {
      return true;
    } else {
      return false;
    }
  }
}

function mousePressed() {
    if (whichscreen === "start" && start.over()) {
        whichscreen = "game";
    }
    else if (whichscreen === "game" && button2.over()) {
      
  }
}
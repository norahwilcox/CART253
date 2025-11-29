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

let headSelectButtons = [];
let skinSelectButtons = [];

let selectLong;
let selectReg;
let selectWide;

let selectPeach;
let selectTan;
let selectBrown;
let selectDark;

let selectBent;
let selectButton;
let selectFlat;
let selectStraight;

let selectButtonUp;
let selectButtonDown;

let title;
let namez;
let file;
let openTab;
let closedTab;

let click;

const headTab = {
  x: 460,
  y: 110,
  w: 170,
  h: 70
};

const faceTab = {
  x: 617,
  y: 110,
  w: 170,
  h: 70
};

const hairTab = {
  x: 774,
  y: 110,
  w: 170,
  h: 70
};

const endTab = {
  x: 931,
  y: 110,
  w: 170,
  h: 70
};

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

  selectButtonUp = loadImage('./assets/images/select-button-up.png');
  selectButtonDown = loadImage('./assets/images/select-button-down.png');
  
  file = loadImage('./assets/images/file.png');
  openTab = loadImage('./assets/images/file.tab.light.png');
  closedTab = loadImage('./assets/images/file.tab.dark.png');

  click = new Audio("./assets/sounds/ui-pop.mp3");

  /** 
  faceText = loadImage('./assets/images/Face.png');
  headText = loadImage('./assets/images/Head.png');
  hairText = loadImage('./assets/images/Hair.png');
  endText = loadImage('./assets/images/End.png');
  */
}

function setup() {
  createCanvas(1200, 800);
  start = new Start(445, 520, startButtonUp);

  // head shapes
  selectLong = new Select(700, 230, selectButtonUp, selectButtonDown);
  selectReg = new Select(700, 290, selectButtonUp, selectButtonDown);
  selectReg.selected = true;
  selectWide = new Select(700, 350, selectButtonUp, selectButtonDown);

  // skin tones
  selectPeach = new Select(900, 230, selectButtonUp, selectButtonDown);
  selectTan = new Select(900, 290, selectButtonUp, selectButtonDown);
  selectBrown = new Select(900, 350, selectButtonUp, selectButtonDown);
  selectDark = new Select(900, 410, selectButtonUp, selectButtonDown);

  // noses
  selectBent = new Select(900, 230, selectButtonUp, selectButtonDown);
  selectButton = new Select(900, 290, selectButtonUp, selectButtonDown);
  selectButton.selected = true;
  selectFlat = new Select(900, 350, selectButtonUp, selectButtonDown);
  selectStraight = new Select(900, 410, selectButtonUp, selectButtonDown);


  headSelectButtons = [selectLong, selectReg, selectWide];
  skinSelectButtons = [selectPeach, selectTan, selectBrown, selectDark];
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
  image(title, 360, 120);
  image(namez, 370, 180);
  start.display();
}

function gameScreen() {
  noStroke();
  noFill();
  rect(headTab.x, headTab.y, headTab.w, headTab.h);
  
  noStroke();
  noFill();
  rect(faceTab.x, faceTab.y, faceTab.w, faceTab.h);
  
  noStroke();
  noFill();
  rect(hairTab.x, hairTab.y, hairTab.w, hairTab.h);
  
  noStroke();
  noFill();
  rect(endTab.x, endTab.y, endTab.w, endTab.h);

  image(file, 430, 150);

  if (whichfile === "head") {
    headFile();
    }
    else if (whichfile === "face") {
    faceFile();
    }
    else if (whichfile === "hair") {
    hairFile();
    }
    else {
    endFile();
  }

}

function headFile() {
  image(openTab, 460, 110);
  image(closedTab, 617, 110);
  image(closedTab, 774, 110);
  image(closedTab, 931, 110);
  
  selectLong.display();
  selectReg.display();
  selectWide.display();

  selectPeach.display();
  selectTan.display();
  selectBrown.display();
  selectDark.display();

}

function faceFile() {
  image(closedTab, 460, 110);
  image(openTab, 617, 110);
  image(closedTab, 774, 110);
  image(closedTab, 931, 110);

  selectBent.display();
  selectButton.display();
  selectFlat.display();
  selectStraight.display();

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

class Select {
  constructor(x, y, imgUp, imgDown) {
    this.x = x;
    this.y = y;
    this.imgUp = imgUp;
    this.imgDown = imgDown;

    this.selected = false; 
  }

  display() {
    // If selected, always show DOWN version
    if (this.selected) {
      image(this.imgDown, this.x, this.y);
      return;
    }

    // Otherwise hover behaves normally
    if (this.over()) {
      image(this.imgDown, this.x, this.y);
    } else {
      image(this.imgUp, this.x, this.y);
    }
  }

  over() {
    return (
      mouseX > this.x &&
      mouseX < this.x + this.imgUp.width &&
      mouseY > this.y &&
      mouseY < this.y + this.imgUp.height
    );
  }

  clicked() {
    if (this.over()) {
      this.selected = true;      // NEW: stick in "down" mode
      return true;
    }
    return false;
  }

  reset() {                      // OPTIONAL: let you unselect it later
    this.selected = false;
  }
}



const distance = dist(mouseX, mouseY, faceTab.x, faceTab.y);
const overlapsFaceTab = (distance < faceTab.w + faceTab.h /2);

function mousePressed() {
    if (whichscreen === "start" && start.over()) {
      whichscreen = "game";
      click.play();
    }
   // GAME SCREEN TABS
  if (whichscreen === "game") {

 // HEAD TAB SELECT BUTTONS
if (whichfile === "head") {
  for (let btn of headSelectButtons) {
    if (btn.over()) {
      click.play();
      

      // Reset all buttons first
      headSelectButtons.forEach(b => b.reset());

      // Lock the clicked one
      btn.clicked();

      console.log("Head tab: Select pressed");
      return; 
    }
  }
  for (let btn of skinSelectButtons) {
    if (btn.over()) {
      click.play();
    

      // Reset all buttons first
      skinSelectButtons.forEach(b => b.reset());

      // Lock the clicked one
      btn.clicked();
}
    }
  }
}
    
    // Head tab
    if (
      mouseX > headTab.x &&
      mouseX < headTab.x + headTab.w &&
      mouseY > headTab.y &&
      mouseY < headTab.y + headTab.h
    ) {
      whichfile = "head";
      click.play();
    }

    // Face tab
    if (
      mouseX > faceTab.x &&
      mouseX < faceTab.x + faceTab.w &&
      mouseY > faceTab.y &&
      mouseY < faceTab.y + faceTab.h
    ) {
      whichfile = "face";
      click.play();
    }

    // Hair tab
    if (
      mouseX > hairTab.x &&
      mouseX < hairTab.x + hairTab.w &&
      mouseY > hairTab.y &&
      mouseY < hairTab.y + hairTab.h
    ) {
      whichfile = "hair";
      click.play();
    }

    // End tab
    if (
      mouseX > endTab.x &&
      mouseX < endTab.x + endTab.w &&
      mouseY > endTab.y &&
      mouseY < endTab.y + endTab.h
    ) {
      whichfile = "end";
      click.play();
    }
  }
}
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

let selectedHeadShape = "reg"; 
let selectedSkin = "peach";

let selectedNose = "button";  
let selectedMouth = "smile"; 
let selectedDetail = "none"; 

let start;
let startButtonUp;
let startButtonDown;

let headSelectButtons = [];
let skinSelectButtons = [];
let noseSelectButtons = [];
let mouthSelectButtons = [];
let detailSelectButtons = [];
let bangsSelectButtons = [];
let hairSelectButtons = [];
let strandSelectButtons = [];
let dyeSelectButtons = [];

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

let selectBuck;
let selectLipsSmile;
let selectLips;
let selectNeutral;
let selectSmile;
let selectTeeth;

let selectBags;
let selectBlush;
let selectFreckles;
let selectSharp;
let selectRound;
let selectDetailNone;

let selectBackBraids;
let selectBigFrizz;
let selectBowl;
let selectCurly;
let selectCurtain;
let selectFringe;
let selectFrizz;
let selectHeadScarf;
let selectMiddleFringe;
let selectMiddle;
let selectShaved;
let selectShortCurly;
let selectShort;
let selectSide;
let selectBangsNone;

let selectBraids;
let selectBuns;
let selectCurlyCut;
let selectLongPony;
let selectPigtails;
let selectPony;
let selectPoofy;
let selectShortCut;
let selectStraightCut;
let selectWavy;
let selectHairNone;

let selectStrands1;
let selectStrands2;
let selectStrandsNone;

let selectBlack;
let selectBlonde;
let selectBrunette;
let selectBlue;
let selectDirty;
let selectGinger;
let selectGrey;
let selectPink;
let selectRed;
let selectUmber;

let selectButtonUp;
let selectButtonDown;

let title;
let namez;
let file;
let openTab;
let closedTab;

let eyes;

let longBrown;
let longDark;
let longPeach;
let longTan;
let regBrown;
let regDark;
let regPeach;
let regTan;
let wideBrown;
let wideDark;
let widePeach;
let wideTan;

let bent;
let button;
let flat;
let straight;

let buck;
let lipsSmilePeach;
let lipsSmileTan;
let lipsSmileBrown;
let lipsSmileDark;
let lipsPeach;
let lipsTan;
let lipsBrown;
let lipsDark;
let neutral;
let smile;
let teeth;

let bagsPeach;
let bagsTan;
let bagsBrown;
let bagsDark;
let blushPeach;
let blushTan;
let blushBrown;
let blushDark;
let frecklesPeach;
let frecklesTan;
let frecklesBrown;
let frecklesDark;
let sharpPeach;
let sharpTan;
let sharpBrown;
let sharpDark;
let roundPeach;
let roundTan;
let roundBrown;
let roundDark;

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

const hair2Tab = {
  x: 931,
  y: 110,
  w: 170,
  h: 70
};

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

  eyes = loadImage('./assets/images/eyes.png');

  longBrown = loadImage('./assets/images/Heads/long.brown.png');
  longDark = loadImage('./assets/images/Heads/long.dark.png');
  longPeach = loadImage('./assets/images/Heads/long.peach.png');
  longTan = loadImage('./assets/images/Heads/long.tan.png');
  regBrown = loadImage('./assets/images/Heads/regular.brown.png');
  regDark = loadImage('./assets/images/Heads/regular.dark.png');
  regPeach = loadImage('./assets/images/Heads/regular.peach.png');
  regTan = loadImage('./assets/images/Heads/regular.tan.png');
  wideBrown = loadImage('./assets/images/Heads/wide.brown.png');
  wideDark = loadImage('./assets/images/Heads/wide.dark.png');
  widePeach = loadImage('./assets/images/Heads/wide.peach.png');
  wideTan = loadImage('./assets/images/Heads/wide.tan.png');

  bent = loadImage('./assets/images/Noses/bent.png');
  button = loadImage('./assets/images/Noses/button.png');
  flat = loadImage('./assets/images/Noses/flat.png');
  straight = loadImage('./assets/images/Noses/straight.png');

  buck = loadImage('./assets/images/Mouths/buck-teeth.png');
  lipsSmilePeach = loadImage('./assets/images/Mouths/lips-smile.peach.png');
  lipsSmileTan = loadImage('./assets/images/Mouths/lips-smile.tan.png');
  lipsSmileBrown = loadImage('./assets/images/Mouths/lips-smile.brown.png');
  lipsSmileDark = loadImage('./assets/images/Mouths/lips-smile.dark.png');
  lipsPeach = loadImage('./assets/images/Mouths/lips.peach.png');
  lipsTan = loadImage('./assets/images/Mouths/lips.tan.png');
  lipsBrown = loadImage('./assets/images/Mouths/lips.brown.png');
  lipsDark = loadImage('./assets/images/Mouths/lips.dark.png');
  neutral = loadImage('./assets/images/Mouths/neutral.png');
  smile = loadImage('./assets/images/Mouths/smile.png');
  teeth = loadImage('./assets/images/Mouths/teeth.png');

  bagsPeach = loadImage('./assets/images/Details/bags.peach.png');
  bagsTan = loadImage('./assets/images/Details/bags.tan.png');
  bagsBrown = loadImage('./assets/images/Details/bags.brown.png');
  bagsDark = loadImage('./assets/images/Details/bags.dark.png');
  blushPeach = loadImage('./assets/images/Details/blush.peach.png');
  blushTan = loadImage('./assets/images/Details/blush.tan.png');
  blushBrown = loadImage('./assets/images/Details/blush.brown.png');
  blushDark = loadImage('./assets/images/Details/blush.dark.png');
  frecklesPeach = loadImage('./assets/images/Details/freckles.peach.png');
  frecklesTan = loadImage('./assets/images/Details/freckles.tan.png');
  frecklesBrown = loadImage('./assets/images/Details/freckles.brown.png');
  frecklesDark = loadImage('./assets/images/Details/freckles.dark.png');
  sharpPeach = loadImage('./assets/images/Details/sharp.peach.png');
  sharpTan = loadImage('./assets/images/Details/sharp.tan.png');
  sharpBrown = loadImage('./assets/images/Details/sharp.brown.png');
  sharpDark = loadImage('./assets/images/Details/sharp.dark.png');
  roundPeach = loadImage('./assets/images/Details/round.peach.png');
  roundTan = loadImage('./assets/images/Details/round.tan.png');
  roundBrown = loadImage('./assets/images/Details/round.brown.png');
  roundDark = loadImage('./assets/images/Details/round.dark.png');    

  click = new Audio("./assets/sounds/ui-pop.mp3");
}

function setup() {
  createCanvas(1200, 800);
  start = new Start(445, 520, startButtonUp);

  /**
   * HEAD
   */
  // head shapes
  selectLong = new Select(500, 230, selectButtonUp, selectButtonDown);
  selectReg = new Select(500, 290, selectButtonUp, selectButtonDown);
  selectReg.selected = true;
  selectWide = new Select(500, 350, selectButtonUp, selectButtonDown);

  // skin tones
  selectPeach = new Select(770, 230, selectButtonUp, selectButtonDown);
  selectPeach.selected = true;
  selectTan = new Select(770, 290, selectButtonUp, selectButtonDown);
  selectBrown = new Select(770, 350, selectButtonUp, selectButtonDown);
  selectDark = new Select(770, 410, selectButtonUp, selectButtonDown);

  /**
   * FACE
   */
  // noses
  selectBent = new Select(500, 230, selectButtonUp, selectButtonDown);
  selectButton = new Select(500, 290, selectButtonUp, selectButtonDown);
  selectButton.selected = true;
  selectFlat = new Select(500, 350, selectButtonUp, selectButtonDown);
  selectStraight = new Select(500, 410, selectButtonUp, selectButtonDown);

  // mouths
  selectBuck = new Select(700, 230, selectButtonUp, selectButtonDown);
  selectLipsSmile = new Select(700, 290, selectButtonUp, selectButtonDown);
  selectLips = new Select(700, 350, selectButtonUp, selectButtonDown);
  selectNeutral = new Select(700, 410, selectButtonUp, selectButtonDown);
  selectSmile = new Select(700, 470, selectButtonUp, selectButtonDown);
  selectSmile.selected = true;
  selectTeeth = new Select(700, 530, selectButtonUp, selectButtonDown);

  // details
  selectBags = new Select(900, 230, selectButtonUp, selectButtonDown);
  selectBlush = new Select(900, 290, selectButtonUp, selectButtonDown);
  selectFreckles = new Select(900, 350, selectButtonUp, selectButtonDown);
  selectSharp = new Select(900, 410, selectButtonUp, selectButtonDown);
  selectRound = new Select(900, 470, selectButtonUp, selectButtonDown);
  selectDetailNone = new Select(900, 530, selectButtonUp, selectButtonDown);
  selectDetailNone.selected = true;

  /**
   * HAIR
   */
  // bangs
  selectBackBraids = new Select(500, 230, selectButtonUp, selectButtonDown);
  selectBigFrizz = new Select(500, 290, selectButtonUp, selectButtonDown);
  selectBowl = new Select(500, 350, selectButtonUp, selectButtonDown);
  selectCurly = new Select(500, 410, selectButtonUp, selectButtonDown);
  selectCurtain = new Select(500, 470, selectButtonUp, selectButtonDown);  
  selectFringe = new Select(500, 530, selectButtonUp, selectButtonDown);  
  selectFrizz = new Select(500, 590, selectButtonUp, selectButtonDown);  
  selectHeadScarf = new Select(560, 230, selectButtonUp, selectButtonDown);  
  selectMiddleFringe = new Select(560, 290, selectButtonUp, selectButtonDown);  
  selectMiddle = new Select(560, 350, selectButtonUp, selectButtonDown);  
  selectShaved = new Select(560, 410, selectButtonUp, selectButtonDown);  
  selectShortCurly = new Select(560, 470, selectButtonUp, selectButtonDown);  
  selectShort = new Select(560, 530, selectButtonUp, selectButtonDown);  
  selectSide = new Select(560, 590, selectButtonUp, selectButtonDown);
  selectBangsNone = new Select(620, 230, selectButtonUp, selectButtonDown);  
  selectBangsNone.selected = true;

  // hair
  selectBraids = new Select(750, 230, selectButtonUp, selectButtonDown);
  selectBuns = new Select(750, 290, selectButtonUp, selectButtonDown);
  selectCurlyCut = new Select(750, 350, selectButtonUp, selectButtonDown);
  selectLongPony = new Select(750, 410, selectButtonUp, selectButtonDown);
  selectPigtails = new Select(750, 470, selectButtonUp, selectButtonDown);
  selectPony = new Select(750, 530, selectButtonUp, selectButtonDown);
  selectPoofy = new Select(750, 590, selectButtonUp, selectButtonDown);
  selectShortCut = new Select(810, 230, selectButtonUp, selectButtonDown);
  selectStraightCut = new Select(810, 290, selectButtonUp, selectButtonDown);
  selectWavy = new Select(810, 350, selectButtonUp, selectButtonDown);
  selectHairNone = new Select(810, 410, selectButtonUp, selectButtonDown);
  selectHairNone.selected = true;

  /**
   * HAIR2
   */
  // strands
  selectStrands1 = new Select(500, 230, selectButtonUp, selectButtonDown);
  selectStrands2  = new Select(500, 290, selectButtonUp, selectButtonDown);
  selectStrandsNone = new Select(500, 350, selectButtonUp, selectButtonDown);
  selectStrandsNone.selected = true;

  // dye 
  selectBlack = new Select(700, 230, selectButtonUp, selectButtonDown);
  selectBlack.selected = true;
  selectBlonde = new Select(700, 290, selectButtonUp, selectButtonDown);
  selectBrunette = new Select(700, 350, selectButtonUp, selectButtonDown);
  selectBlue = new Select(700, 410, selectButtonUp, selectButtonDown);
  selectDirty = new Select(700, 470, selectButtonUp, selectButtonDown);
  selectGinger = new Select(700, 530, selectButtonUp, selectButtonDown);
  selectGrey = new Select(700, 590, selectButtonUp, selectButtonDown);
  selectPink = new Select(760, 230, selectButtonUp, selectButtonDown);
  selectRed = new Select(760, 290, selectButtonUp, selectButtonDown);
  selectUmber = new Select(760, 350, selectButtonUp, selectButtonDown);

  headSelectButtons = [selectLong, selectReg, selectWide];
  skinSelectButtons = [selectPeach, selectTan, selectBrown, selectDark];
  noseSelectButtons = [selectBent, selectButton, selectFlat, selectStraight];
  mouthSelectButtons = [selectBuck, selectLipsSmile, selectLips, selectNeutral, selectSmile, selectTeeth];
  detailSelectButtons = [selectBags, selectBlush, selectFreckles, selectSharp, selectRound, selectDetailNone];
  bangsSelectButtons = [selectBackBraids, selectBigFrizz, selectBowl, selectCurly, selectCurtain, selectFringe, selectFrizz,
    selectHeadScarf, selectMiddleFringe, selectMiddle, selectShaved, selectShortCurly, selectShort, selectSide, selectBangsNone];
  hairSelectButtons = [selectBraids, selectBuns, selectCurlyCut, selectLongPony, selectPigtails, selectPony, selectPoofy,
    selectShortCut, selectStraightCut, selectWavy, selectHairNone];
  strandSelectButtons = [selectStrands1, selectStrands2, selectStrandsNone];
  dyeSelectButtons = [selectBlack, selectBlonde, selectBrunette, selectBlue, selectDirty, selectGinger, selectGrey, selectPink,
    selectRed, selectUmber];
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
  rect(hair2Tab.x, hair2Tab.y, hair2Tab.w, hair2Tab.h);

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
    hair2File();
  }

  drawHead();
  drawFace();
  image(eyes, 80, 220);
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

  selectBuck.display();
  selectLipsSmile.display();
  selectLips.display();
  selectNeutral.display();
  selectSmile.display();
  selectTeeth.display();

  selectBags.display();
  selectBlush.display();
  selectFreckles.display();
  selectSharp.display();
  selectRound.display();
  selectDetailNone.display();
}

function hairFile() {
  image(closedTab, 460, 110);
  image(closedTab, 617, 110);
  image(openTab, 774, 110);
  image(closedTab, 931, 110);

  selectBackBraids.display(); 
  selectBigFrizz.display();
  selectBowl.display();
  selectCurly.display();  
  selectCurtain.display();  
  selectFringe.display();  
  selectFrizz.display();  
  selectHeadScarf.display();  
  selectMiddleFringe.display();  
  selectMiddle.display();  
  selectShaved.display();  
  selectShortCurly.display();  
  selectShort.display();  
  selectSide.display();  
  selectBangsNone.display();  

  selectBraids.display(); 
  selectBuns.display(); 
  selectCurlyCut.display(); 
  selectLongPony.display(); 
  selectPigtails.display(); 
  selectPony.display(); 
  selectPoofy.display(); 
  selectShortCut.display(); 
  selectStraightCut.display(); 
  selectWavy.display(); 
  selectHairNone.display(); 
}

function hair2File() {
  image(closedTab, 460, 110);
  image(closedTab, 617, 110);
  image(closedTab, 774, 110);
  image(openTab, 931, 110);

  selectStrands1.display();
  selectStrands2.display();
  selectStrandsNone.display();
  selectBlack.display();
  selectBlonde.display();
  selectBrunette.display();
  selectBlue.display();
  selectDirty.display();
  selectGinger.display();
  selectGrey.display();
  selectPink.display();
  selectRed.display();
  selectUmber.display();
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
      this.selected = true;
      return true;
    }
    return false;
  }

  reset() {
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
    headSelectButtons.forEach(b => b.reset());
    btn.clicked();

    if (btn === selectLong) selectedHeadShape = "long";
    if (btn === selectReg)  selectedHeadShape = "reg";
    if (btn === selectWide) selectedHeadShape = "wide";

    return;
  }
}
  for (let btn of skinSelectButtons) {
  if (btn.over()) {
    click.play();
    skinSelectButtons.forEach(b => b.reset());
    btn.clicked();

    if (btn === selectPeach) selectedSkin = "peach";
    if (btn === selectTan)   selectedSkin = "tan";
    if (btn === selectBrown) selectedSkin = "brown";
    if (btn === selectDark)  selectedSkin = "dark";
  }
}
}
  // FACE TAB SELECT BUTTONS
if (whichfile === "face") {
  for (let btn of noseSelectButtons) {
  if (btn.over()) {
    click.play();
    noseSelectButtons.forEach(b => b.reset());
    btn.clicked();

    if (btn === selectBent) selectedNose = "bent";
    if (btn === selectButton)  selectedNose = "button";
    if (btn === selectFlat) selectedNose = "flat";
    if (btn === selectStraight) selectedNose = "straight";

    return;
    }
  }
  for (let btn of mouthSelectButtons) {
  if (btn.over()) {
    click.play();
    mouthSelectButtons.forEach(b => b.reset());
    btn.clicked();

    if (btn === selectBuck) selectedMouth = "buck";
    if (btn === selectLipsSmile) selectedMouth = "lipsSmile";
    if (btn === selectLips) selectedMouth = "lips";
    if (btn === selectNeutral) selectedMouth = "neutral";
    if (btn === selectSmile) selectedMouth = "smile";
    if (btn === selectTeeth) selectedMouth = "teeth";

    return;
}
  }
  for (let btn of detailSelectButtons) {
  if (btn.over()) {
    click.play();
    detailSelectButtons.forEach(b => b.reset());
    btn.clicked();

    if (btn === selectDetailNone) {
      selectedDetail = "none";
    }
    else if (btn === selectBags) { selectedDetail = "bags"; }
    else if (btn === selectBlush) { selectedDetail = "blush"; }
    else if (btn === selectFreckles) { selectedDetail = "freckles"; }
    else if (btn === selectSharp) { selectedDetail = "sharp"; }
    else if (btn === selectRound) { selectedDetail = "round"; }

    return;
}
    }
}
    // HAIR TAB SELECT BUTTONS
if (whichfile === "hair") {
  for (let btn of bangsSelectButtons) {
    if (btn.over()) {
      click.play();
      

      // Reset all buttons first
      bangsSelectButtons.forEach(b => b.reset());

      // Lock the clicked one
      btn.clicked();

      console.log("hair tab: Select pressed");
      return; 
    }
  }
  for (let btn of hairSelectButtons) {
    if (btn.over()) {
      click.play();
    

      // Reset all buttons first
      hairSelectButtons.forEach(b => b.reset());

      // Lock the clicked one
      btn.clicked();
}
    }
}
    // HAIR2 TAB SELECT BUTTONS
if (whichfile === "hair2") {
  for (let btn of strandSelectButtons) {
    if (btn.over()) {
      click.play();
      

      // Reset all buttons first
      strandSelectButtons.forEach(b => b.reset());

      // Lock the clicked one
      btn.clicked();

      console.log("hair2 tab: Select pressed");
      return; 
    }
  }
  for (let btn of dyeSelectButtons) {
    if (btn.over()) {
      click.play();
    

      // Reset all buttons first
      dyeSelectButtons.forEach(b => b.reset());

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

    // hair2 tab
    if (
      mouseX > hair2Tab.x &&
      mouseX < hair2Tab.x + hair2Tab.w &&
      mouseY > hair2Tab.y &&
      mouseY < hair2Tab.y + hair2Tab.h
    ) {
      whichfile = "hair2";
      click.play();
    }
  }

function drawFace() {
  
  let imgD;
  
  if (selectedDetail !== "none") {
    if (selectedDetail === "bags") {
      if (selectedSkin === "peach") imgD = bagsPeach;
      if (selectedSkin === "tan") imgD = bagsTan;
      if (selectedSkin === "brown") imgD = bagsBrown;
      if (selectedSkin === "dark") imgD = bagsDark;
    }
    else if (selectedDetail === "blush") {
      if (selectedSkin === "peach") imgD = blushPeach;
      if (selectedSkin === "tan") imgD = blushTan;
      if (selectedSkin === "brown") imgD = blushBrown;
      if (selectedSkin === "dark") imgD = blushDark;
    }
    else if (selectedDetail === "freckles") {
      if (selectedSkin === "peach") imgD = frecklesPeach;
      if (selectedSkin === "tan") imgD = frecklesTan;
      if (selectedSkin === "brown") imgD = frecklesBrown;
      if (selectedSkin === "dark") imgD = frecklesDark;
    }
    else if (selectedDetail === "sharp") {
      if (selectedSkin === "peach") imgD = sharpPeach;
      if (selectedSkin === "tan") imgD = sharpTan;
      if (selectedSkin === "brown") imgD = sharpBrown;
      if (selectedSkin === "dark") imgD = sharpsDark;
    }
    else if (selectedDetail === "round") {
      if (selectedSkin === "peach") imgD = roundPeach;
      if (selectedSkin === "tan") imgD = roundTan;
      if (selectedSkin === "brown") imgD = roundBrown;
      if (selectedSkin === "dark") imgD = roundDark;

      if (imgD) image(imgD, 80, 220);   // draw final result 
    }
  }

  let imgN;

  if (selectedNose === "bent") imgN = bent;
  if (selectedNose === "button") imgN = button;
  if (selectedNose === "flat") imgN = flat;
  if (selectedNose === "straight") imgN = straight;

  let imgM;
  
  if (selectedMouth === "buck") imgM = buck;

  if (selectedMouth === "lipsSmile") {
    if (selectedSkin === "peach") imgM = lipsSmilePeach;
    if (selectedSkin === "tan") imgM = lipsSmileTan;
    if (selectedSkin === "brown") imgM = lipsSmileBrown;
    if (selectedSkin === "dark") imgM = lipsSmileDark;
  }

  if (selectedMouth === "lips") {
    if (selectedMouth === "lips") {
      if (selectedSkin === "peach") imgM = lipsPeach;
      if (selectedSkin === "tan") imgM = lipsTan;
      if (selectedSkin === "brown") imgM = lipsBrown;
      if (selectedSkin === "dark") imgM = lipsDark;
    }
  }

    if (selectedMouth === "neutral") imgM = neutral;
    if (selectedMouth === "smile") imgM = smile;
    if (selectedMouth === "teeth") imgM = teeth;

  if (imgD) image(imgD, 80, 220);   // draw final result 
  if (imgM) image(imgM, 80, 220);   // draw final result 
  if (imgN) image(imgN, 80, 220);   // draw final result 
}


function drawHead() {
  let img;

  if (selectedHeadShape === "long") {
    if (selectedSkin === "peach") img = longPeach;
    if (selectedSkin === "tan") img = longTan;
    if (selectedSkin === "brown") img = longBrown;
    if (selectedSkin === "dark") img = longDark;
  }

  if (selectedHeadShape === "reg") {
    if (selectedSkin === "peach") img = regPeach;
    if (selectedSkin === "tan") img = regTan;
    if (selectedSkin === "brown") img = regBrown;
    if (selectedSkin === "dark") img = regDark;
  }

  if (selectedHeadShape === "wide") {
    if (selectedSkin === "peach") img = widePeach;
    if (selectedSkin === "tan") img = wideTan;
    if (selectedSkin === "brown") img = wideBrown;
    if (selectedSkin === "dark") img = wideDark;
  }

  if (img) image(img, 80, 220);   // draw final result
}

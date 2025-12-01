/**
 * Variation Jam
 * Norah Wilcox
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";

var whichscreen = "start";
var whichfile = "head";

let selectedHeadShape = "reg"; 
let selectedSkin = "peach";

let selectedNose = "button";  
let selectedMouth = "buck"; 
let selectedDetail = "none"; 

let selectedBangs = "curly";
let selectedDye = "black";

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

let bigFrizzBlack;
let bigFrizzBlonde;
let bigFrizzBlue;
let bigFrizzBrunette;
let bigFrizzDirty;
let bigFrizzGinger;
let bigFrizzGrey;
let bigFrizzPink;
let bigFrizzRed;
let bigFrizzUmber;

let bowlBlack;
let bowlBlonde;
let bowlBlue;
let bowlBrunette;
let bowlDirty;
let bowlGinger;
let bowlGrey;
let bowlPink;
let bowlRed;
let bowlUmber;

let braidsBackBlack;
let braidsBackBlonde;
let braidsBackBlue;
let braidsBackBrunette;
let braidsBackDirty;
let braidsBackGinger;
let braidsBackGrey;
let braidsBackPink;
let braidsBackRed;
let braidsBackUmber;

let curlyBlack;
let curlyBlonde;
let curlyBlue;
let curlyBrunette;
let curlyDirty;
let curlyGinger;
let curlyGrey;
let curlyPink;
let curlyRed;
let curlyUmber;

let curtainBlack;
let curtainBlonde;
let curtainBlue;
let curtainBrunette;
let curtainDirty;
let curtainGinger;
let curtainGrey;
let curtainPink;
let curtainRed;
let curtainUmber;

let fringeBlack;
let fringeBlonde;
let fringeBlue;
let fringeBrunette;
let fringeDirty;
let fringeGinger;
let fringeGrey;
let fringePink;
let fringeRed;
let fringeUmber;

let frizzBlack;
let frizzBlonde;
let frizzBlue;
let frizzBrunette;
let frizzDirty;
let frizzGinger;
let frizzGrey;
let frizzPink;
let frizzRed;
let frizzUmber;

let headscarfBlack;
let headscarfBlonde;
let headscarfBlue;
let headscarfBrunette;
let headscarfDirty;
let headscarfGinger;
let headscarfGrey;
let headscarfPink;
let headscarfRed;
let headscarfUmber;

let middleFringeBlack;
let middleFringeBlonde;
let middleFringeBlue;
let middleFringeBrunette;
let middleFringeDirty;
let middleFringeGinger;
let middleFringeGrey;
let middleFringePink;
let middleFringeRed;
let middleFringeUmber;

let middleBlack;
let middleBlonde;
let middleBlue;
let middleBrunette;
let middleDirty;
let middleGinger;
let middleGrey;
let middlePink;
let middleRed;
let middleUmber;

let shavedBlack;
let shavedBlonde;
let shavedBlue;
let shavedBrunette;
let shavedDirty;
let shavedGinger;
let shavedGrey;
let shavedPink;
let shavedRed;
let shavedUmber;

let shortCurlyBlack;
let shortCurlyBlonde;
let shortCurlyBlue;
let shortCurlyBrunette;
let shortCurlyDirty;
let shortCurlyGinger;
let shortCurlyGrey;
let shortCurlyPink;
let shortCurlyRed;
let shortCurlyUmber;

let shortBlack;
let shortBlonde;
let shortBlue;
let shortBrunette;
let shortDirty;
let shortGinger;
let shortGrey;
let shortPink;
let shortRed;
let shortUmber;

let sideBlack;
let sideBlonde;
let sideBlue;
let sideBrunette;
let sideDirty;
let sideGinger;
let sideGrey;
let sidePink;
let sideRed;
let sideUmber;

let click;
let pick;

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
  
  bigFrizzBlack = loadImage('./assets/images/Bangs/big-frizz.black.png');
  bigFrizzBlonde = loadImage('./assets/images/Bangs/big-frizz.blonde.png');
  bigFrizzBlue = loadImage('./assets/images/Bangs/big-frizz.blue.png');
  bigFrizzBrunette = loadImage('./assets/images/Bangs/big-frizz.brunette.png');
  bigFrizzDirty = loadImage('./assets/images/Bangs/big-frizz.dirty.png');
  bigFrizzGinger = loadImage('./assets/images/Bangs/big-frizz.ginger.png');
  bigFrizzGrey = loadImage('./assets/images/Bangs/big-frizz.grey.png');
  bigFrizzPink = loadImage('./assets/images/Bangs/big-frizz.pink.png');
  bigFrizzRed = loadImage('./assets/images/Bangs/big-frizz.red.png');
  bigFrizzUmber = loadImage('./assets/images/Bangs/big-frizz.umber.png');

  bowlBlack = loadImage('./assets/images/Bangs/bowl.black.png');
  bowlBlonde = loadImage('./assets/images/Bangs/bowl.blonde.png');
  bowlBlue = loadImage('./assets/images/Bangs/bowl.blue.png');
  bowlBrunette = loadImage('./assets/images/Bangs/bowl.brunette.png');
  bowlDirty = loadImage('./assets/images/Bangs/bowl.dirty.png');
  bowlGinger = loadImage('./assets/images/Bangs/bowl.ginger.png');
  bowlGrey = loadImage('./assets/images/Bangs/bowl.grey.png');
  bowlPink = loadImage('./assets/images/Bangs/bowl.pink.png');
  bowlRed = loadImage('./assets/images/Bangs/bowl.red.png');
  bowlUmber = loadImage('./assets/images/Bangs/bowl.umber.png');

  braidsBackBlack = loadImage('./assets/images/Bangs/braids-back.black.png');
  braidsBackBlonde = loadImage('./assets/images/Bangs/braids-back.blonde.png');
  braidsBackBlue = loadImage('./assets/images/Bangs/braids-back.blue.png');
  braidsBackBrunette = loadImage('./assets/images/Bangs/braids-back.brunette.png');
  braidsBackDirty = loadImage('./assets/images/Bangs/braids-back.dirty.png');
  braidsBackGinger = loadImage('./assets/images/Bangs/braids-back.ginger.png');
  braidsBackGrey = loadImage('./assets/images/Bangs/braids-back.grey.png');
  braidsBackPink = loadImage('./assets/images/Bangs/braids-back.pink.png');
  braidsBackRed = loadImage('./assets/images/Bangs/braids-back.red.png');
  braidsBackUmber = loadImage('./assets/images/Bangs/braids-back.umber.png');

  curlyBlack = loadImage('./assets/images/Bangs/curly.black.png');
  curlyBlonde = loadImage('./assets/images/Bangs/curly.blonde.png');
  curlyBlue = loadImage('./assets/images/Bangs/curly.blue.png');
  curlyBrunette = loadImage('./assets/images/Bangs/curly.brunette.png');
  curlyDirty = loadImage('./assets/images/Bangs/curly.dirty.png');
  curlyGinger = loadImage('./assets/images/Bangs/curly.ginger.png');
  curlyGrey = loadImage('./assets/images/Bangs/curly.grey.png');
  curlyPink = loadImage('./assets/images/Bangs/curly.pink.png');
  curlyRed = loadImage('./assets/images/Bangs/curly.red.png');
  curlyUmber = loadImage('./assets/images/Bangs/curly.umber.png');

  curtainBlack = loadImage('./assets/images/Bangs/curtain.black.png');
  curtainBlonde = loadImage('./assets/images/Bangs/curtain.blonde.png');
  curtainBlue = loadImage('./assets/images/Bangs/curtain.blue.png');
  curtainBrunette = loadImage('./assets/images/Bangs/curtain.brunette.png');
  curtainDirty = loadImage('./assets/images/Bangs/curtain.dirty.png');
  curtainGinger = loadImage('./assets/images/Bangs/curtain.ginger.png');
  curtainGrey = loadImage('./assets/images/Bangs/curtain.grey.png');
  curtainPink = loadImage('./assets/images/Bangs/curtain.pink.png');
  curtainRed = loadImage('./assets/images/Bangs/curtain.red.png');
  curtainUmber = loadImage('./assets/images/Bangs/curtain.umber.png');

  fringeBlack = loadImage('./assets/images/Bangs/fringe.black.png');
  fringeBlonde = loadImage('./assets/images/Bangs/fringe.blonde.png');
  fringeBlue = loadImage('./assets/images/Bangs/fringe.blue.png');
  fringeBrunette = loadImage('./assets/images/Bangs/fringe.brunette.png');
  fringeDirty = loadImage('./assets/images/Bangs/fringe.dirty.png');
  fringeGinger = loadImage('./assets/images/Bangs/fringe.ginger.png');
  fringeGrey = loadImage('./assets/images/Bangs/fringe.grey.png');
  fringePink = loadImage('./assets/images/Bangs/fringe.pink.png');
  fringeRed = loadImage('./assets/images/Bangs/fringe.red.png');
  fringeUmber = loadImage('./assets/images/Bangs/fringe.umber.png');

  frizzBlack = loadImage('./assets/images/Bangs/frizz.black.png');
  frizzBlonde = loadImage('./assets/images/Bangs/frizz.blonde.png');
  frizzBlue = loadImage('./assets/images/Bangs/frizz.blue.png');
  frizzBrunette = loadImage('./assets/images/Bangs/frizz.brunette.png');
  frizzDirty = loadImage('./assets/images/Bangs/frizz.dirty.png');
  frizzGinger = loadImage('./assets/images/Bangs/frizz.ginger.png');
  frizzGrey = loadImage('./assets/images/Bangs/frizz.grey.png');
  frizzPink = loadImage('./assets/images/Bangs/frizz.pink.png');
  frizzRed = loadImage('./assets/images/Bangs/frizz.red.png');
  frizzUmber = loadImage('./assets/images/Bangs/frizz.umber.png');

  headscarfBlack = loadImage('./assets/images/Bangs/headscarf.black.png');
  headscarfBlonde = loadImage('./assets/images/Bangs/headscarf.blonde.png');
  headscarfBlue = loadImage('./assets/images/Bangs/headscarf.blue.png');
  headscarfBrunette = loadImage('./assets/images/Bangs/headscarf.brunette.png');
  headscarfDirty = loadImage('./assets/images/Bangs/headscarf.dirty.png');
  headscarfGinger = loadImage('./assets/images/Bangs/headscarf.ginger.png');
  headscarfGrey = loadImage('./assets/images/Bangs/headscarf.grey.png');
  headscarfPink = loadImage('./assets/images/Bangs/headscarf.pink.png');
  headscarfRed = loadImage('./assets/images/Bangs/headscarf.red.png');
  headscarfUmber = loadImage('./assets/images/Bangs/headscarf.umber.png');

  middleFringeBlack = loadImage('./assets/images/Bangs/middle-fringe.black.png');
  middleFringeBlonde = loadImage('./assets/images/Bangs/middle-fringe.blonde.png');
  middleFringeBlue = loadImage('./assets/images/Bangs/middle-fringe.blue.png');
  middleFringeBrunette = loadImage('./assets/images/Bangs/middle-fringe.brunette.png');
  middleFringeDirty = loadImage('./assets/images/Bangs/middle-fringe.dirty.png');
  middleFringeGinger = loadImage('./assets/images/Bangs/middle-fringe.ginger.png');
  middleFringeGrey = loadImage('./assets/images/Bangs/middle-fringe.grey.png');
  middleFringePink = loadImage('./assets/images/Bangs/middle-fringe.pink.png');
  middleFringeRed = loadImage('./assets/images/Bangs/middle-fringe.red.png');
  middleFringeUmber = loadImage('./assets/images/Bangs/middle-fringe.umber.png');

  middleBlack = loadImage('./assets/images/Bangs/middle.black.png');
  middleBlonde = loadImage('./assets/images/Bangs/middle.blonde.png');
  middleBlue = loadImage('./assets/images/Bangs/middle.blue.png');
  middleBrunette = loadImage('./assets/images/Bangs/middle.brunette.png');
  middleDirty = loadImage('./assets/images/Bangs/middle.dirty.png');
  middleGinger = loadImage('./assets/images/Bangs/middle.ginger.png');
  middleGrey = loadImage('./assets/images/Bangs/middle.grey.png');
  middlePink = loadImage('./assets/images/Bangs/middle.pink.png');
  middleRed = loadImage('./assets/images/Bangs/middle.red.png');
  middleUmber = loadImage('./assets/images/Bangs/middle.umber.png');

  shavedBlack = loadImage('./assets/images/Bangs/shaved.black.png');
  shavedBlonde = loadImage('./assets/images/Bangs/shaved.blonde.png');
  shavedBlue = loadImage('./assets/images/Bangs/shaved.blue.png');
  shavedBrunette = loadImage('./assets/images/Bangs/shaved.brunette.png');
  shavedDirty = loadImage('./assets/images/Bangs/shaved.dirty.png');
  shavedGinger = loadImage('./assets/images/Bangs/shaved.ginger.png');
  shavedGrey = loadImage('./assets/images/Bangs/shaved.grey.png');
  shavedPink = loadImage('./assets/images/Bangs/shaved.pink.png');
  shavedRed = loadImage('./assets/images/Bangs/shaved.red.png');
  shavedUmber = loadImage('./assets/images/Bangs/shaved.umber.png');

  shortCurlyBlack = loadImage('./assets/images/Bangs/short-curly.black.png');
  shortCurlyBlonde = loadImage('./assets/images/Bangs/short-curly.blonde.png');
  shortCurlyBlue = loadImage('./assets/images/Bangs/short-curly.blue.png');
  shortCurlyBrunette = loadImage('./assets/images/Bangs/short-curly.brunette.png');
  shortCurlyDirty = loadImage('./assets/images/Bangs/short-curly.dirty.png');
  shortCurlyGinger = loadImage('./assets/images/Bangs/short-curly.ginger.png');
  shortCurlyGrey = loadImage('./assets/images/Bangs/short-curly.grey.png');
  shortCurlyPink = loadImage('./assets/images/Bangs/short-curly.pink.png');
  shortCurlyRed = loadImage('./assets/images/Bangs/short-curly.red.png');
  shortCurlyUmber = loadImage('./assets/images/Bangs/short-curly.umber.png');

  shortBlack = loadImage('./assets/images/Bangs/short.black.png');
  shortBlonde = loadImage('./assets/images/Bangs/short.blonde.png');
  shortBlue = loadImage('./assets/images/Bangs/short.blue.png');
  shortBrunette = loadImage('./assets/images/Bangs/short.brunette.png');
  shortDirty = loadImage('./assets/images/Bangs/short.dirty.png');
  shortGinger = loadImage('./assets/images/Bangs/short.ginger.png');
  shortGrey = loadImage('./assets/images/Bangs/short.grey.png');
  shortPink = loadImage('./assets/images/Bangs/short.pink.png');
  shortRed = loadImage('./assets/images/Bangs/short.red.png');
  shortUmber = loadImage('./assets/images/Bangs/short.umber.png');

  sideBlack = loadImage('./assets/images/Bangs/side.black.png');
  sideBlonde = loadImage('./assets/images/Bangs/side.blonde.png');
  sideBlue = loadImage('./assets/images/Bangs/side.blue.png');
  sideBrunette = loadImage('./assets/images/Bangs/side.brunette.png');
  sideDirty = loadImage('./assets/images/Bangs/side.dirty.png');
  sideGinger = loadImage('./assets/images/Bangs/side.ginger.png');
  sideGrey = loadImage('./assets/images/Bangs/side.grey.png');
  sidePink = loadImage('./assets/images/Bangs/side.pink.png');
  sideRed = loadImage('./assets/images/Bangs/side.red.png');
  sideUmber = loadImage('./assets/images/Bangs/side.umber.png');

  click = new Audio("./assets/sounds/ui-pop.mp3");
  pick = new Audio("./assets/sounds/ui-pick.mp3");
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
  drawHair();
  drawFace();
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
    pick.play();
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
    pick.play();
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
    pick.play();
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
    pick.play();
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
    pick.play();
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
    pick.play();
    bangsSelectButtons.forEach(b => b.reset());
    btn.clicked();

      if (btn === selectBangsNone) {
      selectedBangs = "none";
      }
      else if (btn === selectBigFrizz) { selectedBangs = "bigFrizz"; }
      else if (btn === selectBowl) { selectedBangs = "bowl"; }
      else if (btn === selectBackBraids) { selectedBangs = "braidsBack"; }
      else if (btn === selectCurly) { selectedBangs = "curly"; }
      else if (btn === selectCurtain) { selectedBangs = "curtain"; }
      else if (btn === selectFringe) { selectedBangs = "fringe"; }
      else if (btn === selectFrizz) { selectedBangs = "frizz"; }
      else if (btn === selectHeadScarf) { selectedBangs = "headscarf"; }
      else if (btn === selectMiddleFringe) { selectedBangs = "middleFringe"; }
      else if (btn === selectMiddle) { selectedBangs = "middle"; }
      else if (btn === selectShaved) { selectedBangs = "shaved"; }
      else if (btn === selectShortCurly) { selectedBangs = "shortCurly"; }
      else if (btn === selectShort) { selectedBangs = "short"; }
      else if (btn === selectSide) { selectedBangs = "side"; }
    
    return;
    }
  }
  for (let btn of hairSelectButtons) {
    if (btn.over()) {
      pick.play();
    

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
      pick.play();
      

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
    pick.play();
    dyeSelectButtons.forEach(b => b.reset());
    btn.clicked();

    if (btn === selectBlack) selectedDye = "black";
    if (btn === selectBlonde) selectedDye = "blonde";
    if (btn === selectBlue) selectedDye = "blue";
    if (btn === selectBrunette) selectedDye = "brunette";
    if (btn === selectDirty) selectedDye = "dirty";
    if (btn === selectGinger) selectedDye = "ginger";
    if (btn === selectGrey) selectedDye = "grey";
    if (btn === selectPink) selectedDye = "pink";
    if (btn === selectRed) selectedDye = "red";
    if (btn === selectUmber) selectedDye = "umber";

    return;
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
      if (selectedSkin === "dark") imgD = sharpDark;
    }
    else if (selectedDetail === "round") {
      if (selectedSkin === "peach") imgD = roundPeach;
      if (selectedSkin === "tan") imgD = roundTan;
      if (selectedSkin === "brown") imgD = roundBrown;
      if (selectedSkin === "dark") imgD = roundDark;

    }
  }

  let imgN;

  if (selectedNose === "bent") imgN = bent;
  if (selectedNose === "button") imgN = button;
  if (selectedNose === "flat") imgN = flat;
  if (selectedNose === "straight") imgN = straight;

  let imgM;
  let oOffset = 0;

  // adjust based on style
  if (selectedMouth === "neutral") {
    oOffset = -8;
  }
  
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

  if (imgD) image(imgD, 80, 228);   // draw final result 
  if (imgM) image(imgM, 80, 228 + oOffset);   // draw final result 
  if (imgN) image(imgN, 80, 228);   // draw final result 
  image(eyes, 80, 228);
}


function drawHead() {
  let img;
  let Offset = 0;
  // adjust based on style
  if (selectedHeadShape === "long") {
    Offset = 8;
  }
  if (selectedSkin === "peach") {
    Offset = -8;
  }
   if (selectedSkin === "peach" && selectedHeadShape === "long") {
    Offset = 0;
  }

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

  if (img) image(img, 80, 220 + Offset);   // draw final result
}

function drawHair() {
  let img;
  let xOffset = 0;
  let yOffset = 0;

  if (selectedBangs === "bowl") {
    yOffset = -8;
  }
  if (selectedBangs === "bigFrizz") {
    yOffset = -16;
  }
  if (selectedBangs === "braidsBack") {
    yOffset = -8;
  }
  if (selectedBangs === "curly") {
    yOffset = -16;
  }
  if (selectedBangs === "curtain") {
    yOffset = 8;
  }
  if (selectedBangs === "fringe") {
    yOffset = 8;
  }
  if (selectedBangs === "frizz") {
    yOffset = -8;
  }
  if (selectedBangs === "headscarf") {
    yOffset = 64;
  }
  if (selectedBangs === "middleFringe") {
    xOffset = 8
  }
  if (selectedBangs === "frizz") {
    yOffset = -8;
  }
  if (selectedBangs === "shortCurly") {
    yOffset = -8;
  }
  if (selectedBangs === "short") {
    yOffset = -8;
  }

  if (selectedBangs === "bigFrizz") {
    if (selectedDye === "black") img = bigFrizzBlack;
    if (selectedDye === "blonde") img = bigFrizzBlonde;
    if (selectedDye === "blue") img = bigFrizzBlue;
    if (selectedDye === "brunette") img = bigFrizzBrunette;
    if (selectedDye === "dirty") img = bigFrizzDirty;
    if (selectedDye === "ginger") img = bigFrizzGinger;
    if (selectedDye === "grey") img = bigFrizzGrey;
    if (selectedDye === "pink") img = bigFrizzPink;
    if (selectedDye === "red") img = bigFrizzRed;
    if (selectedDye === "umber") img = bigFrizzUmber;
  }

  if (selectedBangs === "bowl") {
    if (selectedDye === "black") img = bowlBlack;
    if (selectedDye === "blonde") img = bowlBlonde;
    if (selectedDye === "blue") img = bowlBlue;
    if (selectedDye === "brunette") img = bowlBrunette;
    if (selectedDye === "dirty") img = bowlDirty;
    if (selectedDye === "ginger") img = bowlGinger;
    if (selectedDye === "grey") img = bowlGrey;
    if (selectedDye === "pink") img = bowlPink;
    if (selectedDye === "red") img = bowlRed;
    if (selectedDye === "umber") img = bowlUmber;
  }

  if (selectedBangs === "braidsBack") {
    if (selectedDye === "black") img = braidsBackBlack;
    if (selectedDye === "blonde") img = braidsBackBlonde;
    if (selectedDye === "blue") img = braidsBackBlue;
    if (selectedDye === "brunette") img = braidsBackBrunette;
    if (selectedDye === "dirty") img = braidsBackDirty;
    if (selectedDye === "ginger") img = braidsBackGinger;
    if (selectedDye === "grey") img = braidsBackGrey;
    if (selectedDye === "pink") img = braidsBackPink;
    if (selectedDye === "red") img = braidsBackRed;
    if (selectedDye === "umber") img = braidsBackUmber;
  }

  if (selectedBangs === "curly") {
    if (selectedDye === "black") img = curlyBlack;
    if (selectedDye === "blonde") img = curlyBlonde;
    if (selectedDye === "blue") img = curlyBlue;
    if (selectedDye === "brunette") img = curlyBrunette;
    if (selectedDye === "dirty") img = curlyDirty;
    if (selectedDye === "ginger") img = curlyGinger;
    if (selectedDye === "grey") img = curlyGrey;
    if (selectedDye === "pink") img = curlyPink;
    if (selectedDye === "red") img = curlyRed;
    if (selectedDye === "umber") img = curlyUmber;
  }

  if (selectedBangs === "curtain") {
    if (selectedDye === "black") img = curtainBlack;
    if (selectedDye === "blonde") img = curtainBlonde;
    if (selectedDye === "blue") img = curtainBlue;
    if (selectedDye === "brunette") img = curtainBrunette;
    if (selectedDye === "dirty") img = curtainDirty;
    if (selectedDye === "ginger") img = curtainGinger;
    if (selectedDye === "grey") img = curtainGrey;
    if (selectedDye === "pink") img = curtainPink;
    if (selectedDye === "red") img = curtainRed;
    if (selectedDye === "umber") img = curtainUmber;
  }

  if (selectedBangs === "fringe") {
    if (selectedDye === "black") img = fringeBlack;
    if (selectedDye === "blonde") img = fringeBlonde;
    if (selectedDye === "blue") img = fringeBlue;
    if (selectedDye === "brunette") img = fringeBrunette;
    if (selectedDye === "dirty") img = fringeDirty;
    if (selectedDye === "ginger") img = fringeGinger;
    if (selectedDye === "grey") img = fringeGrey;
    if (selectedDye === "pink") img = fringePink;
    if (selectedDye === "red") img = fringeRed;
    if (selectedDye === "umber") img = fringeUmber;
  }

  if (selectedBangs === "frizz") {
    if (selectedDye === "black") img = frizzBlack;
    if (selectedDye === "blonde") img = frizzBlonde;
    if (selectedDye === "blue") img = frizzBlue;
    if (selectedDye === "brunette") img = frizzBrunette;
    if (selectedDye === "dirty") img = frizzDirty;
    if (selectedDye === "ginger") img = frizzGinger;
    if (selectedDye === "grey") img = frizzGrey;
    if (selectedDye === "pink") img = frizzPink;
    if (selectedDye === "red") img = frizzRed;
    if (selectedDye === "umber") img = frizzUmber;
  }

  if (selectedBangs === "headscarf") {
    if (selectedDye === "black") img = headscarfBlack;
    if (selectedDye === "blonde") img = headscarfBlonde;
    if (selectedDye === "blue") img = headscarfBlue;
    if (selectedDye === "brunette") img = headscarfBrunette;
    if (selectedDye === "dirty") img = headscarfDirty;
    if (selectedDye === "ginger") img = headscarfGinger;
    if (selectedDye === "grey") img = headscarfGrey;
    if (selectedDye === "pink") img = headscarfPink;
    if (selectedDye === "red") img = headscarfRed;
    if (selectedDye === "umber") img = headscarfUmber;
  }

  if (selectedBangs === "middleFringe") {
    if (selectedDye === "black") img = middleFringeBlack;
    if (selectedDye === "blonde") img = middleFringeBlonde;
    if (selectedDye === "blue") img = middleFringeBlue;
    if (selectedDye === "brunette") img = middleFringeBrunette;
    if (selectedDye === "dirty") img = middleFringeDirty;
    if (selectedDye === "ginger") img = middleFringeGinger;
    if (selectedDye === "grey") img = middleFringeGrey;
    if (selectedDye === "pink") img = middleFringePink;
    if (selectedDye === "red") img = middleFringeRed;
    if (selectedDye === "umber") img = middleFringeUmber;
  }

  if (selectedBangs === "middle") {
    if (selectedDye === "black") img = middleBlack;
    if (selectedDye === "blonde") img = middleBlonde;
    if (selectedDye === "blue") img = middleBlue;
    if (selectedDye === "brunette") img = middleBrunette;
    if (selectedDye === "dirty") img = middleDirty;
    if (selectedDye === "ginger") img = middleGinger;
    if (selectedDye === "grey") img = middleGrey;
    if (selectedDye === "pink") img = middlePink;
    if (selectedDye === "red") img = middleRed;
    if (selectedDye === "umber") img = middleUmber;
  }

  if (selectedBangs === "shaved") {
    if (selectedDye === "black") img = shavedBlack;
    if (selectedDye === "blonde") img = shavedBlonde;
    if (selectedDye === "blue") img = shavedBlue;
    if (selectedDye === "brunette") img = shavedBrunette;
    if (selectedDye === "dirty") img = shavedDirty;
    if (selectedDye === "ginger") img = shavedGinger;
    if (selectedDye === "grey") img = shavedGrey;
    if (selectedDye === "pink") img = shavedPink;
    if (selectedDye === "red") img = shavedRed;
    if (selectedDye === "umber") img = shavedUmber;
  }

  if (selectedBangs === "shortCurly") {
    if (selectedDye === "black") img = shortCurlyBlack;
    if (selectedDye === "blonde") img = shortCurlyBlonde;
    if (selectedDye === "blue") img = shortCurlyBlue;
    if (selectedDye === "brunette") img = shortCurlyBrunette;
    if (selectedDye === "dirty") img = shortCurlyDirty;
    if (selectedDye === "ginger") img = shortCurlyGinger;
    if (selectedDye === "grey") img = shortCurlyGrey;
    if (selectedDye === "pink") img = shortCurlyPink;
    if (selectedDye === "red") img = shortCurlyRed;
    if (selectedDye === "umber") img = shortCurlyUmber;
  }

  if (selectedBangs === "short") {
    if (selectedDye === "black") img = shortBlack;
    if (selectedDye === "blonde") img = shortBlonde;
    if (selectedDye === "blue") img = shortBlue;
    if (selectedDye === "brunette") img = shortBrunette;
    if (selectedDye === "dirty") img = shortDirty;
    if (selectedDye === "ginger") img = shortGinger;
    if (selectedDye === "grey") img = shortGrey;
    if (selectedDye === "pink") img = shortPink;
    if (selectedDye === "red") img = shortRed;
    if (selectedDye === "umber") img = shortUmber;
  }

  if (selectedBangs === "side") {
    if (selectedDye === "black") img = sideBlack;
    if (selectedDye === "blonde") img = sideBlonde;
    if (selectedDye === "blue") img = sideBlue;
    if (selectedDye === "brunette") img = sideBrunette;
    if (selectedDye === "dirty") img = sideDirty;
    if (selectedDye === "ginger") img = sideGinger;
    if (selectedDye === "grey") img = sideGrey;
    if (selectedDye === "pink") img = sidePink;
    if (selectedDye === "red") img = sideRed;
    if (selectedDye === "umber") img = sideUmber;
  }

  if (img) image(img, 80 + xOffset, 172 + yOffset);   // draw final result
}

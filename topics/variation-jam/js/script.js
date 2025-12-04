/**
 * Variation Jam!
 * Norah Wilcox
 * 
 * A pixel art character creator!
 */

"use strict";

// Setting which screen, file and face character features appear when the page loads
var whichscreen = "start";
var whichfile = "head";

let selectedHeadShape = "reg"; 
let selectedSkin = "peach";

let selectedNose = "button";  
let selectedMouth = "buck"; 
let selectedDetail = "none"; 

let selectedBangs = "curly";
let selectedHair = "shortCut";
let selectedStrands = "1";
let selectedDye = "black";

// Declares start button
let start;
let startButtonUp;
let startButtonDown;

// Declares the notepad the character sits on
let frame;

// Declares the done button
let done;
let doneButtonUp;
let doneButtonDown;

// Declares the arrays for each type of select button
let headSelectButtons = [];
let skinSelectButtons = [];
let noseSelectButtons = [];
let mouthSelectButtons = [];
let detailSelectButtons = [];
let bangsSelectButtons = [];
let hairSelectButtons = [];
let strandSelectButtons = [];
let dyeSelectButtons = [];

// Declares head shapes
let selectLong;
let selectReg;
let selectWide;

// Declares skin tones
let selectPeach;
let selectTan;
let selectBrown;
let selectDark;

// Declares nose types 
let selectBent;
let selectButton;
let selectFlat;
let selectStraight;

// Declares mouth types 
let selectBuck;
let selectLipsSmile;
let selectLips;
let selectNeutral;
let selectSmile;
let selectTeeth;

// Declares details
let selectBags;
let selectBlush;
let selectFreckles;
let selectSharp;
let selectRound;
let selectDetailNone;

// Declares select buttons for bangs 
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

// Declares select buttons for hair 
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

// Declares select buttons for strands 
let selectStrands1;
let selectStrands2;
let selectStrandsNone;

// Declares select buttons for hair colour 
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

// Declares select general buttons 
let selectButtonUp;
let selectButtonDown;

// Declares visual elements for the title screen
let title;
let namez;
let file;
let openTab;
let closedTab;

// Declares the eyes (dont ever move)
let eyes;

// Declares the heads along with each skin colour
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

// Declares noses
let bent;
let button;
let flat;
let straight;

// Declares mouths
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

// Declares details along with each skin type
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

// Declares each bangs type along with each hair colour 
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
// ...
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
// ...
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
// ...
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
// ...
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
// ...
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
// ...
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
// ...
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
// ...
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
// ...
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
// ...
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
// ...
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
// ...
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
// ...
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

// Declares hair types along with each colour variation
let braidsBlack;
let braidsBlonde;
let braidsBlue;
let braidsBrunette;
let braidsDirty;
let braidsGinger;
let braidsGrey;
let braidsPink;
let braidsRed;
let braidsUmber;
// ...
let bunsBlack;
let bunsBlonde;
let bunsBlue;
let bunsBrunette;
let bunsDirty;
let bunsGinger;
let bunsGrey;
let bunsPink;
let bunsRed;
let bunsUmber;
// ...
let curlyCutBlack;
let curlyCutBlonde;
let curlyCutBlue;
let curlyCutBrunette;
let curlyCutDirty;
let curlyCutGinger;
let curlyCutGrey;
let curlyCutPink;
let curlyCutRed;
let curlyCutUmber;
// ...
let longPonyBlack;
let longPonyBlonde;
let longPonyBlue;
let longPonyBrunette;
let longPonyDirty;
let longPonyGinger;
let longPonyGrey;
let longPonyPink;
let longPonyRed;
let longPonyUmber;
// ...
let pigtailsBlack;
let pigtailsBlonde;
let pigtailsBlue;
let pigtailsBrunette;
let pigtailsDirty;
let pigtailsGinger;
let pigtailsGrey;
let pigtailsPink;
let pigtailsRed;
let pigtailsUmber;
// ...
let ponyBlack;
let ponyBlonde;
let ponyBlue;
let ponyBrunette;
let ponyDirty;
let ponyGinger;
let ponyGrey;
let ponyPink;
let ponyRed;
let ponyUmber;
// ...
let poofyBlack;
let poofyBlonde;
let poofyBlue;
let poofyBrunette;
let poofyDirty;
let poofyGinger;
let poofyGrey;
let poofyPink;
let poofyRed;
let poofyUmber;
// ...
let shortCutBlack;
let shortCutBlonde;
let shortCutBlue;
let shortCutBrunette;
let shortCutDirty;
let shortCutGinger;
let shortCutGrey;
let shortCutPink;
let shortCutRed;
let shortCutUmber;
// ...
let straightCutBlack;
let straightCutBlonde;
let straightCutBlue;
let straightCutBrunette;
let straightCutDirty;
let straightCutGinger;
let straightCutGrey;
let straightCutPink;
let straightCutRed;
let straightCutUmber;
// ...
let wavyBlack;
let wavyBlonde;
let wavyBlue;
let wavyBrunette;
let wavyDirty;
let wavyGinger;
let wavyGrey;
let wavyPink;
let wavyRed;
let wavyUmber;
// ...
let black1;
let blonde1;
let brunette1;
let dirty1;
let ginger1;
let grey1;
let pink1;
let red1;
let umber1;
let blue1;
// ...
let black2;
let blonde2;
let brunette2;
let dirty2;
let ginger2;
let grey2;
let pink2;
let umber2;
let red2;
let blue2;

// Declares audio
let click;
let pick;
let allDone;

// Declares the invisible tabs users can click to go to a different section
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

// Preloads all assets 
function preload() {
  // Start screen elements 
  startButtonUp = loadImage('./assets/images/start-button-up.png');
  startButtonDown = loadImage('./assets/images/start-button-down.png');
  title = loadImage('./assets/images/Title_screen.png');
  namez = loadImage('./assets/images/name.png');

  // select buttons
  selectButtonUp = loadImage('./assets/images/select-button-up.png');
  selectButtonDown = loadImage('./assets/images/select-button-down.png');
 
  // game screen elements 
  file = loadImage('./assets/images/file.png');
  openTab = loadImage('./assets/images/file.tab.light.png');
  closedTab = loadImage('./assets/images/file.tab.dark.png');
  frame = loadImage('./assets/images/portrait.png');

  // done button
  doneButtonUp = loadImage('./assets/images/done-button-up.png');
  doneButtonDown = loadImage('./assets/images/done-button-down.png'); 

  /**
   * Character elements 
   */
  // loads the eyes
  eyes = loadImage('./assets/images/eyes.2.png');

  // loads the heads
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

  // loads the noses
  bent = loadImage('./assets/images/Noses/bent.png');
  button = loadImage('./assets/images/Noses/button.png');
  flat = loadImage('./assets/images/Noses/flat.png');
  straight = loadImage('./assets/images/Noses/straight.png');

  // loads the mouths
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

  // loads the details
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
  
  // loads the bangs
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
  // ...
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
  // ...
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
  // ...
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
  // ...
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
  // ...
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
  // ...
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
  // ...
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
  // ...
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
  // ...
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
  // ...
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
  // ...
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
  // ...
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
  // ...
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

  // Loads the hair
  braidsBlack = loadImage('./assets/images/Hair/braids.black.png');
  braidsBlonde = loadImage('./assets/images/Hair/braids.blonde.png');
  braidsBlue = loadImage('./assets/images/Hair/braids.blue.png');
  braidsBrunette = loadImage('./assets/images/Hair/braids.brunette.png');
  braidsDirty = loadImage('./assets/images/Hair/braids.dirty.png');
  braidsGinger = loadImage('./assets/images/Hair/braids.ginger.png');
  braidsGrey = loadImage('./assets/images/Hair/braids.grey.png');
  braidsPink = loadImage('./assets/images/Hair/braids.pink.png');
  braidsRed = loadImage('./assets/images/Hair/braids.red.png');
  braidsUmber = loadImage('./assets/images/Hair/braids.umber.png');
  // ...
  bunsBlack = loadImage('./assets/images/Hair/buns.black.png');
  bunsBlonde = loadImage('./assets/images/Hair/buns.blonde.png');
  bunsBlue = loadImage('./assets/images/Hair/buns.blue.png');
  bunsBrunette = loadImage('./assets/images/Hair/buns.brunette.png');
  bunsDirty = loadImage('./assets/images/Hair/buns.dirty.png');
  bunsGinger = loadImage('./assets/images/Hair/buns.ginger.png');
  bunsGrey = loadImage('./assets/images/Hair/buns.grey.png');
  bunsPink = loadImage('./assets/images/Hair/buns.pink.png');
  bunsRed = loadImage('./assets/images/Hair/buns.red.png');
  bunsUmber = loadImage('./assets/images/Hair/buns.umber.png');
  // ...
  curlyCutBlack = loadImage('./assets/images/Hair/curly-cut.black.png');
  curlyCutBlonde = loadImage('./assets/images/Hair/curly-cut.blonde.png');
  curlyCutBlue = loadImage('./assets/images/Hair/curly-cut.blue.png');
  curlyCutBrunette = loadImage('./assets/images/Hair/curly-cut.brunette.png');
  curlyCutDirty = loadImage('./assets/images/Hair/curly-cut.dirty.png');
  curlyCutGinger = loadImage('./assets/images/Hair/curly-cut.ginger.png');
  curlyCutGrey = loadImage('./assets/images/Hair/curly-cut.grey.png');
  curlyCutPink = loadImage('./assets/images/Hair/curly-cut.pink.png');
  curlyCutRed = loadImage('./assets/images/Hair/curly-cut.red.png');
  curlyCutUmber = loadImage('./assets/images/Hair/curly-cut.umber.png');
  // ...
  longPonyBlack = loadImage('./assets/images/Hair/long-pony.black.png');
  longPonyBlonde = loadImage('./assets/images/Hair/long-pony.blonde.png');
  longPonyBlue = loadImage('./assets/images/Hair/long-pony.blue.png');
  longPonyBrunette = loadImage('./assets/images/Hair/long-pony.brunette.png');
  longPonyDirty = loadImage('./assets/images/Hair/long-pony.dirty.png');
  longPonyGinger = loadImage('./assets/images/Hair/long-pony.ginger.png');
  longPonyGrey = loadImage('./assets/images/Hair/long-pony.grey.png');
  longPonyPink = loadImage('./assets/images/Hair/long-pony.pink.png');
  longPonyRed = loadImage('./assets/images/Hair/long-pony.red.png');
  longPonyUmber = loadImage('./assets/images/Hair/long-pony.umber.png');
  // ...
  pigtailsBlack = loadImage('./assets/images/Hair/pigtails.black.png');
  pigtailsBlonde = loadImage('./assets/images/Hair/pigtails.blonde.png');
  pigtailsBlue = loadImage('./assets/images/Hair/pigtails.blue.png');
  pigtailsBrunette = loadImage('./assets/images/Hair/pigtails.brunette.png');
  pigtailsDirty = loadImage('./assets/images/Hair/pigtails.dirty.png');
  pigtailsGinger = loadImage('./assets/images/Hair/pigtails.ginger.png');
  pigtailsGrey = loadImage('./assets/images/Hair/pigtails.grey.png');
  pigtailsPink = loadImage('./assets/images/Hair/pigtails.pink.png');
  pigtailsRed = loadImage('./assets/images/Hair/pigtails.red.png');
  pigtailsUmber = loadImage('./assets/images/Hair/pigtails.umber.png');
  // ...
  ponyBlack = loadImage('./assets/images/Hair/pony.black.png');
  ponyBlonde = loadImage('./assets/images/Hair/pony.blonde.png');
  ponyBlue = loadImage('./assets/images/Hair/pony.blue.png');
  ponyBrunette = loadImage('./assets/images/Hair/pony.brunette.png');
  ponyDirty = loadImage('./assets/images/Hair/pony.dirty.png');
  ponyGinger = loadImage('./assets/images/Hair/pony.ginger.png');
  ponyGrey = loadImage('./assets/images/Hair/pony.grey.png');
  ponyPink = loadImage('./assets/images/Hair/pony.pink.png');
  ponyRed = loadImage('./assets/images/Hair/pony.red.png');
  ponyUmber = loadImage('./assets/images/Hair/pony.umber.png');
  // ...
  poofyBlack = loadImage('./assets/images/Hair/poofy.black.png');
  poofyBlonde = loadImage('./assets/images/Hair/poofy.blonde.png');
  poofyBlue = loadImage('./assets/images/Hair/poofy.blue.png');
  poofyBrunette = loadImage('./assets/images/Hair/poofy.brunette.png');
  poofyDirty = loadImage('./assets/images/Hair/poofy.dirty.png');
  poofyGinger = loadImage('./assets/images/Hair/poofy.ginger.png');
  poofyGrey = loadImage('./assets/images/Hair/poofy.grey.png');
  poofyPink = loadImage('./assets/images/Hair/poofy.pink.png');
  poofyRed = loadImage('./assets/images/Hair/poofy.red.png');
  poofyUmber = loadImage('./assets/images/Hair/poofy.umber.png');
  // ...
  shortCutBlack = loadImage('./assets/images/Hair/short-cut.black.png');
  shortCutBlonde = loadImage('./assets/images/Hair/short-cut.blonde.png');
  shortCutBlue = loadImage('./assets/images/Hair/short-cut.blue.png');
  shortCutBrunette = loadImage('./assets/images/Hair/short-cut.brunette.png');
  shortCutDirty = loadImage('./assets/images/Hair/short-cut.dirty.png');
  shortCutGinger = loadImage('./assets/images/Hair/short-cut.ginger.png');
  shortCutGrey = loadImage('./assets/images/Hair/short-cut.grey.png');
  shortCutPink = loadImage('./assets/images/Hair/short-cut.pink.png');
  shortCutRed = loadImage('./assets/images/Hair/short-cut.red.png');
  shortCutUmber = loadImage('./assets/images/Hair/short-cut.umber.png');
  // ...
  straightCutBlack = loadImage('./assets/images/Hair/straight.black.png');
  straightCutBlonde = loadImage('./assets/images/Hair/straight.blonde.png');
  straightCutBlue = loadImage('./assets/images/Hair/straight.blue.png');
  straightCutBrunette = loadImage('./assets/images/Hair/straight.brunette.png');
  straightCutDirty = loadImage('./assets/images/Hair/straight.dirty.png');
  straightCutGinger = loadImage('./assets/images/Hair/straight.ginger.png');
  straightCutGrey = loadImage('./assets/images/Hair/straight.grey.png');
  straightCutPink = loadImage('./assets/images/Hair/straight.pink.png');
  straightCutRed = loadImage('./assets/images/Hair/straight.red.png');
  straightCutUmber = loadImage('./assets/images/Hair/straight.umber.png');
  // ...
  wavyBlack = loadImage('./assets/images/Hair/wavy.black.png');
  wavyBlonde = loadImage('./assets/images/Hair/wavy.blonde.png');
  wavyBlue = loadImage('./assets/images/Hair/wavy.blue.png');
  wavyBrunette = loadImage('./assets/images/Hair/wavy.brunette.png');
  wavyDirty = loadImage('./assets/images/Hair/wavy.dirty.png');
  wavyGinger = loadImage('./assets/images/Hair/wavy.ginger.png');
  wavyGrey = loadImage('./assets/images/Hair/wavy.grey.png');
  wavyPink = loadImage('./assets/images/Hair/wavy.pink.png');
  wavyRed = loadImage('./assets/images/Hair/wavy.red.png');
  wavyUmber = loadImage('./assets/images/Hair/wavy.umber.png');
  // ...
  black1 = loadImage('./assets/images/Strands/1.black.png');
  blonde1 = loadImage('./assets/images/Strands/1.blonde.png');
  brunette1 = loadImage('./assets/images/Strands/1.brunette.png');
  dirty1 = loadImage('./assets/images/Strands/1.dirty.png');
  ginger1 = loadImage('./assets/images/Strands/1.ginger.png');
  grey1 = loadImage('./assets/images/Strands/1.grey.png');
  pink1 = loadImage('./assets/images/Strands/1.pink.png');
  red1 = loadImage('./assets/images/Strands/1.red.png');
  umber1 = loadImage('./assets/images/Strands/1.umber.png');
  blue1 = loadImage('./assets/images/Strands/1.blue.png');
  // ...
  black2 = loadImage('./assets/images/Strands/2.black.png');
  blonde2 = loadImage('./assets/images/Strands/2.blonde.png');
  brunette2 = loadImage('./assets/images/Strands/2.brunette.png');
  dirty2 = loadImage('./assets/images/Strands/2.dirty.png');
  ginger2 = loadImage('./assets/images/Strands/2.ginger.png');
  grey2 = loadImage('./assets/images/Strands/2.grey.png');
  pink2 = loadImage('./assets/images/Strands/2.pink.png');
  umber2 = loadImage('./assets/images/Strands/2.umber.png');
  red2 = loadImage('./assets/images/Strands/2.red.png');
  blue2 = loadImage('./assets/images/Strands/2.blue.png');

  // Loads the audios
  click = new Audio("./assets/sounds/ui-pop.mp3");
  pick = new Audio("./assets/sounds/ui-pick.mp3");
  allDone = new Audio("./assets/sounds/ui-done.mp3");
}

function setup() {
  createCanvas(1200, 800);
  // Creates the starts and done buttons
  start = new Start(445, 500, startButtonUp);
  done = new Done(950, 530, doneButtonUp);

  /**
   * HEAD BUTTONS
   */
  // head shapes
  selectLong = new Select(500, 230, selectButtonUp, selectButtonDown);
  selectReg = new Select(500, 290, selectButtonUp, selectButtonDown);
  // Starts the page with the regular head button selected
  selectReg.selected = true;
  selectWide = new Select(500, 350, selectButtonUp, selectButtonDown);

  // skin tones
  selectPeach = new Select(770, 230, selectButtonUp, selectButtonDown);
  // Starts the page with the peach skin button selected
  selectPeach.selected = true;
  selectTan = new Select(770, 290, selectButtonUp, selectButtonDown);
  selectBrown = new Select(770, 350, selectButtonUp, selectButtonDown);
  selectDark = new Select(770, 410, selectButtonUp, selectButtonDown);

  /**
   * FACE BUTTONS
   */
  // noses
  selectBent = new Select(500, 230, selectButtonUp, selectButtonDown);
  selectButton = new Select(500, 290, selectButtonUp, selectButtonDown);
  // Starts the page with the button nose button selected
  selectButton.selected = true;
  selectFlat = new Select(500, 350, selectButtonUp, selectButtonDown);
  selectStraight = new Select(500, 410, selectButtonUp, selectButtonDown);

  // mouths
  selectBuck = new Select(700, 230, selectButtonUp, selectButtonDown);
  // Starts the page with the buck teeth mouth button selected
  selectBuck.selected = true;
  selectLipsSmile = new Select(700, 290, selectButtonUp, selectButtonDown);
  selectLips = new Select(700, 350, selectButtonUp, selectButtonDown);
  selectNeutral = new Select(700, 410, selectButtonUp, selectButtonDown);
  selectSmile = new Select(700, 470, selectButtonUp, selectButtonDown);
  selectTeeth = new Select(700, 530, selectButtonUp, selectButtonDown);

  // details
  selectBags = new Select(900, 230, selectButtonUp, selectButtonDown);
  selectBlush = new Select(900, 290, selectButtonUp, selectButtonDown);
  selectFreckles = new Select(900, 350, selectButtonUp, selectButtonDown);
  selectSharp = new Select(900, 410, selectButtonUp, selectButtonDown);
  selectRound = new Select(900, 470, selectButtonUp, selectButtonDown);
  selectDetailNone = new Select(900, 530, selectButtonUp, selectButtonDown);
  // Starts the page with no face detail buttons selected
  selectDetailNone.selected = true;

  /**
   * HAIR BUTTONS
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
  // Starts the page with the curly bangs button selected
  selectCurly.selected = true;

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
  // Starts the page with the short cut hair button selected
  selectShortCut.selected = true;

  /**
   * HAIR2 BUTTONS
   */
  // strands
  selectStrands1 = new Select(500, 230, selectButtonUp, selectButtonDown);
  selectStrands2  = new Select(500, 290, selectButtonUp, selectButtonDown);
  selectStrandsNone = new Select(500, 350, selectButtonUp, selectButtonDown);
  // Starts the page with the 1 strand button selected
  selectStrands1.selected = true;

  // dye 
  selectBlack = new Select(700, 230, selectButtonUp, selectButtonDown);
  // Starts the page black hair colour button selected
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

  // Creates arrays for the customizable element buttons
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

/**  
 * Draws each screen when called
*/ 
function draw() {
  background(255, 255, 255);

  // When the site loads, open the start screen 
    if (whichscreen === "start") {
        startScreen()
    }
  // Where the user can create their character
    else if (whichscreen === "game") {
        gameScreen()
    }
      // Rip did not happen
    else if (whichscreen === "world") {
        worldScreen()
    }
      // View the final result!
    else {
        productScreen()
    }
}

// Creates the start screen with all the start elements
function startScreen() {
  image(title, 360, 90);
  image(namez, 435, 240);
  start.display();
}

// Creates the game screen where the user customizes their character
function gameScreen() {
  // Draws the notepad the character sits on
  image(frame, -80, 20);

  // Draws the invisible tabs clicked on my the users to pick a section 
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

  // Draws the file without any tabs
  image(file, 450, 160);

  // When the game screen is loaded, the head file is first
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
  // Displays the done button on the right bottom corder of the screen
  done.display();

  // Draws the character elements customizable to the user by clicking the buttons
  drawHair();
  drawHead();
  drawFace();
  drawBangs();
  drawStrands();
  drawGlasses();
}

// Creates the head file, opens when the game screen is loaded for the first tab is clicked
function headFile() {
  // Draws the tabs as only the first is open
  image(openTab, 480, 120);
  image(closedTab, 637, 120);
  image(closedTab, 794, 120);
  image(closedTab, 951, 120);
  
  // Draws the buttons that customize the head elements 
  selectLong.display();
  selectReg.display();
  selectWide.display();

  selectPeach.display();
  selectTan.display();
  selectBrown.display();
  selectDark.display();
}

// Creates the face file, opens when the second tab is clicked
function faceFile() {
  // Draws the tabs as only the second is open
  image(closedTab, 480, 120);
  image(openTab, 637, 120);
  image(closedTab, 794, 120);
  image(closedTab, 951, 120);

  // Draws the buttons that customize the face elements 
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

// Creates the face file, opens when the third tab is clicked
function hairFile() {
  // Draws the tabs as only the third is open
  image(closedTab, 480, 120);
  image(closedTab, 637, 120);
  image(openTab, 794, 120);
  image(closedTab, 951, 120);

  // Draws the buttons that customize the hair elements 
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

// Creates the hair2 file, opens when the fourth tab is clicked
function hair2File() {
  // Draws the tabs as only the fouth is open
  image(closedTab, 480, 120);
  image(closedTab, 637, 120);
  image(closedTab, 794, 120);
  image(openTab, 951, 120);

  // Draws the buttons that customize the hair elements
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

// Creates the product screen 
function productScreen() {
  // Draws the pad that the final character sits on
  image(frame, 240, 20);

  // Draws the character elements of the final character
  drawHair();
  drawHead();
  drawFace();
  drawBangs();
  drawStrands();
  drawGlasses();
}

// Creates the start button animation
class Start {
  constructor(inX, inY, inImg) {
    this.x = inX;
    this.y = inY;
    this.startButtonUp = inImg;
  }
  
  display() {
    
    // Uses the second button image when the user's mouse hovers over it to appear pressed down
    if (this.over()) {
      image(startButtonDown, this.x, this.y);
    } else {
      image(this.startButtonUp, this.x, this.y);
    }
  }
  
  // Over matches the width & height of the image read from the file
  // Calculates if the mouse has crossed over the start button
  over() {
    if (mouseX > this.x && mouseX < this.x + this.startButtonUp.width && mouseY >
        this.y && mouseY < this.y + this.startButtonUp.height) {
      return true;
    } else {
      return false;
    }
  }
}

// Creates the Done button animation
class Done {
  constructor(inX, inY, inImg) {
    this.x = inX;
    this.y = inY;
    this.doneButtonUp = inImg;
  }
  
  // Uses the second button image when the user's mouse hovers over it to appear pressed down
  display() {
        if (this.over()) {
      image(doneButtonDown, this.x, this.y);
    } else {
      image(this.doneButtonUp, this.x, this.y);
    }
  }
  
  // Over matches the width & height of the image read from the file
  // Calculates if the mouse has crossed over the done button
  over() {
    if (mouseX > this.x && mouseX < this.x + this.doneButtonUp.width && mouseY >
        this.y && mouseY < this.y + this.doneButtonUp.height) {
      return true;
    } else {
      return false;
    }
  }
}

// Creates the select buttons
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

  // Over matches the width & height of the image read from the file
  // Calculates if the mouse has crossed over the done button
  over() {
    return (
      mouseX > this.x &&
      mouseX < this.x + this.imgUp.width &&
      mouseY > this.y &&
      mouseY < this.y + this.imgUp.height
    );
  }

  // button stays down when clicked
  clicked() {
    if (this.over()) {
      this.selected = true;
      return true;
    }
    return false;
  }

  // resets the buttons when another button from the same array is pressed
  reset() {
    this.selected = false;
  }
}

// Calculates distance between the mouse and the invisible tabs 
const distance = dist(mouseX, mouseY, faceTab.x, faceTab.y);
const overlapsFaceTab = (distance < faceTab.w + faceTab.h /2);

function mousePressed() {
  // If the start button is pressed, switch to the game screen and play sound effect
    if (whichscreen === "start" && start.over()) {
      whichscreen = "game";
      click.play();
    }
  // If the done button is pressed, switch to the product screen and play sound effect
  if (whichscreen === "game" && done.over()) {
      whichscreen = "product";
      allDone.play();
    }
   // GAME SCREEN TABS
  if (whichscreen === "game") {

 // HEAD TAB SELECT BUTTONS
  if (whichfile === "head") {
    // If any buttons in the head buttons array are pressed, the coresponding image is called and 
    // a sound effect is played 
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
  // same for skin tones array an so on...
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
  // If any buttons in the face buttons array are pressed, the coresponding image is called and 
    // a sound effect is played 
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

    // no bangs are selected nothing appears, if anything else in the array is pressed, the bangs appear
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
    hairSelectButtons.forEach(b => b.reset());
    btn.clicked();

      if (btn === selectHairNone) {
        selectedHair = "none";
      }
      else if (btn === selectBraids) { selectedHair = "braids"; }
      else if (btn === selectBuns) { selectedHair = "buns"; }
      else if (btn === selectCurlyCut) { selectedHair = "curlyCut"; }
      else if (btn === selectLongPony) { selectedHair = "longPony"; }
      else if (btn === selectPigtails) { selectedHair = "pigtails"; }
      else if (btn === selectPony) { selectedHair = "pony"; }
      else if (btn === selectPoofy) { selectedHair = "poofy"; }
      else if (btn === selectShortCut) { selectedHair = "shortCut"; }
      else if (btn === selectStraightCut) { selectedHair = "straightCut"; }
      else if (btn === selectWavy) { selectedHair = "wavy"; }
    
    return;
    }
    }
}
    // HAIR2 TAB SELECT BUTTONS
if (whichfile === "hair2") {
  for (let btn of strandSelectButtons) {
    if (btn.over()) {
      pick.play();
    strandSelectButtons.forEach(b => b.reset());
    btn.clicked();

    if (btn === selectStrandsNone) {
      selectedStrands = "none";
    }
    else if (btn === selectStrands1) { selectedStrands = "1"; }
    else if (btn === selectStrands2) { selectedStrands = "2"; }

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
  /**
   * When an invisible tab is preseed, the associated file is opened and a sound is played
   */
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

  // Draws all the glasses options depending on the skin tone selected
function drawGlasses() {
  let img;
  let xOffset = 0;
  
  // When the product screen is clicked, move the glasses to the center of the screen
    if (whichscreen === "product") {
    xOffset = 320;
  }

  // Depending on the skin tone chosen, a certain shade if that type of glasses is shown
  if (selectedDetail !== "none") {
    if (selectedDetail === "sharp") {
      if (selectedSkin === "peach") img = sharpPeach;
      if (selectedSkin === "tan") img = sharpTan;
      if (selectedSkin === "brown") img = sharpBrown;
      if (selectedSkin === "dark") img = sharpDark;
    }
    else if (selectedDetail === "round") {
      if (selectedSkin === "peach") img = roundPeach;
      if (selectedSkin === "tan") img = roundTan;
      if (selectedSkin === "brown") img = roundBrown;
      if (selectedSkin === "dark") img = roundDark;
    }
  }

  // Sets the position of the glasses
  if (img) image(img, 100 + xOffset, 288); 
}

// Draws the face details, mouths and noses
function drawFace() {
  // image of the details
  let imgD;

  // Depeding onb the skintone selects a certain shade of details
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
  }

  // image of the nose
  let imgN;

  // Selects which nose
  if (selectedNose === "bent") imgN = bent;
  if (selectedNose === "button") imgN = button;
  if (selectedNose === "flat") imgN = flat;
  if (selectedNose === "straight") imgN = straight;

  // image on the mouth
  let imgM;

  let oOffset = 0;
  let xOffset = 0;

  // Adjusting importing alignment mistakes (multiples of 8 since I exported at 800%)
  if (selectedMouth === "neutral") {
    oOffset = -8;
  }
  // When the product screen is displayed, move the face elements to the center of the screen
   if (whichscreen === "product") {
    xOffset = 320;
  }
  
  if (selectedMouth === "buck") imgM = buck;

  // Displays the lips based on which skin tone is chosen
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

  // Sets the position of the details, mouths and noses
  if (imgD) image(imgD, 100 + xOffset, 288);   
  if (imgM) image(imgM, 100 + xOffset, 288 + oOffset);  
  if (imgN) image(imgN, 100 + xOffset, 288);  
  image(eyes, 100 + xOffset, 288);
}

// Draws the head options
function drawHead() {
  let img;
  let Offset = 0;
  let xOffset = 0;

  // if the product screen is chosen, move the head to the center of the screen
   if (whichscreen === "product") {
    xOffset = 320;
   }
  // Adjusts importing alignment mistakes 
  if (selectedHeadShape === "long") {
    Offset = 8;
  }
  if (selectedSkin === "peach") {
    Offset = -8;
  }
   if (selectedSkin === "peach" && selectedHeadShape === "long") {
    Offset = 0;
  }

  // Selects the head based on the shaoe and skin chosen
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

  // Diplays the position of the head
  if (img) image(img, 100 + xOffset, 280 + Offset); 
}

// Draws the hair options on the first tab (long hair styles)
function drawHair() {
  let img;
  let hyOffset = 0;
  let hxOffset = 0;

  // poitions the hair in the center of the screen when the product screen is chosen
   if (whichscreen === "product") {
    hxOffset = 320;
   }
  
  // Adjusts position of har when imported 
  // brunette and dirty are particularily off and need extra adjusting
  if (selectedDye === "brunette" || selectedDye === "dirty") {
    hyOffset = 8;
  }
  if (selectedHair === "braids") {
    if (selectedDye === "brunette" || selectedDye === "dirty") {
      hyOffset = 40;
    }
    else {
      hyOffset = 32;
    }
    }
    if (selectedHair === "poofy") {
      hxOffset = 8;
    }
  if (selectedHair === "buns") {
    if (selectedDye === "brunette" || selectedDye === "dirty") {
      hyOffset = -80;
    }
    else {
      hyOffset = -88;
    }
    }
  if (selectedHair === "straightCut") {
    if (selectedDye === "brunette" || selectedDye === "dirty") {
      hyOffset = 32;
    }
    else {
      hyOffset = 24;
    }
      }
  if (selectedHair === "wavy") {
    if (selectedDye === "brunette" || selectedDye === "dirty") {
      hyOffset = 24;
    }
    else {
      hyOffset = 16;
    }
    }
  if (selectedHair === "curlyCut") {
    if (selectedDye === "brunette" || selectedDye === "dirty") {
      hyOffset = 40;
      hxOffset = -16;

    }
    else {
      hyOffset = 32;
      hxOffset = -16;
    }
  }
  if (selectedHair === "pony") {
    if (selectedDye === "brunette" || selectedDye === "dirty") {
      hyOffset = -96;
      hxOffset = -72;
    }
    else {
      hyOffset = -104;
      hxOffset = -72;
    }
  }
  if (selectedHair === "pigtails") {
    if (selectedDye === "brunette" || selectedDye === "dirty") {
       hyOffset = -72;
    }
      else {
        hyOffset = -80;
      }
    }
  if (selectedHair === "longPony") {
    if (selectedDye === "brunette" || selectedDye === "dirty") {
      hyOffset = -72;
      hxOffset = -80;
    }
    else {
      hyOffset = -80;
      hxOffset = -80;
    }
  }

  // if headscarf is chosen, do npt display hair
  if (selectedBangs === "headscarf") {
      selectedHair = "none";
  }
  // if no hair is chosen, do not display hair
  if (selectedBangs === "none") {
      selectedHair = "none";
  }

  // Displays chosen hairstyle acording to which hair colour is chosen
  if (selectedHair === "braids") {
    if (selectedDye === "black") img = braidsBlack;
    if (selectedDye === "blonde") img = braidsBlonde;
    if (selectedDye === "blue") img = braidsBlue;
    if (selectedDye === "brunette") img = braidsBrunette;
    if (selectedDye === "dirty") img = braidsDirty;
    if (selectedDye === "ginger") img = braidsGinger;
    if (selectedDye === "grey") img = braidsGrey;
    if (selectedDye === "pink") img = braidsPink;
    if (selectedDye === "red") img = braidsRed;
    if (selectedDye === "umber") img = braidsUmber;
  }
  if (selectedHair === "buns") {
    if (selectedDye === "black") img = bunsBlack;
    if (selectedDye === "blonde") img = bunsBlonde;
    if (selectedDye === "blue") img = bunsBlue;
    if (selectedDye === "brunette") img = bunsBrunette;
    if (selectedDye === "dirty") img = bunsDirty;
    if (selectedDye === "ginger") img = bunsGinger;
    if (selectedDye === "grey") img = bunsGrey;
    if (selectedDye === "pink") img = bunsPink;
    if (selectedDye === "red") img = bunsRed;
    if (selectedDye === "umber") img = bunsUmber;
  }
  if (selectedHair === "curlyCut") {
    if (selectedDye === "black") img = curlyCutBlack;
    if (selectedDye === "blonde") img = curlyCutBlonde;
    if (selectedDye === "blue") img = curlyCutBlue;
    if (selectedDye === "brunette") img = curlyCutBrunette;
    if (selectedDye === "dirty") img = curlyCutDirty;
    if (selectedDye === "ginger") img = curlyCutGinger;
    if (selectedDye === "grey") img = curlyCutGrey;
    if (selectedDye === "pink") img = curlyCutPink;
    if (selectedDye === "red") img = curlyCutRed;
    if (selectedDye === "umber") img = curlyCutUmber;
  }
  if (selectedHair === "longPony") {
    if (selectedDye === "black") img = longPonyBlack;
    if (selectedDye === "blonde") img = longPonyBlonde;
    if (selectedDye === "blue") img = longPonyBlue;
    if (selectedDye === "brunette") img = longPonyBrunette;
    if (selectedDye === "dirty") img = longPonyDirty;
    if (selectedDye === "ginger") img = longPonyGinger;
    if (selectedDye === "grey") img = longPonyGrey;
    if (selectedDye === "pink") img = longPonyPink;
    if (selectedDye === "red") img = longPonyRed;
    if (selectedDye === "umber") img = longPonyUmber;
  }
  if (selectedHair === "pigtails") {
    if (selectedDye === "black") img = pigtailsBlack;
    if (selectedDye === "blonde") img = pigtailsBlonde;
    if (selectedDye === "blue") img = pigtailsBlue;
    if (selectedDye === "brunette") img = pigtailsBrunette;
    if (selectedDye === "dirty") img = pigtailsDirty;
    if (selectedDye === "ginger") img = pigtailsGinger;
    if (selectedDye === "grey") img = pigtailsGrey;
    if (selectedDye === "pink") img = pigtailsPink;
    if (selectedDye === "red") img = pigtailsRed;
    if (selectedDye === "umber") img = pigtailsUmber;
  }
  if (selectedHair === "pony") {
    if (selectedDye === "black") img = ponyBlack;
    if (selectedDye === "blonde") img = ponyBlonde;
    if (selectedDye === "blue") img = ponyBlue;
    if (selectedDye === "brunette") img = ponyBrunette;
    if (selectedDye === "dirty") img = ponyDirty;
    if (selectedDye === "ginger") img = ponyGinger;
    if (selectedDye === "grey") img = ponyGrey;
    if (selectedDye === "pink") img = ponyPink;
    if (selectedDye === "red") img = ponyRed;
    if (selectedDye === "umber") img = ponyUmber;
  }
  if (selectedHair === "poofy") {
    if (selectedDye === "black") img = poofyBlack;
    if (selectedDye === "blonde") img = poofyBlonde;
    if (selectedDye === "blue") img = poofyBlue;
    if (selectedDye === "brunette") img = poofyBrunette;
    if (selectedDye === "dirty") img = poofyDirty;
    if (selectedDye === "ginger") img = poofyGinger;
    if (selectedDye === "grey") img = poofyGrey;
    if (selectedDye === "pink") img = poofyPink;
    if (selectedDye === "red") img = poofyRed;
    if (selectedDye === "umber") img = poofyUmber;
  }
  if (selectedHair === "shortCut") {
    if (selectedDye === "black") img = shortCutBlack;
    if (selectedDye === "blonde") img = shortCutBlonde;
    if (selectedDye === "blue") img = shortCutBlue;
    if (selectedDye === "brunette") img = shortCutBrunette;
    if (selectedDye === "dirty") img = shortCutDirty;
    if (selectedDye === "ginger") img = shortCutGinger;
    if (selectedDye === "grey") img = shortCutGrey;
    if (selectedDye === "pink") img = shortCutPink;
    if (selectedDye === "red") img = shortCutRed;
    if (selectedDye === "umber") img = shortCutUmber;
  }
  if (selectedHair === "straightCut") {
    if (selectedDye === "black") img = straightCutBlack;
    if (selectedDye === "blonde") img = straightCutBlonde;
    if (selectedDye === "blue") img = straightCutBlue;
    if (selectedDye === "brunette") img = straightCutBrunette;
    if (selectedDye === "dirty") img = straightCutDirty;
    if (selectedDye === "ginger") img = straightCutGinger;
    if (selectedDye === "grey") img = straightCutGrey;
    if (selectedDye === "pink") img = straightCutPink;
    if (selectedDye === "red") img = straightCutRed;
    if (selectedDye === "umber") img = straightCutUmber;
  }
  if (selectedHair === "wavy") {
    if (selectedDye === "black") img = wavyBlack;
    if (selectedDye === "blonde") img = wavyBlonde;
    if (selectedDye === "blue") img = wavyBlue;
    if (selectedDye === "brunette") img = wavyBrunette;
    if (selectedDye === "dirty") img = wavyDirty;
    if (selectedDye === "ginger") img = wavyGinger;
    if (selectedDye === "grey") img = wavyGrey;
    if (selectedDye === "pink") img = wavyPink;
    if (selectedDye === "red") img = wavyRed;
    if (selectedDye === "umber") img = wavyUmber;
  }

  // Displays the position of the hair
  if (img) image(img, 36 + hxOffset, 296 + hyOffset); 
}

// Draws the hair strands 
function drawStrands() {
  let imgS;
  let img;
  let xOffset = 0;
  let yOffset = 0;
  // sOffset just for the 2 strands since they were imported wonky
  let syOffset = 0;

  // if the product screen is chosen, display the strands in the center of the screen
   if (whichscreen === "product") {
    xOffset = 320;
  }
  // Adjusts the position of the strands depending on the bangs chosen
  if (selectedDye === "pink" || selectedDye === "red" || selectedDye === "blue" || selectedDye === "ginger" || selectedDye === "blonde" || selectedDye === "grey") {
    syOffset = 8;
  }
  if (selectedBangs === "bigFrizz") {
  yOffset = -40;
  }
  if (selectedBangs === "curly" || selectedBangs === "frizz" || selectedBangs === "braidsBack" && selectedStrands === "2") {
    yOffset = -8;
  }
  if (selectedBangs === "shaved" && selectedStrands === "2") {
    yOffset = 8;
  }
  // if headscarf is selected, do not display strands
  if (selectedBangs === "headscarf") {
      selectedStrands = "none";
  }
  
  // displays the har strands depending on the hair colour chosen
  if (selectedStrands === "1") {
    if (selectedDye === "black") imgS = black1;
    if (selectedDye === "blonde") imgS = blonde1;
    if (selectedDye === "blue") imgS = blue1;
    if (selectedDye === "brunette") imgS = brunette1;
    if (selectedDye === "dirty") imgS = dirty1;
    if (selectedDye === "ginger") imgS = ginger1;
    if (selectedDye === "grey") imgS = grey1;
    if (selectedDye === "pink") imgS = pink1;
    if (selectedDye === "red") imgS = red1;
    if (selectedDye === "umber") imgS = umber1;
  }
if (selectedStrands === "2") {
    if (selectedDye === "black") img = black2;
    if (selectedDye === "blonde") img = blonde2;
    if (selectedDye === "blue") img = blue2;
    if (selectedDye === "brunette") img = brunette2;
    if (selectedDye === "dirty") img = dirty2;
    if (selectedDye === "ginger") img = ginger2;
    if (selectedDye === "grey") img = grey2;
    if (selectedDye === "pink") img = pink2;
    if (selectedDye === "red") img = red2;
    if (selectedDye === "umber") img = umber2;
}
  // Displays the position of the strands
  if (imgS) image(imgS, 164 + xOffset, 208 + yOffset + syOffset);
  if (img) image(img, 164 + xOffset, 208 + yOffset + syOffset);
}

// Draws the bangs (top of head hair)
function drawBangs() {
  let img;
  let xOffset = 0;
  let yOffset = 0;

  // if the product screen is chosen, position the bangs in the center of the screen
  if (whichscreen === "product") {
    xOffset = 320;
  }

  // Adjusting position to match head
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

  // displays the bangs depending on the hair colour chosen
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

  // displays the position of the bangs
  if (img) image(img, 100 + xOffset, 232 + yOffset);
}

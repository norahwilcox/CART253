//changes ellipse size
let ellipseSize = 20;

//creates a canvas and changes the ellipse size
function setup() {
    createCanvas(600, 600);
}

function draw() {
    background(0);
    push();
    //colour of ellipse
    fill(255, 0, 0);
    //x, y, width, height
    ellipse(mouseX, mouseY, ellipseSize, ellipseSize);
    let x = constrain(mouseX, 255, 255);
    pop();
}

/**
 * Title of Project
 * Author Name
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";


function createNewBall() {
    let ball = {
        x: 0,
        y: 0,
        size: 0,
        color: {
            r: 0,
            g: 0,
            b: 0,
        }
    };
    return ball;
}

let numbers = [];
numbers.push(2);
console.log(numbers);

/**
 * OH LOOK I DIDN'T DESCRIBE SETUP!!
*/
function setup() {
    let balls = [ {
        x: random(0, 100),
        y: random(0, 100),
        size: random(0, 100),
        color: {
            r: random(0, 255),
            g: (0, 255),
            b: (0, 255),
        }
}, 
    {
        x: random(0, 100),
        y: random(0, 100),
        size: random(0, 100),
        color: {
            r: random(0, 255),
            g: (0, 255),
            b: (0, 255),
        }
},
     {
        x: 0,
        y: 0,
        size: 0,
        color: {
            r: 0,
            g: 0,
            b: 0,
        }
    }, 
];
}


/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {

}

function mousePressed() {
    numbers.push(random(0, 1000));
    console.log(numbers[numbers.length])


}
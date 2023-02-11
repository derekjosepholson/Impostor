function setup() {
  createCanvas(1000, 1000); //what size should this canvas be? 
  // colorMode(HSB);
  smooth();
  noStroke();
  noLoop();
  angleMode(DEGREES);
}

brightColors = [
  '#506aa1', // blue
  '#be574b', // red
  '#bea456', // yellow
  '#59864b', // green
  '#c27d4d', // orange
  '#635f9b', // purple
];
neutralColors = [
  '#262626', // black
  '#dfdbd3', // white
];

let bgColor = '';
let secondaryBgColor='';
let rotationDegrees = 0;
let xAxisTranslate = '';


function draw() {
  bgColor = getBackgroundColor();
  secondaryBgColor = getSecondaryBackgroundColor(bgColor);
  //shapeColor = getShapeColor (bgColor, secondaryBgColor);

  // add main background color
  background(color(bgColor));
  // add second background
  xAxisTranslate = random([0,1]) === 1 && false;
  addSecondBackground(secondaryBgColor, xAxisTranslate);
  addShape();

  ////TODO: figure out how to find length of line and what way I need to travel


  // add shape

  // add animation
}

function addShape() {
  fill(color('#FFC0CB'))
  if (xAxisTranslate) {
    rect(-25,50,50,50);
  } else {
    rect(-25,50,50,50);
  }
}

function addSecondBackground(secondaryBgColor, xAxisTranslate) {
  // add second background color. 
  // set the rotation randomly
  // move off certain
  y = 0;
  if (xAxisTranslate) {
    // line starts on x axis
    startingX = (width/2) + random(-360, 360);
    startingY = 0;
    rotationDegrees = random(-30,30);
    if (rotationDegrees > 0) {
      //add height to this object
      y = -1 * height;
    }
  } else {
    startingX = 0;
    startingY = (height/2) + random(-360,360);
    rotationDegrees = random(-145,60);
    if (rotationDegrees < 0) {
      y = -1*height;
    }
  }
  fill(color(secondaryBgColor));
  translate(startingX, startingY);
  //// TODO: create left and right bounds for how far off center we can go
  // rotate(random(0, 180));

  rotate(rotationDegrees);

  // rotate(random(-45,45));
  rect(0, y, width*4, height*4);

  ////TODO: add second background to the existing canvas
}



function getBackgroundColor() {
  if (int(random(0,10)) === 7) {
    return random(neutralColors); 
  } else {
    return random(brightColors);
  }
}

function getSecondaryBackgroundColor(bgColor) {
  if (neutralColors.includes(bgColor)) {
    return neutralColors[0] === bgColor ? neutralColors[1] : neutralColors[0]; // this will only work for two neutral colors. UPDATE
  } else {
    return random(neutralColors);
  }
}


//the other randomness I want to generate are 
// 1: shapes used (I will likely start with a circle as the math may be simpler) : circle, triangle, rectangle
// 2: isolation: allow a 1/10 chance for shape to be offset the intersection and not touching
// 3: the degree of offset from center in intersection of lines.
// 4: show animation where shapeColorOne and shapeColorTwo separate from original shape
// EXTRAS not in project currently
// - multiple shapes
// - recursion within shape (adds depth but may look off. Complex challenge)
// - add rare distortions/texture to a side



//// PHASE 1
//step 1 create two sides with colors appropriately. 
//step 2: the line can go any angle on canvas but I will need to define outer params so it's not too close to edge

//// PHASE 2
// step 1: add shape onto the axis at center
// step 2: offset from center slightly

//// PHASE 3
// step 1: add background shapes

//// PHASE 4
// animate background shapes
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
  xAxisTranslate = random([0,1]) === 1;
  shapeColor = getShapeColor(bgColor, secondaryBgColor);

  // add main background color
  background(color(bgColor));
  
  console.log('bgColor = ' + bgColor);
  console.log('xAxisTranslate = ' + xAxisTranslate);
  addSecondBackground(secondaryBgColor, xAxisTranslate);
  addShape(shapeColor);
  console.log('rotationDegrees = ' + rotationDegrees)
  console.log('shapeColor = ' + shapeColor);

  // add animation
}

function getShapeColor(bgColor, secondaryBgColor) {
  if (neutralColors.includes(bgColor) && neutralColors.includes(secondaryBgColor)) {
    return random(brightColors);
  } else {
    for (i = 0; i < neutralColors.length; i++) {
      if (neutralColors[i] !== bgColor && neutralColors[i] !== secondaryBgColor) {
        return neutralColors[i];
      }
    }
  }
}

function addShape(shapeColor) {
  ////TODO: figure out how to find length of line so I know the center point and can set the max offset
  fill(color(shapeColor))
  if (xAxisTranslate) {
    rect(-25,400,50,50);
  } else {
    rect(-25,50,50,50);
  }
}

function addSecondBackground(secondaryBgColor, xAxisTranslate) {
  fill(color(secondaryBgColor));
    y = 0;
  if (xAxisTranslate) {
    // line starts on x axis
    startingX = (width/2) + random(-350, 350);
    startingY = 0;
    rotationDegrees = random(-30,30);
    if (rotationDegrees > 0) {
      //add height to this object
      y = -1 * height;
    }
  } else {
    startingX = 0;
    startingY = (height/2) + random(-350,350);
    rotationDegrees = random(-145,-30);
    if (rotationDegrees < 0) {
      y = -1*height;
    }
  }
  translate(startingX, startingY);
  rotate(rotationDegrees);
  rect(0, y, width*4, height*4);
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



//// PHASE 1 -- COMPLETE --
//step 1 create two sides with colors appropriately. 
//step 2: define outer params to prevent intersection from having minimal visibility

//// PHASE 2 -- IN PROGRESS --
// step 1: add shape onto the axis at center
// step 2: offset from center slightly

//// PHASE 3
// step 1: add background shapes

//// PHASE 4
// animate background shapes
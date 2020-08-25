let rx1 = 300;
let ry1 = 400;
let rx2 = 0;
let ry2 = 0;
let cr = 100
let cx = 400;
let cy = 400;
let hit = false;
let hit2 = false;

const checkCollisionPointRectangle = (px, py, rx1, ry1, rx2, ry2) => {
  if (px >= rx1 && px <= rx2 && py >= ry1 && py <= ry2) {
    return true;
  } else {
    return false;
  }
}

const checkCollisionPointCircle = (px, py, cx, cy, cr) => {
  let lhs = Math.sqrt(((px - cx) ** 2) + ((py - cy) ** 2));
  if (lhs - cr <= 0) {
    return true;
  } else {
    return false;
  }
}

const checkCollisionCircleRectangle = (numpoints, cx, cy, cr, rx1, ry1, rx2, ry2) => {
  let x = cx - cr;
  let y = 0;
  let inversey = 0;
  for (let i = 0; i < (numpoints / 2); i++) {
    x += (cr * 2) / (numpoints / 2);
    y = cy + Math.sqrt(Math.pow(cr, 2) - Math.pow((x - cx), 2));
    inversey = cy - Math.sqrt(Math.pow(cr, 2) - Math.pow((x - cx), 2));
    if (checkCollisionPointRectangle(x, y, rx1, ry1, rx2, ry2)) {
      return true;
    } else if (checkCollisionPointRectangle(x, inversey, rx1, ry1, rx2, ry2)) {
      return true;
    }
  }
  return false;
}

function setup() {
  createCanvas(750, 750);
}

function draw() {
  hit = false;
  hit2 = false;
  background(255);
  circle(cx, cy, cr * 2);
  rect(mouseX, mouseY, 50, 50);
  rx2 = mouseX + 50;
  ry2 = mouseY + 50;
  hit = checkCollisionCircleRectangle(180, cx, cy, cr, mouseX, mouseY, rx2, ry2);
  hit2 = checkCollisionPointCircle(mouseX, mouseY, cx, cy, cr);
  stroke( (hit) || (hit2) ? color("red"): 0);
  // console.log('Colliding: ' + hit)
}
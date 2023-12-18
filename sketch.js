Pelotas = [];
let p1;
// let p2;
let x = 10;
let y = x;
// let posX;
// let posY;
// let vel = 10;
// let radio = diametro / 2;

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);

  p1 = new Pelotas();
}

function draw() {
  background(0);
  p1.update();
  p1.display();
  // p2.update();
  // p2.display();
}

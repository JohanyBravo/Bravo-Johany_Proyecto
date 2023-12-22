let pelotas = [];
// let p2;
let x = 10;
let y = x;

let temp = 3;

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
  let np = new Pelotas();
  pelotas.push(np);
  backgroundColor = color(0, 0, 0);
}

function draw() {
  // background();
  if (frameCount % temp == 0) {
    let np = new Pelotas();
    print("hola");
    pelotas.push(np);
    backgroundColor = lerpColor(
      backgroundColor,
      color(random(255), random(1), random(250)),
      0.3
    );
    background(backgroundColor);
  }
  for (let i = 0; i < pelotas.length; i++) {
    pelotas[i].update();
    pelotas[i].display();
    if (pelotas[i].isDead) {
      pelotas.splice(i, 1);
    }
  }
}

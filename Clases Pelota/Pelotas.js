class Pelotas {
  constructor() {
    this.lifespan = Math.ceil(random(10, 100));
    this.c = color(random(205), random(200, 250), 200);
    this.margen = 100;
    this.step = 0.001;
    this.isDead = false;
    this.espera = 30;

    this.pos1 = createVector(
      random(this.margen, width - this.margen),
      random(this.margen, height - this.margen)
    );

    this.pos2 = createVector(
      random(this.margen, width - this.margen),
      random(this.margen, height - this.margen)
    );

    this.pos1Init = this.pos1.copy();
    this.pos2Init = this.pos2.copy();

    this.pos3 = this.pos2.copy();
    this.pos3.sub(this.pos1);
    this.pos3.div(2);
    this.pos3.add(this.pos1);

    this.diam1 = random(50, 80);
    this.diam2 = random(80, 120);
    this.diam3 = this.diam1 + this.diam2;

    this.colision = this.diam1 / 2 + this.diam2 / 2;
  }

  update() {
    this.step *= 1.5;

    if (this.distancia > this.colision) {
      this.pos1.lerp(this.pos3, this.step);
      this.pos2.lerp(this.pos3, this.step);
      // }
    }
  }

  display() {
    fill(this.c);

    noStroke();

    this.distancia = this.pos1.dist(this.pos2);
    if (this.distancia < this.colision) {
      circle(this.pos3.x, this.pos3.y, this.diam3);
      this.espera -= 1;
      if (this.espera <= 0) {
        this.creciendo = true;
      }
      this.isDead = true;
    } else {
      // square(this.pos1.x, this.pos1.y, this.diam1);
      // ellipse(this.pos2.x, this.pos2.y, this.diam3, 5);
      // fill(255);
      circle(this.pos2.x, this.pos2.y, this.diam2);
      fill(255, 250, 0);
      circle(this.pos1.x, this.pos1.y, this.diam1, 10);
      const c = color(255, 204, 0);
      fill(c);
      // rect(15, 20, 35, 60);
      // Sets 'redValue' to 255.
      const redValue = red(c);
      fill(redValue, 0, 0);
      square(this.pos3.x, this.pos3.y, this.diam1, 1);
    }
  }
}

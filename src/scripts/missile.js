class Missile {
  constructor(FlyingSaucer, score) {
    this.x = 40 + Math.floor(Math.random() * 890);
    this.y = 650;
    this.height = 40;
    this.width = 10;
    this.velocity = 7 + parseInt(score / 15);

    let saucerMidX = (FlyingSaucer.x + (FlyingSaucer.width / 2));
    let saucerMidY = (FlyingSaucer.y + (FlyingSaucer.height / 2));

    this.theta = Math.atan((-(FlyingSaucer.y - this.y)) / (FlyingSaucer.x + (FlyingSaucer.width / 2) - this.x));

    if (this.x >= FlyingSaucer.x) {
      let rotateAngle = Math.atan((this.x - saucerMidX) / (this.y - saucerMidY));
      this.canvasRotate = -rotateAngle;
    } else {
      let rotateAngle = Math.atan((saucerMidX - this.x) / (this.y - saucerMidY));
      this.canvasRotate = rotateAngle;
    }

    this.dy = this.velocity * Math.sin(this.theta);
    if (this.dy > 0) this.dy = -this.dy;
    if (((FlyingSaucer.x + (FlyingSaucer.width / 2)) - this.x) > 0) {
      this.dx = this.velocity * Math.cos(this.theta);
    } else {
      this.dx = -this.velocity * Math.cos(this.theta);
    }
  }
}

module.exports = Missile;
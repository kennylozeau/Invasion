class Missile {
  constructor(FlyingSaucer) {
    this.x = 40 + Math.floor(Math.random() * 890);
    this.y = 650;
    // this.dy = 0;
    // this.dx = 0;
    this.height = 40;
    this.width = 10;
    this.velocity = 9;

    this.theta = Math.atan((-(FlyingSaucer.y - this.y)) / (FlyingSaucer.x + (FlyingSaucer.width / 2) - this.x));

    // let slope = (FlyingSaucer.y - this.y) / (FlyingSaucer.x - this.x);

    this.dy = this.velocity * Math.sin(this.theta);
    if (this.dy > 0) this.dy = -this.dy;
    if (((FlyingSaucer.x + (FlyingSaucer.width / 2)) - this.x) > 0) {
      this.dx = this.velocity * Math.cos(this.theta);
    } else {
      this.dx = -this.velocity * Math.cos(this.theta);
    }
    
    // if (slope > 0) {
    //   this.dx = Math.sqrt((this.velocity * this.velocity) / (1 + slope));
    //   this.dy = Math.sqrt((this.velocity * this.velocity) / (1 + slope)) * slope;
    // } else {
    //   this.dx = -Math.sqrt((this.velocity * this.velocity) / (-slope - 1));
    //   this.dy = -Math.sqrt((this.velocity * this.velocity) / (-slope - 1)) * slope;
    // }
    // this.dx = Math.sqrt((this.velocity * this.velocity) / (1 + slope));
    // if ((FlyingSaucer.x - this.x) < 0) this.dx = -this.dx;
    // this.dy = -Math.sqrt((this.velocity * this.velocity) / (1 + slope)) * slope;

    // this.calculateTrajectory(FlyingSaucer).bind(this);
  }

  // calculateTrajectory(FlyingSaucer) {
    // let slope = (FlyingSaucer.y - this.y) / (FlyingSaucer.x - this.x);
    // this.dx = Math.sqrt((this.velocity * this.velocity) / (1 + slope));
    // this.dy = Math.sqrt((this.velocity * this.velocity) / (1 + slope));
  // }
}

module.exports = Missile;
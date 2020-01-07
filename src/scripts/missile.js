class Missile {
  constructor(FlyingSaucer) {
    this.x = 40 + Math.floor(Math.random() * 890);
    this.y = 650;
    this.dy = -15;
  }
}

module.exports = Missile;
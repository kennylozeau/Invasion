class Missile {
  constructor(FlyingSaucer) {
    this.x = 40 + Math.floor(Math.random() * 890);
    this.y = 650;
    this.dy = -10;
    this.height = 40;
    this.width = 10;
  }
}

module.exports = Missile;
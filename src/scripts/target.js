class Target {
  constructor() {
    this.x = 40 + Math.floor(Math.random() * 870);
    this.y = 640;
    this.dropped = false;
    this.lifted = false;
    this.powerUp = false;
  }
}

module.exports = Target;
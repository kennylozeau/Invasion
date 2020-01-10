class Target {
  constructor() {
    this.x = 40 + Math.floor(Math.random() * 870);
    this.y = 640;
    this.dropped = false;
    this.lifted = false;
  }
}

module.exports = Target;
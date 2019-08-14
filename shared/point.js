class Point {
    constructor(x, y) {
      this.x = x;
      this.y = y;
    }

    IsValid() {
      return this.x && this.y;
    }
  }

  module.exports = Point
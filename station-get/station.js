const Point = require("../shared/point.js");

class Station {
  constructor(x, y, reach) {
    this.point = new Point(x, y);
    this.reach = reach;
  }
}

module.exports = Station;

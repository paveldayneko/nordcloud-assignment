const Point = require("../shared/point.js");

class StationResponse {
  constructor(point, power) {
    this.x = point.x;
    this.y = point.y;
    this.power = power;
  }
}

module.exports = StationResponse;

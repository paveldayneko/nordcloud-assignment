const Point = require("../shared/point.js");
const Station = require("./Station.js");
const StationResponse = require("./StationResponse.js");

const stations = [
  new Station(0, 0, 10),
  new Station(20, 20, 5),
  new Station(10, 0, 12)
];

function getNearestStation(point) {
  let closest,
    power = 0;

  for (i = 0; i < stations.length; i++) {
    let stationPoint = stations[i].point;
    let distance = Math.hypot(
      stationPoint.x - point.x,
      stationPoint.y - point.y
    );
    if (distance > stations[i].reach) {
      continue;
    }
    let newPwr = Math.pow(stations[i].reach - distance, 2);
    if (newPwr > power) {
      power = newPwr;
      closest = stationPoint;
    }
  }
  return closest ? new StationResponse(closest, power) : null;
}

module.exports = {
  getNearestStation
};

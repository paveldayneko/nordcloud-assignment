const Point = require("../shared/point.js");
const stationService = require("./stations.service.js");

module.exports = async function(context, req) {
  const point = new Point(req.query.x, req.query.y);

  if (!point.IsValid()) {
    return {
      status: 400,
      body: "x and y params must be specified in query"
    };
  }

  const station = stationService.getNearestStation(point);

  if (station) {
    return {
      body: station
    };
  }
  return {
    status: 404,
    body: `No link station within reach for point ${point.x}, ${point.y}`
  };
};

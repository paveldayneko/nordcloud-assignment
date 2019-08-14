const stationsClient = require("./stations.client.js");
const Point = require("../shared/point.js");

const points = [
  new Point(0, 0),
  new Point(100, 100),
  new Point(15, 10),
  new Point(18, 18)
];

module.exports = async function(context, req) {
  let promises = points.map(p => stationsClient.GetStation(context, p));
  let results = await Promise.all(promises);

  context.res = {
    body:  JSON.stringify(results)
  };
};

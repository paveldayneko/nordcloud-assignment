const Point = require("../shared/point.js");
const { URL } = require('url');
var axios = require("axios");

function GetStation(context, point) {
  const baseUrl = new URL(context.req.originalUrl).origin;

  return axios
    .get(`${baseUrl}/api/station`, {
      params: point
    })
    .then(
      res => {
        const data = res.data;
        return `Best link station for point ${point.x},${point.y} is ${
          data.x
        },${data.y} with power ${data.power}`;
      },
      err => {
        context.log.error(err);
        if (err.response.status == 404) {
          return err.response.data;
        }

        throw err;
      }
    );
}

module.exports = { GetStation };

const { findHandler } = require("../modules/commonModule");
const attractionScheme = require("../schemas/attractionScheme");
const mongoose = require("mongoose");
const Attraction = mongoose.model("Attraction", attractionScheme);

function getAttraction(req, res) {
  const queryFindData = findHandler(req.query);
  Attraction.find(req.query && { $or: queryFindData })
    .then((attraction) => res.send(attraction))
    .catch((err) => console.log(err));
}
module.exports = { getAttraction };

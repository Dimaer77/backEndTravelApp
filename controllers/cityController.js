const { findHandler } = require("../modules/commonModule");
const cityScheme = require("../schemas/cityScheme");
const mongoose = require("mongoose");
const City = mongoose.model("City", cityScheme);

function getCities(req, res) {
  const queryFindData = findHandler(req.query);
  City.find(req.query && { $or: queryFindData }, function (err, cities) {
    if (err) return console.log("", err);
    res.send(cities);
  });
}
module.exports = { getCities };

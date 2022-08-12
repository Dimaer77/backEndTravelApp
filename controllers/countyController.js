const { findHandler } = require("../modules/commonModule");
const countryScheme = require("../schemas/attractionScheme");
const mongoose = require("mongoose");
const Country = mongoose.model("Country", countryScheme);

function getCountry(req, res) {
  const queryFindData = findHandler(req.query);
  Country.find(req.query && { $or: queryFindData })
    .then((country) => res.send(country))
    .catch((err) => console.log(err));
}
module.exports = { getCountry };

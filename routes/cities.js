const express = require("express");
const routerCities = express.Router();
const mongoose = require("mongoose");
const cityScheme = require("../schemas/cityScheme");
const City = mongoose.model("City", cityScheme);

routerCities.get("/cities", function (req, res) {
  City.find({}, function (err, cities) {
    if (err) return console.log("", err);
    res.send(cities);
  });
});

routerCities.get("/cities/:name", function (req, res) {
  const { name } = req.params;
  console.log(name);
  City.findOne({ city: name }, function (err, cities) {
    if (err) return console.log("", err);
    res.send(cities);
  });
});
module.exports = routerCities;

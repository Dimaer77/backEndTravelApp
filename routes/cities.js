var express = require("express");
var routerCities = express.Router();
const app = express();
const mongoose = require("mongoose");
const cityScheme = require("../schemas/cityScheme");
const City = mongoose.model("City", cityScheme);

app.use(express.json());

routerCities.get("/cities", function (req, res, next) {
  City.find({}, function (err, cities) {
    if (err) return console.log("", err);
    res.send(cities);
    next();
  });
});

module.exports = routerCities;

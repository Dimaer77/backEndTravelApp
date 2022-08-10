const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const countryScheme = require("../schemas/countryScheme");
const Country = mongoose.model("Country", countryScheme);

router.get("/", function (req, res) {
  Country.find({}, function (err, countries) {
    if (err) return console.log("", err);
    res.send(countries);
  });
});

module.exports = router;

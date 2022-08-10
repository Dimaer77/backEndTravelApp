const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const attractionScheme = require("../schemas/attractionScheme");
const Attraction = mongoose.model("Attraction", attractionScheme);

router.get("/attractions", function (req, res) {
  Attraction.find({}, function (err, attraction) {
    if (err) return console.log("", err);
    res.send(attraction);
  });
});

module.exports = router;

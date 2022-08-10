const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const hotelScheme = require("../schemas/hotelScheme");
const Hotel = mongoose.model("Hotel", hotelScheme);

router.get("/hotels", function (req, res) {
  Hotel.find({}, function (err, hotels) {
    if (err) return console.log("", err);
    res.send(hotels);
  });
});

module.exports = router;

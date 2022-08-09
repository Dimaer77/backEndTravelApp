var express = require("express");
var router = express.Router();
const app = express();
const mongoose = require("mongoose");
const countryScheme = require("../schemas/countryScheme");
const Country = mongoose.model("Country", countryScheme);
app.use(express.json());

router.get("/", function (req, res) {
  Country.find({}, function (err, countries) {
    if (err) return console.log("", err);
    res.send(countries);
  });
});

module.exports = router;

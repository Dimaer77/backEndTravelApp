const express = require("express");
const app = express();
const mongoose = require("mongoose");

const attractionScheme = require("./schemas/attractionScheme");
const hotelScheme = require("./schemas/hotelScheme");
const cityScheme = require("./schemas/cityScheme");
const countryScheme = require("./schemas/countryScheme");

const PORT = process.env.PORT || 80;

const Country = mongoose.model("Country", countryScheme);
const City = mongoose.model("City", cityScheme);
const Hotel = mongoose.model("Hotel", hotelScheme);
const Attraction = mongoose.model("Attraction", attractionScheme);

// const countriesRouter = require("./routes/countries");
const citiesRouter = require("./routes/cities");

mongoose.connect(
  "mongodb://localhost:27017/travelAppDB",
  { useUnifiedTopology: true, useNewUrlParser: true },
  function (err) {
    if (err) return console.log(err);
    app.listen(PORT, function () {
      console.log("Сервер ожидает подключения...");
    });
  }
);
app.use(express.json());
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});

app.get("/countries", function (req, res) {
  Country.find({}, function (err, countries) {
    if (err) return console.log("", err);
    res.send("countries");
  });
});

app.get("/cities", function (req, res, next) {
  City.find({}, function (err, cities) {
    if (err) return console.log("", err);
    res.send("cities");
  });
});

app.get("/hotels", function (req, res) {
  console.log("hot");
  Hotel.find({}, function (err, attractions) {
    if (err) return console.log(err);
    res.send(attractions);
  });
});

app.get("/attractions", function (req, res) {
  console.log("ätt");
  Attraction.find({}, function (err, attractions) {
    if (err) return console.log(err);
    res.send(attractions);
  });
});

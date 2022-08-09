const mongoose = require("mongoose");
const express = require("express");
const app = express();
const attractionScheme = require("./schemas/attractionScheme");
const hotelScheme = require("./schemas/hotelScheme");
const cityScheme = require("./schemas/cityScheme");
const countryScheme = require("./schemas/countryScheme");

const Country = mongoose.model("Country", countryScheme);
const City = mongoose.model("City", cityScheme);
const Hotel = mongoose.model("Hotel", hotelScheme);
const Attraction = mongoose.model("Attraction", attractionScheme);

mongoose.connect(
  "mongodb://localhost:27017/travelAppDB",
  { useUnifiedTopology: true, useNewUrlParser: true },
  function (err) {
    if (err) return console.log(err);
    app.listen(8080, function () {
      console.log("Сервер ожидает подключения...");
    });
  }
);
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});

app.get("/countries", function (req, res) {
  console.log("con");
  Country.find({}, function (err, attractions) {
    if (err) return console.log(err);
    res.send("test Hi");
  });
});
app.get("/cities", function (req, res) {
  console.log("cit");
  City.find({}, function (err, attractions) {
    if (err) return console.log(err);
    res.send(attractions);
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

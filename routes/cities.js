const express = require("express");
const routerCities = express.Router();
const { getCities } = require("../controllers/cityController");

routerCities.get("/cities", getCities);

module.exports = routerCities;

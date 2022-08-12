const express = require("express");
const router = express.Router();
const { getCountry } = require("../controllers/countyController");

router.get("/", getCountry);

module.exports = router;

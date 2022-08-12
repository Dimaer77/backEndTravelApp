const express = require("express");
const router = express.Router();
const { getAttraction } = require("../controllers/attractionControllers");

router.get("/attractions", getAttraction);

module.exports = router;

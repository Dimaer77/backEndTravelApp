const express = require("express");
const router = express.Router();
const {
  getHotels,
  deleteHotelById,
  postHotel,
  getHotelById,
  putHotel,
} = require("../controllers/hotelControllers");

router.get("/hotels", getHotels);
router.get("/hotels/:id", getHotelById);
router.delete("/hotels/:id", deleteHotelById);
router.post("/hotels", postHotel);
router.put("/hotels/:_id", putHotel);
module.exports = router;

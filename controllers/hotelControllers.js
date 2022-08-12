const { findHandler } = require("../modules/commonModule");
const hotelScheme = require("../schemas/hotelScheme");
const mongoose = require("mongoose");
const Hotel = mongoose.model("Hotel", hotelScheme);

function getHotels(req, res) {
  const queryFindData = findHandler(req.query);
  Hotel.find(req.query && { $or: queryFindData }, function (err, hotels) {
    if (err) return console.log("", err);
    res.send(hotels);
  });
}

function deleteHotelById(req, res) {
  const _id = req.params.id;
  Hotel.findByIdAndDelete(_id, function (err, doc) {
    if (err) return console.log(err);
    console.log("Deleted", doc);
  });
}
function getHotelById(req, res) {
  Hotel.findById(req.params.id)
    .then((hotel) => res.send(hotel))
    .catch((err) => console.log(err));
}
function postHotel(req, res) {
  const body = req.body;
  Hotel.create(body, function (err, doc) {
    if (err) return console.log(err);
    res.send("Created hotel ", doc);
  });
}

function putHotel(req, res) {
  if (!req.body) return res.sendStatus(400);
  const id = req.params.id;
  const hotelName = req.body.hotel;
  const hotelImage = req.body.hotelImage;
  const newHotel = { hotel: hotelName, hotelImage };

  Hotel.updateOne({ id }, { $set: newHotel }, function (err, hotel) {
    if (err) return console.log(err);
    console.log("Change data of hotel ", hotel);
  });
}

module.exports = {
  getHotels,
  postHotel,
  deleteHotelById,
  getHotelById,
  putHotel,
};

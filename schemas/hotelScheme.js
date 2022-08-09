const { Schema } = require("mongoose");

const hotelScheme = new Schema(
  { id: Number, hotel: String, hotelImage: String },
  { versionKey: false }
);

module.exports = hotelScheme;

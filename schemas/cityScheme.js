const { Schema } = require("mongoose");

const cityScheme = new Schema(
  {
    id: Number,
    city: String,
    hotels: [String],
    attractions: [String],
    cityImage: String,
  },
  { versionKey: false }
);

module.exports = cityScheme;

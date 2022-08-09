const { Schema } = require("mongoose");

const countyScheme = new Schema(
  {
    id: Number,
    country: String,
    cities: [String],
    countryImage: String,
  },
  { versionKey: false }
);

module.exports = countyScheme;

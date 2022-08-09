const { Schema } = require("mongoose");

const attractionScheme = new Schema(
  { id: Number, attraction: String, attractionImage: String },
  { versionKey: false }
);

module.exports = attractionScheme;

const express = require("express");
const app = express();
const mongoose = require("mongoose");

const citiesRoute = require("./routes/cities");
const hotelsRoute = require("./routes/hotels");
const attractionsRoute = require("./routes/attractions");
const countriesRoute = require("./routes/countries");

const PORT = process.env.PORT || 8080;
const dbLink =
  "mongodb+srv://dimaer_77:mongopass77@cluster0.k4mxr4p.mongodb.net/travelAppDB?retryWrites=true&w=majority";
mongoose
  .connect(dbLink, { useUnifiedTopology: true, useNewUrlParser: true })
  .then((res) => console.log("DB connect"))
  .catch((err) => console.log(errs));

app.use(express.json());
// app.use(function (req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*");
//   next();
// });

app.use(countriesRoute);

app.use(citiesRoute);

app.use(hotelsRoute);

app.use(attractionsRoute);

app.listen(PORT, function () {
  console.log("Сервер ожидает подключения...");
});

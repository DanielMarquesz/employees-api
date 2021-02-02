const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const Controller = require("./controller/Controller");

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/", Controller);

app.listen(3000, () => {
  console.log(`The Server is Running in the Port: 3000`);
});

module.exports = app;

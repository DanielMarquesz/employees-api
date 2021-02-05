const express = require("express");
require("dotenv").config();
const app = express();
const bodyParser = require("body-parser");
const EmployeesController = require("./controller/EmployeesController");
const OcuppationsController = require("./controller/OcuppationsControler");
const logger = require("./logs/logger");

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/employees", EmployeesController);
app.use("/ocuppations", OcuppationsController);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  logger.log(`info`, `The Server is Running in the Port: ${port}`);
  console.log(`The Server is Running in the Port: localhost:${port}`);
});

module.exports = app;

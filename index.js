const express = require("express");
require("dotenv").config();
const app = express();
const bodyParser = require("body-parser");
const EmployeesController = require("./src/controller/EmployeesController");

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/api", EmployeesController);

app.listen(process.env.PORT, () => {
  console.log(`The Server is Running in: http://localhost:${process.env.PORT}`);
});

module.exports = app;

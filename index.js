const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const EmployeesController = require("./controller/EmployeesController");
const OcuppationsController = require("./controller/OcuppationsControler");

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/employees", EmployeesController);
app.use("/ocuppations", OcuppationsController);

app.listen(3000, () => {
  console.log(`The Server is Running in the Port: 3000`);
});

module.exports = app;

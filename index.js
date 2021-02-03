const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const EmployeesController = require("./src/controller/EmployeesController");
const OcuppationController = require("./src/controller/OcuppationsController");

app.use(bodyParser.json());
app.set("view engine", "ejs");
app.set("views", "src" + "/views");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/employees", EmployeesController);
app.use("/ocuppations", OcuppationController);
app.use("/", (req, res) => {
  res.render("index");
});

app.listen(3000, () => {
  console.log(`The Server is Running in the Port: 3000`);
});

module.exports = app;

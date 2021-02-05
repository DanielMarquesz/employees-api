const express = require("express");
require("dotenv").config();
const app = express();
const bodyParser = require("body-parser");
<<<<<<< HEAD
const EmployeesController = require("./controller/EmployeesController");
const OcuppationsController = require("./controller/OcuppationsControler");
const logger = require("./utils/logs/logger");
=======
const EmployeesController = require("./src/controller/EmployeesController");
>>>>>>> d61813ee3f7bff29486ba753e67e0eea8cb1ebaa

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

<<<<<<< HEAD
app.use("/employees", EmployeesController);
app.use("/ocuppations", OcuppationsController);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  logger.log(`info`, `The server is running in : ${port}`);
  console.log(`The server is running in : localhost:${port}`);
=======
app.use("/api", EmployeesController);

app.listen(process.env.PORT, () => {
  console.log(`The Server is Running in: http://localhost:${process.env.PORT}`);
>>>>>>> d61813ee3f7bff29486ba753e67e0eea8cb1ebaa
});

module.exports = app;

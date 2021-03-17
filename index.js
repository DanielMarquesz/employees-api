const express = require("express");
require("dotenv").config();
const app = express();
const bodyParser = require("body-parser");
const router = require("./src/routes");
const OccupationsController = require("./src/controller/OccupationsController");
const UsersController = require("./src/controller/UsersController");
const logger = require("./src/utils/logs/logger");

app.use(bodyParser.json());

app.use(router);
app.use("/occupations", OccupationsController);
app.use("/users", UsersController);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  logger.log(`info`, `The server is running in : ${port}`);
  console.log(`The server is running in : localhost:${port}`);
});

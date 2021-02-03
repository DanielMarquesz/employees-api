const express = require("express");
const router = express.Router();
const Employees = require("../models/Employees");
const Ocuppation = require("../models/Ocuppation");

router.get("/", async (req, res) => {
  res.send("Olha o Macaco");
});

module.exports = router;

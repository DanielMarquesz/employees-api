const express = require("express");
const router = express.Router();
const Employees = require("../models/Employees");

router.get("/", async (req, res) => {
  res.send("Olha o Macaco");
});

module.exports = router;

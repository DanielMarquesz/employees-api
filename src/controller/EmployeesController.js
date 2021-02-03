const express = require("express");
const router = express.Router();
const Employees = require("../models/Employees");

router.get("/", async (req, res) => {
  await Employees.findAll()
    .then((employees) => {
      console.log(employees);
      res.json(employees);
    })
    .catch((err) => {
      res.send(err);
    });
});

module.exports = router;

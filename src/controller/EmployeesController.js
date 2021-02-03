const express = require("express");
const router = express.Router();
const Employees = require("../models/Employees");

router.get("/list", async (req, res) => {
  await Employees.findAll()
    .then((employees) => {
      res.json(employees);
    })
    .catch((err) => {
      res.send(err);
    });
});

router.post("/create", async (req, res) => {
  let employee = { ...req.body };
  console.log(employee);
  await Employees.create(employee)
    .then(() => {
      res.sendStatus(201);
    })
    .catch((err) => {
      res.send(err);
    });
});

router.put("/edit/:id", async (req, res) => {
  let id = req.params.id;
  let employee = { ...req.body };
  await Employees.update(employee, { where: { id: id } })
    .then(() => {
      res.sendStatus(201);
    })
    .catch((err) => {
      res.send(err);
    });
});

router.delete("/remove/:id", async (req, res) => {
  let id = req.params.id;

  await Employees.destroy({ where: { id: id } })
    .then(() => {
      res.sendStatus(200);
    })
    .catch((err) => {
      res.send(err);
    });
});

module.exports = router;

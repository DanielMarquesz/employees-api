const express = require("express");
const Employees = require("../models/Employees");
const logger = require("../utils/logs/logger");
const { employeesSchema, } = require("../utils/validations/models/employeesSchema");

const router = express.Router(); 

router.get("/list", async (req, res) => {
  await Employees.findAll()
    .then((employees) => {
      res.status(200).json(employees);
    })
    .catch((err) => {
      logger.log(`error`, `${err}`);
      res.sendStatus(500).send(err);
    });
});

router.get("/list/:id", async (req, res) => {
  let id = req.params.id;

  if (isNaN(id)) res.sendStatus(400);
  else {
    await Employees.findByPk(id)
      .then((employees) => {
        res.status(200).json(employees);
      })
      .catch((err) => {
        logger.log(`error`, `${err}`);
        res.send(err).json(err);
      });
  }
});

router.post("/create", async (req, res) => {
  try {
    await employeesSchema.validateAsync(req.body);

    let employees = { ...req.body };

    await Employees.create(employees)
      .then((employees) => {
        res.status(201).json(employees);
      })
      .catch((err) => {
        logger.log(`error`, `${err}`);
        res.send(err).json(err);
      });
  } catch (error) {
    logger.log(`error`, `${error}`);
    res.status(500);
  }
});

router.put("/edit/:id", async (req, res) => {
  let id = req.params.id;

  if (isNaN(id)) res.sendStatus(400);
  else {
    try {
      await employeesSchema.validateAsync(req.body);

      let employees = { ...req.body };

      await Employees.update(employees, { where: { id: id } })
        .then(() => Employees.findAll({ where: { id: id } }))
        .then((employees) => {
          res.status(201).send(employees);
        })
        .catch((err) => {
          logger.log(`error`, `${err}`);
          res.send(err).json(err);
        });
    } catch (error) {
      logger.log(`error`, `${error}`);
      res.status(500);
    }
  }
});

router.delete("/delete/:id", async (req, res) => {
  let id = req.params.id;

  if (isNaN(id)) res.sendStatus(400);
  else {
    await Employees.destroy({ where: { id: req.params.id } })
      .then(() => {
        res.sendStatus(200);
      })
      .catch((err) => {
        logger.log(`error`, `${err}`);
        res.send(err);
      });
  }
});

module.exports = router;

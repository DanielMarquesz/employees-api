const Employees = require("../models/Employees");
const logger = require("../utils/logs/logger");
const { employeesSchema } = require("../utils/validations/models/employeesSchema");

class EmployeesController {

  consult = async (req, res) => {


    try {

      const employees = await Employees.findAll()

      if (employees) {
        res.status(200).json({ employees })
      }
    } catch (err) {
      logger.log('error', err);
      res.status(500).send(err);
    }
  }

  consultOne = async (req, res) => {

    let { id } = req.params;

    try {
      const employee = await Employees.findByPk(id);
      if (employee) {
        res.status(200).json({ employee });
      } else if (!employee) {
        res.status(404).json({ message: 'Employee not foud!' });
      }
    } catch (err) {
      logger.log(`error`, err);
      res.status(500).send(err);
    }
  }

  create = async (req, res) => {
    try {
      await employeesSchema.validateAsync(req.body);
      let employees = { ...req.body };

      await Employees.create(employees).then((employees) => {
        res.status(201).json(employees);
      });
    } catch (error) {
      logger.log(`error`, `${error}`);
      res.status(400).send(error.details[0].message);
    }
  };

  edit = async (req, res) => {
    let id = req.params.id;

    if (isNaN(id)) res.sendStatus(400);
    else {
      try {
        await employeesSchema.validateAsync(req.body);

        let employees = { ...req.body };
        await Employees.update(employees, { where: { id: id } }).then((employees) => {
          if (employees[0] === 0) {
            logger.log(`error`, `Not Found`);
            res.sendStatus(404);
          } else {
            res.sendStatus(200);
          }
        }
        );
      } catch (error) {
        logger.log(`error`, `${error}`);
        res.status(400).send(error.details[0].message);
      }
    }
  };

  delete = async (req, res) => {
    let id = req.params.id;

    if (isNaN(id)) res.sendStatus(400);
    else {
      try {
        await Employees.destroy({ where: { id: id } }).then((employees) => {
          if (employees === 0) {
            logger.log(`error`, `Not Found`);
            res.sendStatus(404);
          } else {
            res.sendStatus(200);
          }
        })
      } catch (err) {
        logger.log(`error`, `${err}`);
        res.status(500).send(err);
      }
    }
  }

}

module.exports = EmployeesController;

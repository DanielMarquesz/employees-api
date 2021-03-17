const express = require("express");
const router = express.Router();
const Employees = require("../models/Employees");
const logger = require("../utils/logs/logger");
const { employeesSchema } = require("../utils/validations/models/employeesSchema");
const { verifyToken } = require("../utils/authentication/auth");

class EmployeesControllerClass {

  consult = async (req, res) => {
    try {
      await Employees.findAll().then((employees) => {        
        res.status(200).json(employees);
      })
    } catch(err) {
      logger.log(`error`, err);
      res.status(500).send(err);
    }  
  }

  consultOne = async (req, res) => {
    let id = req.params.id;
  
    try {
      if (isNaN(id)) res.sendStatus(400);
      else {
        await Employees.findByPk(id).then((employees) => {
          if (employees === null) {
            logger.log(`error`, `Not Found`);
            res.sendStatus(404);
          } else {
            res.status(200).json(employees);
          }
        });
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

  edit =  async (req, res) => {
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
              res.sendStatus(201);
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
      }catch(err) {
        logger.log(`error`, `${err}`);
          res.status(500).send(err);
      }     
    }
  }

}
// router.get("/", async (req, res) => {

//   try {
//     await Employees.findAll().then((employees) => {
//       res.status(200).json(employees);
//     })
//   } catch(err) {
//     logger.log(`error`, err);
//     res.status(500).send(err);
//   }  
// })

// router.get("/:id", async (req, res) => {
//   let id = req.params.id;

//   try {
//     if (isNaN(id)) res.sendStatus(400);
//     else {
//       await Employees.findByPk(id).then((employees) => {
//         if (employees === null) {
//           logger.log(`error`, `Not Found`);
//           res.sendStatus(404);
//         } else {
//           res.status(200).json(employees);
//         }
//       });
//     }
//   } catch (err) {
//     logger.log(`error`, err);
//     res.status(500).send(err);
//   }
// });

// router.post("/create", verifyToken, async (req, res) => {
//   try {
//     await employeesSchema.validateAsync(req.body);
//     let employees = { ...req.body };

//     await Employees.create(employees).then((employees) => {
//       res.status(201).json(employees);
//     });
//   } catch (error) {
//     logger.log(`error`, `${error}`);
//     res.status(400).send(error.details[0].message);
//   }
// });

// router.put("/edit/:id", verifyToken, async (req, res) => {
//   let id = req.params.id;

//   if (isNaN(id)) res.sendStatus(400);
//   else {
//     try {
//       await employeesSchema.validateAsync(req.body);

//       let employees = { ...req.body };
//       await Employees.update(employees, { where: { id: id } }).then((employees) => {
//           if (employees[0] === 0) {
//             logger.log(`error`, `Not Found`);
//             res.sendStatus(404);
//           } else {
//             res.sendStatus(201);
//           }
//         }
//       );
//     } catch (error) {
//       logger.log(`error`, `${error}`);
//       res.status(400).send(error.details[0].message);
//     }
//   }
// });

// router.delete("/:id", verifyToken, async (req, res) => {
//   let id = req.params.id;

//   if (isNaN(id)) res.sendStatus(400);
//   else {
//     try {
//       await Employees.destroy({ where: { id: id } }).then((employees) => {
//         if (employees === 0) {
//           logger.log(`error`, `Not Found`);
//           res.sendStatus(404);
//         } else {
//           res.sendStatus(200);
//         }
//       })
//     }catch(err) {
//       logger.log(`error`, `${err}`);
//         res.status(500).send(err);
//     }     
//   }
// });

module.exports = EmployeesControllerClass;

const express = require("express");
const router = express.Router();
const Employees = require("../models/Employees");
const Ocuppations = require("../models/Ocuppation");

router.get("/list", async (req, res) => {
  // Lista os Funcionários
  await Employees.findAll()
    .then((employees) => {
      res.render("employee/list", { employees: employees });
    })
    .catch((err) => {
      res.send(err);
    });
});

router.get("/register", (req, res) => {
  // Página de registro dos Funcionários

  Ocuppations.findAll().then((ocuppation) => {
    res.render("employee/register", { ocuppation: ocuppation });
  });
});

router.post("/save", async (req, res) => {
  let employee = { ...req.body };

  await Employees.create(employee)
    .then(() => {
      res.status(201).redirect("/employees/list");
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

router.get("/remove/:id", async (req, res) => {
  // Delete an Entity for Db
  let id = parseInt(req.params.id);

  await Employees.destroy({ where: { id: id } })
    .then(() => {
      res.redirect("/employees/list");
    })
    .catch((err) => {
      res.send(err);
    });
});

module.exports = router;

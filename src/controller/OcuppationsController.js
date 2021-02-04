const express = require("express", "express-promise-router");
const router = express.Router();
// const router = require("express-promise-router")();
const Ocuppation = require("../models/Ocuppation");

router.get("/list", async (req, res) => {
  // Lista os Funcionários
  await Ocuppation.findAll()
    .then((ocuppations) => {
      res.render("ocuppation/list", { ocuppations: ocuppations });
    })
    .catch((err) => {
      res.send(err);
    });
});

router.get("/register", (req, res) => {
  // Página de registro dos Funcionários
  res.render("ocuppation/register");
});

router.post("/save", async (req, res) => {
  // Método de Cadastro dos Funcionários
  let ocuppations = { ...req.body };
  await Ocuppation.create(ocuppations)
    .then(() => {
      res.status(201).redirect("/ocuppations/list");
    })
    .catch((err) => {
      res.send(err);
    });  
});

router.put("/edit/:id", async (req, res) => {
  let id = req.params.id;
  let ocuppations = { ...req.body };
  await Ocuppation.update(ocuppations, { where: { id: id } })
    .then(() => {
      res.render("ocuppation/edit");
    })
    .catch((err) => {
      res.send(err);
    });
});

router.delete("/remove/:id", async (req, res) => {
  let id = req.params.id;

  await Ocuppation.destroy({ where: { id: id } })
    .then(() => {
      res.sendStatus(200);
    })
    .catch((err) => {
      res.send(err);
    });
});

module.exports = router;

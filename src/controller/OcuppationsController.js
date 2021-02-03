const express = require("express");
const router = express.Router();
const Ocupation = require("../models/Ocuppation");

router.get("/list", async (req, res) => {
  await Ocupation.findAll()
    .then((ocupations) => {
      res.json(ocupations);
    })
    .catch((err) => {
      res.send(err);
    });
});

router.post("/create", async (req, res) => {
  let ocupations = { ...req.body };

  await Ocupation.create(ocupations)
    .then(() => {
      res.sendStatus(201);
    })
    .catch((err) => {
      res.send(err);
    });
});

router.put("/edit/:id", async (req, res) => {
  let id = req.params.id;
  let ocupations = { ...req.body };
  await Ocupation.update(ocupations, { where: { id: id } })
    .then(() => {
      res.sendStatus(201);
    })
    .catch((err) => {
      res.send(err);
    });
});

router.delete("/remove/:id", async (req, res) => {
  let id = req.params.id;

  await Ocupation.destroy({ where: { id: id } })
    .then(() => {
      res.sendStatus(200);
    })
    .catch((err) => {
      res.send(err);
    });
});

module.exports = router;

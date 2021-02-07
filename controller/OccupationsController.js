const express = require("express");
const Occupations = require("../models/Occupations");
const logger = require("../utils/logs/logger");
const {
  occupationSchema,
} = require("../utils/validations/models/occupationSchema");
const router = express.Router();

router.get("/list", async (req, res) => {
  await Occupations.findAll()
    .then((occupations) => {
      res.status(200).json(occupations);
    })
    .catch((err) => {
      logger.log(`error`, `${err}`);
      res.status(500).send(err);
    });
});

router.get("/list/:id", async (req, res) => {
  let id = req.params.id;

  if (isNaN(id)) res.sendStatus(400);
  else {
    await Occupations.findByPk(id)
      .then((occupations) => {
        res.status(200).json(occupations);
      })
      .catch((err) => {
        logger.log(`error`, `${err}`);
        res.status(404).send(err).json(err);
      });
  }
});

router.post("/create", async (req, res) => {
  try {
    await occupationSchema.validateAsync(req.body);

    let occupations = { ...req.body };

    await Occupations.create(occupations)
      .then((occupations) => {
        res.status(201).json(occupations);
      })      
  } catch (error) {
    logger.log(`error`, `${error}`);
    res.status(400).send(error.details[0].message);
  }
});

router.patch("/edit/:id", async (req, res) => {
  let id = req.params.id;

  if (isNaN(id)) res.sendStatus(400);
  else {
    try {
      await occupationSchema.validateAsync(req.body);

      let occupations = { ...req.body };
      await Occupations.update(occupations, { where: { id: id } })
        .then(() => Occupations.findAll({ where: { id: id } }))
        .then((occupations) => {
          res.status(201).send(occupations);
        })        
    } catch (error) {
      logger.log(`error`, `${error}`);
      res.status(400).send(error.details[0].message).status(400);
    }
  }
});

router.delete("/delete/:id", async (req, res) => {
  let id = req.params.id;

  if (isNaN(id)) res.sendStatus(400);
  else {
    await Occupations.destroy({ where: { id: req.params.id } })
      .then(() => {
        res.sendStatus(200);
      })
      .catch((err) => {
        logger.log(`error`, `${err}`);
        res.status(500).send(err);
      });
  }
});

module.exports = router;

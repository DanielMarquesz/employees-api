const express = require("express");
const Ocuppations = require("../models/Ocuppations");
const logger = require("../utils/logs/logger");
const {
  ocuppationSchema,
} = require("../utils/validations/models/ocuppationSchema");
const router = express.Router();

router.get("/list", async (req, res) => {
  await Ocuppations.findAll()
    .then((ocuppations) => {
      res.status(200).json(ocuppations);
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
    await Ocuppations.findByPk(id)
      .then((ocuppations) => {
        res.status(200).json(ocuppations);
      })
      .catch((err) => {
        logger.log(`error`, `${err}`);
        res.send(err).json(err);
      });
  }
});

router.post("/create", async (req, res, next) => {
  try {
    await ocuppationSchema.validateAsync(req.body);

    let ocuppations = { ...req.body };

    await Ocuppations.create(ocuppations)
      .then((ocuppations) => {
        res.status(201).json(ocuppations);
      })
      .catch((err) => {
        logger.log(`error`, `${err}`);
        res.send(err).json(err);
      });
  } catch (error) {
    logger.log(`error`, `${error}`);
    res.status(400).send(error.details[0].message);
  }
});

router.put("/edit/:id", async (req, res) => {
  let id = req.params.id;

  if (isNaN(id)) res.sendStatus(400);
  else {
    try {
      await ocuppationSchema.validateAsync(req.body);

      let ocuppations = { ...req.body };
      await Ocuppations.update(ocuppations, { where: { id: id } })
        .then(() => Ocuppations.findAll({ where: { id: id } }))
        .then((ocuppations) => {
          res.status(201).send(ocuppations);
        })
        .catch((err) => {
          logger.log(`error`, `${err}`);
          res.send(err).json(err);
        });
        
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
    await Ocuppations.destroy({ where: { id: req.params.id } })
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

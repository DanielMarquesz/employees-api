const Occupations = require("../models/Occupations")
const logger = require("../utils/logs/logger")
const { occupationSchema } = require("../utils/validations/models/occupationSchema")
class OccupationsController {

  consult = async (req, res) => {
    console.log("chamou papai")
    await Occupations.findAll().then((occupations) => {
        res.status(200).json(occupations)
      })
      .catch((err) => {
        logger.log(`error`, err)
        res.status(500).send(err)
      })
  }

  consultOne = async (req, res) => {
    let id = req.params.id
  
    try {
      if (isNaN(id)) res.sendStatus(400)
      else {
        await Occupations.findByPk(id).then((occupations) => {
          if (occupations === null) {
            logger.log(`error`, `Not Found`)
            res.sendStatus(404)
          } else {
            res.status(200).json(occupations)
          }
        })
      }
    } catch (error) {
      logger.log(`error`, error)
      res.status(500).send(error)
    }
  }

  create = async (req, res) => {
    try {
      await occupationSchema.validateAsync(req.body)
      let occupations = { ...req.body }
  
      await Occupations.create(occupations).then((occupations) => {
        res.status(201).json(occupations)
      })
    } catch (error) {
      logger.log(`error`, `${error}`)
      res.status(400).send(error.details[0].message)
    }
  }

  editOne = async (req, res) => {
    let id = req.params.id
  
    if (isNaN(id)) res.sendStatus(400)
    else {
      try {
        await occupationSchema.validateAsync(req.body)  
        let occupations = { ...req.body }
        await Occupations.update(occupations, { where: { id: id } }).then(
          (occupations) => {
            if (occupations[0] === 0) {
              logger.log(`error`, `Not Found`)
              res.sendStatus(404)
            } else {
              res.sendStatus(200)
            }
          }
        )
      } catch (error) {
        logger.log(`error`, `${error}`)
        res.status(400).send(error.details[0].message)
      }
    }
  }

  delete = async (req, res) => {
    let id = req.params.id
  
    if (isNaN(id)) res.sendStatus(400)
    else {
      await Occupations.destroy({ where: { id: id } })
        .then((occupations) => {
          if (occupations === 0) {
            logger.log(`error`, `Not Found`)
            res.sendStatus(404)
          } else {
            res.sendStatus(200)
          }
        })
        .catch((err) => {
          logger.log(`error`, `${err}`)
          res.status(500).send(err)
        })
    }
  }

}

module.exports = OccupationsController

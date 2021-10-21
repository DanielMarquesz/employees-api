const Occupations = require("../models/Occupations")
const logger = require("../utils/logs/logger")
const { occupationSchema } = require("../utils/validations/models/occupationSchema")
class OccupationsController {

  consult = async (req, res) => {
    try {
      const occupations = await Occupations.findAll()

      res.status(200).json(occupations)
    } catch (error) {
      logger.log(`error`, error)
      res.status(500).send(error)
    }
  }

  consultOne = async (req, res) => {
    const id = req.params.id

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
      const occupations = { ...req.body }

      const result = await Occupations.create(occupations)

      res.status(201).json(result)
    } catch (error) {
      logger.log(`error`, `${error}`)
      res.status(400).send(error.details[0].message)
    }
  }

  editOne = async (req, res) => {
    const id = req.params.id

    if (isNaN(id)) res.sendStatus(400)
    else {
      try {
        await occupationSchema.validateAsync(req.body)
        const occupations = { ...req.body }
        const result = await Occupations.update(occupations, { where: { id: id } })
        if (result[0] === 0) {
          logger.log(`error`, `Not Found`)
          res.sendStatus(404)
        } else {
          res.sendStatus(200)
        }

      } catch (error) {
        logger.log('error', error)
        res.status(400).send(error.details[0].message)
      }
    }
  }

  delete = async (req, res) => {
    const id = req.params.id

    if (isNaN(id)) res.sendStatus(400)

    try {
      const result = await Occupations.destroy({ where: { id: id } })

      if (result === 0) {
        res.status(402).send({ message: 'Nothing to delete!' })
      }
      res.sendStatus(200)
    } catch (err) {
      logger.log('error', err)
      res.status(500).send(err)
    }
  }
}

module.exports = OccupationsController

const jwt = require("jsonwebtoken");
const Users = require("../models/Users");
const { JWTSecret } = require("../utils/authentication/auth");
const bcrypt = require('bcrypt');

class UsersController {

  consult = async (req, res) => {
    try {
      const users = await Users.findAll()

      res.status(200).send({ users })
    } catch (err) {
      res.status(500).send(err);
    }
  }

  create = async (req, res) => {
    const users = { ...req.body }
    const saltRounds = 5
    users.password = bcrypt.hashSync(users.password, saltRounds)
    try {
      await Users.create(users).then((users) => {
        res.status(201).json(users)
      });
    } catch (err) {
      res.send(err)
    }
  }

  login = async (req, res) => {
    const { email, password } = req.body

    if (email != undefined) {
      const user = await Users.findOne({ where: { email } })
      const result = bcrypt.compareSync(password, user.password);
      if (user != undefined) {
        if (result) {
          jwt.sign(
            { id: user.id, email: user.email },
            JWTSecret,
            { expiresIn: "24h" },
            (err, token) => {
              if (err) {
                console.log(err)
                res.status(400)
                res.json({ err: "Falha interna" })
              } else {
                res.set('x-access-token', token).status(200).json({ token: token, name: user.name })
              }
            }
          );
        } else {
          res.status(401)
          res.json({ err: "Credenciais inválidas!" })
        }
      } else {
        res.status(404)
        res.json({ err: "O E-mail enviado não existe na base de dados!" })
      }
    } else {
      res.status(400);
      res.send({ err: "O E-mail enviado é inválido" })
    }

    res.set('x-access-token', token).status(200).json({ token: token, name: user.name })
  }
}

module.exports = UsersController;

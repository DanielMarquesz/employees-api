const jwt = require("jsonwebtoken");
const Users = require("../models/Users");
const { JWTSecret } = require("../utils/authentication/auth");

class UsersController {

  consult = async (req, res) => {
    await Users.findAll()
      .then((users) => {
        res.send(users)
      })
      .catch((err) => {
        req.send(err)
      });
  }

  create = async (req, res) => {
    try {
      let users = { ...req.body }
      await Users.create(users).then((users) => {
        res.status(201).json(users)
      });
    } catch (error) {
      res.send(error)
    }
  }

  login = async (req, res) => {
    var { email, password } = req.body

    if (email != undefined) {
      var user = await Users.findOne({ where: { email: email } })
      if (user != undefined) {
        if (user.password == password) {
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
  }
}

module.exports = UsersController;

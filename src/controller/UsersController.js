const jwt = require("jsonwebtoken");
const Users = require("../models/Users");
const { JWTSecret } = require("../utils/authentication/auth");
const qrcode = require('qrcode')
const otplib = require('otplib');
const authenticator = otplib.authenticator

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
    let { email, password } = req.body
    let type = 'admin'
    if (email != undefined) {
      let user = await Users.findOne({ where: { email: email } })
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
              } else if(type === 'admin') {
                res.status(200)
                res.json({ token: token, name: user.name })
                //res.redirect('/generate')
              }
              else {
                res.status(200)
                res.json({ token: token, name: user.name })
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

  generate2fa = (req, res) => {
    console.log('xadrez')
    const secret = authenticator.generateSecret();
    const user = 'SpotMetrics'; // Name of the user in the db
    const service = 'mOs';
    const otpauth = authenticator.keyuri(user, service, secret);

    try {
      qrcode.toDataURL(otpauth, (err, imageUrl) => {
        if (err) {
          console.log('Error with QR');
          return;
        }
        res.json({qrCodeImgae: imageUrl, secret: secret});
        //res.redirect('/verify')
        return
      });
    } catch (error) {
      console.log(error)
    }

  }

  verify2fa = async(req, res) => {
    try {
      const { token, secret } = req.body
      const isValid = authenticator.check(token, secret);
      res.json({permission: isValid})
    } catch (err) {
      res.send(err)
    }
  }
}

module.exports = UsersController;

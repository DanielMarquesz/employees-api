const express = require("express");
const jwt = require("jsonwebtoken");
const router = express.Router();
const Users = require("../models/Users");
const { verifyToken, JWTSecret } = require("../utils/authentication/auth");

router.get("/", verifyToken, async (req, res) => {
  await Users.findAll()
    .then((users) => {
      res.send(users);
    })
    .catch((err) => {
      req.send(err);
    });
});

router.post("/create", async (req, res) => {
  try {
    let users = { ...req.body };
    await Users.create(users).then((users) => {
      res.status(201).json(users);
    });
  } catch (error) {
    res.send(error);
  }
});

router.post("/login", async (req, res) => {
  var { email, password } = req.body;

  if (email != undefined) {
    var user = await Users.findOne({ where: { email: email } });
    if (user != undefined) {
      if (user.password == password) {
        jwt.sign(
          { id: user.id, email: user.email },
          JWTSecret,
          { expiresIn: "48h" },
          (err, token) => {
            if (err) {
              console.log(err);
              res.status(400);
              res.json({ err: "Falha interna" });
            } else {
              res.status(200);
              res.json({ token: token, name: user.name });
            }
          }
        );
      } else {
        res.status(401);
        res.json({ err: "Credenciais inválidas!" });
      }
    } else {
      res.status(404);
      res.json({ err: "O E-mail enviado não existe na base de dados!" });
    }
  } else {
    res.status(400);
    res.send({ err: "O E-mail enviado é inválido" });
  }
});

module.exports = router;

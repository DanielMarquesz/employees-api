const jwt = require("jsonwebtoken");

const JWTSecret = "djkshahjksdajksdhasjkdhasjkdhasjkdhasjkd";

function verifyToken(req, res, next) {
  const authToken = req.headers["authorization"];

  if (authToken != undefined) {
    const bearer = authToken.split(" ");
    var token = bearer[1];

    jwt.verify(token, JWTSecret, (err, data) => {
      if (err) {
        res.status(401);
        res.json({ err: "Token inválido!" });
      } else {
        req.token = token;
        req.loggedUser = { id: data.id, email: data.email };
        req.empresa = "Guia do programador";
        next();
      }
    });
  } else {
    res.status(401);
    res.json({ err: "Token inválido!" });
  }
}

module.exports = { verifyToken, JWTSecret };

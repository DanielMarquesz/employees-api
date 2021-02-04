const express = require("express");
const Ocuppations = require("../models/Ocuppations");
// const { gamesSchema } = require("../validations/models/gamesSchema"); JOI VALIDATION
const router = express.Router();

router.get("/list", async (req, res) => {
  await Ocuppations.findAll()
    .then((employees) => {
      res.status(200).json(employees);
    })
    .catch((err) => {
      res.sendStatus(500).send(err);
    });
});

// router.get("/list/:id", async (req, res) => {
//   let id = req.params.id;

//   if (isNaN(id)) res.sendStatus(400);
//   else {
//     await Ocuppations.findByPk(id)
//       .then((employees) => {
//         if (employees === null) {
//           res.sendStatus(404);
//         } else {
//           res.status(200).json(employees);
//         }
//       })
//       .catch((err) => {
//         res.send(err).json(err);
//       });
//   }
// });

// router.post("/register", async (req, res, next) => {
//   try {
//     await gamesSchema.validateAsync(req.body);
//   } catch (error) {
//     res.send(error);
//   }

//   let { title, description, price, quantity, avaiable, year, cover } = req.body;

//   await Ocuppations.create({
//     title,
//     description,
//     price,
//     avaiable,
//     quantity,
//     year,
//     cover,
//   })
//     .then((employees) => {
//       res.status(201).json(employees);
//     })
//     .catch((err) => {
//       res.send(err).json(err);
//     });
// });

// router.put("/edit/:id", async (req, res) => {
//   let id = req.params.id;

//   if (isNaN(id)) res.sendStatus(400);
//   else {
//     let {
//       title,
//       description,
//       price,
//       quantity,
//       year,
//       avaiable,
//       cover,
//     } = req.body;

//     await Ocuppations.update(
//       {
//         title,
//         description,
//         price,
//         quantity,
//         year,
//         avaiable,
//         cover,
//       },
//       { where: { id: id } }
//     )
//       .then(() => Ocuppations.findAll({ where: { id: id } }))
//       .then((games) => {
//         res.status(201).send(employees);
//       })
//       .catch((err) => {
//         res.send(err).json(err);
//       });
//   }
// });

// router.patch("/edit/:id", async (req, res) => {
//   let avaiable = req.body.avaiable;
//   let id = req.params.id;

//   if (isNaN(id)) res.sendStatus(400);
//   else {
//     await Ocuppations.update(
//       {
//         avaiable,
//       },
//       { where: { id: req.params.id } }
//     ).then((employees) => {
//       res.sendStatus(200);
//     });
//   }
// });

// router.delete("/remove/:id", async (req, res) => {
//   let id = req.params.id;

//   if (isNaN(id)) res.sendStatus(400);
//   else {
//     await Ocuppations.destroy({ where: { id: req.params.id } })
//       .then(() => {
//         res.sendStatus(200);
//       })
//       .catch((err) => {
//         res.send(err);
//       });
//   }
// });

module.exports = router;

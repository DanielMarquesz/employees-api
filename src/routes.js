const express = require("express");
const router = express.Router();
const EmployeesControllerRoute = require('./controller/EmployeesController')
const OccupationsControllerRoute = require('./controller/OccupationsController')
const UsersControllerRoute = require('./controller/UsersController')
const { verifyToken } = require("./utils/authentication/auth");

const EmployeesRoute = new EmployeesControllerRoute()
const OccupationsRoute = new OccupationsControllerRoute()
const UsersRoute = new UsersControllerRoute()

router.get("/employees", EmployeesRoute.consult)
router.get("/employees/:id", EmployeesRoute.consultOne)
router.post("/employees", verifyToken ,EmployeesRoute.create)
router.put("/employees/edit/:id", verifyToken ,EmployeesRoute.edit)
router.delete("/employees/:id", verifyToken ,EmployeesRoute.delete)

router.get("/occupations", OccupationsRoute.consult)
router.get("/occupations/:id", OccupationsRoute.consultOne)
router.post("/occupations", verifyToken, OccupationsRoute.create)
router.patch("/occupations/edit/:id", verifyToken, OccupationsRoute.editOne)
router.delete("/occupations/:id", verifyToken, OccupationsRoute.delete)

router.get("/users", UsersRoute.consult)
router.post("/users", UsersRoute.create)
router.post("/users/login", UsersRoute.login)
router.get("/users/generate", UsersRoute.generate2fa)
router.post("/users/verify", UsersRoute.verify2fa)

module.exports = router
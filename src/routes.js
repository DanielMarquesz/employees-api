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
router.post("/employees/create", verifyToken ,EmployeesRoute.create)
router.put("/employees/edit/:id", verifyToken ,EmployeesRoute.edit)
router.delete("/employees/:id", verifyToken ,EmployeesRoute.delete)

router.get("/occupations", OccupationsRoute.consult)
router.get("/occupations/:id", OccupationsRoute.consultOne)
router.post("/occupations/create", verifyToken, OccupationsRoute.create)
router.patch("/occupations/edit/:id", verifyToken, OccupationsRoute.editOne)
router.delete("/occupations/:id", verifyToken, OccupationsRoute.delete)

router.get("/users", UsersRoute.consult)
router.post("/users/create", UsersRoute.create)
router.post("/users/login", UsersRoute.login)

module.exports = router
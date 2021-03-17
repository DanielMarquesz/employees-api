const express = require("express");
const router = express.Router();
const EmployeesControllerRoute = require('./controller/EmployeesController')
const { verifyToken } = require("./utils/authentication/auth");

const ControllerRoute = new EmployeesControllerRoute()

router.get("/employees/", ControllerRoute.consult)
router.get("/employees/:id", ControllerRoute.consultOne)
router.post("/employees/create", verifyToken ,ControllerRoute.create)
router.put("/employees/edit/:id", verifyToken ,ControllerRoute.edit)
router.delete("/employees/:id", verifyToken ,ControllerRoute.delete)


module.exports = router
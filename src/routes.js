const express = require("express");
const router = express.Router();
const EmployeesControllerRoute = require('./controller/EmployeesController')

const ControllerRoute = new EmployeesControllerRoute()

router.get("/", ControllerRoute.consult)
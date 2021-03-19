const configDatabase = require("../config/db.config");
const mysql = require('mysql')
const Sequelize = require("sequelize");
const connection = new Sequelize(configDatabase);

module.exports = connection;

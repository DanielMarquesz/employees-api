const configDatabase = require("../config/db.config");
const mysql = require('mysql')
const Sequelize = require("sequelize");

var connection;

if(process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL)
}else {
  connection = new Sequelize(configDatabase);
}

module.exports = connection;

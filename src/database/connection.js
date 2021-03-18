const configDatabase = require("../config/db.config");
const mysql = require('mysql')
const Sequelize = require("sequelize");


if(process.env.JAWSDB_URL) {
  const connection = mysql.createConnection(process.env.JAWSDB_URL)
}else {
  const connection = new Sequelize(configDatabase);
}

module.exports = connection;

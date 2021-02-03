// const env = require("dotenv").config().parsed;
require("dotenv").config();

module.exports = {
  dialect: process.env.DB_DIALECT,
  host: process.env.DB_HOST,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME, // Set the name of database
  define: {
    timestamps: true,
  },
  // timezone: "-03:00",
};

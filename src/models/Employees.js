const { DataTypes, Model } = require("sequelize");
const connection = require("../database/connection");

class Employees extends Model {}

Employees.init(
  {
    name: {
      type: DataTypes.STRING(128),
      allowNull: false,
    },

    age: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },

    ocupation: {
      type: DataTypes.STRING(128),
      allowNull: false,
    },
  },
  {
    sequelize: connection,
    modelName: "Employees",
  }
);

module.exports = Employees;

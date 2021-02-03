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

    ocuppation: {
      type: DataTypes.STRING(128),
      allowNull: false,
    },

    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    sequelize: connection,
    modelName: "Employees",
  }
);

module.exports = Employees;

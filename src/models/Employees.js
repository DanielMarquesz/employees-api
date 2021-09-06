const { DataTypes, Model } = require("sequelize");
const connection = require("../database/connection");
const Occupations = require("./Occupations");

class Employees extends Model { }

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
  },
  {
    sequelize: connection,
    modelName: "employees",
  }
);
Employees.belongsTo(Occupations);
//Employees.sync({ force: true }); // To create the table set 'True', but after created once set 'False'

module.exports = Employees;

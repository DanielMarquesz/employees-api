const { DataTypes, Model } = require("sequelize");
const connection = require("../database/connection");
const Ocuppation = require("./Ocuppations");

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
  },
  {
    sequelize: connection,
    modelName: "Employees",
  }
);
Employees.belongsTo(Ocuppation);
//Employees.sync({ force: true }); // To create the table set 'True', but after created once set 'False'

module.exports = Employees;

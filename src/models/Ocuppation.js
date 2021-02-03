const { DataTypes, Model } = require("sequelize");
const connection = require("../database/connection");
const Employees = require("./Employees");

class Ocuppation extends Model {}

Ocuppation.init(
  {
    ocuppation: {
      type: DataTypes.STRING(128),
      allowNull: false,
    },
  },
  {
    sequelize: connection,
    modelName: "Ocuppation",
  }
);

//Ocuppation.sync({ force: true }); // To create the table set 'True', but after created once set 'False'

module.exports = Ocuppation;

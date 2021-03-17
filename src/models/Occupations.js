const { DataTypes, Model } = require("sequelize");
const connection = require("../database/connection");

class Occupations extends Model {}

Occupations.init(
  {
    name: {
      type: DataTypes.STRING(128),
      unique: true,
      allowNull: false,
    },
  },
  {
    sequelize: connection,
    modelName: "Occupations",
  }
);

//Ocuppations.sync({ force: true }); // To create the table set 'True', but after created once set 'False'
module.exports = Occupations;

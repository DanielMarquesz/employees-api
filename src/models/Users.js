const { DataTypes, Model } = require("sequelize");
const connection = require("../database/connection");

class Users extends Model { }

Users.init(
  {
    name: {
      type: DataTypes.STRING(128),
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING(128),
      unique: true,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING(128),
      allowNull: false,
    },
  },
  {
    sequelize: connection,
    modelName: "users",
  }
);

//Users.sync({ force: true }); // To create the table set 'True', but after created once set 'False'
module.exports = Users;

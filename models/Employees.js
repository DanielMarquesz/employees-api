const { DataTypes, Model } = require("sequelize");
const connection = require("../database/connection");
const Ocuppation = require("./Ocuppations");

<<<<<<< HEAD:models/Employees.js
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
=======
class Employees extends Model {
  static init(connection) {
    super.init(
      {
        name: DataTypes.STRING(128),
        allowNull: false,
      },
      {
        age: DataTypes.INTEGER,
        allowNull: false,
      },
      {
        sequelize: connection,
      }
    );
  }

  static associate(models) {
    this.belongsTo(models.Ocuppation, {
      foreignKey: "idOcuppation",
      targetKey: "id",
      as: "Ocuppation",
    });
  }
}
>>>>>>> d61813ee3f7bff29486ba753e67e0eea8cb1ebaa:src/models/Employees.js

module.exports = Employees;

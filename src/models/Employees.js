const { DataTypes, Model } = require("sequelize");
const connection = require("../database/connection");

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

module.exports = Employees;

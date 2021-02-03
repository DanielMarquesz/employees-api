const { DataTypes, Model } = require("sequelize");
// const connection = require("../database/connection");

const { Model, DataTypes } = require("sequelize");

class Ocuppation extends Model {
  static init(connection) {
    super.init(
      {
        ocuppation: DataTypes.STRING(128),
        allowNull: false,
      },
      {
        sequelize: connection,
      }
    );
  }
}

module.exports = Ocuppation;

-"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class game extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  game.init(
    {
      name: DataTypes.STRING,
      rel_date: DataTypes.DATEONLY,
      price: DataTypes.DECIMAL(11, 2),
      discounted_price: DataTypes.DECIMAL(11, 2),
      discount_per: DataTypes.DECIMAL(3, 2),
      createdAt: DataTypes.DATE,
      updatedAt: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: "game",
    }
  );
  return game;
};

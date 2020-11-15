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
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: DataTypes.STRING,
      rel_date: DataTypes.DATE,
      price: DataTypes.DECIMAL(11, 2),
      discounted_price: DataTypes.DECIMAL(11, 2),
      discount_per: DataTypes.DECIMAL(3, 2),
      createdAt: { type: DataTypes.DATE, field: "created_at" },
      updatedAt: { type: DataTypes.DATE, field: "updated_at" },
    },
    {
      sequelize,
      modelName: "game",
    }
  );
  return game;
};

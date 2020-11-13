'use strict';
const {
  Model
} = require('sequelize');
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
  };
  game.init({
    id: DataTypes.INTEGER,
    name: DataTypes.STRING,
    rel_date: DataTypes.DATE,
    price: DataTypes.INTEGER,
    discounted_price: DataTypes.INTEGER,
    discount_per: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'game',
  });
  return game;
};
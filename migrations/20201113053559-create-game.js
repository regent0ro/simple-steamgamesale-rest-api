"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("games", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      rel_date: {
        allowNull: false,
        type: Sequelize.DATEONLY,
      },
      price: {
        allowNull: false,
        type: Sequelize.DECIMAL(11, 2),
      },
      discounted_price: {
        type: Sequelize.DECIMAL(11, 2),
      },
      discount_per: {
        type: Sequelize.DECIMAL(3, 2),
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("games");
  },
};

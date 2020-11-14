"use strict";

module.exports = {
  // up: async (queryInterface, Sequelize) => {
  //   /**
  //    * Add seed commands here.
  //    *
  //    * Example:
  //    * await queryInterface.bulkInsert('People', [{
  //    *   name: 'John Doe',
  //    *   isBetaMember: false
  //    * }], {});
  //    */
  // },
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "games",
      [
        {
          id: 1,
          name: "Counter-Strike: Global Offensive",
          rel_date: "2012-8-21",
          price: 14.99,
          discounted_price: 14.99,
          discount_per: 0,
          created_at: new Date().toISOString().replace(/T/, " ").replace(/\..+/, ""),
          updated_at: new Date().toISOString().replace(/T/, " ").replace(/\..+/, ""),
        },
        {
          id: 2,
          name: "'PLAYERUNKNOWN''S BATTLEGROUNDS'",
          rel_date: "2017-3-23",
          price: 29.99,
          discounted_price: 29.99,
          discount_per: 0,
          created_at: new Date().toISOString().replace(/T/, " ").replace(/\..+/, ""),
          updated_at: new Date().toISOString().replace(/T/, " ").replace(/\..+/, ""),
        },
      ],
      {}
    );
  },
  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return queryInterface.bulkDelete("games", null, {});
  },
};

'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
  await queryInterface.bulkInsert('bookingAdditionalItems', [{
      id: 1,
      quantity: 2,
      booking_id: "BOK202305110002",
      additional_item_id : "ADI0002",
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      id: 2,
      quantity: 3,
      booking_id: "BOK202305110002",
      additional_item_id : "ADI0003",
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      id: 3,
      quantity: 1,
      booking_id: "BOK202305110002",
      additional_item_id : "ADI0004",
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      id: 4,
      quantity: 1,
      booking_id: "BOK202304220001",
      additional_item_id : "ADI0001",
      createdAt: new Date(),
      updatedAt: new Date()
    }
  ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};

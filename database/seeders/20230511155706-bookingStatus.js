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
    await queryInterface.bulkInsert('bookingStatuses', [{
      id: "BS0001",
      name: "unpaid",
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      id: "BS0002",
      name: "paid",
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      id: "BS0003",
      name: "finish",
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      id: "BS0004",
      name: "canceled",
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

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
    await queryInterface.bulkInsert('bookings', [{
      id: "BOK202305110001",
      user_id: "USR0002",
      transaction_id: "TRS202305110001",
      schedules_id : "SCH20230524.0800",
      packages_id : "PKG0001",
      booking_statuses_id : "BS0002",
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      id: "BOK202305110002",
      user_id: "USR0003",
      transaction_id: "TRS202305110002",
      schedules_id : "SCH20230524.0900",
      packages_id : "PKG0002",
      booking_statuses_id : "BS0001",
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      id: "BOK202304220001",
      user_id: "USR0004",
      transaction_id: "TRS202304220001",
      schedules_id : "SCH20230422.0900",
      packages_id : "PKG0003",
      booking_statuses_id : "BS0003",
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

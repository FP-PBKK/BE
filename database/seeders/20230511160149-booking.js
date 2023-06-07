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
      schedules_id : "SCH0800",
      packages_id : "PKG0001",
      booking_status : "finish",
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      id: "BOK202305110002",
      user_id: "USR0003",
      schedules_id : "SCH0900",
      packages_id : "PKG0002",
      booking_status : "paid",
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      id: "BOK202304220001",
      user_id: "USR0004",
      schedules_id : "SCH1100",
      packages_id : "PKG0003",
      booking_status : "paid",
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

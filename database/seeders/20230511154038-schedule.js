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
    await queryInterface.bulkInsert('schedules', [{
      id: "SCH0800",
      time: "08:00:00",
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      id: "SCH0900",
      time: "09:00:00",
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      id: "SCH1000",
      time: "10:00:00",
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      id: "SCH1100",
      time: "11:00:00",
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

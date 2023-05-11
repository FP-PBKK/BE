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
      id: "SCH20230524.0800",
      date: "2023-05-24",
      time: "08:00:00",
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      id: "SCH20230524.0900",
      date: "2023-05-24",
      time: "09:00:00",
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      id: "SCH20230524.1000",
      date: "2023-05-24",
      time: "10:00:00",
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      id: "SCH20230524.1100",
      date: "2023-05-24",
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

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
   await queryInterface.bulkInsert('feedbacks', [
    {
      id: "FDB202306101206100001",
      user_id: "USR0002",
      booking_id: "BOK202305110001",
      comment: "Fotonya bagus banget, terima kasih Pose Palace :)",
      rate: 5,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      id: "FDB202306101206100002",
      user_id: "USR0003",
      booking_id: "BOK202305110002",
      comment: "Nungguin fotonya lama banget, tapi hasilnya bagus",
      rate: 4.5,
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

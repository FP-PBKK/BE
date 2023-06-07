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
    await queryInterface.bulkInsert('transactions', [{
      id: "TRS202305110001",
      total: 49500,
      paid: true,
      discount_id: "MEICERIYA",
      qr_id: "QR644946485813881",
      booking_id: "BOK202305110001",
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      id: "TRS202305110002",
      total: 85000,
      paid: false,
      discount_id: null,
      qr_id: "QR644946485813990",
      booking_id: "BOK202305110002",
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      id: "TRS202304220001",
      total: 76500,
      paid: true,
      discount_id: "LEBARANSERU",
      qr_id: "QRQR644946485813768",
      booking_id: "BOK202304220001",
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

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
    await queryInterface.bulkInsert('additionalItems', [{
      id: "ADI0001",
      name: "Tambahan Waktu",
      price: 10000,
      description : "Max 5 Menit/Sesi",
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      id: "ADI0002",
      name: "Tambahan 1 Orang",
      price: 10000,
      description : null,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      id: "ADI0003",
      name: "Tambahan 1x Cetak",
      price: 10000,
      description : null,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      id: "ADI0004",
      name: "All Soft File",
      price: 20000,
      description : null,
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

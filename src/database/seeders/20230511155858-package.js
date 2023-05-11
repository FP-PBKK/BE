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
    await queryInterface.bulkInsert('packages', [{
      id: "PKG0001",
      name: "berDUA",
      price: 55000,
      description : "Unlimited Shoot, Durasi 10 Menit, Max 2 Orang, Free Cetak 2x, All Softfiles",
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      id: "PKG0002",
      name: "berEMPAT",
      price: 65000,
      description : "Unlimited Shoot, Durasi 10 Menit, Max 4 Orang, Free Cetak 3x, All Softfiles",
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      id: "PKG0003",
      name: "berENAM",
      price: 80000,
      description : "Unlimited Shoot, Durasi 10 Menit, Max 6 Orang, Free Cetak 4x, All Softfiles",
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

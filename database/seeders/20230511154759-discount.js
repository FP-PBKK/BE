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
    await queryInterface.bulkInsert('discounts', [{
      id: "LEBARANSERU",
      name: "Promo Lebaran",
      percentage: 0.2,
      start_date: "2023-04-22",
      end_date: "2023-04-24",
      description: "Promo lebaran diskon 20% mulai tanggal  22 - 24 April 2023",
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      id: "MEICERIYA",
      name: "Promo bulan Mei",
      percentage: 0.1,
      start_date: "2023-05-01",
      end_date: "2023-05-31",
      description: "Promo selama bulan mei diskon hingga 10%",
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      id: "JUNICERIYA",
      name: "Promo bulan Juni",
      percentage: 0.15,
      start_date: "2023-06-01",
      end_date: "2023-06-30",
      description: "Promo selama bulan Juni diskon hingga 15%",
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

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
    await queryInterface.bulkInsert('users', [{
      id: "USR0001",
      role_id: "RL0001",
      name: "Super Admin",
      email: "admin@gmail.com",
      phone_number: "0812831282",
      password: "adminadmin",
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      id: "USR0002",
      role_id: "RL0002",
      name: "Dion Wiyoko",
      email: "dion@gmail.com",
      phone_number: "0812831283",
      password: "diongantnk",
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      id: "USR0003",
      role_id: "RL0002",
      name: "Waluyo Suherman",
      email: "waluyo@gmail.com",
      phone_number: "0812831284",
      password: "waluyogantnk",
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      id: "USR0004",
      role_id: "RL0002",
      name: "Adi Purwanto",
      email: "adi@gmail.com",
      phone_number: "0812831285",
      password: "adigantnk",
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

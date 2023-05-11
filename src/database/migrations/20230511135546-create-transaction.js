'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Transactions', {
      id: {
        allowNull: false,
        autoIncrement: false,
        primaryKey: true,
        type: Sequelize.STRING
      },
      total: {
        type: Sequelize.INTEGER
      },
      note: {
        type: Sequelize.TEXT,
        allowNull: true
      },
      paid: {
        type: Sequelize.BOOLEAN
      },
      discount_id: {
        type: Sequelize.STRING,
        allowNull: true
      },
      qris_id: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Transactions');
  }
};
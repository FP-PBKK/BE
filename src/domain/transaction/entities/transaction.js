'use strict';
const {
  Model
} = require('sequelize');
const {sequelizeDB} = require('../../../config/database');

module.exports = (sequelize, DataTypes) => {
  class Transaction extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Transaction.belongsTo(models.Discount, {
        foreignKey: 'discount_id',
        as: 'discount'
      });
      Transaction.belongsTo(models.Qris, {
        foreignKey: 'qris_id',
        as: 'qris'
      });
      Transaction.hasMany(sequelizeDB.import('../booking/entities/booking'), {
        foreignKey: 'transaction_id',
        as: 'booking'
      });
    }
  }
  Transaction.init({
    id:{
      type: DataTypes.STRING,
      primaryKey: true,
    },
    total: DataTypes.INTEGER,
    note: DataTypes.TEXT,
    paid: DataTypes.BOOLEAN,
    discount_id: {
      type: DataTypes.STRING,
      allowNull: true
    },
    qris_id: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Transaction',
  });
  return Transaction;
};
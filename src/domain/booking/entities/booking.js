'use strict';
const {
  Model
} = require('sequelize');
const {sequelizeDB} = require('../../../config/database');

module.exports = (sequelize, DataTypes) => {
  class Booking extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Booking.belongsTo(sequelizeDB.import('../../user/entities/User'), {
        foreignKey: 'user_id',
        as: 'user'
      });
      Booking.belongsTo(sequelizeDB.import('../../transaction/entities/Transaction'), {
        foreignKey: 'transaction_id',
        as: 'transaction'
      });
      Booking.belongsTo(sequelizeDB.import('../../schedule/entities/Schedule'), {
        foreignKey: 'schedules_id',
        as: 'schedule'
      });
      Booking.belongsTo(models.Package, {
        foreignKey: 'packages_id',
        as: 'package'
      });
      Booking.belongsTo(models.BookingStatus, {
        foreignKey: 'booking_statuses_id',
        as: 'booking_status'
      });
      Booking.hasMany(models.BookingAdditionalItem, {
        foreignKey: 'booking_id',
        as: 'booking_additional_item'
      });
    }
  }
  Booking.init({
    id:{
      type: DataTypes.STRING,
      primaryKey: true,
    },
    user_id: DataTypes.STRING,
    transaction_id: DataTypes.STRING,
    schedules_id: DataTypes.STRING,
    packages_id: DataTypes.STRING,
    booking_statuses_id: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Booking',
  });
  return Booking;
};
'use strict';
const {
  Model
} = require('sequelize');
const {sequelizeDB} = require('../../../config/database');

module.exports = (sequelize, DataTypes) => {
  class Schedule extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Schedule.hasMany(sequelizeDB.import('../booking/entities/booking'), {
        foreignKey: 'schedules_id',
        as: 'booking'
      });
    }
  }
  Schedule.init({
    id: {
      type: DataTypes.STRING,
      primaryKey: true,
    },
    date: DataTypes.DATE,
    time: DataTypes.TIME
  }, {
    sequelize,
    modelName: 'Schedule',
  });
  return Schedule;
};
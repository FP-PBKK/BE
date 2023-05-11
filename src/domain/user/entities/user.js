'use strict';
const {
  Model
} = require('sequelize');
const {sequelizeDB} = require('../../../config/database');

module.exports = (sequelize, DataTypes) => {  
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.belongsTo(models.Role, {
        foreignKey: 'role_id',
        as: 'role'
      });
      User.hasMany(sequelizeDB.import('../booking/entities/booking'), {
        foreignKey: 'user_id',
        as: 'booking'
      });
    }
  }
  User.init({
    id: {
      type: DataTypes.STRING,
      primaryKey: true,
    },
    role_id: DataTypes.STRING,
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    phone_number: DataTypes.STRING,
    password: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};
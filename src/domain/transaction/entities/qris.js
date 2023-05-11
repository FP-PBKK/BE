'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Qris extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Qris.hasMany(models.Transaction, {
        foreignKey: 'qris_id',
        as: 'qris'
      });
    }
  }
  Qris.init({
    id:{
      type: DataTypes.STRING,
      primaryKey: true,
    },
    name: DataTypes.STRING,
    qris_image: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Qris',
  });
  return Qris;
};
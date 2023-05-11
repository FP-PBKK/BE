'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Discount extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Discount.hasMany(models.Transaction, {
        foreignKey: 'discount_id',
        as: 'discount'
      });
    }
  }
  Discount.init({
    id:{
      type: DataTypes.STRING,
      primaryKey: true,
    },
    name: DataTypes.STRING,
    percentage: DataTypes.FLOAT,
    start_date: DataTypes.DATE,
    end_date: DataTypes.DATE,
    description: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    modelName: 'Discount',
  });
  return Discount;
};
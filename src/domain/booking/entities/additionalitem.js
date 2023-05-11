'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class AdditionalItem extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      AdditionalItem.hasMany(models.BookingAdditionalItem, {
        foreignKey: 'additional_item_id',
        as: 'booking_additional_item'
      });
    }
  }
  AdditionalItem.init({
    id:{
      type: DataTypes.STRING,
      primaryKey: true,
    },
    name: DataTypes.STRING,
    price: DataTypes.INTEGER,
    description: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'AdditionalItem',
  });
  return AdditionalItem;
};
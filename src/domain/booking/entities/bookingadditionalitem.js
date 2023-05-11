'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class BookingAdditionalItem extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      BookingAdditionalItem.belongsTo(models.Booking, {
        foreignKey: 'booking_id',
        as: 'booking'
      });
      BookingAdditionalItem.belongsTo(models.AdditionalItem, {
        foreignKey: 'additional_item_id',
        as: 'additional_item'
      });
    }
  }
  BookingAdditionalItem.init({
    quantity: DataTypes.INTEGER,
    booking_id: DataTypes.STRING,
    additional_item_id: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'BookingAdditionalItem',
  });
  return BookingAdditionalItem;
};
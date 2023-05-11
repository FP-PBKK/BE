'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Package extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Package.hasMany(models.Booking, {
        foreignKey: 'packages_id',
        as: 'package'
      });
    }
  }
  Package.init({
    id:{
      type: DataTypes.STRING,
      primaryKey: true,
    },
    name: DataTypes.STRING,
    price: DataTypes.INTEGER,
    description: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Package',
  });
  return Package;
};
'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Superpower extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Superpower.belongsToMany(models.Hero, {
        through: 'heroes_to_powers',
        foreignKey: 'powerId'
      });
    }
  }
  Superpower.init({
    powerName: {
      type: DataTypes.STRING,
    } ,
    description: {
      type:DataTypes.TEXT
    } 
  }, {
    sequelize,
    modelName: 'Superpower',
    tableName: 'superpowers',
    underscored: true
  });
  return Superpower;
};
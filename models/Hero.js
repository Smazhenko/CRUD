'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Hero extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Hero.belongsToMany(models.Superpower, {
        through: 'heroes_to_powers',
        foreignKey: 'heroId'
      });
      Hero.hasMany(models.Image, {
        foreignKey: 'heroId'
      });
    }
  }
  Hero.init({
    nickName:{
      type: DataTypes.STRING,
      unique: true,
      allowNull:false,
      validate: {
        notEmpty:true,
        notNull: true,
      }
    } ,
    realName: {
      type:DataTypes.STRING,
      allowNull:false,
      validate: {
        notEmpty:true,
        notNull: true,
      }
    } ,
    originDescription: {
      type: DataTypes.TEXT,
    } ,
    cathPhrase: {
      type: DataTypes.STRING
    } 
  }, {
    sequelize,
    modelName: 'Hero',
    tableName: 'heroes',
    underscored: true
    
  });
  return Hero;
};
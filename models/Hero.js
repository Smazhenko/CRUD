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
      // define association here
    }
  }
  Hero.init({
    nickName:{
      type: DataTypes.STRING,
      allowNull:false
    } ,
    realName: {
      type:DataTypes.STRING,
      allowNull:false
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
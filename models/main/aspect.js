'use strict';
module.exports = (sequelize, DataTypes) => {
  const Aspect = sequelize.define('Aspect', {
    aspect_name: DataTypes.STRING,
    degree: DataTypes.INTEGER,
    aspect_power: DataTypes.STRING,
    aspect_quality: DataTypes.STRING,
    aspect_symbol: DataTypes.STRING,
    aspect_significance: DataTypes.STRING
  }, {});
  Aspect.associate = function(models) {
    // associations can be defined here
  };
  return Aspect;
};
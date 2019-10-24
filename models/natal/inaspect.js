'use strict';
module.exports = (sequelize, DataTypes) => {
  const InAspect = sequelize.define('InAspect', {
    natal_aspect_title: DataTypes.STRING,
    natal_planet_id: DataTypes.INTEGER,
    natal_aspect_id: DataTypes.INTEGER,
    natal_to_planet: DataTypes.STRING,
    natal_orb: DataTypes.INTEGER,
    natal_aspect_description: DataTypes.TEXT
  }, {});
  InAspect.associate = function(models) {
    // associations can be defined here
  };
  return InAspect;
};
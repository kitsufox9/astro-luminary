'use strict';
module.exports = (sequelize, DataTypes) => {
  const TransitAspect = sequelize.define('TransitAspect', {
    transit_aspect_title: DataTypes.STRING,
    transit_aspect_planet_id: DataTypes.INTEGER,
    transit_aspect_id: DataTypes.INTEGER,
    transit_to_planet: DataTypes.STRING,
    transit_orb: DataTypes.INTEGER,
    transit_aspect_description: DataTypes.TEXT
  }, {});
  TransitAspect.associate = function(models) {
    // associations can be defined here
  };
  return TransitAspect;
};
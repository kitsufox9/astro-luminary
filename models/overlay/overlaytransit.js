'use strict';
module.exports = (sequelize, DataTypes) => {
  const OverlayTransit = sequelize.define('OverlayTransit', {
    transit_overlay_title: DataTypes.STRING,
    transit_house_planet_id: DataTypes.STRING,
    transit_overlay_house_id: DataTypes.STRING,
    time_in_house: DataTypes.STRING,
    transit_overlay_description: DataTypes.TEXT
  }, {});
  OverlayTransit.associate = function(models) {
    // associations can be defined here
  };
  return OverlayTransit;
};
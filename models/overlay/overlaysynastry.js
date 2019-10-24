'use strict';
module.exports = (sequelize, DataTypes) => {
  const OverlaySynastry = sequelize.define('OverlaySynastry', {
    synastry_overlay_title: DataTypes.STRING,
    synastry_house_planet_id: DataTypes.STRING,
    synastry_overlay_house_id: DataTypes.STRING,
    synastry_overlay_description: DataTypes.TEXT
  }, {});
  OverlaySynastry.associate = function(models) {
    // associations can be defined here
  };
  return OverlaySynastry;
};
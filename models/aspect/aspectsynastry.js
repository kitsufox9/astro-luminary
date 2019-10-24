'use strict';
module.exports = (sequelize, DataTypes) => {
  const AspectSynastry = sequelize.define('AspectSynastry', {
    synastry_aspect_title: DataTypes.STRING,
    synastry_aspect_planet_id: DataTypes.INTEGER,
    synastry_aspect_id: DataTypes.INTEGER,
    synastry_to_planet: DataTypes.STRING,
    synastry_orb: DataTypes.INTEGER,
    synastry_aspect_description: DataTypes.TEXT
  }, {});
  AspectSynastry.associate = function(models) {
    // associations can be defined here
  };
  return AspectSynastry;
};
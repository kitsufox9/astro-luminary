'use strict';
module.exports = (sequelize, DataTypes) => {
  const AspectComposite = sequelize.define('AspectComposite', {
    composite_aspect_title: DataTypes.STRING,
    composite_aspect_planet_id: DataTypes.INTEGER,
    composite_aspect_id: DataTypes.INTEGER,
    composite_to_planet: DataTypes.STRING,
    composite_orb: DataTypes.INTEGER,
    composite_aspect_description: DataTypes.TEXT
  }, {});
  AspectComposite.associate = function(models) {
    // associations can be defined here
  };
  return AspectComposite;
};
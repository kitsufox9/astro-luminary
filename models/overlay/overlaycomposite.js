'use strict';
module.exports = (sequelize, DataTypes) => {
  const OverlayComposite = sequelize.define('OverlayComposite', {
    composite_overlay_title: DataTypes.STRING,
    composite_house_planet_id: DataTypes.STRING,
    composite_overlay_house_id: DataTypes.STRING,
    composite_overlay_description: DataTypes.TEXT
  }, {});
  OverlayComposite.associate = function(models) {
    // associations can be defined here
  };
  return OverlayComposite;
};
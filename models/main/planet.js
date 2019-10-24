'use strict';
module.exports = (sequelize, DataTypes) => {
  const Planet = sequelize.define('Planet', {
    planet_name: DataTypes.STRING,
    represents: DataTypes.ARRAY(DataTypes.STRING),
    speed: DataTypes.FLOAT,
    retrograde: DataTypes.BOOLEAN,
    planet_type: DataTypes.STRING,
    sign_rule_id: DataTypes.ARRAY(DataTypes.INTEGER),
    house_rule_id: DataTypes.ARRAY(DataTypes.INTEGER),
    favorable: DataTypes.STRING,
    domicile: DataTypes.ARRAY(DataTypes.STRING),
    detriment: DataTypes.ARRAY(DataTypes.STRING),
    exaltation: DataTypes.STRING,
    fall: DataTypes.STRING,
    planet_glyph: DataTypes.STRING
  }, {});
  Planet.associate = function(models) {
    // associations can be defined here
  };
  return Planet;
};
'use strict';
module.exports = (sequelize, DataTypes) => {
  const InHouse = sequelize.define('InHouse', {
    house_title: DataTypes.STRING,
    in_house_planet_id: DataTypes.INTEGER,
    in_house_house_id: DataTypes.INTEGER,
    planet_house_description: DataTypes.TEXT
  }, {});
  InHouse.associate = function(models) {
    // associations can be defined here
  };
  return InHouse;
};
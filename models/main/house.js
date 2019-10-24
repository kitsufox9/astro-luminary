'use strict';
module.exports = (sequelize, DataTypes) => {
  const House = sequelize.define('House', {
    house_name: DataTypes.STRING,
    house_number: DataTypes.INTEGER,
    house_cardinality: DataTypes.STRING,
    keywords: DataTypes.ARRAY(DataTypes.STRING),
    house_sign_ruler_id: DataTypes.INTEGER,
    house_planet_ruler_id: DataTypes.INTEGER,
    house_description: DataTypes.TEXT
  }, {});
  House.associate = function(models) {
    // associations can be defined here
  };
  return House;
};
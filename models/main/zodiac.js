'use strict';
module.exports = (sequelize, DataTypes) => {
  const Zodiac = sequelize.define('Zodiac', {
    sign_name: DataTypes.STRING,
    element: DataTypes.STRING,
    modality: DataTypes.STRING,
    symbol: DataTypes.STRING,
    dates: DataTypes.ARRAY(DataTypes.STRING),
    polarity: DataTypes.STRING,
    keywords: DataTypes.ARRAY(DataTypes.STRING),
    ruling_planet_id: DataTypes.ARRAY(DataTypes.INTEGER),
    ruling_house_id: DataTypes.INTEGER,
    strengths: DataTypes.ARRAY(DataTypes.STRING),
    weaknesses: DataTypes.ARRAY(DataTypes.STRING),
    conjunct: DataTypes.STRING,
    sextile: DataTypes.ARRAY(DataTypes.STRING),
    square: DataTypes.ARRAY(DataTypes.STRING),
    trine: DataTypes.ARRAY(DataTypes.STRING),
    opposite: DataTypes.ARRAY(DataTypes.STRING),
    image: DataTypes.STRING
  }, {});
  Zodiac.associate = function(models) {
    // associations can be defined here
  };
  return Zodiac;
};
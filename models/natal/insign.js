'use strict';
module.exports = (sequelize, DataTypes) => {
  const InSign = sequelize.define('InSign', {
    planet_title: DataTypes.STRING,
    planet_id: DataTypes.INTEGER,
    planet_sign_id: DataTypes.INTEGER,
    planet_sign_description: DataTypes.TEXT
  }, {});
  InSign.associate = function(models) {
    // associations can be defined here
  };
  return InSign;
};
'use strict';
module.exports = (sequelize, DataTypes) => {
  const InCusp = sequelize.define('InCusp', {
    cusp_title: DataTypes.STRING,
    cusp_sign_id: DataTypes.INTEGER,
    cusp_house_id: DataTypes.INTEGER,
    cusp_description: DataTypes.TEXT
  }, {});
  InCusp.associate = function(models) {
    // associations can be defined here
  };
  return InCusp;
};
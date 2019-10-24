'use strict';
module.exports = (sequelize, DataTypes) => {
  const InPoint = sequelize.define('InPoint', {
    point_title: DataTypes.STRING,
    point_sign_id: DataTypes.INTEGER,
    point_sign_description: DataTypes.TEXT
  }, {});
  InPoint.associate = function(models) {
    // associations can be defined here
  };
  return InPoint;
};
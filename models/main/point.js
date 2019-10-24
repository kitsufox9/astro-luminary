'use strict';
module.exports = (sequelize, DataTypes) => {
  const Point = sequelize.define('Point', {
    point_name: DataTypes.STRING,
    acronym: DataTypes.STRING,
    house_placement_id: DataTypes.INTEGER,
    point_description: DataTypes.TEXT
  }, {});
  Point.associate = function(models) {
    // associations can be defined here
  };
  return Point;
};
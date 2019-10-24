'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('CompositeOverlays', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      composite_overlay_title: {
        type: Sequelize.STRING
      },
      composite_overlay_planet_id: {
        type: Sequelize.STRING
      },
      composite_overlay_house_id: {
        type: Sequelize.STRING
      },
      composite_overlay_description: {
        type: Sequelize.TEXT
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('CompositeOverlays');
  }
};
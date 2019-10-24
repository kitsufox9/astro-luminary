'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('CompositeAspects', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      composite_aspect_title: {
        type: Sequelize.STRING
      },
      composite_aspect_planet_id: {
        type: Sequelize.STRING
      },
      composite_aspect_id: {
        type: Sequelize.STRING
      },
      composite_to_planet: {
        type: Sequelize.STRING
      },
      composite_orb: {
        type: Sequelize.INTEGER
      },
      composite_aspect_description: {
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
    return queryInterface.dropTable('CompositeAspects');
  }
};
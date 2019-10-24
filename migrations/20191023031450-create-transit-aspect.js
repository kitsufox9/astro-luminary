'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('TransitAspects', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      transit_aspect_title: {
        type: Sequelize.STRING
      },
      transit_aspect_planet_id: {
        type: Sequelize.STRING
      },
      transit_aspect_id: {
        type: Sequelize.STRING
      },
      transit_to_planet: {
        type: Sequelize.STRING
      },
      transit_orb: {
        type: Sequelize.INTEGER
      },
      transit_aspect_description: {
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
    return queryInterface.dropTable('TransitAspects');
  }
};
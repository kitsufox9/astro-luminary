'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('SynastryAspects', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      synastry_aspect_title: {
        type: Sequelize.STRING
      },
      synastry_planet_id: {
        type: Sequelize.STRING
      },
      synastry_aspect_id: {
        type: Sequelize.STRING
      },
      synastry_to_planet: {
        type: Sequelize.STRING
      },
      synastry_orb: {
        type: Sequelize.STRING
      },
      synastry_aspect_description: {
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
    return queryInterface.dropTable('SynastryAspects');
  }
};
'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('InAspects', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      natal_aspect_title: {
        type: Sequelize.STRING
      },
      planet_1_id: {
        type: Sequelize.STRING
      },
      natal_aspect_id: {
        type: Sequelize.STRING
      },
      natal_to_planet: {
        type: Sequelize.STRING
      },
      natal_orb: {
        type: Sequelize.INTEGER
      },
      natal_aspect_description: {
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
    return queryInterface.dropTable('InAspects');
  }
};
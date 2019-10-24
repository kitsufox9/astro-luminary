'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Aspects', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      aspect_name: {
        type: Sequelize.STRING
      },
      degree: {
        type: Sequelize.INTEGER
      },
      aspect_type: {
        type: Sequelize.STRING
      },
      aspect_quality: {
        type: Sequelize.STRING
      },
      aspect_symbol: {
        type: Sequelize.STRING
      },
      orb: {
        type: Sequelize.INTEGER
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
    return queryInterface.dropTable('Aspects');
  }
};
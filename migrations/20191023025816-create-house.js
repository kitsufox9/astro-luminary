'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Houses', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      house_name: {
        type: Sequelize.STRING
      },
      house_number: {
        type: Sequelize.INTEGER
      },
      house_type: {
        type: Sequelize.STRING
      },
      house_description: {
        type: Sequelize.TEXT
      },
      keywords: {
        type: Sequelize.ARRAY(Sequelize.STRING)
      },
      house_sign_ruler: {
        type: Sequelize.STRING
      },
      house_planet_ruler: {
        type: Sequelize.STRING
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
    return queryInterface.dropTable('Houses');
  }
};
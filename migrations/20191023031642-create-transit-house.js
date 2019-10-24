'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('TransitHouses', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      transit_house_title: {
        type: Sequelize.STRING
      },
      transit_house_planet_id: {
        type: Sequelize.STRING
      },
      transit_house_id: {
        type: Sequelize.STRING
      },
      time_in_house: {
        type: Sequelize.STRING
      },
      transit_house_description: {
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
    return queryInterface.dropTable('TransitHouses');
  }
};
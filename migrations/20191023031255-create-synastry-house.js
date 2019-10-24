'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('SynastryHouses', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      synastry_overlay_title: {
        type: Sequelize.STRING
      },
      synastry_planet_in_house_id: {
        type: Sequelize.STRING
      },
      synastry_house_id: {
        type: Sequelize.STRING
      },
      synastry_overlay_description: {
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
    return queryInterface.dropTable('SynastryHouses');
  }
};
'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Zodiacs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      sign_name: {
        type: Sequelize.STRING
      },
      element: {
        type: Sequelize.STRING
      },
      modality: {
        type: Sequelize.STRING
      },
      symbol: {
        type: Sequelize.STRING
      },
      dates: {
        type: Sequelize.ARRAY(Sequelize.STRING)
      },
      polarity: {
        type: Sequelize.STRING
      },
      keywords: {
        type: Sequelize.ARRAY(Sequelize.STRING)
      },
      ruling_planet: {
        type: Sequelize.ARRAY(Sequelize.STRING)
      },
      ruling_house: {
        type: Sequelize.STRING
      },
      strengths: {
        type: Sequelize.ARRAY(Sequelize.STRING)
      },
      weaknesses: {
        type: Sequelize.ARRAY(Sequelize.STRING)
      },
      conjunct: {
        type: Sequelize.STRING
      },
      sextile: {
        type: Sequelize.ARRAY(Sequelize.STRING)
      },
      square: {
        type: Sequelize.ARRAY(Sequelize.STRING)
      },
      trine: {
        type: Sequelize.ARRAY(Sequelize.STRING)
      },
      opposite: {
        type: Sequelize.ARRAY(Sequelize.STRING)
      },
      image: {
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
    return queryInterface.dropTable('Zodiacs');
  }
};
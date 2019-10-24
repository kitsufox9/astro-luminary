'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Planets', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      planet_name: {
        type: Sequelize.STRING
      },
      represents: {
        type: Sequelize.ARRAY(Sequelize.STRING)
      },
      speed: {
        type: Sequelize.INTEGER
      },
      retrograde: {
        type: Sequelize.BOOLEAN
      },
      planet_type: {
        type: Sequelize.STRING
      },
      sign: {
        type: Sequelize.ARRAY(Sequelize.STRING)
      },
      house_rule: {
        type: Sequelize.ARRAY(Sequelize.STRING)
      },
      favorable: {
        type: Sequelize.STRING
      },
      domicile: {
        type: Sequelize.ARRAY(Sequelize.STRING)
      },
      detriment: {
        type: Sequelize.ARRAY(Sequelize.STRING)
      },
      exaltation: {
        type: Sequelize.STRING
      },
      fall: {
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
    return queryInterface.dropTable('Planets');
  }
};
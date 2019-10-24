'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('InPoints', [{
        point_title: "STRING",
        point_sign_id: INTEGER,
        point_sign_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {

      }, {
        
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('InPoints', null, {});
  }
};

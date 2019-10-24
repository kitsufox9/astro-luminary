'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('OverlaySynastrys', [{
        synastry_overlay_title: "STRING",
        synastry_house_planet_id: INTEGER,
        synastry_overlay_house_id: INTEGER,
        synastry_overlay_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {

      }, {
        
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('OverlaySynastrys', null, {});
  }
};

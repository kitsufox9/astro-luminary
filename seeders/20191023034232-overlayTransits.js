'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('OverlayTransits', [{
        transit_overlay_title: "STRING",
        transit_house_planet_id: INTEGER,
        transit_overlay_house_id: INTEGER,
        time_in_house: "STRING",
        transit_overlay_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {

      }, {
        
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('OverlayTransits', null, {});
  }
};

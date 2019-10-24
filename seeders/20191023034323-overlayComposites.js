'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('OverlayComposites', [{
        composite_overlay_title: "STRING",
        composite_house_planet_id: INTEGER,
        composite_overlay_house_id: INTEGER,
        composite_overlay_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {

      }, {
        
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('OverlayComposites', null, {});
  }
};

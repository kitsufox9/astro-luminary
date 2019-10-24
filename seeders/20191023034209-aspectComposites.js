'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('AspectComposites', [{
        composite_aspect_title: "STRING",
        composite_aspect_planet_id: INTEGER,
        composite_aspect_id: INTEGER,
        composite_to_planet: "STRING",
        composite_orb: INTEGER,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {

      }, {
        
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('AspectComposites', null, {});
  }
};

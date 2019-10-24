'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('AspectTransits', [{
        transit_aspect_title: "STRING",
        transit_aspect_planet_id: INTEGER,
        transit_aspect_id: INTEGER,
        transit_to_planet: "STRING",
        transit_orb: INTEGER,
        transit_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {

      }, {
        
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('AspectTransits', null, {});
  }
};

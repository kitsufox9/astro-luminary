'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Houses', [{
        house_name: "The House of Self",
        house_number: 1,
        house_cardinality: "angular",
        keywords: ["self", "identity", "consciousness", "ego", "focus", "appearance"],
        house_sign_ruler_id: 1,
        house_planet_ruler_id: 5,
        house_description: "Rules the conscious self, one's identity and expression of it, and how one is seen by others.",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        house_name: "The House of Value",
        house_number: 2,
        house_cardinality: "succedent",
        keywords: ["values", "possessions", "money"],
        house_sign_ruler_id: 2,
        house_planet_ruler_id: 4,
        house_description: "Rules one's financial standing, assets, and property, as well as how they relate to the material world and feel about it.",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        house_name: "The House of Communication",
        house_number: 3,
        house_cardinality: "cadent",
        keywords: ["communication", "local travel", "school"],
        house_sign_ruler_id: 3,
        house_planet_ruler_id: 3,
        house_description: "Rules communications and correspondence and how one processes information, as well as one's social life.",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        house_name: "The House of Home & Family",
        house_number: 4,
        house_cardinality: "angular",
        keywords: ["home", "family", "parent", "origins"],
        house_sign_ruler_id: 4,
        house_planet_ruler_id: 2,
        house_description: "Rules everything to do with your sense of home and ancestry, including parents and grandparents.",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        house_name: "The House of Pleasure",
        house_number: 5,
        house_cardinality: "succedent",
        keywords: ["fun", "pleasure", "children", "entertainment"],
        house_sign_ruler_id: 5,
        house_planet_ruler_id: 1,
        house_description: "Rules hobbies, interests, entertainment and any activities that are done out of fun and pleasure.",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        house_name: "The House of Health",
        house_number: 6,
        house_cardinality: "cadent",
        keywords: ["health", "service", "work", "habits"],
        house_sign_ruler_id: 6,
        house_planet_ruler_id: 3,
        house_description: "Rules the vitality of one's body, the work that one does out of necessity, pets and general health and wellbeing.",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        house_name: "The House of Relationships",
        house_number: 7,
        house_cardinality: "angular",
        keywords: ["partners", "marriage", "one-to-one relationships"],
        house_sign_ruler_id: 7,
        house_planet_ruler_id: 4,
        house_description: "Rules all one-to-one relationships, including marriages, romantic partnerships, business partners, and even open enemies.",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        house_name: "The House of Sex & Death",
        house_number: 8,
        house_cardinality: "succedent",
        keywords: ["sex", "death", "inheritance"],
        house_sign_ruler_id: 8,
        house_planet_ruler_id: 10,
        house_description: "Rules our attitudes towards change, death, rebirth and crisis. Also rules our sexuality and our personal growth.",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        house_name: "The House of Spirituality",
        house_number: 9,
        house_cardinality: "cadent",
        keywords: ["overseas travel", "religion", "higher learning", "law"],
        house_sign_ruler_id: 9,
        house_planet_ruler_id: 6,
        house_description: "Rules our belief systems, ideologies, and religions. Also is in charge of all kinds of higher learning and philosophy.",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        house_name: "The House of Career",
        house_number: 10,
        house_cardinality: "angular",
        keywords: ["career", "reputation", "social standing"],
        house_sign_ruler_id: 10,
        house_planet_ruler_id: 7,
        house_description: "Rules our position in society, and what we contribute to humanity. Rules our careers, ambitions and our achievements.",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        house_name: "The House of Community",
        house_number: 11,
        house_cardinality: "succedent",
        keywords: ["friendship", "group relationships"],
        house_sign_ruler_id: 11,
        house_planet_ruler_id: 8,
        house_description: "Rules our friends and our social lives in general. Includes the groups and organizations that we belong to.",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        house_name: "The House of Secrets",
        house_number: 12,
        house_cardinality: "cadent",
        keywords: ["secrets", "unconscious", "hidden things"],
        house_sign_ruler_id: 12,
        house_planet_ruler_id: 9,
        house_description: "Rules all that is hidden underneath the surface, including secrets, dreams, hidden strengths and weaknesses, and karma. Also refers to how we may sabotage ourselves.",
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Houses', null, {});
  }
};

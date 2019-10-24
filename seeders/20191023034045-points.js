'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Points', [{
        point_name: "Ascendant",
        acronym: "AC",
        house_placement_id: 1,
        point_description: "The Ascendant or Rising sign (the terms are interchangeable) is a very important part of your horoscope. Your Ascendant is the sign that reflects your outward demeanor and to a great extent determines how the outside world looks at you. The word outer is significant in defining your Rising sign, for this is the sign that represents your outer personality. In modern terminology, it is your image. Very often your Ascendant is what the world first sees in you, the impression that you first make on other people. Many astrologers believe that your Rising sign is more immediately revealing than your Sun sign. Your Rising sign has been likened to the door of a house, the entranceway that visitors first see and must pass through in order to look into the house itself.",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        point_name: "Imum Coeli",
        acronym: "IC",
        house_placement_id: 4,
        point_description: "The IC is the first point of inner-awareness; otherwise known as the id. The id is the primitive inborn personality, the source of all desires and it relates to your roots and early beginnings. Your childhood nurturing gave birth to your feelings of ‘belonging’ and your deepest sense of self. The ‘id’ or the inner ‘self’ is the centre of its own universe; all desires are immediate and represent all parts of the physical and emotional person. Such an idyll cannot last. The ego (MC) develops defence mechanisms to manage unresolved conflicts between the demands of the id (IC) and the expectations of the external emotional world.",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        point_name: "Descendant",
        acronym: "DC",
        house_placement_id: 7,
        point_description: "As the seventh is the first of the social houses, the Descendant marks the beginning point of outward expression. It is here that we enter the realm of relationship. This is the place in the chart that describes our experience of others – how we deal with interpersonal relationships and how we develop our understanding of and connection with other people. The natural ruler of this house is Libra – a sign that is essentially concerned with creating balance, and as such it brings lessons regarding the integration of opposites. This being so, even though the Descendant might be said to relate to our ideal self, it is important to remember that this position can reveal either collaboration and alliance or competitiveness and conflict within our close associations.",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        point_name: "Midheaven",
        acronym: "MC",
        house_placement_id: 10,
        point_description: "The MC is the first point of outer-awareness. It represents the energy of the conscious mind – the ego. It is the conscious mind’s perception of the social environment from birth onwards, and it is responsible for modifying the instinctive energy of the subconscious mind – the id (IC). Depending on how you express the qualities of the sign on your MC depends on whether you will achieve your desire in the outer world.",
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Points', null, {});
  }
};

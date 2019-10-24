'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Aspects', [{
        aspect_name: "Conjunction",
        degree: 0,
        aspect_power: "strongest",
        aspect_quality: "hard",
        aspect_symbol: "https://imgur.com/KLjVOpb",
        aspect_significance: "prominence and reinforcement",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        aspect_name: "Sextile",
        degree: 60,
        aspect_power: "moderate",
        aspect_quality: "easy",
        aspect_symbol: "https://imgur.com/w2Utu2I",
        aspect_significance: "harmony and opportunity",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        aspect_name: "Square",
        degree: 90,
        aspect_power: "strong",
        aspect_quality: "hard",
        aspect_symbol: "https://imgur.com/hOHwrOT",
        aspect_significance: "stress, conflict and obstacle",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        aspect_name: "Trine",
        degree: 120,
        aspect_power: "strong",
        aspect_quality: "easy",
        aspect_symbol: "https://imgur.com/UsDLplU",
        aspect_significance: "harmony, ease, talent and luck",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        aspect_name: "Opposition",
        degree: 180,
        aspect_power: "strong",
        aspect_quality: "hard",
        aspect_symbol: "https://imgur.com/4KFfc3s",
        aspect_significance: "tension and separation",
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Aspects', null, {});
  }
};

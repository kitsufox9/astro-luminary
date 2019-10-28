'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('AspectComposites', [{
        composite_aspect_title: "Sun conjunct Moon",
        composite_planet_id: 1,
        composite_aspect_id: 1,
        composite_to_planet: "Moon",
        composite_orb: 10,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Sun conjunct Mercury",
        composite_planet_id: 1,
        composite_aspect_id: 1,
        composite_to_planet: "Mercury",
        composite_orb: 10,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Sun conjunct Venus",
        composite_planet_id: 1,
        composite_aspect_id: 1,
        composite_to_planet: "Venus",
        composite_orb: 10,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Sun conjunct Mars",
        composite_planet_id: 1,
        composite_aspect_id: 1,
        composite_to_planet: "Mars",
        composite_orb: 10,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Sun conjunct Jupiter",
        composite_planet_id: 1,
        composite_aspect_id: 1,
        composite_to_planet: "Jupiter",
        composite_orb: 10,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Sun conjunct Saturn",
        composite_planet_id: 1,
        composite_aspect_id: 1,
        composite_to_planet: "Saturn",
        composite_orb: 10,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Sun conjunct Uranus",
        composite_planet_id: 1,
        composite_aspect_id: 1,
        composite_to_planet: "Uranus",
        composite_orb: 10,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Sun conjunct Neptune",
        composite_planet_id: 1,
        composite_aspect_id: 1,
        composite_to_planet: "Neptune",
        composite_orb: 10,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Sun conjunct Pluto",
        composite_planet_id: 1,
        composite_aspect_id: 1,
        composite_to_planet: "Pluto",
        composite_orb: 10,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Sun conjunct Chiron",
        composite_planet_id: 1,
        composite_aspect_id: 1,
        composite_to_planet: "Chiron",
        composite_orb: 10,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Sun conjunct North Node",
        composite_planet_id: 1,
        composite_aspect_id: 1,
        composite_to_planet: "North Node",
        composite_orb: 10,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Sun conjunct South Node",
        composite_planet_id: 1,
        composite_aspect_id: 1,
        composite_to_planet: "South Node",
        composite_orb: 10,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Sun conjunct Ceres",
        composite_planet_id: 1,
        composite_aspect_id: 1,
        composite_to_planet: "Ceres",
        composite_orb: 10,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Sun conjunct Pallas Athene",
        composite_planet_id: 1,
        composite_aspect_id: 1,
        composite_to_planet: "Pallas Athene",
        composite_orb: 10,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Sun conjunct Juno",
        composite_planet_id: 1,
        composite_aspect_id: 1,
        composite_to_planet: "Juno",
        composite_orb: 10,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Sun conjunct Vesta",
        composite_planet_id: 1,
        composite_aspect_id: 1,
        composite_to_planet: "Vesta",
        composite_orb: 10,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Sun conjunct Ascendant",
        composite_planet_id: 1,
        composite_aspect_id: 1,
        composite_to_planet: "Ascendant",
        composite_orb: 10,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Sun conjunct Midheaven",
        composite_planet_id: 1,
        composite_aspect_id: 1,
        composite_to_planet: "Midheaven",
        composite_orb: 10,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Moon conjunct Mercury",
        composite_planet_id: 2,
        composite_aspect_id: 1,
        composite_to_planet: "Mercury",
        composite_orb: 10,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Moon conjunct Venus",
        composite_planet_id: 2,
        composite_aspect_id: 1,
        composite_to_planet: "Venus",
        composite_orb: 10,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Moon conjunct Mars",
        composite_planet_id: 2,
        composite_aspect_id: 1,
        composite_to_planet: "Mars",
        composite_orb: 10,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Moon conjunct Jupiter",
        composite_planet_id: 2,
        composite_aspect_id: 1,
        composite_to_planet: "Jupiter",
        composite_orb: 10,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Moon conjunct Saturn",
        composite_planet_id: 2,
        composite_aspect_id: 1,
        composite_to_planet: "Saturn",
        composite_orb: 10,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Moon conjunct Uranus",
        composite_planet_id: 2,
        composite_aspect_id: 1,
        composite_to_planet: "Uranus",
        composite_orb: 10,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Moon conjunct Neptune",
        composite_planet_id: 2,
        composite_aspect_id: 1,
        composite_to_planet: "Neptune",
        composite_orb: 10,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Moon conjunct Pluto",
        composite_planet_id: 2,
        composite_aspect_id: 1,
        composite_to_planet: "Pluto",
        composite_orb: 10,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Moon conjunct Chiron",
        composite_planet_id: 2,
        composite_aspect_id: 1,
        composite_to_planet: "Chiron",
        composite_orb: 10,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Moon conjunct North Node",
        composite_planet_id: 2,
        composite_aspect_id: 1,
        composite_to_planet: "North Node",
        composite_orb: 10,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Moon conjunct South Node",
        composite_planet_id: 2,
        composite_aspect_id: 1,
        composite_to_planet: "South Node",
        composite_orb: 10,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Moon conjunct Ceres",
        composite_planet_id: 2,
        composite_aspect_id: 1,
        composite_to_planet: "Ceres",
        composite_orb: 10,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Moon conjunct Pallas Athene",
        composite_planet_id: 2,
        composite_aspect_id: 1,
        composite_to_planet: "Pallas Athene",
        composite_orb: 10,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Moon conjunct Juno",
        composite_planet_id: 2,
        composite_aspect_id: 1,
        composite_to_planet: "Juno",
        composite_orb: 10,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Moon conjunct Vesta",
        composite_planet_id: 2,
        composite_aspect_id: 1,
        composite_to_planet: "Vesta",
        composite_orb: 10,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Moon conjunct Ascendant",
        composite_planet_id: 2,
        composite_aspect_id: 1,
        composite_to_planet: "Ascendant",
        composite_orb: 10,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Moon conjunct Midheaven",
        composite_planet_id: 2,
        composite_aspect_id: 1,
        composite_to_planet: "Midheaven",
        composite_orb: 10,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        composite_aspect_title: "Mercury conjunct Venus",
        composite_planet_id: 3,
        composite_aspect_id: 1,
        composite_to_planet: "Venus",
        composite_orb: 10,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Mercury conjunct Mars",
        composite_planet_id: 3,
        composite_aspect_id: 1,
        composite_to_planet: "Mars",
        composite_orb: 10,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Mercury conjunct Jupiter",
        composite_planet_id: 3,
        composite_aspect_id: 1,
        composite_to_planet: "Jupiter",
        composite_orb: 10,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Mercury conjunct Saturn",
        composite_planet_id: 3,
        composite_aspect_id: 1,
        composite_to_planet: "Saturn",
        composite_orb: 10,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Mercury conjunct Uranus",
        composite_planet_id: 3,
        composite_aspect_id: 1,
        composite_to_planet: "Uranus",
        composite_orb: 10,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Mercury conjunct Neptune",
        composite_planet_id: 3,
        composite_aspect_id: 1,
        composite_to_planet: "Neptune",
        composite_orb: 10,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Mercury conjunct Pluto",
        composite_planet_id: 3,
        composite_aspect_id: 1,
        composite_to_planet: "Pluto",
        composite_orb: 10,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Mercury conjunct Chiron",
        composite_planet_id: 3,
        composite_aspect_id: 1,
        composite_to_planet: "Chiron",
        composite_orb: 10,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Mercury conjunct North Node",
        composite_planet_id: 3,
        composite_aspect_id: 1,
        composite_to_planet: "North Node",
        composite_orb: 10,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Mercury conjunct South Node",
        composite_planet_id: 3,
        composite_aspect_id: 1,
        composite_to_planet: "South Node",
        composite_orb: 10,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Mercury conjunct Ceres",
        composite_planet_id: 3,
        composite_aspect_id: 1,
        composite_to_planet: "Ceres",
        composite_orb: 10,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Mercury conjunct Pallas Athene",
        composite_planet_id: 3,
        composite_aspect_id: 1,
        composite_to_planet: "Pallas Athene",
        composite_orb: 10,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Mercury conjunct Juno",
        composite_planet_id: 3,
        composite_aspect_id: 1,
        composite_to_planet: "Juno",
        composite_orb: 10,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Mercury conjunct Vesta",
        composite_planet_id: 3,
        composite_aspect_id: 1,
        composite_to_planet: "Vesta",
        composite_orb: 10,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Mercury conjunct Ascendant",
        composite_planet_id: 3,
        composite_aspect_id: 1,
        composite_to_planet: "Ascendant",
        composite_orb: 10,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Mercury conjunct Midheaven",
        composite_planet_id: 3,
        composite_aspect_id: 1,
        composite_to_planet: "Midheaven",
        composite_orb: 10,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Venus conjunct Mars",
        composite_planet_id: 4,
        composite_aspect_id: 1,
        composite_to_planet: "Mars",
        composite_orb: 10,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Venus conjunct Jupiter",
        composite_planet_id: 4,
        composite_aspect_id: 1,
        composite_to_planet: "Jupiter",
        composite_orb: 10,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Venus conjunct Saturn",
        composite_planet_id: 4,
        composite_aspect_id: 1,
        composite_to_planet: "Saturn",
        composite_orb: 10,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Venus conjunct Uranus",
        composite_planet_id: 4,
        composite_aspect_id: 1,
        composite_to_planet: "Uranus",
        composite_orb: 10,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Venus conjunct Neptune",
        composite_planet_id: 4,
        composite_aspect_id: 1,
        composite_to_planet: "Neptune",
        composite_orb: 10,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Venus conjunct Pluto",
        composite_planet_id: 4,
        composite_aspect_id: 1,
        composite_to_planet: "Pluto",
        composite_orb: 10,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Venus conjunct Chiron",
        composite_planet_id: 4,
        composite_aspect_id: 1,
        composite_to_planet: "Chiron",
        composite_orb: 10,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Venus conjunct North Node",
        composite_planet_id: 4,
        composite_aspect_id: 1,
        composite_to_planet: "North Node",
        composite_orb: 10,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Venus conjunct South Node",
        composite_planet_id: 4,
        composite_aspect_id: 1,
        composite_to_planet: "South Node",
        composite_orb: 10,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Venus conjunct Ceres",
        composite_planet_id: 4,
        composite_aspect_id: 1,
        composite_to_planet: "Ceres",
        composite_orb: 10,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Venus conjunct Pallas Athene",
        composite_planet_id: 4,
        composite_aspect_id: 1,
        composite_to_planet: "Pallas Athene",
        composite_orb: 10,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Venus conjunct Juno",
        composite_planet_id: 4,
        composite_aspect_id: 1,
        composite_to_planet: "Juno",
        composite_orb: 10,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Venus conjunct Vesta",
        composite_planet_id: 4,
        composite_aspect_id: 1,
        composite_to_planet: "Vesta",
        composite_orb: 10,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Venus conjunct Ascendant",
        composite_planet_id: 4,
        composite_aspect_id: 1,
        composite_to_planet: "Ascendant",
        composite_orb: 10,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Venus conjunct Midheaven",
        composite_planet_id: 4,
        composite_aspect_id: 1,
        composite_to_planet: "Midheaven",
        composite_orb: 10,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Mars conjunct Jupiter",
        composite_planet_id: 5,
        composite_aspect_id: 1,
        composite_to_planet: "Jupiter",
        composite_orb: 10,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Mars conjunct Saturn",
        composite_planet_id: 5,
        composite_aspect_id: 1,
        composite_to_planet: "Saturn",
        composite_orb: 10,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Mars conjunct Uranus",
        composite_planet_id: 5,
        composite_aspect_id: 1,
        composite_to_planet: "Uranus",
        composite_orb: 10,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Mars conjunct Neptune",
        composite_planet_id: 5,
        composite_aspect_id: 1,
        composite_to_planet: "Neptune",
        composite_orb: 10,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Mars conjunct Pluto",
        composite_planet_id: 5,
        composite_aspect_id: 1,
        composite_to_planet: "Pluto",
        composite_orb: 10,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Mars conjunct Chiron",
        composite_planet_id: 5,
        composite_aspect_id: 1,
        composite_to_planet: "Chiron",
        composite_orb: 10,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Mars conjunct North Node",
        composite_planet_id: 5,
        composite_aspect_id: 1,
        composite_to_planet: "North Node",
        composite_orb: 10,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Mars conjunct South Node",
        composite_planet_id: 5,
        composite_aspect_id: 1,
        composite_to_planet: "South Node",
        composite_orb: 10,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Mars conjunct Ceres",
        composite_planet_id: 5,
        composite_aspect_id: 1,
        composite_to_planet: "Ceres",
        composite_orb: 10,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Mars conjunct Pallas Athene",
        composite_planet_id: 5,
        composite_aspect_id: 1,
        composite_to_planet: "Pallas Athene",
        composite_orb: 10,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Mars conjunct Juno",
        composite_planet_id: 5,
        composite_aspect_id: 1,
        composite_to_planet: "Juno",
        composite_orb: 10,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Mars conjunct Vesta",
        composite_planet_id: 5,
        composite_aspect_id: 1,
        composite_to_planet: "Vesta",
        composite_orb: 10,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Mars conjunct Ascendant",
        composite_planet_id: 5,
        composite_aspect_id: 1,
        composite_to_planet: "Ascendant",
        composite_orb: 10,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Mars conjunct Midheaven",
        composite_planet_id: 5,
        composite_aspect_id: 1,
        composite_to_planet: "Midheaven",
        composite_orb: 10,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Jupiter conjunct Saturn",
        composite_planet_id: 6,
        composite_aspect_id: 1,
        composite_to_planet: "Saturn",
        composite_orb: 10,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Jupiter conjunct Uranus",
        composite_planet_id: 6,
        composite_aspect_id: 1,
        composite_to_planet: "Uranus",
        composite_orb: 10,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Jupiter conjunct Neptune",
        composite_planet_id: 6,
        composite_aspect_id: 1,
        composite_to_planet: "Neptune",
        composite_orb: 10,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Jupiter conjunct Pluto",
        composite_planet_id: 6,
        composite_aspect_id: 1,
        composite_to_planet: "Pluto",
        composite_orb: 10,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Jupiter conjunct Chiron",
        composite_planet_id: 6,
        composite_aspect_id: 1,
        composite_to_planet: "Chiron",
        composite_orb: 10,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Jupiter conjunct North Node",
        composite_planet_id: 6,
        composite_aspect_id: 1,
        composite_to_planet: "North Node",
        composite_orb: 10,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Jupiter conjunct South Node",
        composite_planet_id: 6,
        composite_aspect_id: 1,
        composite_to_planet: "South Node",
        composite_orb: 10,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Jupiter conjunct Ceres",
        composite_planet_id: 6,
        composite_aspect_id: 1,
        composite_to_planet: "Ceres",
        composite_orb: 10,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Jupiter conjunct Pallas Athene",
        composite_planet_id: 6,
        composite_aspect_id: 1,
        composite_to_planet: "Pallas Athene",
        composite_orb: 10,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Jupiter conjunct Juno",
        composite_planet_id: 6,
        composite_aspect_id: 1,
        composite_to_planet: "Juno",
        composite_orb: 10,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Jupiter conjunct Vesta",
        composite_planet_id: 6,
        composite_aspect_id: 1,
        composite_to_planet: "Vesta",
        composite_orb: 10,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Jupiter conjunct Ascendant",
        composite_planet_id: 6,
        composite_aspect_id: 1,
        composite_to_planet: "Ascendant",
        composite_orb: 10,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Jupiter conjunct Midheaven",
        composite_planet_id: 6,
        composite_aspect_id: 1,
        composite_to_planet: "Midheaven",
        composite_orb: 10,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Saturn conjunct Uranus",
        composite_planet_id: 7,
        composite_aspect_id: 1,
        composite_to_planet: "Uranus",
        composite_orb: 10,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Saturn conjunct Neptune",
        composite_planet_id: 7,
        composite_aspect_id: 1,
        composite_to_planet: "Neptune",
        composite_orb: 10,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Saturn conjunct Pluto",
        composite_planet_id: 7,
        composite_aspect_id: 1,
        composite_to_planet: "Pluto",
        composite_orb: 10,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Saturn conjunct Chiron",
        composite_planet_id: 7,
        composite_aspect_id: 1,
        composite_to_planet: "Chiron",
        composite_orb: 10,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Saturn conjunct North Node",
        composite_planet_id: 7,
        composite_aspect_id: 1,
        composite_to_planet: "North Node",
        composite_orb: 10,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Saturn conjunct South Node",
        composite_planet_id: 7,
        composite_aspect_id: 1,
        composite_to_planet: "South Node",
        composite_orb: 10,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Saturn conjunct Ceres",
        composite_planet_id: 7,
        composite_aspect_id: 1,
        composite_to_planet: "Ceres",
        composite_orb: 10,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Saturn conjunct Pallas Athene",
        composite_planet_id: 7,
        composite_aspect_id: 1,
        composite_to_planet: "Pallas Athene",
        composite_orb: 10,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Saturn conjunct Juno",
        composite_planet_id: 7,
        composite_aspect_id: 1,
        composite_to_planet: "Juno",
        composite_orb: 10,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Saturn conjunct Vesta",
        composite_planet_id: 7,
        composite_aspect_id: 1,
        composite_to_planet: "Vesta",
        composite_orb: 10,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Saturn conjunct Ascendant",
        composite_planet_id: 7,
        composite_aspect_id: 1,
        composite_to_planet: "Ascendant",
        composite_orb: 10,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Saturn conjunct Midheaven",
        composite_planet_id: 7,
        composite_aspect_id: 1,
        composite_to_planet: "Midheaven",
        composite_orb: 10,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Uranus conjunct Neptune",
        composite_planet_id: 8,
        composite_aspect_id: 1,
        composite_to_planet: "Neptune",
        composite_orb: 10,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Uranus conjunct Pluto",
        composite_planet_id: 8,
        composite_aspect_id: 1,
        composite_to_planet: "Pluto",
        composite_orb: 10,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Uranus conjunct Chiron",
        composite_planet_id: 8,
        composite_aspect_id: 1,
        composite_to_planet: "Chiron",
        composite_orb: 10,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Uranus conjunct North Node",
        composite_planet_id: 8,
        composite_aspect_id: 1,
        composite_to_planet: "North Node",
        composite_orb: 10,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Uranus conjunct South Node",
        composite_planet_id: 8,
        composite_aspect_id: 1,
        composite_to_planet: "South Node",
        composite_orb: 10,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Uranus conjunct Ceres",
        composite_planet_id: 8,
        composite_aspect_id: 1,
        composite_to_planet: "Ceres",
        composite_orb: 10,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Uranus conjunct Pallas Athene",
        composite_planet_id: 8,
        composite_aspect_id: 1,
        composite_to_planet: "Pallas Athene",
        composite_orb: 10,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Uranus conjunct Juno",
        composite_planet_id: 8,
        composite_aspect_id: 1,
        composite_to_planet: "Juno",
        composite_orb: 10,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Uranus conjunct Vesta",
        composite_planet_id: 8,
        composite_aspect_id: 1,
        composite_to_planet: "Vesta",
        composite_orb: 10,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Uranus conjunct Ascendant",
        composite_planet_id: 8,
        composite_aspect_id: 1,
        composite_to_planet: "Ascendant",
        composite_orb: 10,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Uranus conjunct Midheaven",
        composite_planet_id: 8,
        composite_aspect_id: 1,
        composite_to_planet: "Midheaven",
        composite_orb: 10,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Neptune conjunct Pluto",
        composite_planet_id: 9,
        composite_aspect_id: 1,
        composite_to_planet: "Pluto",
        composite_orb: 10,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Neptune conjunct Chiron",
        composite_planet_id: 9,
        composite_aspect_id: 1,
        composite_to_planet: "Chiron",
        composite_orb: 10,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Neptune conjunct North Node",
        composite_planet_id: 9,
        composite_aspect_id: 1,
        composite_to_planet: "North Node",
        composite_orb: 10,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Neptune conjunct South Node",
        composite_planet_id: 9,
        composite_aspect_id: 1,
        composite_to_planet: "South Node",
        composite_orb: 10,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Neptune conjunct Ceres",
        composite_planet_id: 9,
        composite_aspect_id: 1,
        composite_to_planet: "Ceres",
        composite_orb: 10,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Neptune conjunct Pallas Athene",
        composite_planet_id: 9,
        composite_aspect_id: 1,
        composite_to_planet: "Pallas Athene",
        composite_orb: 10,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Neptune conjunct Juno",
        composite_planet_id: 9,
        composite_aspect_id: 1,
        composite_to_planet: "Juno",
        composite_orb: 10,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Neptune conjunct Vesta",
        composite_planet_id: 9,
        composite_aspect_id: 1,
        composite_to_planet: "Vesta",
        composite_orb: 10,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Pluto conjunct Chiron",
        composite_planet_id: 10,
        composite_aspect_id: 1,
        composite_to_planet: "Chiron",
        composite_orb: 10,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Pluto conjunct North Node",
        composite_planet_id: 10,
        composite_aspect_id: 1,
        composite_to_planet: "North Node",
        composite_orb: 10,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Pluto conjunct South Node",
        composite_planet_id: 10,
        composite_aspect_id: 1,
        composite_to_planet: "South Node",
        composite_orb: 10,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Pluto conjunct Ceres",
        composite_planet_id: 10,
        composite_aspect_id: 1,
        composite_to_planet: "Ceres",
        composite_orb: 10,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Pluto conjunct Pallas Athene",
        composite_planet_id: 10,
        composite_aspect_id: 1,
        composite_to_planet: "Pallas Athene",
        composite_orb: 10,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Pluto conjunct Juno",
        composite_planet_id: 10,
        composite_aspect_id: 1,
        composite_to_planet: "Juno",
        composite_orb: 10,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Pluto conjunct Vesta",
        composite_planet_id: 10,
        composite_aspect_id: 1,
        composite_to_planet: "Vesta",
        composite_orb: 10,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Pluto conjunct Ascendant",
        composite_planet_id: 10,
        composite_aspect_id: 1,
        composite_to_planet: "Ascendant",
        composite_orb: 10,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Pluto conjunct Midheaven",
        composite_planet_id: 10,
        composite_aspect_id: 1,
        composite_to_planet: "Midheaven",
        composite_orb: 10,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Chiron conjunct North Node",
        composite_planet_id: 11,
        composite_aspect_id: 1,
        composite_to_planet: "North Node",
        composite_orb: 10,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Chiron conjunct South Node",
        composite_planet_id: 11,
        composite_aspect_id: 1,
        composite_to_planet: "South Node",
        composite_orb: 10,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Chiron conjunct Ceres",
        composite_planet_id: 11,
        composite_aspect_id: 1,
        composite_to_planet: "Ceres",
        composite_orb: 10,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Chiron conjunct Pallas Athene",
        composite_planet_id: 11,
        composite_aspect_id: 1,
        composite_to_planet: "Pallas Athene",
        composite_orb: 10,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Chiron conjunct Juno",
        composite_planet_id: 11,
        composite_aspect_id: 1,
        composite_to_planet: "Juno",
        composite_orb: 10,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Chiron conjunct Vesta",
        composite_planet_id: 11,
        composite_aspect_id: 1,
        composite_to_planet: "Vesta",
        composite_orb: 10,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Chiron conjunct Ascendant",
        composite_planet_id: 11,
        composite_aspect_id: 1,
        composite_to_planet: "Ascendant",
        composite_orb: 10,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Chiron conjunct Midheaven",
        composite_planet_id: 11,
        composite_aspect_id: 1,
        composite_to_planet: "Midheaven",
        composite_orb: 10,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "North Node conjunct Ceres",
        composite_planet_id: 12,
        composite_aspect_id: 1,
        composite_to_planet: "Ceres",
        composite_orb: 10,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "North Node conjunct Pallas Athene",
        composite_planet_id: 12,
        composite_aspect_id: 1,
        composite_to_planet: "Pallas Athene",
        composite_orb: 10,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "North Node conjunct Juno",
        composite_planet_id: 12,
        composite_aspect_id: 1,
        composite_to_planet: "Juno",
        composite_orb: 10,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "North Node conjunct Vesta",
        composite_planet_id: 12,
        composite_aspect_id: 1,
        composite_to_planet: "Vesta",
        composite_orb: 10,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "North Node conjunct Ascendant",
        composite_planet_id: 12,
        composite_aspect_id: 1,
        composite_to_planet: "Ascendant",
        composite_orb: 10,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "North Node conjunct Midheaven",
        composite_planet_id: 12,
        composite_aspect_id: 1,
        composite_to_planet: "Midheaven",
        composite_orb: 10,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "South Node conjunct Pallas Athene",
        composite_planet_id: 13,
        composite_aspect_id: 1,
        composite_to_planet: "Pallas Athene",
        composite_orb: 10,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "South Node conjunct Juno",
        composite_planet_id: 13,
        composite_aspect_id: 1,
        composite_to_planet: "Juno",
        composite_orb: 10,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "South Node conjunct Vesta",
        composite_planet_id: 13,
        composite_aspect_id: 1,
        composite_to_planet: "Vesta",
        composite_orb: 10,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "South Node conjunct Ascendant",
        composite_planet_id: 13,
        composite_aspect_id: 1,
        composite_to_planet: "Ascendant",
        composite_orb: 10,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "South Node conjunct Midheaven",
        composite_planet_id: 13,
        composite_aspect_id: 1,
        composite_to_planet: "Midheaven",
        composite_orb: 10,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Ceres conjunct Pallas Athene",
        composite_planet_id: 14,
        composite_aspect_id: 1,
        composite_to_planet: "Pallas Athene",
        composite_orb: 10,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Ceres conjunct Juno",
        composite_planet_id: 14,
        composite_aspect_id: 1,
        composite_to_planet: "Juno",
        composite_orb: 10,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Ceres conjunct Vesta",
        composite_planet_id: 14,
        composite_aspect_id: 1,
        composite_to_planet: "Vesta",
        composite_orb: 10,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Ceres conjunct Ascendant",
        composite_planet_id: 14,
        composite_aspect_id: 1,
        composite_to_planet: "Ascendant",
        composite_orb: 10,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Ceres conjunct Midheaven",
        composite_planet_id: 14,
        composite_aspect_id: 1,
        composite_to_planet: "Midheaven",
        composite_orb: 10,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Pallas Athene conjunct Juno",
        composite_planet_id: 15,
        composite_aspect_id: 1,
        composite_to_planet: "Juno",
        composite_orb: 10,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Pallas Athene conjunct Vesta",
        composite_planet_id: 15,
        composite_aspect_id: 1,
        composite_to_planet: "Vesta",
        composite_orb: 10,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Pallas Athene conjunct Ascendant",
        composite_planet_id: 15,
        composite_aspect_id: 1,
        composite_to_planet: "Ascendant",
        composite_orb: 10,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Pallas Athene conjunct Midheaven",
        composite_planet_id: 15,
        composite_aspect_id: 1,
        composite_to_planet: "Midheaven",
        composite_orb: 10,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Juno conjunct Vesta",
        composite_planet_id: 16,
        composite_aspect_id: 1,
        composite_to_planet: "Vesta",
        composite_orb: 10,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Juno conjunct Ascendant",
        composite_planet_id: 16,
        composite_aspect_id: 1,
        composite_to_planet: "Ascendant",
        composite_orb: 10,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Juno conjunct Midheaven",
        composite_planet_id: 16,
        composite_aspect_id: 1,
        composite_to_planet: "Midheaven",
        composite_orb: 10,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Sun sextile Moon",
        composite_planet_id: 1,
        composite_aspect_id: 2,
        composite_to_planet: "Moon",
        composite_orb: 4.5,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Sun sextile Mercury",
        composite_planet_id: 1,
        composite_aspect_id: 2,
        composite_to_planet: "Mercury",
        composite_orb: 4.5,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Sun sextile Venus",
        composite_planet_id: 1,
        composite_aspect_id: 2,
        composite_to_planet: "Venus",
        composite_orb: 4.5,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Sun sextile Mars",
        composite_planet_id: 1,
        composite_aspect_id: 2,
        composite_to_planet: "Mars",
        composite_orb: 4.5,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Sun sextile Jupiter",
        composite_planet_id: 1,
        composite_aspect_id: 2,
        composite_to_planet: "Jupiter",
        composite_orb: 4.5,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Sun sextile Saturn",
        composite_planet_id: 1,
        composite_aspect_id: 2,
        composite_to_planet: "Saturn",
        composite_orb: 4.5,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Sun sextile Uranus",
        composite_planet_id: 1,
        composite_aspect_id: 2,
        composite_to_planet: "Uranus",
        composite_orb: 4.5,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Sun sextile Neptune",
        composite_planet_id: 1,
        composite_aspect_id: 2,
        composite_to_planet: "Neptune",
        composite_orb: 4.5,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Sun sextile Pluto",
        composite_planet_id: 1,
        composite_aspect_id: 2,
        composite_to_planet: "Pluto",
        composite_orb: 4.5,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Sun sextile Chiron",
        composite_planet_id: 1,
        composite_aspect_id: 2,
        composite_to_planet: "Chiron",
        composite_orb: 4.5,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Sun sextile North Node",
        composite_planet_id: 1,
        composite_aspect_id: 2,
        composite_to_planet: "North Node",
        composite_orb: 4.5,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Sun sextile South Node",
        composite_planet_id: 1,
        composite_aspect_id: 2,
        composite_to_planet: "South Node",
        composite_orb: 4.5,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Sun sextile Ceres",
        composite_planet_id: 1,
        composite_aspect_id: 2,
        composite_to_planet: "Ceres",
        composite_orb: 4.5,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Sun sextile Pallas Athene",
        composite_planet_id: 1,
        composite_aspect_id: 2,
        composite_to_planet: "Pallas Athene",
        composite_orb: 4.5,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Sun sextile Juno",
        composite_planet_id: 1,
        composite_aspect_id: 2,
        composite_to_planet: "Juno",
        composite_orb: 4.5,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Sun sextile Vesta",
        composite_planet_id: 1,
        composite_aspect_id: 2,
        composite_to_planet: "Vesta",
        composite_orb: 4.5,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Sun sextile Ascendant",
        composite_planet_id: 1,
        composite_aspect_id: 2,
        composite_to_planet: "Ascendant",
        composite_orb: 4.5,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Sun sextile Midheaven",
        composite_planet_id: 1,
        composite_aspect_id: 2,
        composite_to_planet: "Midheaven",
        composite_orb: 4.5,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Moon sextile Mercury",
        composite_planet_id: 2,
        composite_aspect_id: 2,
        composite_to_planet: "Mercury",
        composite_orb: 4.5,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Moon sextile Venus",
        composite_planet_id: 2,
        composite_aspect_id: 2,
        composite_to_planet: "Venus",
        composite_orb: 4.5,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Moon sextile Mars",
        composite_planet_id: 2,
        composite_aspect_id: 2,
        composite_to_planet: "Mars",
        composite_orb: 4.5,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Moon sextile Jupiter",
        composite_planet_id: 2,
        composite_aspect_id: 2,
        composite_to_planet: "Jupiter",
        composite_orb: 4.5,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Moon sextile Saturn",
        composite_planet_id: 2,
        composite_aspect_id: 2,
        composite_to_planet: "Saturn",
        composite_orb: 4.5,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Moon sextile Uranus",
        composite_planet_id: 2,
        composite_aspect_id: 2,
        composite_to_planet: "Uranus",
        composite_orb: 4.5,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Moon sextile Neptune",
        composite_planet_id: 2,
        composite_aspect_id: 2,
        composite_to_planet: "Neptune",
        composite_orb: 4.5,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Moon sextile Pluto",
        composite_planet_id: 2,
        composite_aspect_id: 2,
        composite_to_planet: "Pluto",
        composite_orb: 4.5,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Moon sextile Chiron",
        composite_planet_id: 2,
        composite_aspect_id: 2,
        composite_to_planet: "Chiron",
        composite_orb: 4.5,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Moon sextile North Node",
        composite_planet_id: 2,
        composite_aspect_id: 2,
        composite_to_planet: "North Node",
        composite_orb: 4.5,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Moon sextile South Node",
        composite_planet_id: 2,
        composite_aspect_id: 2,
        composite_to_planet: "South Node",
        composite_orb: 4.5,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Moon sextile Ceres",
        composite_planet_id: 2,
        composite_aspect_id: 2,
        composite_to_planet: "Ceres",
        composite_orb: 4.5,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Moon sextile Pallas Athene",
        composite_planet_id: 2,
        composite_aspect_id: 2,
        composite_to_planet: "Pallas Athene",
        composite_orb: 4.5,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Moon sextile Juno",
        composite_planet_id: 2,
        composite_aspect_id: 2,
        composite_to_planet: "Juno",
        composite_orb: 4.5,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Moon sextile Vesta",
        composite_planet_id: 2,
        composite_aspect_id: 2,
        composite_to_planet: "Vesta",
        composite_orb: 4.5,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Moon sextile Ascendant",
        composite_planet_id: 2,
        composite_aspect_id: 2,
        composite_to_planet: "Ascendant",
        composite_orb: 4.5,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Moon sextile Midheaven",
        composite_planet_id: 2,
        composite_aspect_id: 2,
        composite_to_planet: "Midheaven",
        composite_orb: 4.5,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Mercury sextile Venus",
        composite_planet_id: 3,
        composite_aspect_id: 2,
        composite_to_planet: "Venus",
        composite_orb: 4.5,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Mercury sextile Mars",
        composite_planet_id: 3,
        composite_aspect_id: 2,
        composite_to_planet: "Mars",
        composite_orb: 4.5,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Mercury sextile Jupiter",
        composite_planet_id: 3,
        composite_aspect_id: 2,
        composite_to_planet: "Jupiter",
        composite_orb: 4.5,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Mercury sextile Saturn",
        composite_planet_id: 3,
        composite_aspect_id: 2,
        composite_to_planet: "Saturn",
        composite_orb: 4.5,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Mercury sextile Uranus",
        composite_planet_id: 3,
        composite_aspect_id: 2,
        composite_to_planet: "Uranus",
        composite_orb: 4.5,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Mercury sextile Neptune",
        composite_planet_id: 3,
        composite_aspect_id: 2,
        composite_to_planet: "Neptune",
        composite_orb: 4.5,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Mercury sextile Pluto",
        composite_planet_id: 3,
        composite_aspect_id: 2,
        composite_to_planet: "Pluto",
        composite_orb: 4.5,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Mercury sextile Chiron",
        composite_planet_id: 3,
        composite_aspect_id: 2,
        composite_to_planet: "Chiron",
        composite_orb: 4.5,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Mercury sextile North Node",
        composite_planet_id: 3,
        composite_aspect_id: 2,
        composite_to_planet: "North Node",
        composite_orb: 4.5,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Mercury sextile South Node",
        composite_planet_id: 3,
        composite_aspect_id: 2,
        composite_to_planet: "South Node",
        composite_orb: 4.5,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Mercury sextile Ceres",
        composite_planet_id: 3,
        composite_aspect_id: 2,
        composite_to_planet: "Ceres",
        composite_orb: 4.5,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Mercury sextile Pallas Athene",
        composite_planet_id: 3,
        composite_aspect_id: 2,
        composite_to_planet: "Pallas Athene",
        composite_orb: 4.5,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Mercury sextile Juno",
        composite_planet_id: 3,
        composite_aspect_id: 2,
        composite_to_planet: "Juno",
        composite_orb: 4.5,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Mercury sextile Vesta",
        composite_planet_id: 3,
        composite_aspect_id: 2,
        composite_to_planet: "Vesta",
        composite_orb: 4.5,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      },  {
        composite_aspect_title: "Mercury sextile Ascendant",
        composite_planet_id: 3,
        composite_aspect_id: 2,
        composite_to_planet: "Ascendant",
        composite_orb: 4.5,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Mercury sextile Ascendant",
        composite_planet_id: 3,
        composite_aspect_id: 2,
        composite_to_planet: "Ascendant",
        composite_orb: 4.5,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Venus sextile Mars",
        composite_planet_id: 4,
        composite_aspect_id: 2,
        composite_to_planet: "Mars",
        composite_orb: 4.5,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Venus sextile Jupiter",
        composite_planet_id: 4,
        composite_aspect_id: 2,
        composite_to_planet: "Jupiter",
        composite_orb: 4.5,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Venus sextile Saturn",
        composite_planet_id: 4,
        composite_aspect_id: 2,
        composite_to_planet: "Saturn",
        composite_orb: 4.5,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Venus sextile Uranus",
        composite_planet_id: 4,
        composite_aspect_id: 2,
        composite_to_planet: "Uranus",
        composite_orb: 4.5,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Venus sextile Neptune",
        composite_planet_id: 4,
        composite_aspect_id: 2,
        composite_to_planet: "Neptune",
        composite_orb: 4.5,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Venus sextile Pluto",
        composite_planet_id: 4,
        composite_aspect_id: 2,
        composite_to_planet: "Pluto",
        composite_orb: 4.5,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Venus sextile Chiron",
        composite_planet_id: 4,
        composite_aspect_id: 2,
        composite_to_planet: "Chiron",
        composite_orb: 4.5,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Venus sextile North Node",
        composite_planet_id: 4,
        composite_aspect_id: 2,
        composite_to_planet: "North Node",
        composite_orb: 4.5,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Venus sextile South Node",
        composite_planet_id: 4,
        composite_aspect_id: 2,
        composite_to_planet: "South Node",
        composite_orb: 4.5,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Venus sextile Ceres",
        composite_planet_id: 4,
        composite_aspect_id: 2,
        composite_to_planet: "Ceres",
        composite_orb: 4.5,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Venus sextile Pallas Athene",
        composite_planet_id: 4,
        composite_aspect_id: 2,
        composite_to_planet: "Pallas Athene",
        composite_orb: 4.5,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Venus sextile Juno",
        composite_planet_id: 4,
        composite_aspect_id: 2,
        composite_to_planet: "Juno",
        composite_orb: 4.5,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Venus sextile Vesta",
        composite_planet_id: 4,
        composite_aspect_id: 2,
        composite_to_planet: "Vesta",
        composite_orb: 4.5,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Venus sextile Ascendant",
        composite_planet_id: 4,
        composite_aspect_id: 2,
        composite_to_planet: "Ascendant",
        composite_orb: 4.5,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Venus sextile Midheaven",
        composite_planet_id: 4,
        composite_aspect_id: 2,
        composite_to_planet: "Midheaven",
        composite_orb: 4.5,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Mars sextile Jupiter",
        composite_planet_id: 5,
        composite_aspect_id: 2,
        composite_to_planet: "Jupiter",
        composite_orb: 4.5,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Mars sextile Saturn",
        composite_planet_id: 5,
        composite_aspect_id: 2,
        composite_to_planet: "Saturn",
        composite_orb: 4.5,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Mars sextile Uranus",
        composite_planet_id: 5,
        composite_aspect_id: 2,
        composite_to_planet: "Uranus",
        composite_orb: 4.5,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Mars sextile Neptune",
        composite_planet_id: 5,
        composite_aspect_id: 2,
        composite_to_planet: "Neptune",
        composite_orb: 4.5,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Mars sextile Pluto",
        composite_planet_id: 5,
        composite_aspect_id: 2,
        composite_to_planet: "Pluto",
        composite_orb: 4.5,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Mars sextile Chiron",
        composite_planet_id: 5,
        composite_aspect_id: 2,
        composite_to_planet: "Chiron",
        composite_orb: 4.5,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Mars sextile North Node",
        composite_planet_id: 5,
        composite_aspect_id: 2,
        composite_to_planet: "North Node",
        composite_orb: 4.5,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Mars sextile South Node",
        composite_planet_id: 5,
        composite_aspect_id: 2,
        composite_to_planet: "South Node",
        composite_orb: 4.5,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Mars sextile Ceres",
        composite_planet_id: 5,
        composite_aspect_id: 2,
        composite_to_planet: "Ceres",
        composite_orb: 4.5,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Mars sextile Pallas Athene",
        composite_planet_id: 5,
        composite_aspect_id: 2,
        composite_to_planet: "Pallas Athene",
        composite_orb: 4.5,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Mars sextile Juno",
        composite_planet_id: 5,
        composite_aspect_id: 2,
        composite_to_planet: "Juno",
        composite_orb: 4.5,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Mars sextile Vesta",
        composite_planet_id: 5,
        composite_aspect_id: 2,
        composite_to_planet: "Vesta",
        composite_orb: 4.5,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Mars sextile Ascendant",
        composite_planet_id: 5,
        composite_aspect_id: 2,
        composite_to_planet: "Ascendant",
        composite_orb: 4.5,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Mars sextile Midheaven",
        composite_planet_id: 5,
        composite_aspect_id: 2,
        composite_to_planet: "Midheaven",
        composite_orb: 4.5,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Jupiter sextile Saturn",
        composite_planet_id: 6,
        composite_aspect_id: 2,
        composite_to_planet: "Saturn",
        composite_orb: 4.5,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Jupiter sextile Uranus",
        composite_planet_id: 6,
        composite_aspect_id: 2,
        composite_to_planet: "Uranus",
        composite_orb: 4.5,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Jupiter sextile Neptune",
        composite_planet_id: 6,
        composite_aspect_id: 2,
        composite_to_planet: "Neptune",
        composite_orb: 4.5,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Jupiter sextile Pluto",
        composite_planet_id: 6,
        composite_aspect_id: 2,
        composite_to_planet: "Pluto",
        composite_orb: 4.5,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Jupiter sextile Chiron",
        composite_planet_id: 6,
        composite_aspect_id: 2,
        composite_to_planet: "Chiron",
        composite_orb: 4.5,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Jupiter sextile North Node",
        composite_planet_id: 6,
        composite_aspect_id: 2,
        composite_to_planet: "North Node",
        composite_orb: 4.5,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Jupiter sextile South Node",
        composite_planet_id: 6,
        composite_aspect_id: 2,
        composite_to_planet: "South Node",
        composite_orb: 4.5,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Jupiter sextile Ceres",
        composite_planet_id: 6,
        composite_aspect_id: 2,
        composite_to_planet: "Ceres",
        composite_orb: 4.5,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Jupiter sextile Pallas Athene",
        composite_planet_id: 6,
        composite_aspect_id: 2,
        composite_to_planet: "Pallas Athene",
        composite_orb: 4.5,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Jupiter sextile Juno",
        composite_planet_id: 6,
        composite_aspect_id: 2,
        composite_to_planet: "Juno",
        composite_orb: 4.5,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Jupiter sextile Vesta",
        composite_planet_id: 6,
        composite_aspect_id: 2,
        composite_to_planet: "Vesta",
        composite_orb: 4.5,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Jupiter sextile Ascendant",
        composite_planet_id: 6,
        composite_aspect_id: 2,
        composite_to_planet: "Ascendant",
        composite_orb: 4.5,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Jupiter sextile Midheaven",
        composite_planet_id: 6,
        composite_aspect_id: 2,
        composite_to_planet: "Midheaven",
        composite_orb: 4.5,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Saturn sextile Uranus",
        composite_planet_id: 7,
        composite_aspect_id: 2,
        composite_to_planet: "Uranus",
        composite_orb: 4.5,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Saturn sextile Neptune",
        composite_planet_id: 7,
        composite_aspect_id: 2,
        composite_to_planet: "Neptune",
        composite_orb: 4.5,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Saturn sextile Pluto",
        composite_planet_id: 7,
        composite_aspect_id: 2,
        composite_to_planet: "Pluto",
        composite_orb: 4.5,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Saturn sextile Chiron",
        composite_planet_id: 7,
        composite_aspect_id: 2,
        composite_to_planet: "Chiron",
        composite_orb: 4.5,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Saturn sextile North Node",
        composite_planet_id: 7,
        composite_aspect_id: 2,
        composite_to_planet: "North Node",
        composite_orb: 4.5,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Saturn sextile South Node",
        composite_planet_id: 7,
        composite_aspect_id: 2,
        composite_to_planet: "South Node",
        composite_orb: 4.5,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Saturn sextile Ceres",
        composite_planet_id: 7,
        composite_aspect_id: 2,
        composite_to_planet: "Ceres",
        composite_orb: 4.5,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Saturn sextile Pallas Athene",
        composite_planet_id: 7,
        composite_aspect_id: 2,
        composite_to_planet: "Pallas Athene",
        composite_orb: 4.5,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Saturn sextile Juno",
        composite_planet_id: 7,
        composite_aspect_id: 2,
        composite_to_planet: "Juno",
        composite_orb: 4.5,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Saturn sextile Vesta",
        composite_planet_id: 7,
        composite_aspect_id: 2,
        composite_to_planet: "Vesta",
        composite_orb: 4.5,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Saturn sextile Ascendant",
        composite_planet_id: 7,
        composite_aspect_id: 2,
        composite_to_planet: "Ascendant",
        composite_orb: 4.5,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Saturn sextile Midheaven",
        composite_planet_id: 7,
        composite_aspect_id: 2,
        composite_to_planet: "Midheaven",
        composite_orb: 4.5,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Uranus sextile Neptune",
        composite_planet_id: 8,
        composite_aspect_id: 2,
        composite_to_planet: "Neptune",
        composite_orb: 4.5,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Uranus sextile Pluto",
        composite_planet_id: 8,
        composite_aspect_id: 2,
        composite_to_planet: "Pluto",
        composite_orb: 4.5,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Uranus sextile Chiron",
        composite_planet_id: 8,
        composite_aspect_id: 2,
        composite_to_planet: "Chiron",
        composite_orb: 4.5,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Uranus sextile North Node",
        composite_planet_id: 8,
        composite_aspect_id: 2,
        composite_to_planet: "North Node",
        composite_orb: 4.5,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Uranus sextile South Node",
        composite_planet_id: 8,
        composite_aspect_id: 2,
        composite_to_planet: "South Node",
        composite_orb: 4.5,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Uranus sextile Ceres",
        composite_planet_id: 8,
        composite_aspect_id: 2,
        composite_to_planet: "Ceres",
        composite_orb: 4.5,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Uranus sextile Pallas Athene",
        composite_planet_id: 8,
        composite_aspect_id: 2,
        composite_to_planet: "Pallas Athene",
        composite_orb: 4.5,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Uranus sextile Juno",
        composite_planet_id: 8,
        composite_aspect_id: 2,
        composite_to_planet: "Juno",
        composite_orb: 4.5,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Uranus sextile Vesta",
        composite_planet_id: 8,
        composite_aspect_id: 2,
        composite_to_planet: "Vesta",
        composite_orb: 4.5,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Uranus sextile Ascendant",
        composite_planet_id: 8,
        composite_aspect_id: 2,
        composite_to_planet: "Ascendant",
        composite_orb: 4.5,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Uranus sextile Midheaven",
        composite_planet_id: 8,
        composite_aspect_id: 2,
        composite_to_planet: "Midheaven",
        composite_orb: 4.5,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Neptune sextile Pluto",
        composite_planet_id: 9,
        composite_aspect_id: 2,
        composite_to_planet: "Pluto",
        composite_orb: 4.5,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Neptune sextile Chiron",
        composite_planet_id: 9,
        composite_aspect_id: 2,
        composite_to_planet: "Chiron",
        composite_orb: 4.5,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Neptune sextile North Node",
        composite_planet_id: 9,
        composite_aspect_id: 2,
        composite_to_planet: "North Node",
        composite_orb: 4.5,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Neptune sextile South Node",
        composite_planet_id: 9,
        composite_aspect_id: 2,
        composite_to_planet: "South Node",
        composite_orb: 4.5,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Neptune sextile Ceres",
        composite_planet_id: 9,
        composite_aspect_id: 2,
        composite_to_planet: "Ceres",
        composite_orb: 4.5,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Neptune sextile Pallas Athene",
        composite_planet_id: 9,
        composite_aspect_id: 2,
        composite_to_planet: "Pallas Athene",
        composite_orb: 4.5,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Neptune sextile Juno",
        composite_planet_id: 9,
        composite_aspect_id: 2,
        composite_to_planet: "Juno",
        composite_orb: 4.5,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Neptune sextile Vesta",
        composite_planet_id: 9,
        composite_aspect_id: 2,
        composite_to_planet: "Vesta",
        composite_orb: 4.5,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Neptune sextile Ascendant",
        composite_planet_id: 9,
        composite_aspect_id: 2,
        composite_to_planet: "Ascendant",
        composite_orb: 4.5,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Neptune sextile Midheaven",
        composite_planet_id: 9,
        composite_aspect_id: 2,
        composite_to_planet: "Midheaven",
        composite_orb: 4.5,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Pluto sextile Chiron",
        composite_planet_id: 10,
        composite_aspect_id: 2,
        composite_to_planet: "Chiron",
        composite_orb: 4.5,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Pluto sextile North Node",
        composite_planet_id: 10,
        composite_aspect_id: 2,
        composite_to_planet: "North Node",
        composite_orb: 4.5,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Pluto sextile South Node",
        composite_planet_id: 10,
        composite_aspect_id: 2,
        composite_to_planet: "South Node",
        composite_orb: 4.5,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Pluto sextile Ceres",
        composite_planet_id: 10,
        composite_aspect_id: 2,
        composite_to_planet: "Ceres",
        composite_orb: 4.5,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Pluto sextile Pallas Athene",
        composite_planet_id: 10,
        composite_aspect_id: 2,
        composite_to_planet: "Pallas Athene",
        composite_orb: 4.5,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Pluto sextile Juno",
        composite_planet_id: 10,
        composite_aspect_id: 2,
        composite_to_planet: "Juno",
        composite_orb: 4.5,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Pluto sextile Vesta",
        composite_planet_id: 10,
        composite_aspect_id: 2,
        composite_to_planet: "Vesta",
        composite_orb: 4.5,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Pluto sextile Ascendant",
        composite_planet_id: 10,
        composite_aspect_id: 2,
        composite_to_planet: "Ascendant",
        composite_orb: 4.5,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Pluto sextile Midheaven",
        composite_planet_id: 10,
        composite_aspect_id: 2,
        composite_to_planet: "Midheaven",
        composite_orb: 4.5,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Chiron sextile North Node",
        composite_planet_id: 11,
        composite_aspect_id: 2,
        composite_to_planet: "North Node",
        composite_orb: 4.5,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Chiron sextile South Node",
        composite_planet_id: 11,
        composite_aspect_id: 2,
        composite_to_planet: "South Node",
        composite_orb: 4.5,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Chiron sextile Ceres",
        composite_planet_id: 11,
        composite_aspect_id: 2,
        composite_to_planet: "Ceres",
        composite_orb: 4.5,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Chiron sextile Pallas Athene",
        composite_planet_id: 11,
        composite_aspect_id: 2,
        composite_to_planet: "Pallas Athene",
        composite_orb: 4.5,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Chiron sextile Juno",
        composite_planet_id: 11,
        composite_aspect_id: 2,
        composite_to_planet: "Juno",
        composite_orb: 4.5,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Chiron sextile Vesta",
        composite_planet_id: 11,
        composite_aspect_id: 2,
        composite_to_planet: "Vesta",
        composite_orb: 4.5,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Chiron sextile Ascendant",
        composite_planet_id: 11,
        composite_aspect_id: 2,
        composite_to_planet: "Ascendant",
        composite_orb: 4.5,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Chiron sextile Midheaven",
        composite_planet_id: 11,
        composite_aspect_id: 2,
        composite_to_planet: "Midheaven",
        composite_orb: 4.5,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "North Node sextile Ceres",
        composite_planet_id: 12,
        composite_aspect_id: 2,
        composite_to_planet: "Ceres",
        composite_orb: 4.5,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "North Node sextile Pallas Athene",
        composite_planet_id: 12,
        composite_aspect_id: 2,
        composite_to_planet: "Pallas Athene",
        composite_orb: 4.5,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "North Node sextile Juno",
        composite_planet_id: 12,
        composite_aspect_id: 2,
        composite_to_planet: "Juno",
        composite_orb: 4.5,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "North Node sextile Vesta",
        composite_planet_id: 12,
        composite_aspect_id: 2,
        composite_to_planet: "Vesta",
        composite_orb: 4.5,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "North Node sextile Ascendant",
        composite_planet_id: 12,
        composite_aspect_id: 2,
        composite_to_planet: "Ascendant",
        composite_orb: 4.5,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "North Node sextile Midheaven",
        composite_planet_id: 12,
        composite_aspect_id: 2,
        composite_to_planet: "Midheaven",
        composite_orb: 4.5,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "South Node sextile Pallas Athene",
        composite_planet_id: 13,
        composite_aspect_id: 2,
        composite_to_planet: "Pallas Athene",
        composite_orb: 4.5,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "South Node sextile Juno",
        composite_planet_id: 13,
        composite_aspect_id: 2,
        composite_to_planet: "Juno",
        composite_orb: 4.5,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "South Node sextile Vesta",
        composite_planet_id: 13,
        composite_aspect_id: 2,
        composite_to_planet: "Vesta",
        composite_orb: 4.5,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "South Node sextile Ascendant",
        composite_planet_id: 13,
        composite_aspect_id: 2,
        composite_to_planet: "Ascendant",
        composite_orb: 4.5,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "South Node sextile Midheaven",
        composite_planet_id: 13,
        composite_aspect_id: 2,
        composite_to_planet: "Midheaven",
        composite_orb: 4.5,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Ceres sextile Pallas Athene",
        composite_planet_id: 14,
        composite_aspect_id: 2,
        composite_to_planet: "Pallas Athene",
        composite_orb: 4.5,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Ceres sextile Juno",
        composite_planet_id: 14,
        composite_aspect_id: 2,
        composite_to_planet: "Juno",
        composite_orb: 4.5,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Ceres sextile Vesta",
        composite_planet_id: 14,
        composite_aspect_id: 2,
        composite_to_planet: "Vesta",
        composite_orb: 4.5,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Ceres sextile Ascendant",
        composite_planet_id: 14,
        composite_aspect_id: 2,
        composite_to_planet: "Ascendant",
        composite_orb: 4.5,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Ceres sextile Midheaven",
        composite_planet_id: 14,
        composite_aspect_id: 2,
        composite_to_planet: "Midheaven",
        composite_orb: 4.5,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Pallas Athene sextile Juno",
        composite_planet_id: 15,
        composite_aspect_id: 2,
        composite_to_planet: "Juno",
        composite_orb: 4.5,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Pallas Athene sextile Vesta",
        composite_planet_id: 15,
        composite_aspect_id: 2,
        composite_to_planet: "Vesta",
        composite_orb: 4.5,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Pallas Athene sextile Ascendant",
        composite_planet_id: 15,
        composite_aspect_id: 2,
        composite_to_planet: "Ascendant",
        composite_orb: 4.5,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Pallas Athene sextile Midheaven",
        composite_planet_id: 15,
        composite_aspect_id: 2,
        composite_to_planet: "Midheaven",
        composite_orb: 4.5,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Juno sextile Vesta",
        composite_planet_id: 16,
        composite_aspect_id: 2,
        composite_to_planet: "Vesta",
        composite_orb: 4.5,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Juno sextile Ascendant",
        composite_planet_id: 16,
        composite_aspect_id: 2,
        composite_to_planet: "Ascendant",
        composite_orb: 4.5,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Juno sextile Midheaven",
        composite_planet_id: 16,
        composite_aspect_id: 2,
        composite_to_planet: "Midheaven",
        composite_orb: 4.5,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Sun square Moon",
        composite_planet_id: 1,
        composite_aspect_id: 3,
        composite_to_planet: "Moon",
        composite_orb: 6,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Sun square Mercury",
        composite_planet_id: 1,
        composite_aspect_id: 3,
        composite_to_planet: "Mercury",
        composite_orb: 6,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Sun square Venus",
        composite_planet_id: 1,
        composite_aspect_id: 3,
        composite_to_planet: "Venus",
        composite_orb: 6,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Sun square Mars",
        composite_planet_id: 1,
        composite_aspect_id: 3,
        composite_to_planet: "Mars",
        composite_orb: 6,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Sun square Jupiter",
        composite_planet_id: 1,
        composite_aspect_id: 3,
        composite_to_planet: "Jupiter",
        composite_orb: 6,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Sun square Saturn",
        composite_planet_id: 1,
        composite_aspect_id: 3,
        composite_to_planet: "Saturn",
        composite_orb: 6,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Sun square Uranus",
        composite_planet_id: 1,
        composite_aspect_id: 3,
        composite_to_planet: "Uranus",
        composite_orb: 6,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Sun square Neptune",
        composite_planet_id: 1,
        composite_aspect_id: 3,
        composite_to_planet: "Neptune",
        composite_orb: 6,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Sun square Pluto",
        composite_planet_id: 1,
        composite_aspect_id: 3,
        composite_to_planet: "Pluto",
        composite_orb: 6,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Sun square Chiron",
        composite_planet_id: 1,
        composite_aspect_id: 3,
        composite_to_planet: "Chiron",
        composite_orb: 6,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Sun square North Node",
        composite_planet_id: 1,
        composite_aspect_id: 3,
        composite_to_planet: "North Node",
        composite_orb: 6,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Sun square South Node",
        composite_planet_id: 1,
        composite_aspect_id: 3,
        composite_to_planet: "South Node",
        composite_orb: 6,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Sun square Ceres",
        composite_planet_id: 1,
        composite_aspect_id: 3,
        composite_to_planet: "Ceres",
        composite_orb: 6,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Sun square Pallas Athene",
        composite_planet_id: 1,
        composite_aspect_id: 3,
        composite_to_planet: "Pallas Athene",
        composite_orb: 6,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Sun square Juno",
        composite_planet_id: 1,
        composite_aspect_id: 3,
        composite_to_planet: "Juno",
        composite_orb: 6,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Sun square Vesta",
        composite_planet_id: 1,
        composite_aspect_id: 3,
        composite_to_planet: "Vesta",
        composite_orb: 6,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Sun square Ascendant",
        composite_planet_id: 1,
        composite_aspect_id: 3,
        composite_to_planet: "Ascendant",
        composite_orb: 6,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Sun square Midheaven",
        composite_planet_id: 1,
        composite_aspect_id: 3,
        composite_to_planet: "Midheaven",
        composite_orb: 6,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Moon square Mercury",
        composite_planet_id: 2,
        composite_aspect_id: 3,
        composite_to_planet: "Mercury",
        composite_orb: 6,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Moon square Venus",
        composite_planet_id: 2,
        composite_aspect_id: 3,
        composite_to_planet: "Venus",
        composite_orb: 6,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Moon square Mars",
        composite_planet_id: 2,
        composite_aspect_id: 3,
        composite_to_planet: "Mars",
        composite_orb: 6,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Moon square Jupiter",
        composite_planet_id: 2,
        composite_aspect_id: 3,
        composite_to_planet: "Jupiter",
        composite_orb: 6,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Moon square Saturn",
        composite_planet_id: 2,
        composite_aspect_id: 3,
        composite_to_planet: "Saturn",
        composite_orb: 6,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Moon square Uranus",
        composite_planet_id: 2,
        composite_aspect_id: 3,
        composite_to_planet: "Uranus",
        composite_orb: 6,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Moon square Neptune",
        composite_planet_id: 2,
        composite_aspect_id: 3,
        composite_to_planet: "Neptune",
        composite_orb: 6,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Moon square Pluto",
        composite_planet_id: 2,
        composite_aspect_id: 3,
        composite_to_planet: "Pluto",
        composite_orb: 6,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Moon square Chiron",
        composite_planet_id: 2,
        composite_aspect_id: 3,
        composite_to_planet: "Chiron",
        composite_orb: 6,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Moon square North Node",
        composite_planet_id: 2,
        composite_aspect_id: 3,
        composite_to_planet: "North Node",
        composite_orb: 6,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Moon square South Node",
        composite_planet_id: 2,
        composite_aspect_id: 3,
        composite_to_planet: "South Node",
        composite_orb: 6,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Moon square Ceres",
        composite_planet_id: 2,
        composite_aspect_id: 3,
        composite_to_planet: "Ceres",
        composite_orb: 6,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Moon square Pallas Athene",
        composite_planet_id: 2,
        composite_aspect_id: 3,
        composite_to_planet: "Pallas Athene",
        composite_orb: 6,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Moon square Juno",
        composite_planet_id: 2,
        composite_aspect_id: 3,
        composite_to_planet: "Juno",
        composite_orb: 6,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Moon square Vesta",
        composite_planet_id: 2,
        composite_aspect_id: 3,
        composite_to_planet: "Vesta",
        composite_orb: 6,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Moon square Ascendant",
        composite_planet_id: 2,
        composite_aspect_id: 3,
        composite_to_planet: "Ascendant",
        composite_orb: 6,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Moon square Midheaven",
        composite_planet_id: 2,
        composite_aspect_id: 3,
        composite_to_planet: "Midheaven",
        composite_orb: 6,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Mercury square Venus",
        composite_planet_id: 3,
        composite_aspect_id: 3,
        composite_to_planet: "Venus",
        composite_orb: 6,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Mercury square Mars",
        composite_planet_id: 3,
        composite_aspect_id: 3,
        composite_to_planet: "Mars",
        composite_orb: 6,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Mercury square Jupiter",
        composite_planet_id: 3,
        composite_aspect_id: 3,
        composite_to_planet: "Jupiter",
        composite_orb: 6,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Mercury square Saturn",
        composite_planet_id: 3,
        composite_aspect_id: 3,
        composite_to_planet: "Saturn",
        composite_orb: 6,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Mercury square Uranus",
        composite_planet_id: 3,
        composite_aspect_id: 3,
        composite_to_planet: "Uranus",
        composite_orb: 6,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Mercury square Neptune",
        composite_planet_id: 3,
        composite_aspect_id: 3,
        composite_to_planet: "Neptune",
        composite_orb: 6,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Mercury square Pluto",
        composite_planet_id: 3,
        composite_aspect_id: 3,
        composite_to_planet: "Pluto",
        composite_orb: 6,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Mercury square Chiron",
        composite_planet_id: 3,
        composite_aspect_id: 3,
        composite_to_planet: "Chiron",
        composite_orb: 6,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Mercury square North Node",
        composite_planet_id: 3,
        composite_aspect_id: 3,
        composite_to_planet: "North Node",
        composite_orb: 6,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Mercury square South Node",
        composite_planet_id: 3,
        composite_aspect_id: 3,
        composite_to_planet: "South Node",
        composite_orb: 6,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Mercury square Ceres",
        composite_planet_id: 3,
        composite_aspect_id: 3,
        composite_to_planet: "Ceres",
        composite_orb: 6,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Mercury square Pallas Athene",
        composite_planet_id: 3,
        composite_aspect_id: 3,
        composite_to_planet: "Pallas Athene",
        composite_orb: 6,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Mercury square Juno",
        composite_planet_id: 3,
        composite_aspect_id: 3,
        composite_to_planet: "Juno",
        composite_orb: 6,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Mercury square Vesta",
        composite_planet_id: 3,
        composite_aspect_id: 3,
        composite_to_planet: "Vesta",
        composite_orb: 6,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Mercury square Ascendant",
        composite_planet_id: 3,
        composite_aspect_id: 3,
        composite_to_planet: "Ascendant",
        composite_orb: 6,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Mercury square Midheaven",
        composite_planet_id: 3,
        composite_aspect_id: 3,
        composite_to_planet: "Midheaven",
        composite_orb: 6,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Venus square Mars",
        composite_planet_id: 4,
        composite_aspect_id: 3,
        composite_to_planet: "Mars",
        composite_orb: 6,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Venus square Jupiter",
        composite_planet_id: 4,
        composite_aspect_id: 3,
        composite_to_planet: "Jupiter",
        composite_orb: 6,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Venus square Saturn",
        composite_planet_id: 4,
        composite_aspect_id: 3,
        composite_to_planet: "Saturn",
        composite_orb: 6,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Venus square Uranus",
        composite_planet_id: 4,
        composite_aspect_id: 3,
        composite_to_planet: "Uranus",
        composite_orb: 6,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Venus square Neptune",
        composite_planet_id: 4,
        composite_aspect_id: 3,
        composite_to_planet: "Neptune",
        composite_orb: 6,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Venus square Pluto",
        composite_planet_id: 4,
        composite_aspect_id: 3,
        composite_to_planet: "Pluto",
        composite_orb: 6,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Venus square Chiron",
        composite_planet_id: 4,
        composite_aspect_id: 3,
        composite_to_planet: "Chiron",
        composite_orb: 6,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Venus square North Node",
        composite_planet_id: 4,
        composite_aspect_id: 3,
        composite_to_planet: "North Node",
        composite_orb: 6,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Venus square South Node",
        composite_planet_id: 4,
        composite_aspect_id: 3,
        composite_to_planet: "South Node",
        composite_orb: 6,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Venus square Ceres",
        composite_planet_id: 4,
        composite_aspect_id: 3,
        composite_to_planet: "Ceres",
        composite_orb: 6,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Venus square Pallas Athene",
        composite_planet_id: 4,
        composite_aspect_id: 3,
        composite_to_planet: "Pallas Athene",
        composite_orb: 6,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Venus square Juno",
        composite_planet_id: 4,
        composite_aspect_id: 3,
        composite_to_planet: "Juno",
        composite_orb: 6,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Venus square Vesta",
        composite_planet_id: 4,
        composite_aspect_id: 3,
        composite_to_planet: "Vesta",
        composite_orb: 6,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Venus square Ascendant",
        composite_planet_id: 4,
        composite_aspect_id: 3,
        composite_to_planet: "Ascendant",
        composite_orb: 6,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Venus square Midheaven",
        composite_planet_id: 4,
        composite_aspect_id: 3,
        composite_to_planet: "Midheaven",
        composite_orb: 6,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Mars square Jupiter",
        composite_planet_id: 5,
        composite_aspect_id: 3,
        composite_to_planet: "Jupiter",
        composite_orb: 6,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Mars square Saturn",
        composite_planet_id: 5,
        composite_aspect_id: 3,
        composite_to_planet: "Saturn",
        composite_orb: 6,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Mars square Uranus",
        composite_planet_id: 5,
        composite_aspect_id: 3,
        composite_to_planet: "Uranus",
        composite_orb: 6,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Mars square Neptune",
        composite_planet_id: 5,
        composite_aspect_id: 3,
        composite_to_planet: "Neptune",
        composite_orb: 6,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Mars square Pluto",
        composite_planet_id: 5,
        composite_aspect_id: 3,
        composite_to_planet: "Pluto",
        composite_orb: 6,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Mars square Chiron",
        composite_planet_id: 5,
        composite_aspect_id: 3,
        composite_to_planet: "Chiron",
        composite_orb: 6,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Mars square North Node",
        composite_planet_id: 5,
        composite_aspect_id: 3,
        composite_to_planet: "North Node",
        composite_orb: 6,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Mars square South Node",
        composite_planet_id: 5,
        composite_aspect_id: 3,
        composite_to_planet: "South Node",
        composite_orb: 6,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Mars square Ceres",
        composite_planet_id: 5,
        composite_aspect_id: 3,
        composite_to_planet: "Ceres",
        composite_orb: 6,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Mars square Pallas Athene",
        composite_planet_id: 5,
        composite_aspect_id: 3,
        composite_to_planet: "Pallas Athene",
        composite_orb: 6,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Mars square Juno",
        composite_planet_id: 5,
        composite_aspect_id: 3,
        composite_to_planet: "Juno",
        composite_orb: 6,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Mars square Vesta",
        composite_planet_id: 5,
        composite_aspect_id: 3,
        composite_to_planet: "Vesta",
        composite_orb: 6,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Mars square Ascendant",
        composite_planet_id: 5,
        composite_aspect_id: 3,
        composite_to_planet: "Ascendant",
        composite_orb: 6,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Mars square Midheaven",
        composite_planet_id: 5,
        composite_aspect_id: 3,
        composite_to_planet: "Midheaven",
        composite_orb: 6,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Jupiter square Saturn",
        composite_planet_id: 6,
        composite_aspect_id: 3,
        composite_to_planet: "Saturn",
        composite_orb: 6,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Jupiter square Uranus",
        composite_planet_id: 6,
        composite_aspect_id: 3,
        composite_to_planet: "Uranus",
        composite_orb: 6,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Jupiter square Neptune",
        composite_planet_id: 6,
        composite_aspect_id: 3,
        composite_to_planet: "Neptune",
        composite_orb: 6,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Jupiter square Pluto",
        composite_planet_id: 6,
        composite_aspect_id: 3,
        composite_to_planet: "Pluto",
        composite_orb: 6,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Jupiter square Chiron",
        composite_planet_id: 6,
        composite_aspect_id: 3,
        composite_to_planet: "Chiron",
        composite_orb: 6,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Jupiter square North Node",
        composite_planet_id: 6,
        composite_aspect_id: 3,
        composite_to_planet: "North Node",
        composite_orb: 6,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Jupiter square South Node",
        composite_planet_id: 6,
        composite_aspect_id: 3,
        composite_to_planet: "South Node",
        composite_orb: 6,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Jupiter square Ceres",
        composite_planet_id: 6,
        composite_aspect_id: 3,
        composite_to_planet: "Ceres",
        composite_orb: 6,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Jupiter square Pallas Athene",
        composite_planet_id: 6,
        composite_aspect_id: 3,
        composite_to_planet: "Pallas Athene",
        composite_orb: 6,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Jupiter square Juno",
        composite_planet_id: 6,
        composite_aspect_id: 3,
        composite_to_planet: "Juno",
        composite_orb: 6,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Jupiter square Vesta",
        composite_planet_id: 6,
        composite_aspect_id: 3,
        composite_to_planet: "Vesta",
        composite_orb: 6,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Jupiter square Ascendant",
        composite_planet_id: 6,
        composite_aspect_id: 3,
        composite_to_planet: "Ascendant",
        composite_orb: 6,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Jupiter square Midheaven",
        composite_planet_id: 6,
        composite_aspect_id: 3,
        composite_to_planet: "Midheaven",
        composite_orb: 6,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Saturn square Uranus",
        composite_planet_id: 7,
        composite_aspect_id: 3,
        composite_to_planet: "Uranus",
        composite_orb: 6,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Saturn square Neptune",
        composite_planet_id: 7,
        composite_aspect_id: 3,
        composite_to_planet: "Neptune",
        composite_orb: 6,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Saturn square Pluto",
        composite_planet_id: 7,
        composite_aspect_id: 3,
        composite_to_planet: "Pluto",
        composite_orb: 6,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Saturn square Chiron",
        composite_planet_id: 7,
        composite_aspect_id: 3,
        composite_to_planet: "Chiron",
        composite_orb: 6,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Saturn square North Node",
        composite_planet_id: 7,
        composite_aspect_id: 3,
        composite_to_planet: "North Node",
        composite_orb: 6,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Saturn square South Node",
        composite_planet_id: 7,
        composite_aspect_id: 3,
        composite_to_planet: "South Node",
        composite_orb: 6,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Saturn square Ceres",
        composite_planet_id: 7,
        composite_aspect_id: 3,
        composite_to_planet: "Ceres",
        composite_orb: 6,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Saturn square Pallas Athene",
        composite_planet_id: 7,
        composite_aspect_id: 3,
        composite_to_planet: "Pallas Athene",
        composite_orb: 6,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Saturn square Juno",
        composite_planet_id: 7,
        composite_aspect_id: 3,
        composite_to_planet: "Juno",
        composite_orb: 6,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Saturn square Vesta",
        composite_planet_id: 7,
        composite_aspect_id: 3,
        composite_to_planet: "Vesta",
        composite_orb: 6,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Saturn square Ascendant",
        composite_planet_id: 7,
        composite_aspect_id: 3,
        composite_to_planet: "Ascendant",
        composite_orb: 6,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Saturn square Midheaven",
        composite_planet_id: 7,
        composite_aspect_id: 3,
        composite_to_planet: "Midheaven",
        composite_orb: 6,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Uranus square Neptune",
        composite_planet_id: 8,
        composite_aspect_id: 3,
        composite_to_planet: "Neptune",
        composite_orb: 6,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Uranus square Pluto",
        composite_planet_id: 8,
        composite_aspect_id: 3,
        composite_to_planet: "Pluto",
        composite_orb: 6,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Uranus square Chiron",
        composite_planet_id: 8,
        composite_aspect_id: 3,
        composite_to_planet: "Chiron",
        composite_orb: 6,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Uranus square North Node",
        composite_planet_id: 8,
        composite_aspect_id: 3,
        composite_to_planet: "North Node",
        composite_orb: 6,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Uranus square South Node",
        composite_planet_id: 8,
        composite_aspect_id: 3,
        composite_to_planet: "South Node",
        composite_orb: 6,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Uranus square Ceres",
        composite_planet_id: 8,
        composite_aspect_id: 3,
        composite_to_planet: "Ceres",
        composite_orb: 6,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Uranus square Pallas Athene",
        composite_planet_id: 8,
        composite_aspect_id: 3,
        composite_to_planet: "Pallas Athene",
        composite_orb: 6,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Uranus square Juno",
        composite_planet_id: 8,
        composite_aspect_id: 3,
        composite_to_planet: "Juno",
        composite_orb: 6,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Uranus square Vesta",
        composite_planet_id: 8,
        composite_aspect_id: 3,
        composite_to_planet: "Vesta",
        composite_orb: 6,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Uranus square Ascendant",
        composite_planet_id: 8,
        composite_aspect_id: 3,
        composite_to_planet: "Ascendant",
        composite_orb: 6,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Uranus square Midheaven",
        composite_planet_id: 8,
        composite_aspect_id: 3,
        composite_to_planet: "Midheaven",
        composite_orb: 6,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Neptune square Pluto",
        composite_planet_id: 9,
        composite_aspect_id: 3,
        composite_to_planet: "Pluto",
        composite_orb: 6,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Neptune square Chiron",
        composite_planet_id: 9,
        composite_aspect_id: 3,
        composite_to_planet: "Chiron",
        composite_orb: 6,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Neptune square North Node",
        composite_planet_id: 9,
        composite_aspect_id: 3,
        composite_to_planet: "North Node",
        composite_orb: 6,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Neptune square South Node",
        composite_planet_id: 9,
        composite_aspect_id: 3,
        composite_to_planet: "South Node",
        composite_orb: 6,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Neptune square Ceres",
        composite_planet_id: 9,
        composite_aspect_id: 3,
        composite_to_planet: "Ceres",
        composite_orb: 6,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Neptune square Pallas Athene",
        composite_planet_id: 9,
        composite_aspect_id: 3,
        composite_to_planet: "Pallas Athene",
        composite_orb: 6,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Neptune square Juno",
        composite_planet_id: 9,
        composite_aspect_id: 3,
        composite_to_planet: "Juno",
        composite_orb: 6,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Neptune square Vesta",
        composite_planet_id: 9,
        composite_aspect_id: 3,
        composite_to_planet: "Vesta",
        composite_orb: 6,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Neptune square Ascendant",
        composite_planet_id: 9,
        composite_aspect_id: 3,
        composite_to_planet: "Ascendant",
        composite_orb: 6,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Neptune square Midheaven",
        composite_planet_id: 9,
        composite_aspect_id: 3,
        composite_to_planet: "Midheaven",
        composite_orb: 6,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Pluto square Chiron",
        composite_planet_id: 10,
        composite_aspect_id: 3,
        composite_to_planet: "Chiron",
        composite_orb: 6,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Pluto square North Node",
        composite_planet_id: 10,
        composite_aspect_id: 3,
        composite_to_planet: "North Node",
        composite_orb: 6,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Pluto square South Node",
        composite_planet_id: 10,
        composite_aspect_id: 3,
        composite_to_planet: "South Node",
        composite_orb: 6,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Pluto square Ceres",
        composite_planet_id: 10,
        composite_aspect_id: 3,
        composite_to_planet: "Ceres",
        composite_orb: 6,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Pluto square Pallas Athene",
        composite_planet_id: 10,
        composite_aspect_id: 3,
        composite_to_planet: "Pallas Athene",
        composite_orb: 6,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Pluto square Juno",
        composite_planet_id: 10,
        composite_aspect_id: 3,
        composite_to_planet: "Juno",
        composite_orb: 6,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Pluto square Vesta",
        composite_planet_id: 10,
        composite_aspect_id: 3,
        composite_to_planet: "Vesta",
        composite_orb: 6,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Pluto square Ascendant",
        composite_planet_id: 10,
        composite_aspect_id: 3,
        composite_to_planet: "Ascendant",
        composite_orb: 6,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Pluto square Midheaven",
        composite_planet_id: 10,
        composite_aspect_id: 3,
        composite_to_planet: "Midheaven",
        composite_orb: 6,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Chiron square North Node",
        composite_planet_id: 11,
        composite_aspect_id: 3,
        composite_to_planet: "North Node",
        composite_orb: 6,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Chiron square South Node",
        composite_planet_id: 11,
        composite_aspect_id: 3,
        composite_to_planet: "South Node",
        composite_orb: 6,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Chiron square Ceres",
        composite_planet_id: 11,
        composite_aspect_id: 3,
        composite_to_planet: "Ceres",
        composite_orb: 6,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Chiron square Pallas Athene",
        composite_planet_id: 11,
        composite_aspect_id: 3,
        composite_to_planet: "Pallas Athene",
        composite_orb: 6,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Chiron square Juno",
        composite_planet_id: 11,
        composite_aspect_id: 3,
        composite_to_planet: "Juno",
        composite_orb: 6,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Chiron square Vesta",
        composite_planet_id: 11,
        composite_aspect_id: 3,
        composite_to_planet: "Vesta",
        composite_orb: 6,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Chiron square Ascendant",
        composite_planet_id: 11,
        composite_aspect_id: 3,
        composite_to_planet: "Ascendant",
        composite_orb: 6,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Chiron square Midheaven",
        composite_planet_id: 11,
        composite_aspect_id: 3,
        composite_to_planet: "Midheaven",
        composite_orb: 6,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "North Node square Ceres",
        composite_planet_id: 12,
        composite_aspect_id: 3,
        composite_to_planet: "Ceres",
        composite_orb: 6,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "North Node square Pallas Athene",
        composite_planet_id: 12,
        composite_aspect_id: 3,
        composite_to_planet: "Pallas Athene",
        composite_orb: 6,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "North Node square Juno",
        composite_planet_id: 12,
        composite_aspect_id: 3,
        composite_to_planet: "Juno",
        composite_orb: 6,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "North Node square Vesta",
        composite_planet_id: 12,
        composite_aspect_id: 3,
        composite_to_planet: "Vesta",
        composite_orb: 6,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "North Node square Ascendant",
        composite_planet_id: 12,
        composite_aspect_id: 3,
        composite_to_planet: "Ascendant",
        composite_orb: 6,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "North Node square Midheaven",
        composite_planet_id: 12,
        composite_aspect_id: 3,
        composite_to_planet: "Midheaven",
        composite_orb: 6,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "South Node square Pallas Athene",
        composite_planet_id: 13,
        composite_aspect_id: 3,
        composite_to_planet: "Pallas Athene",
        composite_orb: 6,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "South Node square Juno",
        composite_planet_id: 13,
        composite_aspect_id: 3,
        composite_to_planet: "Juno",
        composite_orb: 6,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "South Node square Vesta",
        composite_planet_id: 13,
        composite_aspect_id: 3,
        composite_to_planet: "Vesta",
        composite_orb: 6,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "South Node square Ascendant",
        composite_planet_id: 13,
        composite_aspect_id: 3,
        composite_to_planet: "Ascendant",
        composite_orb: 6,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "South Node square Midheaven",
        composite_planet_id: 13,
        composite_aspect_id: 3,
        composite_to_planet: "Midheaven",
        composite_orb: 6,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Ceres square Pallas Athene",
        composite_planet_id: 14,
        composite_aspect_id: 3,
        composite_to_planet: "Pallas Athene",
        composite_orb: 6,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Ceres square Juno",
        composite_planet_id: 14,
        composite_aspect_id: 3,
        composite_to_planet: "Juno",
        composite_orb: 6,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Ceres square Vesta",
        composite_planet_id: 14,
        composite_aspect_id: 3,
        composite_to_planet: "Vesta",
        composite_orb: 6,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Ceres square Ascendant",
        composite_planet_id: 14,
        composite_aspect_id: 3,
        composite_to_planet: "Ascendant",
        composite_orb: 6,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Ceres square Midheaven",
        composite_planet_id: 14,
        composite_aspect_id: 3,
        composite_to_planet: "Midheaven",
        composite_orb: 6,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Pallas Athene square Juno",
        composite_planet_id: 15,
        composite_aspect_id: 3,
        composite_to_planet: "Juno",
        composite_orb: 6,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Pallas Athene square Vesta",
        composite_planet_id: 15,
        composite_aspect_id: 3,
        composite_to_planet: "Vesta",
        composite_orb: 6,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Pallas Athene square Ascendant",
        composite_planet_id: 15,
        composite_aspect_id: 3,
        composite_to_planet: "Ascendant",
        composite_orb: 6,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Pallas Athene square Midheaven",
        composite_planet_id: 15,
        composite_aspect_id: 3,
        composite_to_planet: "Midheaven",
        composite_orb: 6,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Juno square Vesta",
        composite_planet_id: 16,
        composite_aspect_id: 3,
        composite_to_planet: "Vesta",
        composite_orb: 6,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Juno square Ascendant",
        composite_planet_id: 16,
        composite_aspect_id: 3,
        composite_to_planet: "Ascendant",
        composite_orb: 6,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Juno square Midheaven",
        composite_planet_id: 16,
        composite_aspect_id: 3,
        composite_to_planet: "Midheaven",
        composite_orb: 6,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Sun trine Moon",
        composite_planet_id: 1,
        composite_aspect_id: 4,
        composite_to_planet: "Moon",
        composite_orb: 6,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Sun trine Mercury",
        composite_planet_id: 1,
        composite_aspect_id: 4,
        composite_to_planet: "Mercury",
        composite_orb: 6,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Sun trine Venus",
        composite_planet_id: 1,
        composite_aspect_id: 4,
        composite_to_planet: "Venus",
        composite_orb: 6,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Sun trine Mars",
        composite_planet_id: 1,
        composite_aspect_id: 4,
        composite_to_planet: "Mars",
        composite_orb: 6,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Sun trine Jupiter",
        composite_planet_id: 1,
        composite_aspect_id: 4,
        composite_to_planet: "Jupiter",
        composite_orb: 6,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Sun trine Saturn",
        composite_planet_id: 1,
        composite_aspect_id: 4,
        composite_to_planet: "Saturn",
        composite_orb: 6,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Sun trine Uranus",
        composite_planet_id: 1,
        composite_aspect_id: 4,
        composite_to_planet: "Uranus",
        composite_orb: 6,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Sun trine Neptune",
        composite_planet_id: 1,
        composite_aspect_id: 4,
        composite_to_planet: "Neptune",
        composite_orb: 6,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Sun trine Pluto",
        composite_planet_id: 1,
        composite_aspect_id: 4,
        composite_to_planet: "Pluto",
        composite_orb: 6,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Sun trine Chiron",
        composite_planet_id: 1,
        composite_aspect_id: 4,
        composite_to_planet: "Chiron",
        composite_orb: 6,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Sun trine North Node",
        composite_planet_id: 1,
        composite_aspect_id: 4,
        composite_to_planet: "North Node",
        composite_orb: 6,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Sun trine South Node",
        composite_planet_id: 1,
        composite_aspect_id: 4,
        composite_to_planet: "South Node",
        composite_orb: 6,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Sun trine Ceres",
        composite_planet_id: 1,
        composite_aspect_id: 4,
        composite_to_planet: "Ceres",
        composite_orb: 6,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Sun trine Pallas Athene",
        composite_planet_id: 1,
        composite_aspect_id: 4,
        composite_to_planet: "Pallas Athene",
        composite_orb: 6,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Sun trine Juno",
        composite_planet_id: 1,
        composite_aspect_id: 4,
        composite_to_planet: "Juno",
        composite_orb: 6,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Sun trine Vesta",
        composite_planet_id: 1,
        composite_aspect_id: 4,
        composite_to_planet: "Vesta",
        composite_orb: 6,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Sun trine Ascendant",
        composite_planet_id: 1,
        composite_aspect_id: 4,
        composite_to_planet: "Ascendant",
        composite_orb: 6,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Sun trine Midheaven",
        composite_planet_id: 1,
        composite_aspect_id: 4,
        composite_to_planet: "Midheaven",
        composite_orb: 6,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Moon trine Mercury",
        composite_planet_id: 2,
        composite_aspect_id: 4,
        composite_to_planet: "Mercury",
        composite_orb: 6,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Moon trine Venus",
        composite_planet_id: 2,
        composite_aspect_id: 4,
        composite_to_planet: "Venus",
        composite_orb: 6,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Moon trine Mars",
        composite_planet_id: 2,
        composite_aspect_id: 4,
        composite_to_planet: "Mars",
        composite_orb: 6,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Moon trine Jupiter",
        composite_planet_id: 2,
        composite_aspect_id: 4,
        composite_to_planet: "Jupiter",
        composite_orb: 6,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Moon trine Saturn",
        composite_planet_id: 2,
        composite_aspect_id: 4,
        composite_to_planet: "Saturn",
        composite_orb: 6,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Moon trine Uranus",
        composite_planet_id: 2,
        composite_aspect_id: 4,
        composite_to_planet: "Uranus",
        composite_orb: 6,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Moon trine Neptune",
        composite_planet_id: 2,
        composite_aspect_id: 4,
        composite_to_planet: "Neptune",
        composite_orb: 6,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Moon trine Pluto",
        composite_planet_id: 2,
        composite_aspect_id: 4,
        composite_to_planet: "Pluto",
        composite_orb: 6,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Moon trine Chiron",
        composite_planet_id: 2,
        composite_aspect_id: 4,
        composite_to_planet: "Chiron",
        composite_orb: 6,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Moon trine North Node",
        composite_planet_id: 2,
        composite_aspect_id: 4,
        composite_to_planet: "North Node",
        composite_orb: 6,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Moon trine South Node",
        composite_planet_id: 2,
        composite_aspect_id: 4,
        composite_to_planet: "South Node",
        composite_orb: 6,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Moon trine Ceres",
        composite_planet_id: 2,
        composite_aspect_id: 4,
        composite_to_planet: "Ceres",
        composite_orb: 6,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Moon trine Pallas Athene",
        composite_planet_id: 2,
        composite_aspect_id: 4,
        composite_to_planet: "Pallas Athene",
        composite_orb: 6,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Moon trine Juno",
        composite_planet_id: 2,
        composite_aspect_id: 4,
        composite_to_planet: "Juno",
        composite_orb: 6,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Moon trine Vesta",
        composite_planet_id: 2,
        composite_aspect_id: 4,
        composite_to_planet: "Vesta",
        composite_orb: 6,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Moon trine Ascendant",
        composite_planet_id: 2,
        composite_aspect_id: 4,
        composite_to_planet: "Ascendant",
        composite_orb: 6,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Moon trine Midheaven",
        composite_planet_id: 2,
        composite_aspect_id: 4,
        composite_to_planet: "Vesta",
        composite_orb: 6,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Mercury trine Venus",
        composite_planet_id: 3,
        composite_aspect_id: 4,
        composite_to_planet: "Venus",
        composite_orb: 6,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Mercury trine Mars",
        composite_planet_id: 3,
        composite_aspect_id: 4,
        composite_to_planet: "Mars",
        composite_orb: 6,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Mercury trine Jupiter",
        composite_planet_id: 3,
        composite_aspect_id: 4,
        composite_to_planet: "Jupiter",
        composite_orb: 6,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Mercury trine Saturn",
        composite_planet_id: 3,
        composite_aspect_id: 4,
        composite_to_planet: "Saturn",
        composite_orb: 6,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Mercury trine Uranus",
        composite_planet_id: 3,
        composite_aspect_id: 4,
        composite_to_planet: "Uranus",
        composite_orb: 6,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Mercury trine Neptune",
        composite_planet_id: 3,
        composite_aspect_id: 4,
        composite_to_planet: "Neptune",
        composite_orb: 6,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Mercury trine Pluto",
        composite_planet_id: 3,
        composite_aspect_id: 4,
        composite_to_planet: "Pluto",
        composite_orb: 6,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Mercury trine Chiron",
        composite_planet_id: 3,
        composite_aspect_id: 4,
        composite_to_planet: "Chiron",
        composite_orb: 6,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Mercury trine North Node",
        composite_planet_id: 3,
        composite_aspect_id: 4,
        composite_to_planet: "North Node",
        composite_orb: 6,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Mercury trine South Node",
        composite_planet_id: 3,
        composite_aspect_id: 4,
        composite_to_planet: "South Node",
        composite_orb: 6,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Mercury trine Ceres",
        composite_planet_id: 3,
        composite_aspect_id: 4,
        composite_to_planet: "Ceres",
        composite_orb: 6,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Mercury trine Pallas Athene",
        composite_planet_id: 3,
        composite_aspect_id: 4,
        composite_to_planet: "Pallas Athene",
        composite_orb: 6,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Mercury trine Juno",
        composite_planet_id: 3,
        composite_aspect_id: 4,
        composite_to_planet: "Juno",
        composite_orb: 6,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Mercury trine Vesta",
        composite_planet_id: 3,
        composite_aspect_id: 4,
        composite_to_planet: "Vesta",
        composite_orb: 6,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Mercury trine Ascendant",
        composite_planet_id: 3,
        composite_aspect_id: 4,
        composite_to_planet: "Ascendant",
        composite_orb: 6,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Mercury trine Midheaven",
        composite_planet_id: 3,
        composite_aspect_id: 4,
        composite_to_planet: "Midheaven",
        composite_orb: 6,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Venus trine Mars",
        composite_planet_id: 4,
        composite_aspect_id: 4,
        composite_to_planet: "Mars",
        composite_orb: 6,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Venus trine Jupiter",
        composite_planet_id: 4,
        composite_aspect_id: 4,
        composite_to_planet: "Jupiter",
        composite_orb: 6,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Venus trine Saturn",
        composite_planet_id: 4,
        composite_aspect_id: 4,
        composite_to_planet: "Saturn",
        composite_orb: 6,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Venus trine Uranus",
        composite_planet_id: 4,
        composite_aspect_id: 4,
        composite_to_planet: "Uranus",
        composite_orb: 6,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Venus trine Neptune",
        composite_planet_id: 4,
        composite_aspect_id: 4,
        composite_to_planet: "Neptune",
        composite_orb: 6,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Venus trine Pluto",
        composite_planet_id: 4,
        composite_aspect_id: 4,
        composite_to_planet: "Pluto",
        composite_orb: 6,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Venus trine Chiron",
        composite_planet_id: 4,
        composite_aspect_id: 4,
        composite_to_planet: "Chiron",
        composite_orb: 6,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Venus trine North Node",
        composite_planet_id: 4,
        composite_aspect_id: 4,
        composite_to_planet: "North Node",
        composite_orb: 6,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Venus trine South Node",
        composite_planet_id: 4,
        composite_aspect_id: 4,
        composite_to_planet: "South Node",
        composite_orb: 6,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Venus trine Ceres",
        composite_planet_id: 4,
        composite_aspect_id: 4,
        composite_to_planet: "Ceres",
        composite_orb: 6,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Venus trine Pallas Athene",
        composite_planet_id: 4,
        composite_aspect_id: 4,
        composite_to_planet: "Pallas Athene",
        composite_orb: 6,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Venus trine Juno",
        composite_planet_id: 4,
        composite_aspect_id: 4,
        composite_to_planet: "Juno",
        composite_orb: 6,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Venus trine Vesta",
        composite_planet_id: 4,
        composite_aspect_id: 4,
        composite_to_planet: "Vesta",
        composite_orb: 6,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Venus trine Ascendant",
        composite_planet_id: 4,
        composite_aspect_id: 4,
        composite_to_planet: "Ascendant",
        composite_orb: 6,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Venus trine Midheaven",
        composite_planet_id: 4,
        composite_aspect_id: 4,
        composite_to_planet: "Midheaven",
        composite_orb: 6,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Mars trine Jupiter",
        composite_planet_id: 5,
        composite_aspect_id: 4,
        composite_to_planet: "Jupiter",
        composite_orb: 6,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Mars trine Saturn",
        composite_planet_id: 5,
        composite_aspect_id: 4,
        composite_to_planet: "Saturn",
        composite_orb: 6,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Mars trine Uranus",
        composite_planet_id: 5,
        composite_aspect_id: 4,
        composite_to_planet: "Uranus",
        composite_orb: 6,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Mars trine Neptune",
        composite_planet_id: 5,
        composite_aspect_id: 4,
        composite_to_planet: "Neptune",
        composite_orb: 6,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Mars trine Pluto",
        composite_planet_id: 5,
        composite_aspect_id: 4,
        composite_to_planet: "Pluto",
        composite_orb: 6,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Mars trine Chiron",
        composite_planet_id: 5,
        composite_aspect_id: 4,
        composite_to_planet: "Chiron",
        composite_orb: 6,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Mars trine North Node",
        composite_planet_id: 5,
        composite_aspect_id: 4,
        composite_to_planet: "North Node",
        composite_orb: 6,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Mars trine South Node",
        composite_planet_id: 5,
        composite_aspect_id: 4,
        composite_to_planet: "South Node",
        composite_orb: 6,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Mars trine Ceres",
        composite_planet_id: 5,
        composite_aspect_id: 4,
        composite_to_planet: "Ceres",
        composite_orb: 6,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Mars trine Pallas Athene",
        composite_planet_id: 5,
        composite_aspect_id: 4,
        composite_to_planet: "Pallas Athene",
        composite_orb: 6,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Mars trine Juno",
        composite_planet_id: 5,
        composite_aspect_id: 4,
        composite_to_planet: "Juno",
        composite_orb: 6,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Mars trine Vesta",
        composite_planet_id: 5,
        composite_aspect_id: 4,
        composite_to_planet: "Vesta",
        composite_orb: 6,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Mars trine Ascendant",
        composite_planet_id: 5,
        composite_aspect_id: 4,
        composite_to_planet: "Ascendant",
        composite_orb: 6,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Mars trine Midheaven",
        composite_planet_id: 5,
        composite_aspect_id: 4,
        composite_to_planet: "Midheaven",
        composite_orb: 6,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Jupiter trine Saturn",
        composite_planet_id: 6,
        composite_aspect_id: 4,
        composite_to_planet: "Saturn",
        composite_orb: 6,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Jupiter trine Uranus",
        composite_planet_id: 6,
        composite_aspect_id: 4,
        composite_to_planet: "Uranus",
        composite_orb: 6,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Jupiter trine Neptune",
        composite_planet_id: 6,
        composite_aspect_id: 4,
        composite_to_planet: "Neptune",
        composite_orb: 6,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Jupiter trine Pluto",
        composite_planet_id: 6,
        composite_aspect_id: 4,
        composite_to_planet: "Pluto",
        composite_orb: 6,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Jupiter trine Chiron",
        composite_planet_id: 6,
        composite_aspect_id: 4,
        composite_to_planet: "Chiron",
        composite_orb: 6,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Jupiter trine North Node",
        composite_planet_id: 6,
        composite_aspect_id: 4,
        composite_to_planet: "North Node",
        composite_orb: 6,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Jupiter trine South Node",
        composite_planet_id: 6,
        composite_aspect_id: 4,
        composite_to_planet: "South Node",
        composite_orb: 6,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Jupiter trine Ceres",
        composite_planet_id: 6,
        composite_aspect_id: 4,
        composite_to_planet: "Ceres",
        composite_orb: 6,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Jupiter trine Pallas Athene",
        composite_planet_id: 6,
        composite_aspect_id: 4,
        composite_to_planet: "Pallas Athene",
        composite_orb: 6,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Jupiter trine Juno",
        composite_planet_id: 6,
        composite_aspect_id: 4,
        composite_to_planet: "Juno",
        composite_orb: 6,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Jupiter trine Vesta",
        composite_planet_id: 6,
        composite_aspect_id: 4,
        composite_to_planet: "Vesta",
        composite_orb: 6,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Jupiter trine Ascendant",
        composite_planet_id: 6,
        composite_aspect_id: 4,
        composite_to_planet: "Ascendant",
        composite_orb: 6,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Jupiter trine Midheaven",
        composite_planet_id: 6,
        composite_aspect_id: 4,
        composite_to_planet: "Midheaven",
        composite_orb: 6,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Saturn trine Uranus",
        composite_planet_id: 7,
        composite_aspect_id: 4,
        composite_to_planet: "Uranus",
        composite_orb: 6,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Saturn trine Neptune",
        composite_planet_id: 7,
        composite_aspect_id: 4,
        composite_to_planet: "Neptune",
        composite_orb: 6,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Saturn trine Pluto",
        composite_planet_id: 7,
        composite_aspect_id: 4,
        composite_to_planet: "Pluto",
        composite_orb: 6,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Saturn trine Chiron",
        composite_planet_id: 7,
        composite_aspect_id: 4,
        composite_to_planet: "Chiron",
        composite_orb: 6,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Saturn trine North Node",
        composite_planet_id: 7,
        composite_aspect_id: 4,
        composite_to_planet: "North Node",
        composite_orb: 6,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Saturn trine South Node",
        composite_planet_id: 7,
        composite_aspect_id: 4,
        composite_to_planet: "South Node",
        composite_orb: 6,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Saturn trine Ceres",
        composite_planet_id: 7,
        composite_aspect_id: 4,
        composite_to_planet: "Ceres",
        composite_orb: 6,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Saturn trine Pallas Athene",
        composite_planet_id: 7,
        composite_aspect_id: 4,
        composite_to_planet: "Pallas Athene",
        composite_orb: 6,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Saturn trine Juno",
        composite_planet_id: 7,
        composite_aspect_id: 4,
        composite_to_planet: "Juno",
        composite_orb: 6,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Saturn trine Vesta",
        composite_planet_id: 7,
        composite_aspect_id: 4,
        composite_to_planet: "Vesta",
        composite_orb: 6,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Saturn trine Ascendant",
        composite_planet_id: 7,
        composite_aspect_id: 4,
        composite_to_planet: "Ascendant",
        composite_orb: 6,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Saturn trine Midheaven",
        composite_planet_id: 7,
        composite_aspect_id: 4,
        composite_to_planet: "Midheaven",
        composite_orb: 6,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Uranus trine Neptune",
        composite_planet_id: 8,
        composite_aspect_id: 4,
        composite_to_planet: "Neptune",
        composite_orb: 6,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Uranus trine Pluto",
        composite_planet_id: 8,
        composite_aspect_id: 4,
        composite_to_planet: "Pluto",
        composite_orb: 6,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Uranus trine Chiron",
        composite_planet_id: 8,
        composite_aspect_id: 4,
        composite_to_planet: "Chiron",
        composite_orb: 6,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Uranus trine North Node",
        composite_planet_id: 8,
        composite_aspect_id: 4,
        composite_to_planet: "North Node",
        composite_orb: 6,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Uranus trine South Node",
        composite_planet_id: 8,
        composite_aspect_id: 4,
        composite_to_planet: "South Node",
        composite_orb: 6,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Uranus trine Ceres",
        composite_planet_id: 8,
        composite_aspect_id: 4,
        composite_to_planet: "Ceres",
        composite_orb: 6,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Uranus trine Pallas Athene",
        composite_planet_id: 8,
        composite_aspect_id: 4,
        composite_to_planet: "Pallas Athene",
        composite_orb: 6,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Uranus trine Juno",
        composite_planet_id: 8,
        composite_aspect_id: 4,
        composite_to_planet: "Juno",
        composite_orb: 6,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Uranus trine Vesta",
        composite_planet_id: 8,
        composite_aspect_id: 4,
        composite_to_planet: "Vesta",
        composite_orb: 6,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Uranus trine Ascendant",
        composite_planet_id: 8,
        composite_aspect_id: 4,
        composite_to_planet: "Ascendant",
        composite_orb: 6,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Uranus trine Midheaven",
        composite_planet_id: 8,
        composite_aspect_id: 4,
        composite_to_planet: "Midheaven",
        composite_orb: 6,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Neptune trine Pluto",
        composite_planet_id: 9,
        composite_aspect_id: 4,
        composite_to_planet: "Pluto",
        composite_orb: 6,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Neptune trine Chiron",
        composite_planet_id: 9,
        composite_aspect_id: 4,
        composite_to_planet: "Chiron",
        composite_orb: 6,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Neptune trine North Node",
        composite_planet_id: 9,
        composite_aspect_id: 4,
        composite_to_planet: "North Node",
        composite_orb: 6,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Neptune trine South Node",
        composite_planet_id: 9,
        composite_aspect_id: 4,
        composite_to_planet: "South Node",
        composite_orb: 6,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Neptune trine Ceres",
        composite_planet_id: 9,
        composite_aspect_id: 4,
        composite_to_planet: "Ceres",
        composite_orb: 6,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Neptune trine Pallas Athene",
        composite_planet_id: 9,
        composite_aspect_id: 4,
        composite_to_planet: "Pallas Athene",
        composite_orb: 6,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Neptune trine Juno",
        composite_planet_id: 9,
        composite_aspect_id: 4,
        composite_to_planet: "Juno",
        composite_orb: 6,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Neptune trine Vesta",
        composite_planet_id: 9,
        composite_aspect_id: 4,
        composite_to_planet: "Vesta",
        composite_orb: 6,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Neptune trine Ascendant",
        composite_planet_id: 9,
        composite_aspect_id: 4,
        composite_to_planet: "Ascendant",
        composite_orb: 6,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Neptune trine Midheaven",
        composite_planet_id: 9,
        composite_aspect_id: 4,
        composite_to_planet: "Midheaven",
        composite_orb: 6,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Pluto trine Chiron",
        composite_planet_id: 10,
        composite_aspect_id: 4,
        composite_to_planet: "Chiron",
        composite_orb: 6,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Pluto trine North Node",
        composite_planet_id: 10,
        composite_aspect_id: 4,
        composite_to_planet: "North Node",
        composite_orb: 6,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Pluto trine South Node",
        composite_planet_id: 10,
        composite_aspect_id: 4,
        composite_to_planet: "South Node",
        composite_orb: 6,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Pluto trine Ceres",
        composite_planet_id: 10,
        composite_aspect_id: 4,
        composite_to_planet: "Ceres",
        composite_orb: 6,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Pluto trine Pallas Athene",
        composite_planet_id: 10,
        composite_aspect_id: 4,
        composite_to_planet: "Pallas Athene",
        composite_orb: 6,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Pluto trine Juno",
        composite_planet_id: 10,
        composite_aspect_id: 4,
        composite_to_planet: "Juno",
        composite_orb: 6,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Pluto trine Vesta",
        composite_planet_id: 10,
        composite_aspect_id: 4,
        composite_to_planet: "Vesta",
        composite_orb: 6,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Pluto trine Ascendant",
        composite_planet_id: 10,
        composite_aspect_id: 4,
        composite_to_planet: "Ascendant",
        composite_orb: 6,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Pluto trine Midheaven",
        composite_planet_id: 10,
        composite_aspect_id: 4,
        composite_to_planet: "Midheaven",
        composite_orb: 6,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Chiron trine North Node",
        composite_planet_id: 11,
        composite_aspect_id: 4,
        composite_to_planet: "North Node",
        composite_orb: 6,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Chiron trine South Node",
        composite_planet_id: 11,
        composite_aspect_id: 4,
        composite_to_planet: "South Node",
        composite_orb: 6,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Chiron trine Ceres",
        composite_planet_id: 11,
        composite_aspect_id: 4,
        composite_to_planet: "Ceres",
        composite_orb: 6,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Chiron trine Pallas Athene",
        composite_planet_id: 11,
        composite_aspect_id: 4,
        composite_to_planet: "Pallas Athene",
        composite_orb: 6,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Chiron trine Juno",
        composite_planet_id: 11,
        composite_aspect_id: 4,
        composite_to_planet: "Juno",
        composite_orb: 6,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Chiron trine Vesta",
        composite_planet_id: 11,
        composite_aspect_id: 4,
        composite_to_planet: "Vesta",
        composite_orb: 6,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Chiron trine Ascendant",
        composite_planet_id: 11,
        composite_aspect_id: 4,
        composite_to_planet: "Ascendant",
        composite_orb: 6,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Chiron trine Midheaven",
        composite_planet_id: 11,
        composite_aspect_id: 4,
        composite_to_planet: "Midheaven",
        composite_orb: 6,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "North Node trine Ceres",
        composite_planet_id: 12,
        composite_aspect_id: 4,
        composite_to_planet: "Ceres",
        composite_orb: 6,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "North Node trine Pallas Athene",
        composite_planet_id: 12,
        composite_aspect_id: 4,
        composite_to_planet: "Pallas Athene",
        composite_orb: 6,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "North Node trine Juno",
        composite_planet_id: 12,
        composite_aspect_id: 4,
        composite_to_planet: "Juno",
        composite_orb: 6,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "North Node trine Vesta",
        composite_planet_id: 12,
        composite_aspect_id: 4,
        composite_to_planet: "Vesta",
        composite_orb: 6,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "North Node trine Ascendant",
        composite_planet_id: 12,
        composite_aspect_id: 4,
        composite_to_planet: "Ascendant",
        composite_orb: 6,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "North Node trine Midheaven",
        composite_planet_id: 12,
        composite_aspect_id: 4,
        composite_to_planet: "Midheaven",
        composite_orb: 6,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "South Node trine Pallas Athene",
        composite_planet_id: 13,
        composite_aspect_id: 4,
        composite_to_planet: "Pallas Athene",
        composite_orb: 6,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "South Node trine Juno",
        composite_planet_id: 13,
        composite_aspect_id: 4,
        composite_to_planet: "Juno",
        composite_orb: 6,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "South Node trine Vesta",
        composite_planet_id: 13,
        composite_aspect_id: 4,
        composite_to_planet: "Vesta",
        composite_orb: 6,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "South Node trine Ascendant",
        composite_planet_id: 13,
        composite_aspect_id: 4,
        composite_to_planet: "Ascendant",
        composite_orb: 6,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "South Node trine Midheaven",
        composite_planet_id: 13,
        composite_aspect_id: 4,
        composite_to_planet: "Midheaven",
        composite_orb: 6,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Ceres trine Pallas Athene",
        composite_planet_id: 14,
        composite_aspect_id: 4,
        composite_to_planet: "Pallas Athene",
        composite_orb: 6,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Ceres trine Juno",
        composite_planet_id: 14,
        composite_aspect_id: 4,
        composite_to_planet: "Juno",
        composite_orb: 6,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Ceres trine Vesta",
        composite_planet_id: 14,
        composite_aspect_id: 4,
        composite_to_planet: "Vesta",
        composite_orb: 6,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Ceres trine Ascendant",
        composite_planet_id: 14,
        composite_aspect_id: 4,
        composite_to_planet: "Ascendant",
        composite_orb: 6,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Ceres trine Midheaven",
        composite_planet_id: 14,
        composite_aspect_id: 4,
        composite_to_planet: "Midheaven",
        composite_orb: 6,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Pallas Athene trine Juno",
        composite_planet_id: 15,
        composite_aspect_id: 4,
        composite_to_planet: "Juno",
        composite_orb: 6,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Pallas Athene trine Vesta",
        composite_planet_id: 15,
        composite_aspect_id: 4,
        composite_to_planet: "Vesta",
        composite_orb: 6,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Pallas Athene trine Ascendant",
        composite_planet_id: 15,
        composite_aspect_id: 4,
        composite_to_planet: "Ascendant",
        composite_orb: 6,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Pallas Athene trine Midheaven",
        composite_planet_id: 15,
        composite_aspect_id: 4,
        composite_to_planet: "Midheaven",
        composite_orb: 6,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Juno trine Vesta",
        composite_planet_id: 16,
        composite_aspect_id: 4,
        composite_to_planet: "Vesta",
        composite_orb: 6,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Juno trine Ascendant",
        composite_planet_id: 16,
        composite_aspect_id: 4,
        composite_to_planet: "Ascendant",
        composite_orb: 6,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Juno trine Midheaven",
        composite_planet_id: 16,
        composite_aspect_id: 4,
        composite_to_planet: "Midheaven",
        composite_orb: 6,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Sun opposition Moon",
        composite_planet_id: 1,
        composite_aspect_id: 5,
        composite_to_planet: "Moon",
        composite_orb: 8,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Sun opposition Mercury",
        composite_planet_id: 1,
        composite_aspect_id: 5,
        composite_to_planet: "Mercury",
        composite_orb: 8,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Sun opposition Venus",
        composite_planet_id: 1,
        composite_aspect_id: 5,
        composite_to_planet: "Venus",
        composite_orb: 8,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Sun opposition Mars",
        composite_planet_id: 1,
        composite_aspect_id: 5,
        composite_to_planet: "Mars",
        composite_orb: 8,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Sun opposition Jupiter",
        composite_planet_id: 1,
        composite_aspect_id: 1,
        composite_to_planet: "Jupiter",
        composite_orb: 8,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Sun opposition Saturn",
        composite_planet_id: 1,
        composite_aspect_id: 1,
        composite_to_planet: "Saturn",
        composite_orb: 8,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Sun opposition Uranus",
        composite_planet_id: 1,
        composite_aspect_id: 1,
        composite_to_planet: "Uranus",
        composite_orb: 8,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Sun opposition Neptune",
        composite_planet_id: 1,
        composite_aspect_id: 1,
        composite_to_planet: "Neptune",
        composite_orb: 8,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Sun opposition Pluto",
        composite_planet_id: 1,
        composite_aspect_id: 1,
        composite_to_planet: "Pluto",
        composite_orb: 8,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Sun opposition Chiron",
        composite_planet_id: 1,
        composite_aspect_id: 1,
        composite_to_planet: "Chiron",
        composite_orb: 8,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Sun opposition North Node",
        composite_planet_id: 1,
        composite_aspect_id: 1,
        composite_to_planet: "North Node",
        composite_orb: 8,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Sun opposition South Node",
        composite_planet_id: 1,
        composite_aspect_id: 1,
        composite_to_planet: "South Node",
        composite_orb: 8,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Sun opposition Ceres",
        composite_planet_id: 1,
        composite_aspect_id: 1,
        composite_to_planet: "Ceres",
        composite_orb: 8,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Sun opposition Pallas Athene",
        composite_planet_id: 1,
        composite_aspect_id: 1,
        composite_to_planet: "Pallas Athene",
        composite_orb: 8,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Sun opposition Juno",
        composite_planet_id: 1,
        composite_aspect_id: 1,
        composite_to_planet: "Juno",
        composite_orb: 8,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Sun opposition Vesta",
        composite_planet_id: 1,
        composite_aspect_id: 1,
        composite_to_planet: "Vesta",
        composite_orb: 8,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Sun opposition Ascendant",
        composite_planet_id: 1,
        composite_aspect_id: 1,
        composite_to_planet: "Ascendant",
        composite_orb: 8,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Sun opposition Midheaven",
        composite_planet_id: 1,
        composite_aspect_id: 1,
        composite_to_planet: "Midheaven",
        composite_orb: 8,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Moon opposition Mercury",
        composite_planet_id: 2,
        composite_aspect_id: 1,
        composite_to_planet: "Mercury",
        composite_orb: 8,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Moon opposition Venus",
        composite_planet_id: 2,
        composite_aspect_id: 1,
        composite_to_planet: "Venus",
        composite_orb: 8,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Moon opposition Mars",
        composite_planet_id: 2,
        composite_aspect_id: 1,
        composite_to_planet: "Mars",
        composite_orb: 8,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Moon opposition Jupiter",
        composite_planet_id: 2,
        composite_aspect_id: 1,
        composite_to_planet: "Jupiter",
        composite_orb: 8,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Moon opposition Saturn",
        composite_planet_id: 2,
        composite_aspect_id: 1,
        composite_to_planet: "Saturn",
        composite_orb: 8,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Moon opposition Uranus",
        composite_planet_id: 2,
        composite_aspect_id: 1,
        composite_to_planet: "Uranus",
        composite_orb: 8,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Moon opposition Neptune",
        composite_planet_id: 2,
        composite_aspect_id: 1,
        composite_to_planet: "Neptune",
        composite_orb: 8,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Moon opposition Pluto",
        composite_planet_id: 2,
        composite_aspect_id: 1,
        composite_to_planet: "Pluto",
        composite_orb: 8,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Moon opposition Chiron",
        composite_planet_id: 2,
        composite_aspect_id: 1,
        composite_to_planet: "Chiron",
        composite_orb: 8,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Moon opposition North Node",
        composite_planet_id: 2,
        composite_aspect_id: 1,
        composite_to_planet: "North Node",
        composite_orb: 8,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Moon opposition South Node",
        composite_planet_id: 2,
        composite_aspect_id: 1,
        composite_to_planet: "South Node",
        composite_orb: 8,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Moon opposition Ceres",
        composite_planet_id: 2,
        composite_aspect_id: 1,
        composite_to_planet: "Ceres",
        composite_orb: 8,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Moon opposition Pallas Athene",
        composite_planet_id: 2,
        composite_aspect_id: 1,
        composite_to_planet: "Pallas Athene",
        composite_orb: 8,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Moon opposition Juno",
        composite_planet_id: 2,
        composite_aspect_id: 1,
        composite_to_planet: "Juno",
        composite_orb: 8,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Moon opposition Vesta",
        composite_planet_id: 2,
        composite_aspect_id: 1,
        composite_to_planet: "Vesta",
        composite_orb: 8,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Moon opposition Ascendant",
        composite_planet_id: 2,
        composite_aspect_id: 1,
        composite_to_planet: "Ascendant",
        composite_orb: 8,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Moon opposition Midheaven",
        composite_planet_id: 2,
        composite_aspect_id: 1,
        composite_to_planet: "Midheaven",
        composite_orb: 8,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Mercury opposition Venus",
        composite_planet_id: 3,
        composite_aspect_id: 1,
        composite_to_planet: "Venus",
        composite_orb: 8,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Mercury opposition Mars",
        composite_planet_id: 3,
        composite_aspect_id: 1,
        composite_to_planet: "Mars",
        composite_orb: 8,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Mercury opposition Jupiter",
        composite_planet_id: 3,
        composite_aspect_id: 1,
        composite_to_planet: "Jupiter",
        composite_orb: 8,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Mercury opposition Saturn",
        composite_planet_id: 3,
        composite_aspect_id: 1,
        composite_to_planet: "Saturn",
        composite_orb: 8,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Mercury opposition Uranus",
        composite_planet_id: 3,
        composite_aspect_id: 1,
        composite_to_planet: "Uranus",
        composite_orb: 8,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Mercury opposition Neptune",
        composite_planet_id: 3,
        composite_aspect_id: 1,
        composite_to_planet: "Neptune",
        composite_orb: 8,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Mercury opposition Pluto",
        composite_planet_id: 3,
        composite_aspect_id: 1,
        composite_to_planet: "Pluto",
        composite_orb: 8,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Mercury opposition Chiron",
        composite_planet_id: 3,
        composite_aspect_id: 1,
        composite_to_planet: "Chiron",
        composite_orb: 8,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Mercury opposition North Node",
        composite_planet_id: 3,
        composite_aspect_id: 1,
        composite_to_planet: "North Node",
        composite_orb: 8,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Mercury opposition South Node",
        composite_planet_id: 3,
        composite_aspect_id: 1,
        composite_to_planet: "South Node",
        composite_orb: 8,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Mercury opposition Ceres",
        composite_planet_id: 3,
        composite_aspect_id: 1,
        composite_to_planet: "Ceres",
        composite_orb: 8,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Mercury opposition Pallas Athene",
        composite_planet_id: 3,
        composite_aspect_id: 1,
        composite_to_planet: "Pallas Athene",
        composite_orb: 8,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Mercury opposition Juno",
        composite_planet_id: 3,
        composite_aspect_id: 1,
        composite_to_planet: "Juno",
        composite_orb: 8,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Mercury opposition Vesta",
        composite_planet_id: 3,
        composite_aspect_id: 1,
        composite_to_planet: "Vesta",
        composite_orb: 8,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Mercury opposition Ascendant",
        composite_planet_id: 3,
        composite_aspect_id: 1,
        composite_to_planet: "Ascendant",
        composite_orb: 8,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Mercury opposition Midheaven",
        composite_planet_id: 3,
        composite_aspect_id: 1,
        composite_to_planet: "Midheaven",
        composite_orb: 8,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Venus opposition Mars",
        composite_planet_id: 4,
        composite_aspect_id: 1,
        composite_to_planet: "Mars",
        composite_orb: 8,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Venus opposition Jupiter",
        composite_planet_id: 4,
        composite_aspect_id: 1,
        composite_to_planet: "Jupiter",
        composite_orb: 8,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Venus opposition Saturn",
        composite_planet_id: 4,
        composite_aspect_id: 1,
        composite_to_planet: "Saturn",
        composite_orb: 8,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Venus opposition Uranus",
        composite_planet_id: 4,
        composite_aspect_id: 1,
        composite_to_planet: "Uranus",
        composite_orb: 8,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Venus opposition Neptune",
        composite_planet_id: 4,
        composite_aspect_id: 1,
        composite_to_planet: "Neptune",
        composite_orb: 8,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Venus opposition Pluto",
        composite_planet_id: 4,
        composite_aspect_id: 1,
        composite_to_planet: "Pluto",
        composite_orb: 8,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Venus opposition Chiron",
        composite_planet_id: 4,
        composite_aspect_id: 1,
        composite_to_planet: "Chiron",
        composite_orb: 8,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Venus opposition North Node",
        composite_planet_id: 4,
        composite_aspect_id: 1,
        composite_to_planet: "North Node",
        composite_orb: 8,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Venus opposition South Node",
        composite_planet_id: 4,
        composite_aspect_id: 1,
        composite_to_planet: "South Node",
        composite_orb: 8,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Venus opposition Ceres",
        composite_planet_id: 4,
        composite_aspect_id: 1,
        composite_to_planet: "Ceres",
        composite_orb: 8,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Venus opposition Pallas Athene",
        composite_planet_id: 4,
        composite_aspect_id: 1,
        composite_to_planet: "Pallas Athene",
        composite_orb: 8,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Venus opposition Juno",
        composite_planet_id: 4,
        composite_aspect_id: 1,
        composite_to_planet: "Juno",
        composite_orb: 8,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Venus opposition Vesta",
        composite_planet_id: 4,
        composite_aspect_id: 1,
        composite_to_planet: "Vesta",
        composite_orb: 8,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Venus opposition Ascendant",
        composite_planet_id: 4,
        composite_aspect_id: 1,
        composite_to_planet: "Ascendant",
        composite_orb: 8,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Venus opposition Midheaven",
        composite_planet_id: 4,
        composite_aspect_id: 1,
        composite_to_planet: "Midheaven",
        composite_orb: 8,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Mars opposition Jupiter",
        composite_planet_id: 5,
        composite_aspect_id: 1,
        composite_to_planet: "Jupiter",
        composite_orb: 8,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Mars opposition Saturn",
        composite_planet_id: 5,
        composite_aspect_id: 1,
        composite_to_planet: "Saturn",
        composite_orb: 8,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Mars opposition Uranus",
        composite_planet_id: 5,
        composite_aspect_id: 1,
        composite_to_planet: "Uranus",
        composite_orb: 8,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Mars opposition Neptune",
        composite_planet_id: 5,
        composite_aspect_id: 1,
        composite_to_planet: "Neptune",
        composite_orb: 8,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Mars opposition Pluto",
        composite_planet_id: 5,
        composite_aspect_id: 1,
        composite_to_planet: "Pluto",
        composite_orb: 8,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Mars opposition Chiron",
        composite_planet_id: 5,
        composite_aspect_id: 1,
        composite_to_planet: "Chiron",
        composite_orb: 8,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Mars opposition North Node",
        composite_planet_id: 5,
        composite_aspect_id: 1,
        composite_to_planet: "North Node",
        composite_orb: 8,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Mars opposition South Node",
        composite_planet_id: 5,
        composite_aspect_id: 1,
        composite_to_planet: "South Node",
        composite_orb: 8,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Mars opposition Ceres",
        composite_planet_id: 5,
        composite_aspect_id: 1,
        composite_to_planet: "Ceres",
        composite_orb: 8,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Mars opposition Pallas Athene",
        composite_planet_id: 5,
        composite_aspect_id: 1,
        composite_to_planet: "Pallas Athene",
        composite_orb: 8,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Mars opposition Juno",
        composite_planet_id: 5,
        composite_aspect_id: 1,
        composite_to_planet: "Juno",
        composite_orb: 8,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Mars opposition Vesta",
        composite_planet_id: 5,
        composite_aspect_id: 1,
        composite_to_planet: "Vesta",
        composite_orb: 8,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Mars opposition Ascendant",
        composite_planet_id: 5,
        composite_aspect_id: 1,
        composite_to_planet: "Ascendant",
        composite_orb: 8,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Mars opposition Midheaven",
        composite_planet_id: 5,
        composite_aspect_id: 1,
        composite_to_planet: "Midheaven",
        composite_orb: 8,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Jupiter opposition Saturn",
        composite_planet_id: 6,
        composite_aspect_id: 1,
        composite_to_planet: "Saturn",
        composite_orb: 8,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Jupiter opposition Uranus",
        composite_planet_id: 6,
        composite_aspect_id: 1,
        composite_to_planet: "Uranus",
        composite_orb: 8,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Jupiter opposition Neptune",
        composite_planet_id: 6,
        composite_aspect_id: 1,
        composite_to_planet: "Neptune",
        composite_orb: 8,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Jupiter opposition Pluto",
        composite_planet_id: 6,
        composite_aspect_id: 1,
        composite_to_planet: "Pluto",
        composite_orb: 8,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Jupiter opposition Chiron",
        composite_planet_id: 6,
        composite_aspect_id: 1,
        composite_to_planet: "Chiron",
        composite_orb: 8,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Jupiter opposition North Node",
        composite_planet_id: 6,
        composite_aspect_id: 1,
        composite_to_planet: "North Node",
        composite_orb: 8,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Jupiter opposition South Node",
        composite_planet_id: 6,
        composite_aspect_id: 1,
        composite_to_planet: "South Node",
        composite_orb: 8,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Jupiter opposition Ceres",
        composite_planet_id: 6,
        composite_aspect_id: 1,
        composite_to_planet: "Ceres",
        composite_orb: 8,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Jupiter opposition Pallas Athene",
        composite_planet_id: 6,
        composite_aspect_id: 1,
        composite_to_planet: "Pallas Athene",
        composite_orb: 8,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Jupiter opposition Juno",
        composite_planet_id: 6,
        composite_aspect_id: 1,
        composite_to_planet: "Juno",
        composite_orb: 8,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Jupiter opposition Vesta",
        composite_planet_id: 6,
        composite_aspect_id: 1,
        composite_to_planet: "Vesta",
        composite_orb: 8,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Jupiter opposition Ascendant",
        composite_planet_id: 6,
        composite_aspect_id: 1,
        composite_to_planet: "Ascendant",
        composite_orb: 8,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Jupiter opposition Midheaven",
        composite_planet_id: 6,
        composite_aspect_id: 1,
        composite_to_planet: "Midheaven",
        composite_orb: 8,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Saturn opposition Uranus",
        composite_planet_id: 7,
        composite_aspect_id: 1,
        composite_to_planet: "Uranus",
        composite_orb: 8,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Saturn opposition Neptune",
        composite_planet_id: 7,
        composite_aspect_id: 1,
        composite_to_planet: "Neptune",
        composite_orb: 8,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Saturn opposition Pluto",
        composite_planet_id: 7,
        composite_aspect_id: 1,
        composite_to_planet: "Pluto",
        composite_orb: 8,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Saturn opposition Chiron",
        composite_planet_id: 7,
        composite_aspect_id: 1,
        composite_to_planet: "Chiron",
        composite_orb: 8,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Saturn opposition North Node",
        composite_planet_id: 7,
        composite_aspect_id: 1,
        composite_to_planet: "North Node",
        composite_orb: 8,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Saturn opposition South Node",
        composite_planet_id: 7,
        composite_aspect_id: 1,
        composite_to_planet: "South Node",
        composite_orb: 8,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Saturn opposition Ceres",
        composite_planet_id: 7,
        composite_aspect_id: 1,
        composite_to_planet: "Ceres",
        composite_orb: 8,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Saturn opposition Pallas Athene",
        composite_planet_id: 7,
        composite_aspect_id: 1,
        composite_to_planet: "Pallas Athene",
        composite_orb: 8,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Saturn opposition Juno",
        composite_planet_id: 7,
        composite_aspect_id: 1,
        composite_to_planet: "Juno",
        composite_orb: 8,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Saturn opposition Vesta",
        composite_planet_id: 7,
        composite_aspect_id: 5,
        composite_to_planet: "Vesta",
        composite_orb: 8,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Saturn opposition Ascendant",
        composite_planet_id: 7,
        composite_aspect_id: 1,
        composite_to_planet: "Ascendant",
        composite_orb: 8,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Saturn opposition Midheaven",
        composite_planet_id: 7,
        composite_aspect_id: 5,
        composite_to_planet: "Midheaven",
        composite_orb: 8,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Uranus opposition Neptune",
        composite_planet_id: 8,
        composite_aspect_id: 5,
        composite_to_planet: "Neptune",
        composite_orb: 8,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Uranus opposition Pluto",
        composite_planet_id: 8,
        composite_aspect_id: 5,
        composite_to_planet: "Pluto",
        composite_orb: 8,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Uranus opposition Chiron",
        composite_planet_id: 8,
        composite_aspect_id: 5,
        composite_to_planet: "Chiron",
        composite_orb: 8,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Uranus opposition North Node",
        composite_planet_id: 8,
        composite_aspect_id: 5,
        composite_to_planet: "North Node",
        composite_orb: 8,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Uranus opposition South Node",
        composite_planet_id: 8,
        composite_aspect_id: 5,
        composite_to_planet: "South Node",
        composite_orb: 8,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Uranus opposition Ceres",
        composite_planet_id: 8,
        composite_aspect_id: 5,
        composite_to_planet: "Ceres",
        composite_orb: 8,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Uranus opposition Pallas Athene",
        composite_planet_id: 8,
        composite_aspect_id: 5,
        composite_to_planet: "Pallas Athene",
        composite_orb: 8,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Uranus opposition Juno",
        composite_planet_id: 8,
        composite_aspect_id: 5,
        composite_to_planet: "Juno",
        composite_orb: 8,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Uranus opposition Vesta",
        composite_planet_id: 8,
        composite_aspect_id: 5,
        composite_to_planet: "Vesta",
        composite_orb: 8,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Uranus opposition Ascendant",
        composite_planet_id: 8,
        composite_aspect_id: 5,
        composite_to_planet: "Ascendant",
        composite_orb: 8,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Uranus opposition Midheaven",
        composite_planet_id: 8,
        composite_aspect_id: 5,
        composite_to_planet: "Midheaven",
        composite_orb: 8,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Neptune opposition Pluto",
        composite_planet_id: 9,
        composite_aspect_id: 5,
        composite_to_planet: "Pluto",
        composite_orb: 8,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Neptune opposition Chiron",
        composite_planet_id: 9,
        composite_aspect_id: 5,
        composite_to_planet: "Chiron",
        composite_orb: 8,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Neptune opposition North Node",
        composite_planet_id: 9,
        composite_aspect_id: 5,
        composite_to_planet: "North Node",
        composite_orb: 8,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Neptune opposition South Node",
        composite_planet_id: 9,
        composite_aspect_id: 5,
        composite_to_planet: "South Node",
        composite_orb: 8,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Neptune opposition Ceres",
        composite_planet_id: 9,
        composite_aspect_id: 5,
        composite_to_planet: "Ceres",
        composite_orb: 8,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Neptune opposition Pallas Athene",
        composite_planet_id: 9,
        composite_aspect_id: 5,
        composite_to_planet: "Pallas Athene",
        composite_orb: 8,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Neptune opposition Juno",
        composite_planet_id: 9,
        composite_aspect_id: 5,
        composite_to_planet: "Juno",
        composite_orb: 8,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Neptune opposition Vesta",
        composite_planet_id: 9,
        composite_aspect_id: 5,
        composite_to_planet: "Vesta",
        composite_orb: 8,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Neptune opposition Ascendant",
        composite_planet_id: 9,
        composite_aspect_id: 5,
        composite_to_planet: "Ascendant",
        composite_orb: 8,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Neptune opposition Midheaven",
        composite_planet_id: 9,
        composite_aspect_id: 5,
        composite_to_planet: "Midheaven",
        composite_orb: 8,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Pluto opposition Chiron",
        composite_planet_id: 10,
        composite_aspect_id: 5,
        composite_to_planet: "Chiron",
        composite_orb: 8,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Pluto opposition North Node",
        composite_planet_id: 10,
        composite_aspect_id: 5,
        composite_to_planet: "North Node",
        composite_orb: 8,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Pluto opposition South Node",
        composite_planet_id: 10,
        composite_aspect_id: 5,
        composite_to_planet: "South Node",
        composite_orb: 8,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Pluto opposition Ceres",
        composite_planet_id: 10,
        composite_aspect_id: 5,
        composite_to_planet: "Ceres",
        composite_orb: 8,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Pluto opposition Pallas Athene",
        composite_planet_id: 10,
        composite_aspect_id: 5,
        composite_to_planet: "Pallas Athene",
        composite_orb: 8,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Pluto opposition Juno",
        composite_planet_id: 10,
        composite_aspect_id: 5,
        composite_to_planet: "Juno",
        composite_orb: 8,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Pluto opposition Vesta",
        composite_planet_id: 10,
        composite_aspect_id: 5,
        composite_to_planet: "Vesta",
        composite_orb: 8,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Chiron opposition North Node",
        composite_planet_id: 11,
        composite_aspect_id: 5,
        composite_to_planet: "North Node",
        composite_orb: 8,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Chiron opposition South Node",
        composite_planet_id: 11,
        composite_aspect_id: 5,
        composite_to_planet: "South Node",
        composite_orb: 8,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Chiron opposition Ceres",
        composite_planet_id: 11,
        composite_aspect_id: 5,
        composite_to_planet: "Ceres",
        composite_orb: 8,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Chiron opposition Pallas Athene",
        composite_planet_id: 11,
        composite_aspect_id: 5,
        composite_to_planet: "Pallas Athene",
        composite_orb: 8,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Chiron opposition Juno",
        composite_planet_id: 11,
        composite_aspect_id: 5,
        composite_to_planet: "Juno",
        composite_orb: 8,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Chiron opposition Vesta",
        composite_planet_id: 11,
        composite_aspect_id: 5,
        composite_to_planet: "Vesta",
        composite_orb: 8,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Chiron opposition Ascendant",
        composite_planet_id: 11,
        composite_aspect_id: 5,
        composite_to_planet: "Ascendant",
        composite_orb: 8,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Chiron opposition Midheaven",
        composite_planet_id: 11,
        composite_aspect_id: 5,
        composite_to_planet: "Midheaven",
        composite_orb: 8,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "North Node opposition Ceres",
        composite_planet_id: 12,
        composite_aspect_id: 5,
        composite_to_planet: "Ceres",
        composite_orb: 8,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "North Node opposition Pallas Athene",
        composite_planet_id: 12,
        composite_aspect_id: 5,
        composite_to_planet: "Pallas Athene",
        composite_orb: 8,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "North Node opposition Juno",
        composite_planet_id: 12,
        composite_aspect_id: 5,
        composite_to_planet: "Juno",
        composite_orb: 8,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "North Node opposition Vesta",
        composite_planet_id: 12,
        composite_aspect_id: 5,
        composite_to_planet: "Vesta",
        composite_orb: 8,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "North Node opposition Ascendant",
        composite_planet_id: 12,
        composite_aspect_id: 5,
        composite_to_planet: "Ascendant",
        composite_orb: 8,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "North Node opposition Midheaven",
        composite_planet_id: 12,
        composite_aspect_id: 5,
        composite_to_planet: "Midheaven",
        composite_orb: 8,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "South Node opposition Pallas Athene",
        composite_planet_id: 13,
        composite_aspect_id: 5,
        composite_to_planet: "Pallas Athene",
        composite_orb: 8,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "South Node opposition Juno",
        composite_planet_id: 13,
        composite_aspect_id: 5,
        composite_to_planet: "Juno",
        composite_orb: 8,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "South Node opposition Vesta",
        composite_planet_id: 13,
        composite_aspect_id: 5,
        composite_to_planet: "Vesta",
        composite_orb: 8,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "South Node opposition Ascendant",
        composite_planet_id: 13,
        composite_aspect_id: 5,
        composite_to_planet: "Ascendant",
        composite_orb: 8,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "South Node opposition Midheaven",
        composite_planet_id: 13,
        composite_aspect_id: 5,
        composite_to_planet: "Midheaven",
        composite_orb: 8,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Ceres opposition Pallas Athene",
        composite_planet_id: 14,
        composite_aspect_id: 5,
        composite_to_planet: "Pallas Athene",
        composite_orb: 8,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Ceres opposition Juno",
        composite_planet_id: 14,
        composite_aspect_id: 5,
        composite_to_planet: "Juno",
        composite_orb: 8,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Ceres opposition Vesta",
        composite_planet_id: 14,
        composite_aspect_id: 5,
        composite_to_planet: "Vesta",
        composite_orb: 8,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Ceres opposition Ascendant",
        composite_planet_id: 14,
        composite_aspect_id: 5,
        composite_to_planet: "Ascendant",
        composite_orb: 8,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Ceres opposition Midheaven",
        composite_planet_id: 14,
        composite_aspect_id: 5,
        composite_to_planet: "Midheaven",
        composite_orb: 8,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Pallas Athene opposition Juno",
        composite_planet_id: 15,
        composite_aspect_id: 5,
        composite_to_planet: "Juno",
        composite_orb: 8,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Pallas Athene opposition Vesta",
        composite_planet_id: 15,
        composite_aspect_id: 5,
        composite_to_planet: "Vesta",
        composite_orb: 8,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Pallas Athene opposition Ascendant",
        composite_planet_id: 15,
        composite_aspect_id: 5,
        composite_to_planet: "Ascendant",
        composite_orb: 8,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Pallas Athene opposition Midheaven",
        composite_planet_id: 15,
        composite_aspect_id: 5,
        composite_to_planet: "Midheaven",
        composite_orb: 8,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Juno opposition Vesta",
        composite_planet_id: 16,
        composite_aspect_id: 5,
        composite_to_planet: "Vesta",
        composite_orb: 8,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Juno opposition Ascendant",
        composite_planet_id: 16,
        composite_aspect_id: 5,
        composite_to_planet: "Ascendant",
        composite_orb: 8,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        composite_aspect_title: "Juno opposition Midheaven",
        composite_planet_id: 16,
        composite_aspect_id: 5,
        composite_to_planet: "Midheaven",
        composite_orb: 8,
        composite_aspect_description: "TEXT",
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('AspectComposites', null, {});
  }
};

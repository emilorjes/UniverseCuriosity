const mongoose = require('mongoose');

/**
 * Schema for creating a planet.
 */
const planetSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  position: {
    type: Number,
    required: true,
  },
  moons: {
    type: Number,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  radius: {
    type: Number,
    required: true,
  },
  yearLenght: {
    type: Number,
    required: true,
  },
  dayLenght: {
    type: Number,
    required: true,
  },
  distanceFromSun: {
    type: Number,
    required: true,
  },
  lightFromSunTime: {
    type: Number,
    required: true,
  },
  lowTemperature: {
    type: Number,
    required: true,
  },
  highTemperature: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
});

const PlanetModel = mongoose.model('planets', planetSchema);
module.exports = PlanetModel;

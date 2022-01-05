const mongoose = require('mongoose');

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
  description: {
    type: String,
    required: true,
  },
});

const PlanetModel = mongoose.model('planets', planetSchema);
module.exports = PlanetModel;

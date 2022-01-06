const PlanetModel = require('../models/PlanetModel');

const getPlanets = async (req, res) => {
  try {
    const planets = await PlanetModel.find();
    res.status(200).json(planets);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

const createPlanet = async (req, res) => {
  const planet = req.body;
  const newPlanet = new PlanetModel(planet);
  try {
    await newPlanet.save();
    res.status(201).json(newPlanet);
  } catch (error) {
    res.satus(409).json({ message: error.message });
  }
};

module.exports = { getPlanets, createPlanet };

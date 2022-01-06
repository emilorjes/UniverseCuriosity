const PlanetModel = require('../models/PlanetModel');

/**
 * Callback function that gets all planets when called.
 * @param request req
 * @param response res
 */
const getPlanets = async (req, res) => {
  try {
    const planets = await PlanetModel.find();
    res.status(200).json(planets);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

/**
 * Callback function that creates a planet when used.
 * @param request req
 * @param response res
 */
const createPlanet = async (req, res) => {
  const planet = req.body;
  const newPlanet = new PlanetModel(planet);
  try {
    await newPlanet.save();
    res.status(201).json(newPlanet);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

module.exports = { getPlanets, createPlanet };

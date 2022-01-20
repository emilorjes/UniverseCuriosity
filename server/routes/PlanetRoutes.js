const express = require('express');
const { getPlanets, createPlanet } = require('../controllers/PlanetController');

/**
 * Routes for planets.
 */
const router = express.Router();
router.get('/getPlanets', getPlanets);
router.post('/createPlanet', createPlanet);

module.exports = router;

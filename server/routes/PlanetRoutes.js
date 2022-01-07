const express = require('express');
const { getPlanets, createPlanet } = require('../controllers/PlanetController');

/**
 * Routes for planets.
 */
const router = express.Router();
router.get('/get', getPlanets);
router.post('/create', createPlanet);

module.exports = router;

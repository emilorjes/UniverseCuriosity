const express = require('express');
const { getPlanets, createPlanet } = require('../controllers/PlanetController');

const router = express.Router();
router.get('/get', getPlanets);
router.post('/create', createPlanet);

module.exports = router;

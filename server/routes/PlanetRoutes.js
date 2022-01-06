const express = require('express');
const planetController = require('../controllers/PlanetController');

const router = express.Router();
router.get('/', planetController.getPlanets);
router.post('/', planetController.createPlanet);

module.exports = router;

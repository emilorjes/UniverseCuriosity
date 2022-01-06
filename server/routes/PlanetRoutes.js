const express = require('express');
const planetController = require('../controllers/PlanetController');

const router = express.Router();
router.get('/', planetController.getPlanets);

module.exports = router;

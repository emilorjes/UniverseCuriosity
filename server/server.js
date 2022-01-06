require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const planetRoutes = require('./routes/PlanetRoutes');

const app = express();
mongoose.connect(process.env.TEST_DB);
app.listen(process.env.PORT);
app.use('/planets', planetRoutes);
app.use('/createPlanet', planetRoutes);

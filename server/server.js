require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const planetRoutes = require('./routes/PlanetRoutes');

const app = express();
app.use(express.json({ limit: '30mb', extended: true }));
app.use(express.urlencoded({ limit: '30mb', extended: true }));
app.use(cors());

mongoose.connect(process.env.TEST_DB).then(() => app.listen(process.env.PORT));

app.use('/planets', planetRoutes);
app.use('/createPlanet', planetRoutes);

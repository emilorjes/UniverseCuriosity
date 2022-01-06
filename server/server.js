require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const planetRoutes = require('./routes/PlanetRoutes');

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect(process.env.TEST_DB).then(() => app.listen(process.env.PORT));

app.use('/api/planet', planetRoutes);

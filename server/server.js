require('dotenv').config('./.env');
const express = require('express'); // Framework for routes and handling requests.
const mongoose = require('mongoose'); // Makes connection to MongoDB easier and to create models.
const cors = require('cors'); // Request between server and client.
const planetRoutes = require('./routes/PlanetRoutes');

const app = express();
app.use(express.json());
app.use(cors());

mongoose
  .connect(process.env.TEST_DB, { useNewUrlParser: true })
  .then(() => app.listen(process.env.PORT));

app.use('/api/planet', planetRoutes);

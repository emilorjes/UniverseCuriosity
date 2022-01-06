require('dotenv').config();

const express = require('express');

const app = express();
const mongoose = require('mongoose');

mongoose.connect(process.env.TEST_DB);
app.listen(process.env.PORT);

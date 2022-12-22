const express = require('express');
const cors = require('cors');
const {STATIC_PATH} = require('./config/path.config')

const {errorHandler} = require('./errorHandler');

const router = require('./routes/index');

const app = express();

app.use(express.static(STATIC_PATH))

app.use(express.json());

app.use(cors());

app.use('/api', router);

app.use(errorHandler);
module.exports = app;
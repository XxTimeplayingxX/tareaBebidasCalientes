const express = require('express');
const bodyParser = require('body-parser');
const {v4:uuiv4} = require('uuid');

const bebidasRoutes = require('./routes/bebidas-routes');
const app = express();

app.use(bodyParser.json());

app.use('/api/bebidas', bebidasRoutes);

app.listen(5000);
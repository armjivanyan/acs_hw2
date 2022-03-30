require('dotenv').config();
const citiesController = require('./controllers/cities.controller');
const errorHandler = require('./middlewares/error-handler.middleware');
const PORT = process.env.PORT || 3000;
const express = require('express');
const app = express();

app.listen(PORT, () => {
  console.log(`Running on port ${PORT}`);
});

app.use('/cities', citiesController);

app.use(errorHandler);

const asyncHandler = require('express-async-handler');
const citiesService = require('../services/cities.service');
const express = require('express');
const route = express.Router();

route.get(
  '/:zipCode',
  asyncHandler(async (req, res) => {
    res.send(await citiesService.getCityByZipCode(req.params.zipCode));
  })
);

module.exports = route;

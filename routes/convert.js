'use strict';

const express = require('express');
const router = express.Router();
const request = require('request-promise');
const apiKey = require('../config/keys');

router.get('/', function(req, res, next) {
  let addr = encodeURIComponent(req.query.addr.split(' ').join('+'));
  let baseUrl = 'https://maps.googleapis.com/maps/api/geocode/json';
  let query = '?components=country:TW&address=' + addr + '&key=' + apiKey;

  let options = {
    uri: baseUrl + query,
    json: true,
  };

  request(options)
    .then(function (results) {
      res.json(results);
      return null;
    })
    .catch(next);
});

module.exports = router;

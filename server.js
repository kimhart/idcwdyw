'use strict';

const fs = require('fs');
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const request = require('request');
const yelp = require('yelp-fusion');
const favicon = require('serve-favicon');
const app = express();
const token = process.env.YELP_ACCESS_TOKEN;
const client = yelp.client(token);
const port = process.env.PORT || 3000;
const google = process.env.IDCWDYW_GOOGLE_MAPS_KEY;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/', express.static('public'));
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));

app.get('*', function (req, res) {
  res.sendFile(path.resolve(__dirname, 'public', 'index.html'))
})

app.post('/api/search', function(req ,res) {
  const location = req.body;
  client.search({
    location: `${location.address}, ${location.city}, ${location.state}`,
    categories: 'restaurants',
    radius: parseInt(location.radius * 1609.34),
    open_now: true,
    price: location.price
  }).then(response => {
    if (response.jsonBody.businesses.length === 0) {
      res.send("error");
    } else {
      const options = response.jsonBody.businesses;
      const option = options[Math.floor(Math.random()*options.length)];
      res.send(option);
    }
  }).catch(e => {
    console.log(e);
  });
})

app.listen(port, () => console.log("Listening on port", port));



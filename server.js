import fs from 'fs';
import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';
const app = express();
const yelp = require('yelp-fusion');
const token = process.env.YELP_ACCESS_TOKEN;
const client = yelp.client(token);

let port = process.env.port || 3000;

app.use(bodyParser.json({limit: '2mb'}));
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/', express.static('public'));

app.get('*', function (req, res){
  res.sendFile(path.resolve(__dirname, 'public', 'index.html'))
})

app.listen(port, () => console.log('Listening on port', port));
const path = require('path');
const fetch = require('node-fetch');

// Require Express to run server and routes
// const exp = require('constants');
const express = require('express');
// Start up an instance of app
const app = express();

// // Cors for cross origin allowance
const cors = require('cors');
app.use(cors());

// app.use(express.static(__dirname, +'/src'));
app.use(express.static('dist'));
app.use(express.json());

// // // Configure dotenv package

require('dotenv').config();
// // const apiKey = `${process.env.API_KEY}`;

// /* Middleware*/
// //Here we are configuring express to use body-parser as middle-ware.
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const { response } = require('express');
// const { json } = require('express/lib/response');
// app.use(cors());

// // GET route
app.get('/', (req, res) => {
  // res.sendFile('index.html');
  res.sendFile('/app//src/client/views/index.html');
  // res.sendFile(path.join(__dirname, 'server.js'));
  // res.sendFile(__dirname);
});

// for Heroku
app.listen(process.env.PORT || 5000);

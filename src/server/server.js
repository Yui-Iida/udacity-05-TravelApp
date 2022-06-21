// Require Express to run server and routes
const express = require('express');
// Start up an instance of app
const app = express();
// Initialize the main project folder
app.use(express.static('../src'));
app.use(express.json());
// Setup Server
const port = 3000;
app.listen(3000, console.log(`running on localhost: ${port} `));

const geonames = require('geonames');

////以下project3 のコード/////////////////////////////////////////////

// Setup empty JS object to act as endpoint for all routes
let projectData = {};

// // Configure dotenv package
// require('dotenv').config();
// const apiKey = `${process.env.API_KEY}`;

/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require('cors');
const { response } = require('express');
// const { json } = require('express/lib/response');
app.use(cors());

// GET route
app.get('/all', (req, res) => {
  res.send(projectData);
});

// POST route
app.post('/add', async (req, res) => {
  const body = await req.body;
  projectData = body;
  console.log(projectData);
  res.send(projectData);
});

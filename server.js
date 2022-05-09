// Setup empty JS object to act as endpoint for all routes
let projectData = {};

// Require Express to run server and routes
const express = require('express');

// Start up an instance of app
const app = express();

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

// Initialize the main project folder
app.use(express.static('website'));
app.use(express.json());

// Setup Server
const port = 3000;
app.listen(3000, console.log(`running on localhost: ${port} `));

// GET route
app.get('/', (req, res) => {
  res.send('home page');
});

// POST route
app.post('/weather', (req, res) => {
  console.log(req.body);
  // res.send(projectData);
  res.json(req.body);
});

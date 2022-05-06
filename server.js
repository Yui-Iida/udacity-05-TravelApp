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

// Setup Server
const port = 3000;

app.listen(3000, console.log(`running on localhost: ${port} `));
// const listening = () => {
//   console.log(`running on localhost: ${port} `);
// };
// const server = app.listen(port, listening);

// POST implementation
/////////////////////////////////

// app.get('/weather', async (req, res) => {
//   const baseUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=`;
//   const apiKey = 'cfd0cc';
//   const fetchResponse = await fetch(baseUrl + apiKey);
//     , {
//   method: 'GET',
//   credentials: 'same-origin',

//   headers: {
//     'x-rapidapi-host': 'community-open-weather-map.p.rapidapi.com',
//     'x-rapidapi-key': apiKey,
//   },
//   body: JSON.stringify(res),
// }

//   const json = await fetchResponse.json();
//   response.json(json);
// });

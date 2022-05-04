'use strict';
/* Global Variables */
let zipCode = document.querySelector('#zip');
let feelingToday = document.querySelector('.myInput');

const date = document.querySelector('#date');
const tempreture = document.querySelector('#temp');
const content = document.querySelector('#content');

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth() + '.' + d.getDate() + '.' + d.getFullYear();
// console.log(newDate);

// get
// app.get('/', function (req, res) {
//   res.status(200).send('Hello world!');
// });

// app.listen(3000);

// const generate = () => {

const generateBtn = document
  .querySelector('#generate')
  .addEventListener('click', function (e) {
    e.preventDefault();
    // console.log(zipCode.value);
    // console.log(feelingToday.value);

    date.innerHTML = newDate;
    content.innerHTML = feelingToday.value;

    // zipcode to latlon
    const getLatLon = async zipCode => {
      const googleMapUrl = await fetch(
        `http://maps.googleapis.com/maps/api/geocode/json?address=santa+cruz&components=postal_code:"+${zipCode}`
      );
      const latlon = await googleMapUrl.json();
      console.log(latlon);
    };

    getLatLon(zipCode);

    // getWeather
    const callApi = async (lat, lon) => {
      // try {
      const baseUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=`;
      const apiKey = 'cfd0cc';

      const res = await fetch(baseUrl + apiKey);
      const data = await res.json();
      console.log(data);
      tempreture.innerHTML =
        Math.floor((data.main.temp - 273.15) * 10) / 10 + '&#8451';
    };
    callApi(36.2048, 138.2529);
  });

//////////////////////////////
// let lat = 36.2048;
// let lon = 138.2529;

//     const res = await fetch(baseUrl + apiKey, {
//       method: 'GET',
//       credentials: 'same-origin',

//       headers: {
//         'x-rapidapi-host': 'community-open-weather-map.p.rapidapi.com',
//         'x-rapidapi-key': apiKey,
//       },
//       body: JSON.stringify(),
//     });

//     const result = await res.json();
//     console.log(result.weather);
//   } catch (error) {
//     console.log('error', error);
//   }
// };

// callApi(36.2048, 138.2529);

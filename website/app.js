'use strict';

/* Global Variables */
let zip = document.querySelector('#zip');
let feelingToday = document.querySelector('#feelings');

const date = document.querySelector('#date');
const weather = document.querySelector('#weather');
const tempreture = document.querySelector('#temp');
const content = document.querySelector('#content');

const apiKey = '&appid=cfd0cc9081ac7bf49eec60c019850b0f&units=metric';
const baseUrl = `https://api.openweathermap.org/data/2.5/weather?zip=`;
// const apiKey = process.env.API_KEY;
// require('dotenv').config();

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth() + 1 + '.' + d.getDate() + '.' + d.getFullYear();
console.log(newDate);

let journalHistory = [];

const generateBtn = document
  .querySelector('#generate')
  .addEventListener('click', function (e) {
    e.preventDefault();

    // const entryHolder = document.querySelector('#entryHolder');
    // const newEntry = document.createElement('div');
    // newEntry.appendChild(entryHolder);
    date.innerHTML = newDate;
    content.innerHTML = feelingToday.value;

    // getWeather
    const callApi = async zip => {
      try {
        const res = await fetch(baseUrl + zip.value + apiKey);
        const data = await res.json();
        console.log(data);
        // tempreture.innerHTML = Math.floor((data.main.temp - 273.15) * 10) / 10;
        tempreture.innerHTML = data.main.temp + '&#8451';
        weather.innerHTML = data.weather[0].description;

        let newJournal = {
          date: newDate,
          weather: `${weather.innerHTML}`,
          tempreture: `${tempreture.innerHTML}`,
          content: `${content.innerHTML}`,
        };

        journalHistory.push(newJournal);
        const options = {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(journalHistory),
        };

        const response = await fetch('/weather', options);
        const allDatas = await response.json();
        // console.log(allData);

        const entryHolder = document.querySelector('#entryHolder');
        for (allData of allDatas) {
          const newEntry = document.createElement('div');
          entryHolder.appendChild(newEntry);
          newEntry.innerHTML = allData;
        }
      } catch (error) {
        // alert('Something goes wrong!');
      }
    };
    callApi(zip);
    // zip examle => 94043
    zip.value = '';
    feelingToday.value = '';
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

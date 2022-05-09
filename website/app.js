'use strict';
// require('dotenv').config();

/* Global Variables */
let zip = document.querySelector('#zip');
let feelingToday = document.querySelector('#feelings');

const date = document.querySelector('#date');
const weather = document.querySelector('#weather');
const tempreture = document.querySelector('#temp');
const content = document.querySelector('#content');

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
        const baseUrl = `https://api.openweathermap.org/data/2.5/weather?zip=${zip.value}&appid=`;
        // const apiKey = process.env.API_KEY;
        const apikey = 'cfd0cc9081ac7bf49eec60c019850b0f';
        // console.log(apikey);
        // apiKey　注意！

        const res = await fetch(baseUrl + apikey);
        const data = await res.json();
        console.log(data);
        tempreture.innerHTML =
          Math.floor((data.main.temp - 273.15) * 10) / 10 + '&#8451';
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

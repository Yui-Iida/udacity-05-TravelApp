// 'use strict';
// let d = new Date();
// let newDate = d.getMonth() + 1 + '.' + d.getDate() + '.' + d.getFullYear();
// console.log(newDate);

// ////以下project3 のコード/////////////////////////////////////////////

// // const { response } = require('express');

// /* Global Variables */
// let zip = document.querySelector('#zip');
// let feelingToday = document.querySelector('#feelings');

// const date = document.querySelector('#date');
// const weather = document.querySelector('#weather');
// const tempreture = document.querySelector('#temp');
// const content = document.querySelector('#content');

// // const apiKey = '&appid=cfd0cc9081ac7bf49eec60c019850b0f&units=metric';
// const baseUrl = `https://api.openweathermap.org/data/2.5/weather?zip=`;
// // const apiKey = process.env.API_KEY;
// // require('dotenv').config();

// // Create a new date instance dynamically with JS
// // let d = new Date();
// // let newDate = d.getMonth() + 1 + '.' + d.getDate() + '.' + d.getFullYear();
// // console.log(newDate);

// let journalHistory = [];

// const generateBtn = document
//   .querySelector('#generate')
//   .addEventListener('click', function (e) {
//     e.preventDefault();

//     const url = baseUrl + zip.value + apiKey;
//     getWeather(url)
//       .then(data => newJournal(data))
//       .then(newdata => postData('/add', newdata))
//       .then(() => getData('/all'))
//       .then(data => updateUI(data));
//   });

// const getWeather = async url => {
//   try {
//     const res = await fetch(url);
//     const data = await res.json();

//     return data;
//   } catch (error) {
//     console.log('error:', error);
//   }
// };

// let newJournal = async data => {
//   try {
//     const newData = {
//       date: newDate,
//       weather: data.weather[0].description,
//       tempreture: data.main.temp,
//       content: feelingToday.value,
//     };
//     // console.log(newData);
//     return newData;
//   } catch (error) {
//     console.log('error:', error);
//   }
// };

// const postData = async (url = '', data = {}) => {
//   try {
//     const response = await fetch(url, {
//       method: 'POST',
//       credentials: 'same-origin',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify(data),
//     });
//     return response;
//   } catch (error) {
//     console.log('error:', error);
//   }
// };

// const getData = async url => {
//   const allData = await fetch(url);
//   try {
//     const res = await allData.json();
//     return res;
//   } catch (error) {
//     console.log('error:', error);
//   }
// };

// const updateUI = async data => {
//   const response = await data;
//   console.log(response);

//   date.innerHTML = response.date;
//   content.innerHTML = response.content;
//   tempreture.innerHTML = response.tempreture + '&#8451';
//   weather.innerHTML = response.weather;

//   zip.value = '';
//   feelingToday.value = '';
// };

////////////////////////////////////////////
////////////////////////////////////////////
////////////////////////////////////////////
// 1番上のタイピング表示
const typing = (element, sentence) => {
  [...sentence].forEach((character, index) => {
    setTimeout(() => {
      document.querySelector(element).textContent += character;
    }, 150 * ++index);
  });
};

typing('#typing', "Let's Discover Somewhere New.");

// export default typing();

// やること…　minサイズを指定する、nputのcityを最後の?の後に入れて表示させる
// const inputCity = document.querySelector('.background').value;
function randomImg(input) {
  const background = document.querySelector('.background');

  // ).style.background = `url(https://source.unsplash.com/random/2500x1800/?kyoto)`;
  background.style.background = `url(https://source.unsplash.com/random/1200x1200/?${input})`;
  background.style.backgroundRepeat = 'no-repeat';
  background.style.backgroundSize = '100vw';
}

randomImg('japan');

// ${inputCity}

const btn = document.querySelector('.btn-submit');
const destination = document.querySelector('.destination');
const date = document.querySelector('.date');

btn.addEventListener('click', () => {
  console.log(destination.value);
  console.log(date.value);

  const inputDestination = destination.value;
  // console.log(typeof inputDestination);
  randomImg(inputDestination);

  // 日付がリセットできない
  document.querySelector('.input').value = '';
});

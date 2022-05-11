'use strict';

// const { response } = require('express');

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

    const url = baseUrl + zip.value + apiKey;
    getWeather(url)
      .then(data => newJournal(data))
      .then(newdata => postData('/add', newdata))
      .then(() => getData('/all'))
      .then(data => updateUI(data));
  });

const getWeather = async url => {
  try {
    const res = await fetch(url);
    const data = await res.json();

    return data;
  } catch (error) {
    console.log('error:', error);
  }
};

let newJournal = async data => {
  try {
    const newData = {
      date: newDate,
      weather: data.weather[0].description,
      tempreture: data.main.temp,
      content: feelingToday.value,
    };
    // console.log(newData);
    return newData;
  } catch (error) {
    console.log('error:', error);
  }
};

const postData = async (url = '', data = {}) => {
  try {
    const response = await fetch(url, {
      method: 'POST',
      credentials: 'same-origin',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    return response;
  } catch (error) {
    console.log('error:', error);
  }
};

const getData = async url => {
  const allData = await fetch(url);
  try {
    const res = await allData.json();
    return res;
  } catch (error) {
    console.log('error:', error);
  }
};

const updateUI = async data => {
  const response = await data;
  console.log(response);

  date.innerHTML = response.date;
  content.innerHTML = response.content;
  tempreture.innerHTML = response.tempreture + '&#8451';
  weather.innerHTML = response.weather;

  zip.value = '';
  feelingToday.value = '';
};

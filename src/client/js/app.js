const displayWeather = require('./displayWeather');
const defaultDisplay = require('./defaultDisplay');
const randomImg = require('./randomImg');
const addComment = require('./addComment');
const calcDate = require('./calcDate');

defaultDisplay();
randomImg('japan');

const btn = document.querySelector('.btn-submit');
const destination = document.querySelector('.destination');
// const date = document.querySelector('.date');

const resultBox = document.querySelector('.result-box');
const dateToGo = document.querySelector('.date-to-go');
const newDestination = document.querySelector('.result-destination');

const btnAddComment = document.querySelector('.btn-add-comment');
const addCommentInput = document.querySelector('.add-comment');
const comment = document.querySelector('.show-comment');

// let d = new Date();

// To get the weather (by weather app)
const apiKey = '&appid=cfd0cc9081ac7bf49eec60c019850b0f&units=metric';
const baseUrl = `https://api.openweathermap.org/data/2.5/weather?q=`;

btn.addEventListener('click', () => {
  // const inputDate = new Date(date.value.toLocaleString());
  // const leavingDate = inputDate.getTime();
  // const today = d.getTime();
  // const leftDay = Math.floor((leavingDate - today) / (24 * 60 * 60 * 1000)) + 1;
  // calcDate();
  const leftDay = calcDate();

  if (leftDay >= 1) {
    const inputDestination = destination.value;
    const url = baseUrl + inputDestination + apiKey;

    displayWeather(url);

    randomImg(inputDestination);

    resultBox.style.display = 'block';
    dateToGo.innerHTML = `${leftDay} days to go to ${inputDestination}!`;
    newDestination.innerHTML = `${inputDestination}`;

    addCommentInput.style.display = 'block';
    btnAddComment.style.display = 'block';
    comment.style.display = 'none';

    document.querySelector('.input').value = '';
  } else alert('Please set correst date!');
});

btnAddComment.addEventListener('click', addComment);

const getWeather = require('./getWeather');
const defaultDisplay = require('./defaultDisplay');
const randomImg = require('./randomImg');
const addComment = require('./addComment');

// 1番上のタイピング表示
// const typing = (element, sentence) => {
//   [...sentence].forEach((character, index) => {
//     setTimeout(() => {
//       document.querySelector(element).textContent += character;
//     }, 150 * ++index);
//   });
// };

// typing('#typing', "Let's Discover Somewhere New.");

// // export default typing();

// // やること…　minサイズを指定する、nputのcityを最後の?の後に入れて表示させる
// // const inputCity = document.querySelector('.background').value;
// function randomImg(input) {
//   const background = document.querySelector('.background');

//   // ).style.background = `url(https://source.unsplash.com/random/2500x1800/?kyoto)`;
//   background.style.background = `url(https://source.unsplash.com/random/1200x1200/?${input})`;
//   background.style.backgroundRepeat = 'no-repeat';
//   background.style.backgroundSize = '100vw';
// }

// randomImg('japan');

defaultDisplay();
randomImg('japan');

const btn = document.querySelector('.btn-submit');
const destination = document.querySelector('.destination');
const date = document.querySelector('.date');
// const inputDestination = destination.value;
const resultBox = document.querySelector('.result-box');
const dateToGo = document.querySelector('.date-to-go');
const newDestination = document.querySelector('.result-destination');
// const newWeather = document.querySelector('.result-weather');
const btnAddComment = document.querySelector('.btn-add-comment');
const addCommentInput = document.querySelector('.add-comment');
const comment = document.querySelector('.show-comment');

let d = new Date();

// To get the weather (by weather app)
const apiKey = '&appid=cfd0cc9081ac7bf49eec60c019850b0f&units=metric';
const baseUrl = `https://api.openweathermap.org/data/2.5/weather?q=`;

btn.addEventListener('click', () => {
  console.log(destination.value);

  const inputDate = new Date(date.value.toLocaleString());
  const leavingDate = inputDate.getTime();
  const today = d.getTime();
  const leftDay = Math.floor((leavingDate - today) / (24 * 60 * 60 * 1000)) + 1;

  if (leftDay >= 1) {
    console.log(today);
    console.log(inputDate);
    console.log(leftDay);

    const inputDestination = destination.value;
    const url = baseUrl + inputDestination + apiKey;
    getWeather(url);
    randomImg(inputDestination);

    resultBox.style.display = 'block';
    dateToGo.innerHTML = `${leftDay} days to go to ${inputDestination}!`;
    newDestination.innerHTML = `${inputDestination}`;

    addCommentInput.style.display = 'block';
    btnAddComment.style.display = 'block';
    comment.style.display = 'none';

    // 日付がリセットできない
    document.querySelector('.input').value = '';
  } else alert('Please set correst date!');
});

// const getWeather = async url => {
//   try {
//     const res = await fetch(url);
//     const data = await res.json();
//     console.log(data);
//     newWeather.innerHTML = `${data.weather[0].description}, ${data.main.temp}&#8451`;
//     return data;
//   } catch (error) {
//     console.log('error:', error);
//   }
// };

btnAddComment.addEventListener('click', addComment);
//  () => {
// const addCommentInput = document.querySelector('.add-comment');
// const comment = document.querySelector('.show-comment');
// console.log(`Add Comment: ${addCommentInput}`);

// comment.innerHTML = `Comment: ${addCommentInput.value}`;
// addCommentInput.style.display = 'none';
// btnAddComment.style.display = 'none';
// });

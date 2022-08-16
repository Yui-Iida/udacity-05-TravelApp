const randomImg = input => {
  // やること…　minサイズを指定する、nputのcityを最後の?の後に入れて表示させる
  // const inputCity = document.querySelector('.background').value;

  const background = document.querySelector('.background');

  // ).style.background = `url(https://source.unsplash.com/random/2500x1800/?kyoto)`;
  background.style.background = `url(https://source.unsplash.com/random/1200x1200/?${input})`;
  background.style.backgroundRepeat = 'no-repeat';
  background.style.backgroundSize = '100vw';
};

module.exports = randomImg;

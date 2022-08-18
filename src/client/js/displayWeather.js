const displayWeather = async url => {
  // const newWeather = document.querySelector('.result-weather');

  try {
    const res = await fetch(url);
    const data = await res.json();
    console.log(data);
    // newWeather.innerHTML = `${data.weathser[0].description}, ${data.main.temp}&#8451`;
    return data;
  } catch (error) {
    console.log('error:', error);
  }
};

module.exports = displayWeather;

const { url } = require('inspector');
const { default: test } = require('node:test');
const getWeather = require('../src/client/js/getWeather');

test('getting weather', () => {
  expect(getWeather(url).toBe('OK'));
});

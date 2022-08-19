/**
 * @jest-environment jsdom
 */

const calcDate = require('../client/js/calcDate');

test('Calculate the date :', () => {
  const day1 = new Date('August 30, 2022 20:17:40 GMT+00:00');
  const day2 = new Date('August 20, 2022 20:17:40 GMT+00:00');

  expect(calcDate(day1, day2)).toBe(10);
  //   expect(calcDate(day2, day1)).not.toBe(10);
});

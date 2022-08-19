const calcDate = (day1, day2) => {
  // comment out this part for testing ///
  const date = document.querySelector('.date');
  let d = new Date();

  const inputDate = new Date(date.value.toLocaleString());
  const leavingDate = inputDate.getTime();
  const today = d.getTime();
  ///////////////////
  const leftDay = Math.floor((leavingDate - today) / (24 * 60 * 60 * 1000));

  return leftDay;
};

module.exports = calcDate;

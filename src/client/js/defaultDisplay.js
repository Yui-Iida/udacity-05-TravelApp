const defaultDisplay = () => {
  const typing = (element, sentence) => {
    [...sentence].forEach((character, index) => {
      setTimeout(() => {
        document.querySelector(element).textContent += character;
      }, 150 * ++index);
    });
  };

  typing('#typing', "Let's Discover Somewhere New.");
};

module.exports = defaultDisplay;

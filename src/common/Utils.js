const displayMessage = message => {
  console.log(message);
};

const generateRandomInt = maxInt => {
  return Math.floor(Math.random() * Math.floor(maxInt));
};

module.exports = {
  displayMessage,
  generateRandomInt
};

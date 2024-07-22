const convertToCelsius = function (f) {
  const cel = (f - 32) * (5 / 9);

  return Math.round(cel * 10) / 10;
};

const convertToFahrenheit = function (c) {
  const fah = c * (9 / 5) + 32;

  return Math.round(fah * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};

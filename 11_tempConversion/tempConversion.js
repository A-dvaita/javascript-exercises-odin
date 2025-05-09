const convertToCelsius = function(tempF) {
  let tempToC = ((5/9) * (tempF - 32));
  return (Math.round(tempToC * 10)/10);
};

const convertToFahrenheit = function(tempC) {
  let tempToF = (((9/5) * tempC) + 32);
  return (Math.round(tempToF * 10)/10);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};

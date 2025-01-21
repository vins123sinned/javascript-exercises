const convertToCelsius = function(temperature) {
  const exactCelsius = (temperature - 32) * (5/9);
  return (Math.round(exactCelsius * 10) / 10);
};

const convertToFahrenheit = function(temperature) {
  const exactFahrenheit = (temperature * (9/5) + 32);
  return (Math.round(exactFahrenheit * 10) / 10);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};

//Fahrenheit to celsius = x °F ≘ (x − 32) × 5/9⁠ °C
//Celsius to fahrenheit = x °C ≘ (x × ⁠9/5⁠ + 32) °F

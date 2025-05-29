const add = function(a, b) {
	let sum = Number(a) + Number(b);
  return sum;
};

const subtract = function(a, b) {
	let difference = Number(a) - Number(b);
  return difference;
};

const sum = function(array) {
  return array.reduce((addition, current) => addition + current, 0);
};

const multiply = function(array) {
  return array.reduce((product, current) => product * current)
};

const power = function (a, b) {
  let pow = 1;
  if (b === 0) {
    return (pow = 1);
  } else {
    for (let i = 0; i < b; i++) {
      pow *= a;
    }
  return pow;
  }
};

const factorial = function(a) {
	let fact = 1;
  if(a === 0){
    return fact;
  } else {
    for(let i = a; i>0; i--){
      fact *= i;
    }
    return fact;
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};

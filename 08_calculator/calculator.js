const add = function(a,b) {
  return a + b;
	
};

const subtract = function(a, b) {
  return a - b;
	
};

const sum = function(array) {
	return array.reduce((total, index) => total + index, 0);
};

const multiply = function(array) {
  return array.reduce((total, index) => total * index);
};

const power = function(a, b) {
	return Math.pow(a,b);
};

const factorial = function(num) {
  if (num === 0) {
    return 1;
  } else {
    let a = 1;
    for (let index = 1; index <= num; index++) {
       a *= index; 
    }
    return a;
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

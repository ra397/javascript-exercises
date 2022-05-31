const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(nums) {
  let sum = 0;
	for (let i of nums) {
    sum += i;
  }
  return sum;
};

const multiply = function(nums) {
  let result = 1;
  for (let i of nums) {
    result *= i;
  }
  return result;
};

const power = function(num1, num2) {
	return num1 ** num2;
};

const factorial = function(num) {
	if (num === 0) {
    return 1;
  }
  let result = 1;
  for (let i = num; i > 1; i--) {
    result *= i;
  }
  return result;
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

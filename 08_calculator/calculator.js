const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const sum = function (arr) {
  return arr.reduce((sum, curr) => sum + curr, 0);
};

const multiply = function (arr) {
  return arr.reduce((sum, curr) => sum * curr, 1);
};

const power = function (num, pow) {
  let ans = num;
  for (let i = 0; i < pow-1; i++) {
    ans *= num;
  }
  return ans;
};

const factorial = function (num) {
  if (num === 0 || num === 1) {
    return 1;
  }

  let ans = num

  for (let i = num-1; i > 1; i--) {
    ans *= --num;
  }

  return ans
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};

const fibonacci = function (num) {
  if (num < 0) {
    return "OOPS";
  }

  let fibArr = [0, 1];

  for (let i = 0; i < num-1; i++) {
    fibArr[i + 2] = fibArr[i] + fibArr[i + 1];
  }

  console.table(fibArr);
  return fibArr[num];
};

// Do not edit below this line
module.exports = fibonacci;

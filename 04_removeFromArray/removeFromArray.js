const removeFromArray = function(arr, ...ele) {
  return arr.filter(x => !ele.includes(x));
};

// Do not edit below this line
module.exports = removeFromArray;

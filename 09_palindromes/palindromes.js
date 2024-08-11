const palindromes = function (str) {
  str = str
    .toLowerCase()
    .replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "")
    .replace(/\s/g, "");

  arrStr = str.split("");
  const reverseStr = arrStr.reverse().join("");

  return str === reverseStr
};

palindromes('A car, a man, a maraca.')


// Do not edit below this line
module.exports = palindromes;

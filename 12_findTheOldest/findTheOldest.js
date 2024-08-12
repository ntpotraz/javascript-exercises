const findTheOldest = function(arr) {
  const oldest = arr.sort((current, last) => {
    let [aBirth, aDeath] = [current.yearOfBirth, current.yearOfDeath]
    let [bBirth, bDeath] = [last.yearOfBirth, last.yearOfDeath]

    if(typeof aDeath === "undefined") {
      aDeath = (new Date).getFullYear();
    }
    if(typeof bDeath === "undefined") {
      bDeath = (new Date).getFullYear();
    }

    let aAge = aDeath - aBirth;
    let bAge = bDeath - bBirth;

    return aAge > bAge ? -1 : 1;
  })

  return oldest[0];
};

// Do not edit below this line
module.exports = findTheOldest;

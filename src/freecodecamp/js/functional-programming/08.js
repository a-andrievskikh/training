// @ts-nocheck
Array.prototype.myMap = function (callback) {
  const newArray = [];
  // Only change code below this line
  this.forEach((item, i, arr) => newArray.push(callback(item, i, arr)));
  // Only change code above this line
  return newArray;
};

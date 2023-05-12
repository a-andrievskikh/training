// @ts-nocheck
Array.prototype.myFilter = function (callback) {
  const newArray = [];
  // Only change code below this line
  this.forEach((item, i, arr) => {
    if (callback(item, i, arr)) {
      newArray.push(item);
    }
  });
  // Only change code above this line
  return newArray;
};

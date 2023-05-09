reverse = function (array) {
  const resultArr = [];
  for (let i = array.length - 1; i >= 0; i--) {
    resultArr.push(array[i]);
  }
  return resultArr;
};

const squareList = arr => {
  // Only change code below this line
  return arr.reduce((arr, cur) => {
    if (cur > 0 && cur % 1 === 0) {
      arr.push(cur * cur);
    }
    return arr;
  }, []);
  // .filter(x => x > 0 && x % 1 === 0)
  // .map(x => x * x);
  // Only change code above this line
};

const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2]);
console.log(squaredIntegers);

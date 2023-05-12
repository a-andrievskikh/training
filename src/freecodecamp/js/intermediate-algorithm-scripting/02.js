function diffArray(arr1, arr2) {
  const newArr = arr1.concat(arr2);
  return newArr.filter((x, _, arr) => arr.indexOf(x) === arr.lastIndexOf(x));
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);

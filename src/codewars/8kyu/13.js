function howManySmaller(arr, n) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    arr[i] = +arr[i].toFixed(2);
    if (arr[i] < n) result.push(arr[i]);
  }
  return result.length;
}

function findDeletedNumber(arr, mixArr) {
  mixArr.sort((a, b) => a - b);
  for (let i = 0; i < arr.length; i++) {
    if (mixArr.indexOf(arr[i]) < 0) return arr[i];
  }
  return 0;
}

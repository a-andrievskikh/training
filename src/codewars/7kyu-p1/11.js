function repeats(arr) {
  let result = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr.indexOf(arr[i]) === arr.lastIndexOf(arr[i])) {
      result += arr[i];
    }
  }

  return result;
}

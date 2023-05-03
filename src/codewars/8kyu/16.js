function splitAndMerge(string, separator) {
  const arr = string.split(" ");
  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i].split("").join(separator);
  }
  return arr.join(" ");
}

function withoutLast(arr) {
  // Fix it
//   arr.pop(); // removes the last element
  return arr.slice(0, arr.length - 1)
}
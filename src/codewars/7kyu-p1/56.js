function consecutive(arr, a, b) {
  return arr.indexOf(a) + 1 === arr.indexOf(b) || arr.indexOf(b) + 1 === arr.indexOf(a)
}
function unique(arr) {
  return arr.filter((x, i) => arr.indexOf(x) === i)
}
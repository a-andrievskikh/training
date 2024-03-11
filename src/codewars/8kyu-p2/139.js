function eachCons(array, n) {
  return array.map((_, i, arr) => arr.slice(i, i + n)).filter(x => x.length === n)
}
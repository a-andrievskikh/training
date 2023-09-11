function sortDict(dict) {
  return Object.entries(dict)
    .map(x => x.map(y => Number.isNaN(+y) ? y : +y))
    .sort((a, b) => b[1] - a[1])
}
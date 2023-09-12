function gridMap(fn, a) {
  return a.map(x => x.map(y => fn(y)))
}
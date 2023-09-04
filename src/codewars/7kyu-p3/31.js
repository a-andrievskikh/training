function firstNonRepeated(s) {
  return [...s].find(x => s.indexOf(x) === s.lastIndexOf(x)) || null
}
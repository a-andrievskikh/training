function arrayLowerCase(arr) {
  return arr.map(x => typeof x === 'string' ? x.toLowerCase() : x)
}
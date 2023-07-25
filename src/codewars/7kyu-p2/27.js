function arr2bin(arr) {
  return arr.every(x => typeof x === 'number') ? arr.reduce((a, b) => a + b, 0).toString(2) : false
}
function multiplyAndFilter(arr, mult) {
  return arr.filter(x => typeof x === 'number').map(x => x * mult)
}
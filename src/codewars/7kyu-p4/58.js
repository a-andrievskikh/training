var FindFunction = function (func, arr) {
  const fn = func.find(x => typeof x === 'function')
  return arr.filter(fn)
}
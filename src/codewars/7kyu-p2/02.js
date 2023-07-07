function one(arr, fun) {
  return arr.filter(x => fun(x)).length === 1
}
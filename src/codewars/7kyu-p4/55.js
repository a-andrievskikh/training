function diffBig2(arr) {

  const max1 = Math.max(...arr)
  arr.splice(arr.indexOf(max1), 1)
  const max2 = Math.max(...arr)
  return max1 - max2
}
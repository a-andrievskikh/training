function solve(arr) {
  arr = arr.map(x => [Math.min(...x), Math.max(...x)].sort((a, b) => a - b))
  console.log(arr)
  a = arr
  return rec(0, a)[1]
}

function rec(i, a) {
  console.log(i, a, a.length)
  if (i >= a.length) return [1, 1] // [min,max]
  let [min, max] = rec(i + 1, a)
  let [min1, max1] = a[i]
  console.log(min, max, 'min max')
  console.log(min1, max1, 'min1 max1')
  x = [min * max1, min * min1, max * max1, max * min1]
  x = [Math.min(...x), Math.max(...x)].sort((a, b) => a - b)
  console.log(x, i)
  return x
}
function multi(arr) {
  console.log(arr)
  return arr.reduce((a, c) => a * c, 1)
}

function add(arr) {
  console.log(arr)
  return arr.reduce((a, c) => a + c, 0)
}

function reverse(str) {
  console.log(str)
  return [...str].reverse().join('')
}
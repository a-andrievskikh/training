function divisibleByLast(n) {
  return n.toString().split('').map((x, i, arr) => x % arr[i - 1] === 0)
}
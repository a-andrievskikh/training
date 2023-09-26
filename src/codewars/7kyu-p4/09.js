function sortItOut(arr) {

  const odd = arr.filter(n => {
    if (Math.floor(n) % 2 === 1) return n
  }).sort((a, b) => a - b)

  const even = arr.filter(n => {
    if (Math.floor(n) % 2 === 0) return n
  }).sort((a, b) => b - a)

  return [...odd, ...even]
}
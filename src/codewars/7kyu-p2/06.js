function lastDigit(n, d) {
  const strN = n.toString()

  if (d > strN.length) return strN.split('').map(x => +x)
  if (d <= 0) return []

  const reversedN = strN.split('').reverse().join('')
  const slicedN = reversedN.slice(0, d)

  return slicedN.split('').reverse().map(x => +x)

}
function reverseBits(n) {
  const bN = n.toString(2).split('').reverse().join('')

  return parseInt(bN, 2)
}
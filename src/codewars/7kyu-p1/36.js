const sumSquareEvenRootOdd = ns => {
  return +ns.reduce((acc, cur) => {
    return cur % 2 ? acc + Math.sqrt(cur) : acc + Math.pow(cur, 2)
  }, 0).toFixed(2)
}
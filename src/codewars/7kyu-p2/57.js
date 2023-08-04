function balancedNum(number) {

  const n = String(number)
  const nLen = n.length
  if (nLen === 1) return 'Balanced'

  const sumOdd = lenght => Math.floor(lenght / 2)
  const sumEven = lenght => lenght / 2

  return (nLen % 2 === 1 && [...n.slice(0, sumOdd(nLen))].reduce((a, b) => a + +b, 0) === [...n.slice(sumOdd(nLen) + 1)].reduce((a, b) => a + +b, 0))
  || (nLen % 2 === 0 && [...n.slice(0, sumEven(nLen) - 1)].reduce((a, b) => a + +b, 0) === [...n.slice(sumEven(nLen) + 1)].reduce((a, b) => a + +b, 0))
    ? 'Balanced' : 'Not Balanced'
}
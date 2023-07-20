function evenOrOdd(str) {
  const evenNums = str.split('').filter(x => +x % 2 === 0).reduce((a, b) => a + +b, 0)
  const oddNums = str.split('').filter(x => +x % 2 !== 0).reduce((a, b) => a + +b, 0)

  if (evenNums === oddNums) return 'Even and Odd are the same'

  return evenNums > oddNums ? 'Even is greater than Odd' : 'Odd is greater than Even'
}
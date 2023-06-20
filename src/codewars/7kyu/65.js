function checkThreeAndTwo(arr) {

  const fA = arr.filter(x => x === 'a').length
  const fB = arr.filter(x => x === 'b').length
  const fC = arr.filter(x => x === 'c').length

  return [fA, fB, fC].includes(2) && [fA, fB, fC].includes(3)

}
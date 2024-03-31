const prevMultOfThree = n => {

  const arrN = [...n.toString()]

  for (let i = arrN.length; i > 0; i--) {
    if (!(+arrN.join('') % 3)) return +arrN.join('')
    arrN.pop()
  }
  return null
}

const prevMultOfThree2 = n => {

  if (n === 0) return null
  if (n % 3 === 0) return n

  return prevMultOfThree2(+n.toString().slice(0, -1))
}
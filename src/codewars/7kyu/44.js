function disariumNumber(n) {

  const sum = n.toString().split('').reduce((acc, cur, idx) => acc + Math.pow(+cur, idx + 1), 0)
  const check = sum === n ? 'Disarium !!' : 'Not !!'

  return check
}
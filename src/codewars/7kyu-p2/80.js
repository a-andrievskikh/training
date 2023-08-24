function validateWord(s) {

  const sObj = {}
  const sArr = [...s].map(x => x.toLowerCase())

  for (let item of sArr) {
    if (!sObj[item]) {
      sObj[item] = 1
    } else {
      sObj[item] += 1
    }
  }

  const values = Object.values(sObj)

  return values.every(x => x === values.reduce((a, b) => a + b, 0) / values.length)
}
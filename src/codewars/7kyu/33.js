function sortArray(a1, a2) {
  const result = []

  for (let i = 0; i < a1.length; i++) {
    result.push(a2.find(item => item[0] === a1[i][0]))
  }

  return result
}
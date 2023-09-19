function arrAdder(arr) {
  const result = []

  for (let i = 0; i < arr[0].length; i++) {
    let w = ''
    for (let j = 0; j < arr.length; j++) {
      if (arr[j][i]) {
        w += arr[j][i]
      }
    }
    result.push(w)
  }

  return result.join(' ')
}
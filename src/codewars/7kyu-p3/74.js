function threeInOne(arr) {

  const result = []
  for (let i = 0; i < arr.length; i += 3) {

    const sliced = arr.slice(i, i + 3)
    let sum = 0
    for (let j = 0; j < sliced.length; j++) {
      sum += sliced[j]
    }
    result.push(sum)

  }
  return result
}
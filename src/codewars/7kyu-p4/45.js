function pairZeros(arr) {
  const result = []
  let pairs = 0

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) pairs += 1

    if (pairs % 2 === 0 && arr[i] === 0) {
      continue
    } else {
      result.push(arr[i])
    }
  }

  return result
}
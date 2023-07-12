function consecutive(arr) {
  const sortedArr = arr.sort((a, b) => a - b)
  let counter = 0

  for (let i = 0; i < sortedArr.length; i++) {
    if (sortedArr[i + 1] - sortedArr[i] > 1) {
      counter += (sortedArr[i + 1] - sortedArr[i] - 1)
    }
  }
  return counter
}
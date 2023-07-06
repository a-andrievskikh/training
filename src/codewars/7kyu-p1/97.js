function getMissingElement(arr) {

  const nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].reduce((a, b) => a + b, 0)
  const arrSum = arr.reduce((a, b) => a + b, 0)

  return nums - arrSum
}
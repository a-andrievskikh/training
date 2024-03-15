function newAvg(arr, newavg) {
  const sum = arr.reduce((a, c) => a + c, 0)
  const targetSum = newavg * (arr.length + 1)

  const newAvg = Math.ceil(targetSum - sum)

  if (newAvg <= 0) throw new Error("Expected New Average is too low")

  return newAvg
}
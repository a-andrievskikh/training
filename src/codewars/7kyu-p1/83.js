function solve(arr) {
  const result = []

  for (let i = 0; i < arr.length; i++) {

    if (arr[i] > Math.max(...arr.slice(i + 1))) {
      result.push(arr[i])
    }
  }

  return result
}
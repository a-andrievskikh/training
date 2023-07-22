const isMonotone = arr => {
  if (arr.length <= 1) return true

  for (let i = 0; i < arr.length; i++) {
    if (arr[i - 1] > arr[i]) return false
  }
  return true
}
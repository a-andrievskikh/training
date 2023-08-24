function save(sizes, hd) {
  let sum = 0
  let count = 0

  for (let i = 0; i < sizes.length; i++) {
    if (sum + sizes[i] <= hd) {
      sum += sizes[i]
      count += 1
    } else {
      break
    }
  }
  return count
}
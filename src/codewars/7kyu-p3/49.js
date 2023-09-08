function replicate(times, number, arr = []) {
  if (times < 1) return arr

  arr.push(number)
  return replicate(times - 1, number, arr)
}
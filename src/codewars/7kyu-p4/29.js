function pattern(n, i = 1, fullLength = '') {
  if (n <= 0) return ''
  if (i === n) return fullLength + i

  let j = i
  while (j <= n) {
    fullLength += j
    j++
  }

  return pattern(n, i + 1, fullLength + '\n')
}
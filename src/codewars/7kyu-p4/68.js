function pattern(n) {
  if (!n) return ''

  let output = ''
  for (let i = 1; i <= n; i++) {
    if (i === n) {
      output += `${String(i).repeat(i)}`
      break
    }
    output += `${String(i).repeat(i)}\n`
  }
  return output
}
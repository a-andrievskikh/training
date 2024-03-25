function transposeTwoStrings([a, b] = []) {
  let res = ``
  const longerStr = a.length > b.length ? a.length : b.length

  for (let i = 0; i < longerStr; i++) {
    res += `${a[i] || ' '} ${b[i] || ' '}`
    if (i < longerStr - 1) res += '\n'
  }
  return res
}

function transposeTwoStrings1([a, b] = []) {
  let res = ``
  const longest = Math.max(a.length, b.length)

  for (let i = 0; i < longest; i++) {
    res += `${a[i] || ' '} ${b[i] || ' '}`
    if (i < longest - 1) res += '\n'
  }
  return res
}

function transposeTwoStrings2([a, b] = []) {
  let res = []

  for (let i = 0; i < Math.max(a.length, b.length); i++) {
    res.push(`${a[i] || ' '} ${b[i] || ' '}`)
  }
  return res.join('\n')
}
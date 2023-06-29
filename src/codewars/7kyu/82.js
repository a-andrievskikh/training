function tailSwap(arr) {
  const splittedStr1 = arr[0].split(':')
  const splittedStr2 = arr[1].split(':')

  const [a, b] = splittedStr1
  const [c, d] = splittedStr2

  const finalStr1 = `${a}:${d}`
  const finalStr2 = `${c}:${b}`

  return [finalStr1, finalStr2]
}
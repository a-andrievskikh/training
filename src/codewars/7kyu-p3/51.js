function nextPal(val) {
  val += 1
  if (val === Number([...String(val)].reverse().join(''))) return val

  return nextPal(val)
}
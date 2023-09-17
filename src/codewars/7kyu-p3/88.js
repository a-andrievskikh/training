function sexyName(name) {
  name = name.toUpperCase()
  let sexyValue = 0
  for (let w in name) {
    if (SCORES.hasOwnProperty(name[w])) {
      sexyValue += SCORES[name[w]]
    }
  }
  switch (true) {
    case sexyValue <= 60:
      return 'NOT TOO SEXY'
    case sexyValue <= 300:
      return 'PRETTY SEXY'
    case sexyValue <= 599:
      return 'VERY SEXY'
    default:
      return 'THE ULTIMATE SEXIEST'
  }
}
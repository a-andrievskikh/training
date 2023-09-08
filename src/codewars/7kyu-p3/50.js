function isAllPossibilities(x) {

  if (x.length - 1 !== Math.max(...x)) {
    return false
  }

  for (let i = 0; i < x.length; i++) {
    if (!x.includes(i)) {
      return false
    }
  }

  return true
}
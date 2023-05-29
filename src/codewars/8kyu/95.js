function closeCompare(a, b, margin = 0) {

  return margin >= ( Math.abs(a - b) ) ? 0
    : a < b ? -1
      : 1

}

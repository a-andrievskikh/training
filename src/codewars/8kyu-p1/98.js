function parseF(s) {
  return ( isNaN(Number.parseFloat(s)) || isNaN(Number.parseInt(s)) ) ? null
    : Number.parseFloat(s)
}
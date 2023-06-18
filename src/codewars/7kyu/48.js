function specialNumber(n) {
  return /[6-9]/g.test(n.toString()) ? 'NOT!!' : 'Special!!'
}
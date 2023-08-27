function solve(s) {
  return 'abcdefghijklmnopqrstuvwxyz'.includes([...s].sort().join(''))
}
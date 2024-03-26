function solve(a) {
  return a.filter(x => x % 2 === 0).length - a.filter(x => x % 2 === 1).length
};
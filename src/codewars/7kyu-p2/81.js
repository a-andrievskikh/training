function solve(a, b) {
  return b.reduce((acc, cur) => {
    return [...acc, a.filter(x => x === cur).length]
  }, [])
}
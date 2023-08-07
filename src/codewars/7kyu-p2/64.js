function solve([...a], [...b]) {
  return a.filter(x => !b.includes(x)).join('') + b.filter(x => !a.includes(x)).join('')
}
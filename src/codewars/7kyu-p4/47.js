function evenAndOdd(num) {
  const ne = +[...num.toString()].filter(x => x % 2 === 0 && x !== 0).join('')
  const no = +[...num.toString()].filter(x => x % 2 === 1).join('')
  return [ne, no]
}
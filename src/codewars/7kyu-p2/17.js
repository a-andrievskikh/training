function initials(n) {

  const strToArr = n.split(' ')
  const strWithoutLast = strToArr.slice(0, strToArr.length - 1).map(w => w[0].toUpperCase()).join('.')
  const lastWord = `${strToArr[strToArr.length - 1][0].toUpperCase()}${strToArr[strToArr.length - 1].slice(1)}`

  return `${strWithoutLast}.${lastWord}`
}
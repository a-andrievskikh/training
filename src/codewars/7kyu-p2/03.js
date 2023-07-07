function gordon(a) {

  return a.split(' ')
    .map(x => x.toUpperCase() + '!!!!')
    .join(' ')
    .replace(/a/gi, '@')
    .replace(/[eoui]/gi, '*')
}
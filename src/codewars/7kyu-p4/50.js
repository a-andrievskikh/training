const solution = mtrx => {
  return mtrx
    .filter(x => x.includes('>') && x.includes('x'))
    .some(x => x.indexOf('>') < x.indexOf('x'))
}
function remove(str) {
  return str
    .split(' ')
    .map(x => x.replace(/\!+$/, ''))
    .join(' ')
}
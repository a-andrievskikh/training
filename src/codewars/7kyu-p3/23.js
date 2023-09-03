function testit(s) {
  return s.split(' ').map(x => x.slice(0, x.length - 1) + x.slice(x.length - 1).toUpperCase()).join(' ')
}
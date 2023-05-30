function evil(n) {
  return ( n.toString(2).replace(/0/g, '').length ) % 2 === 1 ? 'It\'s Odious!'
    : 'It\'s Evil!'
}
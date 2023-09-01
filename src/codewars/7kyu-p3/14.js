function countArara(n) {
  return !(n % 2) ? new Array(n / 2).fill('adak').join(' ') : new Array(Math.floor(n / 2)).fill('adak ').join('') + 'anane'
}
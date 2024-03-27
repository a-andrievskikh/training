const alph = {
  1: 'A',
  2: 'B',
  3: 'C',
  4: 'D',
  5: 'E',
  6: 'F',
  7: 'G',
  8: 'H',
  9: 'I',
  10: 'J',
  11: 'K',
  12: 'L',
  13: 'M',
  14: 'N',
  15: 'O',
  16: 'P',
  17: 'Q',
  18: 'R',
  19: 'S',
  20: 'T',
  21: 'U',
  22: 'V',
  23: 'W',
  24: 'X',
  25: 'Y',
  26: 'Z'
};

function bingo(a) {
  const targetWord = 'BGINO'
  let word = ''

  for (let i = 0; i < a.length; i++) {
    if (targetWord.includes(alph[a[i]])) word += alph[a[i]]
  }

  return targetWord === [...new Set([...word])].sort().join('') ? 'WIN' : 'LOSE'
}

function bingo1(a) {
  return [2, 7, 9, 14, 15].every(x => a.includes(x)) ? 'WIN' : 'LOSE'
}

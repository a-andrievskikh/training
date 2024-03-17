function spoonerize(words) {
  return words.split(' ')[1][0] + words.split(' ')[0].slice(1) + ' ' + words.split(' ')[0][0] + words.split(' ')[1].slice(1)
}

function spoonerize1(words) {
  const word = words.split(' ')
  return [word[1][0] + word[0].slice(1), word[0][0] + word[1].slice(1)].join(' ')
}
function numberJoy(n) {

  const start = [...String(n)].reduce((a, c) => a + +c, 0)
  const revStart = +([...String(start)].reverse().join(''))
  return n === start * revStart
}
const explode = x => {

  const [a, b] = x

  return x.every(x => typeof x === 'number')
    ? new Array(a + b).fill(x)
    : x.every(x => typeof x !== 'number')
      ? 'Void!'
      : new Array(typeof a === 'number' ? a : b).fill(x)
}
function hydrate(s) {
  const sAsNumber = (s.match(/\d/g) || []).reduce((a, b) => a + +b, 0)

  return `${sAsNumber.toString()} ${sAsNumber > 1 ? 'glasses' : 'glass'} of water`
}
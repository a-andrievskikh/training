function catMouse(x) {
  return (x.match(/\./g) || []).length > 3 ? 'Escaped!' : 'Caught!'
}
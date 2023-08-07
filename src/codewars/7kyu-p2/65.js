var splitInParts = function ([...s], partLength) {

  return s
    .map((x, i) => {
      if ((i + 1) % partLength === 0) {
        return x + ' '
      } else {
        return x
      }
    })
    .join('')
    .trim()
}
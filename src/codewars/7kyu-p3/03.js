function initializeNames(name) {
  name = name.split(' ')
  const fW = name[0]
  const sW = name[name.length - 1]
  const restW = name.slice(1, -1)

  return name.length > 2 ? `${fW} ${restW.map(x => x[0] + '.').join(' ')} ${sW}` : name.join(' ')
}
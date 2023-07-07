function well(x) {
  console.log(x)
  const xLength = x.flat().filter(x => {if (typeof x === 'string') return x.toLowerCase() === 'good'}).length

  return xLength === 1 || xLength === 2 ? 'Publish!'
    : xLength > 2 ? 'I smell a series!'
      : 'Fail!'

}
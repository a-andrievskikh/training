function separateTypes(input) {
  return input.reduce((acc, cur) => {
    !acc.hasOwnProperty(typeof cur)
      ? acc[typeof cur] = [cur]
      : acc[typeof cur] = [...acc[typeof cur], cur]
    return acc
  }, {})
}
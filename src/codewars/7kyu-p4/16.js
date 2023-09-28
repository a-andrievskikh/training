function onlyOne(...args) {
  return args.filter(x => x === true).length === 1
}
function uniteUnique(...args) {
  return [...new Set(args.reduce((a, c) => a.concat([...new Set(c)]), []))]
}
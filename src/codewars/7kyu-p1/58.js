function bandNameGenerator(str) {
  // Happy coding

  if (str[0] !== str[str.length - 1]) return `The ${str[0].toUpperCase()}${str.slice(1)}`
  return `${str[0].toUpperCase()}${str.slice(1)}${str.slice(1)}`

}
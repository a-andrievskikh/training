function theVar(vars) {
  return vars.split('+').map(x => x.charCodeAt() - 96).reduce((a, b) => a + b, 0)
}

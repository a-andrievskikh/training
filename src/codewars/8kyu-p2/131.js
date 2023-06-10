Array.prototype.filter = function (func) {
  //nothing here, you will feel pretty awesome to write down by yourself
  //have fun :)

  const filtered = []
  for (let i = 0; i < this.length; i++) {
    if (func(this[i])) filtered.push(this[i])
  }
  return filtered
}

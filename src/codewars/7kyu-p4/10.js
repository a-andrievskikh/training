Array.prototype.reverse = function () {
  for (let i = 0, j = this.length - 1; i < Math.round(this.length / 2); i++, j--) {
    let temp = this[i]
    this[i] = this[j]
    this[j] = temp
  }
  return this
}
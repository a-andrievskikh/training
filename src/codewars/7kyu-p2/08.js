String.prototype.isLetter = function () {

  if (this.length < 2) {
    return /[a-z]/i.test(this)
  }
  return false

}
String.prototype.vowel = function () {
  return this.length === 1 ? /[aeiou]/gi.test(this) : false
}
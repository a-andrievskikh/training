function calculate(str) {
  return eval(str.replace(/plus|minus/g, x => x === 'plus' ? '+' : '-')).toString()
}
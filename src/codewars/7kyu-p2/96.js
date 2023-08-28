function mean(lst) {
  return [
    lst.filter(x => /\d/g.test(x)).reduce((a, c) => a + +c, 0) / lst.filter(x => /\d/g.test(x)).length,
    lst.filter(x => /[a-zA-Z]/g.test(x)).join(''),
  ]
}
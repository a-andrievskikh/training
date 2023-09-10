function duplicateSandwich(a) {
  for (let item of a) {
    if (a.indexOf(item) !== a.lastIndexOf(item)) {
      return a.slice(a.indexOf(item) + 1, a.lastIndexOf(item))
    }
  }
}
function calcType(a, b, res) {
  switch (res) {
    case a + b:
      return 'addition'
    case a * b:
      return 'multiplication'
    case a - b:
      return 'subtraction'
    case a / b:
      return 'division'
  }
}
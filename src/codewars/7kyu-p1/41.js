function calculate(num1, operation, num2) {

//   if (operation === '+') return num1 + num2
//   if (operation === '-') return num1 - num2
//   if (operation === '*') return num1 * num2
//   if (operation === '/') return !num2 ? null : num1 / num2
//   return null

  switch (operation) {
    case '+':
      return num1 + num2
    case '-':
      return num1 - num2
    case '*':
      return num1 * num2
    case '/':
      return !num2 ? null : num1 / num2
    default:
      return null
  }
}
function stickyCalc(operation, val1, val2) {
  switch (operation) {
    case '+':
      return Math.round(+(`${Math.round(val1)}` + `${Math.round(val2)}`) + val2)
    case '-':
      return Math.round(+(`${Math.round(val1)}` + `${Math.round(val2)}`) - val2)
    case '*':
      return Math.round(+(`${Math.round(val1)}` + `${Math.round(val2)}`) * val2)
    case '/':
      return Math.round(+(`${Math.round(val1)}` + `${Math.round(val2)}`) / val2)
  }
}
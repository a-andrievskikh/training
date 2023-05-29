function calculator(a, b, sign) {
  if (typeof a === "number" && typeof b === "number") {
    switch (sign) {
      case "+":
        return a + b;
        break;
      case "-":
        return a - b;
        break;
      case "*":
        return a * b;
        break;
      case "/":
        return a / b;
        break;
    }
  }

  return `unknown value`;
}

var calculate = function calculate(a, o, b) {

  switch (o) {
    case '+':
      return a + b
    case '-':
      return a - b
    case '*':
      return a * b
    case '/':
      return b !== 0 ? a / b : null
    default:
      return null
  }
}
//  var result = 0;

//  if(o === "+") {
//    return a + b
//    } else if(o === "-") {
//      return a - b;
//    }

//  if(o === "/" && b === 0) {
//    return a / b;

//  if(o === "*")
//    return a * b;
//  } else {
//    return result = null
//  }


//  return result;
function jumpingNumber(n) {
  let nStr = n.toString();

  for (let i = 0; i < nStr.length - 1 && nStr.length > 1; i++) {
    let num1 = nStr[i];
    let num2 = nStr[i + 1];

    if (Math.abs(num1 - num2) !== 1) {
      return 'Not!!';
    }
  }

  return 'Jumping!!';
}

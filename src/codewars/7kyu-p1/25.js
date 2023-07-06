function sumOfN(n) {
  const result = [];
  let count = 0;
  if (n >= 0) {
    for (let i = 0; i < n + 1; i++) {
      count += i;
      result.push(count);
    }
  }
  if (n < 0) {
    for (let i = 0; i > n - 1; i--) {
      count += i;
      result.push(count);
    }
  }

  return result;
}

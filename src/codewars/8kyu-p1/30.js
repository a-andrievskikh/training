function sumMul(n, m) {
  if (n <= 0 || m <= 0) return "INVALID";
  if (n > m) return 0;
  let sum = n;
  for (let i = n + 1; i < m; i++) {
    if (i % n === 0) sum += i;
  }
  return sum;
}

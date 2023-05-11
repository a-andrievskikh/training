function multiples(m, n) {
  const result = [];

  for (let i = 1; i <= m; i++) {
    result.push(n * i);
  }
  return result;
}

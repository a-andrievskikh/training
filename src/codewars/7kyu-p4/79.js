function pattern(n) {
  var output = "1";
  for (let i = 1; i < n; i++) {
    output += `\n1${'*'.repeat(i)}${i + 1}`
  }
  return output;
}
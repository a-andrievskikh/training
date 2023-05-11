function tidyNumber(n) {
  const num = n.toString().split('');
  for (let i = 0; i < num.length; i++) {
    if (num[i + 1] < num[i]) return false;
  }
  return true;
}

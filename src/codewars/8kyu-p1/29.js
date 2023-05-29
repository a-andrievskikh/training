function remove(s, n) {
  for (let i = 0; i < n; i++) {
    s = s.replace(/\!/, "");
  }
  return s;
}

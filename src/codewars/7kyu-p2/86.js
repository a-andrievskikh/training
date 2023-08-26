function broken(x) {
  return x.replace(/1/g, '-').replace(/0/g, '1').replace(/-/g, '0')
}
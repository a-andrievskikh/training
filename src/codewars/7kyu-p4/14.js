function makeLazy(func, ...rest) {
  return () => func(...rest)
}
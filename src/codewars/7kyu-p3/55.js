function diff(a, b) {
  return [
    ...[...new Set(a)].filter(x => !b.includes(x)),
    ...[...new Set(b)].filter(x => !a.includes(x)),
  ].sort()
}
function sc(apple) {
  return [apple.indexOf(apple.find(x => x.includes('B'))),
    apple.find(x => x.includes('B')).indexOf('B'),
  ]
}
function toInitials(name) {
  return name.split(' ').map(w => w[0] + '.').join(' ')
}
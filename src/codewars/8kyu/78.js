function billboard(name, price = 30) {
  return name.split('').reduce((acc, cur) => acc + price, 0)
}
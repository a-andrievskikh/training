function remove(str) {
  return str.replace(/!/g, '') + str.replace(/[^!]/g, '')
}
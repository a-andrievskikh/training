function covfefe(str) {
  const result = str.replace(/coverage/g, 'covfefe')
  return result === str ? result + ' covfefe' : result
}
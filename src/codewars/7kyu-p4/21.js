function wdm(talk) {
  return talk.replace(/(puke|hiccup)/g, '').replace(/\s+/g, ' ').trim()
}
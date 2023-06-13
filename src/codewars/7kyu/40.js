function explode(s) {

  let result = ``
  s.split('')

  for (let i = 0; i < s.length; i++) {
    result += s[i].repeat(+s[i])
  }

  return result
}
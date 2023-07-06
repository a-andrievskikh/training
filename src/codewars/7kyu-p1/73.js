function unusedDigits(...args) {

  const digits = '0123456789'

  const mappedArgs = args.map(x => x.toString()).join('')

  let unusedDigits = ''

  for (let i = 0; i < digits.length; i++) {
    if (!mappedArgs.includes(digits[i])) {
      unusedDigits += digits[i]
    }
  }

  return unusedDigits
}

function reverseIt(data) {

  if (typeof data === 'string') return data.split('').reverse().join('')
  if (typeof data === 'number') return +data.toString().split('').reverse().join('')
  return data
}

function multiply(number) {
  const numLen = `${Math.abs(number)}`.length

  return number * ( 5 ** numLen )
}
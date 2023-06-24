function dotCalculator(str) {

  const dotCountA = (str.match(/^\.+/g) || [])[0].length
  const dotCountB = (str.match(/\.+$/g) || [])[0].length

  if (str.includes('+')) return '.'.repeat(dotCountA + dotCountB)
  if (str.includes('-')) return '.'.repeat(dotCountA - dotCountB)
  if (str.includes('*')) return '.'.repeat(dotCountA * dotCountB)
  return '.'.repeat(dotCountA / dotCountB)
}
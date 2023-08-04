function solve(s) {
  const toUpperCase = (s.match(/[A-Z]/g) || []).length
  const toLowerCase = (s.match(/[a-z]/g) || []).length
  const nums = (s.match(/[\d]/g) || []).length
  const other = (s.match(/[^a-z\d]/gi) || []).length

  return [toUpperCase, toLowerCase, nums, other]
}
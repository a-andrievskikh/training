function solve(st, a, b) {
  const one = st.slice(0, a)
  const two = st.slice(a, b + 1).split('').reverse().join('')
  const three = st.slice(b + 1)
  return one + two + three
}
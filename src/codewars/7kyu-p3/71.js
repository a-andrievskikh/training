const remainder = (D, d) => {
  if (D < d) return D

  return remainder(D - d, d)
}
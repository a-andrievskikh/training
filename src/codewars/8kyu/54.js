function elevator(left, right, call) {
  return Math.abs(call - right) <= Math.abs(call - left) ? `right` : `left`
}
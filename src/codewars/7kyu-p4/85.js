function inverseSlice(items, a, b) {
  return [...items.slice(0, a), ...items.slice(b)]
}
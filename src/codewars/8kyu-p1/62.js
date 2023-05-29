function nextId(ids) {
  const newIds = new Set(ids)

  for (let i = 0; i <= ids.length; i++) {
    if (!newIds.has(i)) {
      return i
    }
  }
}
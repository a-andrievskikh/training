function counterEffect(hitCount) {
  hitCount = hitCount.split('')
  return hitCount.map(x => {
    const result = []
    for (let i = 0; i <= +x; i++) {
      result.push(i)
    }
    return result
  })
}
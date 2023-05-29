function getSize(width, height, depth) {
  const area = 2 * (width * depth + height * depth + width * height)
  const volume = width * height * depth

  return [area, volume]
}

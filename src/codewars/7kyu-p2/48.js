class Block {

  constructor([width, length, height]) {
    this.width = width
    this.length = length
    this.heigth = height
  }

  getWidth() {
    return this.width
  }

  getLength() {
    return this.length
  }

  getHeight() {
    return this.heigth
  }

  getVolume() {
    return this.width * this.length * this.heigth
  }

  getSurfaceArea() {
    return 2 * (this.width * this.length + this.length * this.heigth + this.width * this.heigth)
  }
}
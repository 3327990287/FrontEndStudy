class Rectangle {
  constructor(width, height) {
    this.width = width
    this.height = height
  }

  get area () {
    return this.calcArea()
  }

  static id = 130103200202020035

  static log() {
    console.log('log')
  }
  calcArea() {
    return this.width * this.height
  }
}

const rect = new Rectangle(1, 10)
console.log(rect.calcArea())
console.log(Rectangle.id)
Rectangle.log()

class Shape {
  constructor() {
    this.color = "";
  }

  setColor(color) {
    this.color = color;
  }
}

class Circle extends Shape {
  render() {
    return `<circle cx="150" cy="100" r="80" fill="${this.color}" />`;
  }
}

class Triangle extends Shape {
  render() {
    return `<polygon points="150,10 275,190 25,190" fill="${this.color}" />`;
  }
}

class Square extends Shape {
  render() {
    return `<rect x="75" y="50" width="150" height="150" fill="${this.color}" />`;
  }
}

module.exports = { Shape, Circle, Triangle, Square };
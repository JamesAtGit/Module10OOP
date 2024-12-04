
const { Circle, Triangle, Square } = require('./shapes');

test('Circle renders correctly', () => {
  const circle = new Circle();
  circle.setColor('blue');
  expect(circle.render()).toEqual('<circle cx="150" cy="100" r="80" fill="blue" />');
});

test('Triangle renders correctly', () => {
  const triangle = new Triangle();
  triangle.setColor('green');
  expect(triangle.render()).toEqual('<polygon points="150,10 275,190 25,190" fill="green" />');
});

test('Square renders correctly', () => {
  const square = new Square();
  square.setColor('red');
  expect(square.render()).toEqual('<rect x="75" y="50" width="150" height="150" fill="red" />');
});

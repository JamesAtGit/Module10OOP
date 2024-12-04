
const inquirer = require('inquirer');
const fs = require('fs');
const { Circle, Triangle, Square } = require('./lib/shapes');

inquirer.prompt([
  { name: 'text', message: 'Enter text (up to 3 characters):', validate: input => input.length <= 3 },
  { name: 'textColor', message: 'Enter text color (keyword or hex):' },
  { name: 'shape', type: 'list', message: 'Choose a shape:', choices: ['Circle', 'Triangle', 'Square'] },
  { name: 'shapeColor', message: 'Enter shape color (keyword or hex):' },
]).then(({ text, textColor, shape, shapeColor }) => {
  let selectedShape;
  if (shape === 'Circle') selectedShape = new Circle();
  if (shape === 'Triangle') selectedShape = new Triangle();
  if (shape === 'Square') selectedShape = new Square();

  selectedShape.setColor(shapeColor);

  const svg = `
    <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
      ${selectedShape.render()}
      <text x="150" y="125" font-size="20" text-anchor="middle" fill="${textColor}">
        ${text}
      </text>
    </svg>
  `;
  fs.writeFileSync('logo.svg', svg);
  console.log('Generated logo.svg');
});

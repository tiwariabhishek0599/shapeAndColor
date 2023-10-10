const circle = document.getElementById('circle');
const colorButton = document.getElementById('button1');
const shape = document.getElementById('shape');
const shapeButton = document.getElementById('button2');

let currentShape = 'myShape';

colorButton.addEventListener('click', function() {
  // Change the color of the circle when the "Change Color" button is clicked
  circle.style.backgroundColor = getRandomColor();
});

shapeButton.addEventListener('click', function() {
  // Toggle between different shape classes
  if (currentShape === 'myShape') {
    shape.className = 'angle';
    currentShape = 'angle';
  } else if (currentShape === 'angle') {
    shape.className = 'diamond';
    currentShape = 'diamond';
  } else if (currentShape === 'diamond') {
    shape.className = 'circle';
    currentShape = 'circle';
  } else if (currentShape === 'circle') {
    shape.className = 'rectangle';
    currentShape = 'rectangle';
  } else if (currentShape === 'rectangle') {
    shape.className = 'triangle';
    currentShape = 'triangle';
  } else if (currentShape === 'triangle') {
    shape.className = 'myShape';
    currentShape = 'myShape';
  }
});

// Function to generate a random color
function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
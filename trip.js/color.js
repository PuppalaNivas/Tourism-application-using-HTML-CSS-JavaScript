// Select elements
const flipButton = document.getElementById('flip-btn');
const colorNameDisplay = document.getElementById('color-name');

// Common color names with their hex equivalents
const colors = [
  { name: 'Red', hex: '#FF0000' },
  { name: 'Green', hex: '#008000' },
  { name: 'Blue', hex: '#0000FF' },
  { name: 'Yellow', hex: '#FFFF00' },
  { name: 'Purple', hex: '#800080' },
  { name: 'Orange', hex: '#FFA500' },
  { name: 'Pink', hex: '#FFC0CB' },
  { name: 'Brown', hex: '#A52A2A' },
  { name: 'Gray', hex: '#808080' },
  { name: 'Black', hex: '#000000' },
  { name: 'White', hex: '#FFFFFF' },
];

// Function to get a random color
function getRandomColor() {
  return colors[Math.floor(Math.random() * colors.length)];
}

// Event listener for button click
flipButton.addEventListener('click', () => {
  const randomColor = getRandomColor();
  document.body.style.backgroundColor = randomColor.hex;
  colorNameDisplay.textContent = randomColor.name;
});

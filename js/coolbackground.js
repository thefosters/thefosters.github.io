function generateRandomColor() {
  const color = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
  return color;
}

function setRandomBackgroundColor() {
  document.querySelector('.background').style.backgroundColor = generateRandomColor();
}

setInterval(setRandomBackgroundColor, 1000);

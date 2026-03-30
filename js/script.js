const headerLabel = document.querySelector('.header-form label');
const headerSlider = document.querySelector(".header-slider");
const headerButton = document.querySelector('.header-button');
const gridContainer = document.querySelector(".grid-wrapper");

gridContainer.addEventListener('mouseover', e => changeGridElementColor(e.target))
headerSlider.addEventListener('input', e => updateSliderLabel(e.target.value))
headerButton.addEventListener('click', () => resetGrid(headerSlider.value))

const updateSliderLabel = (value) => {
  headerLabel.textContent = `Grid size: ${value} x ${value}`;
}

const createGrid = (size) => {
  for (let i = 0; i < size * size; i++) {
    const gridElement = createGridElement();
    gridElement.style = `width: calc(100% / ${size}); `;
    gridContainer.appendChild(gridElement);
  }
}

const createGridElement = () => {
  const gridElement = document.createElement('div');
  gridElement.classList.add('grid-element');

  return gridElement;
}

const resetGrid = (size) => {
  cleanGrid();
  createGrid(size);
}

const cleanGrid = () => {
  gridContainer.innerHTML = '';
}

const changeGridElementColor = (element) => {
  if (element.style.backgroundColor == '') {
    element.style.backgroundColor = getRandomRGB();
  }
}

const getRandomNumber = (max) => {
  return Math.floor(Math.random() * max);
}

const getRandomRGB = () => {
  const r = getRandomNumber(255);
  const g = getRandomNumber(255);
  const b = getRandomNumber(255);

  return `rgb(${r}, ${g}, ${b})`;
}

createGrid(headerSlider.value);

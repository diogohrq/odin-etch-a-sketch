const gridContainer = document.querySelector(".grid-container");

const createGrid = (size) => {
  for (let i = 0; i < size * size; i++) {
    gridContainer.appendChild(createGridElement());
  }
}

const createGridElement = () => {
  const gridElement = document.createElement('div');
  gridElement.classList.add('grid-element');

  return gridElement;
}

createGrid(16);

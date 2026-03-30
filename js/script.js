const gridContainer = document.querySelector(".grid-container");
gridContainer.addEventListener('mouseover', (e) => changeGridElementColor(e.target))

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

const changeGridElementColor = (element) => {
  element.classList.add('hovered')
}

createGrid(16);

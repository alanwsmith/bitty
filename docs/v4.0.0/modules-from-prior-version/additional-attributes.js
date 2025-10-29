export default class {
  updateFromData(event, element) {
    const selectedColor = event.target.dataset.color;
    ["red", "green", "blue"].forEach((color) => {
      if (color === selectedColor) {
        element.classList.add(color);
      } else {
        element.classList.remove(color);
      }
    });
    element.innerHTML = `Selected: ${selectedColor}`;
  }
}

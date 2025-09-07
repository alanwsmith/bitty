export default class {
  #colors = [
    "blue",
    "green",
    "red",
  ];

  update(el, event) {
    const selectedColor = event.target.dataset.color;
    this.#colors.forEach((color) => {
      if (color === selectedColor) {
        el.classList.add(color);
      } else {
        el.classList.remove(color);
      }
    });
    el.innerHTML = `Selected: ${selectedColor}`;
  }
}

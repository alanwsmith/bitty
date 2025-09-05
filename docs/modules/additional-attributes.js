export default class {
  #colors = [
    "blue",
    "green",
    "red",
  ];

  update(el, event) {
    this.#colors.forEach((color) => {
      if (color === event.target.dataset.color) {
        el.classList.add(color);
      } else {
        el.classList.remove(color);
      }
    });
  }
}

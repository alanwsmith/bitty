// deno-fmt-ignore-file

export default class {

  #state = {
    "activeColor": null,
    "colors": [
      "blue",
      "green",
      "red",
    ],
  };

  setColor(event) {
    this.#state.activeColor = event.target.dataset.color;
  }

  setClass(el, _event) {
    this.#state.colors.forEach((color) => {
      if (color === this.#state.activeColor) {
        el.classList.add(color);
      } else {
        el.classList.remove(color);
      }
    });
  }

}

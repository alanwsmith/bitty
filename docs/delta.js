// deno-fmt-ignore-file

export class Widget {

  #data = {
    "activeColor": null,
    "colors": [
      "blue",
      "green",
      "red",
    ],
  };

  _setColor(data) {
    this.#data.activeColor = data.target.dataset.color;
  }

  $setClass(el, _) {
    this.#data.colors.forEach((color) => {
      if (color === this.#data.activeColor) {
        el.classList.add(color);
      } else {
        el.classList.remove(color);
      }
    });
  }

}

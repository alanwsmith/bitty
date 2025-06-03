export class Wrapper {
  #colors = [
    "slategray",
    "orangered",
    "darkorange",
    "royalblue",
    "brown",
    "sienna",
    "grey",
    "darkred",
    "lavender",
    "linen",
    "lightsteelblue",
  ];

  _randomBackgroundColor(event) {
    document.body.style.setProperty(
      "--example-9-background",
      this.randomColor(),
    );
  }

  _randomTextColor(event) {
    document.body.style.setProperty("--example-9-text", this.randomColor());
  }

  randomColor() {
    return this.#colors[Math.floor(Math.random() * this.#colors.length)];
  }
}

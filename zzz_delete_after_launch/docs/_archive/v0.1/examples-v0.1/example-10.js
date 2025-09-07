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
    this.bridge.style.setProperty(
      "--example-10-background",
      this.randomColor(),
    );
  }

  randomColor() {
    return this.#colors[Math.floor(Math.random() * this.#colors.length)];
  }
}

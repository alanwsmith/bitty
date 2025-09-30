export default class {
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

  randomizeBackground(_) {
    this.bridge.style.setProperty(
      "--isolated-element-background",
      this.randomColor(),
    );
  }

  randomColor() {
    return this.#colors[
      Math.floor(
        Math.random() * this.#colors.length
      )
    ];
  }
}
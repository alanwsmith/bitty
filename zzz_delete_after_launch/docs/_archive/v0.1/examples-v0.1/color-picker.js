export class Wrapper {
  #batches = {
    "batchSliders": [
      "$valueC",
      "$valueH",
      "$valueL",
    ],
  };

  #data = {
    "activeMode": "light",
    "modes": {
      "light": {
        "l": 70,
        "c": 0.05,
        "h": 190,
      },
      "dark": {
        "l": 20,
        "c": 0.1,
        "h": 40,
      },
    },
  };

  get batches() {
    return this.#batches;
  }

  _handleMode(event) {
    this.#data.activeMode = event.target.value;
    this.updateStyles();
  }

  _handleSlider(event) {
    const modeKey = this.#data.activeMode;
    const key = event.target.dataset.key;
    this.#data.modes[modeKey][key] = event.target.value;
    this.updateStyles();
  }

  $valueC() {
    return this.#data.modes[this.#data.activeMode].c;
  }

  $valueH() {
    return this.#data.modes[this.#data.activeMode].h;
  }

  $valueL() {
    return this.#data.modes[this.#data.activeMode].l;
  }

  backgroundColorVar() {
    const mode = this.#data.modes[this.#data.activeMode];
    return `oklch(${mode.l}% ${mode.c} ${mode.h})`;
  }

  textColorVar() {
    const modeKey = this.#data.activeMode === "light" ? "dark" : "light";
    let mode = this.#data.modes[modeKey];
    return `oklch(${mode.l}% ${mode.c} ${mode.h})`;
  }

  updateStyles() {
    this.bridge.style.setProperty(
      `--color-picker-background`,
      this.backgroundColorVar(),
    );
    this.bridge.style.setProperty(
      `--color-picker-text`,
      this.textColorVar(),
    );
  }
}

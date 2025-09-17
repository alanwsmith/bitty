export default class {
  #batches = {
    "sliders": [
      "cValue",
      "hValue",
      "lValue",
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

  handleMode(data) {
    this.#data.activeMode = data.target.value;
    this.updateStyles();
  }

  handleSlider(data) {
    const modeKey = this.#data.activeMode;
    const key = data.target.dataset.key;
    this.#data.modes[modeKey][key] = data.target.value;
    this.updateStyles();
  }

  initMode() {
    this.updateStyles();
  }

  cValue(_event, el) {
    el.value = this.#data.modes[this.#data.activeMode].c;
  }

  hValue(_event, el) {
    el.value = this.#data.modes[this.#data.activeMode].h;
  }

  lValue(_event, el) {
    el.value = this.#data.modes[this.#data.activeMode].l;
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

  template() {
    return `

    `;
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

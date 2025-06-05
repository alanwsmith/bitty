// deno-fmt-ignore-file

export class Widget {

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

  _handleMode(data) {
    this.#data.activeMode = data.target.value;
    this.updateStyles();
  }

  _handleSlider(data) {
    const modeKey = this.#data.activeMode;
    const key = data.target.dataset.key;
    this.#data.modes[modeKey][key] = data.target.value;
    this.updateStyles();
  }

  _initMode() {
    this.updateStyles();
  }

  $cValue(el, _) {
    el.value = this.#data.modes[this.#data.activeMode].c;
  }

  $hValue(el, _) {
    el.value = this.#data.modes[this.#data.activeMode].h;
  }

  $lValue(el, _) {
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
<div>
  <input
    type="radio"
    name="modeToggle"
    id="mode-light"
    data-c="handleMode"
    data-b="sliders"
    value="light"
    checked
  /><label for="mode-light">Light</label>
  <input
    type="radio"
    name="modeToggle"
    name="mode-selector"
    id="mode-dark"
    data-c="handleMode"
    data-b="sliders"
    value="dark"
  /><label for="mode-dark">Dark</label>
</div>
<div>
  <label for="slider-l">Lightness</label>
  <input
    type="range"
    min="0"
    max="100"
    step="0.01"
    id="slider-l"
    data-c="handleSlider"
    data-r="lValue"
    data-key="l"
  />
  <label for="slider-c">Chroma</label>
  <input
    type="range"
    min="0"
    max="0.3"
    step="0.00001"
    id="slider-c"
    data-c="handleSlider"
    data-r="cValue"
    data-key="c"
  />
  <label for="slider-h">Hue</label>
  <input
    type="range"
    min="0"
    max="360"
    step="0.01"
    id="slider-h"
    data-c="handleSlider"
    data-r="hValue"
    data-key="h"
  />
</div>
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

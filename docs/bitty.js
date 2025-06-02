const exampleData = {
  "activeMode": "light",
  "modes": {
    "dark": {
      "chroma": 0.1,
      "hue": 200,
      "lightness": 20,
    },
    "light": {
      "chroma": 0.1,
      "hue": 200,
      "lightness": 80,
    },
  },
};

class BittyJs extends HTMLElement {
  #data = {};
  #receivers = [];

  _handleSlider(target) {
    const value = parseFloat(target.value);
    const slider = target.dataset.key;
    this.#data.modes[this.#data.activeMode][slider] = value;
  }

  _handleModeSwitch(target) {
    this.#data.activeMode = target.value;
  }

  $htmlL() {
    return this.#data.modes[this.#data.activeMode].l;
  }

  constructor() {
    super();
  }

  connectedCallback() {
    this.loadReceivers();
    this.loadData();
    this.addEventListeners();
  }

  addEventListeners() {
    this.addEventListener("input", (event) => {
      this.handleUpdate(event);
    });
  }

  handleUpdate(event) {
    if (event.target === undefined) {
      return;
    }
    if (event.target.dataset === undefined) {
      return;
    }
    if (event.target.dataset.f === undefined) {
      return;
    }
    event.target.dataset.f.split("|").forEach((f) => {
      this[`_${f}`](event.target);
    });
    event.target.dataset.s.split("|").forEach((key) => {
      this.#receivers.forEach((r) => {
        if (r.key === key) {
          r.f();
        }
      });
    });
  }

  loadData() {
    this.#data = exampleData;
  }

  loadReceivers() {
    this.#receivers = [];
    const els = document.querySelectorAll(`[data-r]`);
    els.forEach((el) => {
      el.dataset.r.split("|").forEach((r) => {
        if (r.startsWith("html")) {
          this.#receivers.push({
            "key": r,
            "f": () => {
              // TODO: add try throw here
              el.innerHTML = this[`$${r}`]();
            },
          });
        }
      });
    });
  }
}

customElements.define("bitty-js", BittyJs);

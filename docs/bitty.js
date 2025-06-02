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

  #batches = {
    "batchLatest": ["htmlC", "htmlH", "htmlL"],
  };

  _handleSlider(target) {
    const value = parseFloat(target.value);
    const slider = target.dataset.key;
    this.#data.modes[this.#data.activeMode][slider] = value;
  }

  _handleModeSwitch(target) {
    this.#data.activeMode = target.value;
  }

  $htmlC() {
    return this.#data.modes[this.#data.activeMode].c;
  }

  $htmlH() {
    return this.#data.modes[this.#data.activeMode].h;
  }

  $htmlL() {
    return this.#data.modes[this.#data.activeMode].l;
  }

  $htmlMode() {
    return this.#data.activeMode;
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

  constructor() {
    super();
  }

  connectedCallback() {
    this.doPreflightCheck();
    this.loadReceivers();
    this.loadData();
    this.addEventListeners();
  }

  addEventListeners() {
    this.addEventListener("input", (event) => {
      this.handleUpdate(event);
    });
  }

  doPreflightCheck() {
    const checkList = new Set();
    ["r", "s"].forEach((key) => {
      document.querySelectorAll(`[data-${key}]`).forEach((el) => {
        el.dataset[key].split("|").forEach((d) => {
          checkList.add(`$${d}`);
        });
      });
    });
    document.querySelectorAll(`[data-f]`).forEach((el) => {
      el.dataset.f.split("|").forEach((d) => {
        checkList.add(`_${d}`);
      });
    });
    checkList.forEach((check) => {
      if (!check.startsWith("$batch")) {
        if (this[check] === undefined) {
          console.error(`Missing Function: ${check}`);
        }
      } else {
        if (this.#batches[check] === undefined) {
          console.error(`Missing Batch: ${check}`);
        }
      }
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
        if (r.startsWith("batch")) {
          this.#batches[r].forEach((key) => {
            this.addFunction(key, el);
          });
        } else {
          this.addFunction(r, el);
        }
      });
    });
  }

  addFunction(r, el) {
    if (r.startsWith("value")) {
      this.#receivers.push({
        "key": r,
        "f": () => {
          try {
            el.value = this[`$${r}`]();
          } catch (error) {
            console.error(error);
            console.error(`Tried: $${r}`);
          }
        },
      });
    } else {
      this.#receivers.push({
        "key": r,
        "f": () => {
          try {
            el.innerHTML = this[`$${r}`]();
          } catch (error) {
            console.error(error);
            console.error(`Tried: $${r}`);
          }
        },
      });
    }
  }
}

customElements.define("bitty-js", BittyJs);

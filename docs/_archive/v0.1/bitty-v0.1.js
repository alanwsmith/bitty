/////////////////////////////////////////////////////
// bitty.js  - Version 0.1.0
/////////////////////////////////////////////////////

class BittyJs extends HTMLElement {
  #listeners = ["click", "input"];
  #receivers = [];

  constructor() {
    super();
  }

  connectedCallback() {
    if (this.dataset.wrapper) {
      import(this.dataset.wrapper).then((mod) => {
        this.wrapper = new mod.Wrapper();
        this.wrapper.bridge = this;
        this.loadReceivers();
        // TODO: document that init happens before
        // listeners to avoid feedback when setting
        // values
        this.init();
        this.addEventListeners();
      });
    }
    // TODO: error messages if something
    // went wrong
  }

  addEventListeners() {
    this.#listeners.forEach((listener) => {
      this.addEventListener(listener, (event) => {
        this.handleChange(event);
      });
    });
  }

  addFunction(r, el) {
    if (r.startsWith("value")) {
      this.#receivers.push({
        "key": r,
        "f": (event) => {
          try {
            el.value = this.wrapper[`$${r}`](event);
          } catch (error) {
            console.error(error);
            console.error(`Tried: $${r}`);
          }
        },
      });
    } else {
      this.#receivers.push({
        "key": r,
        "f": (event) => {
          try {
            el.innerHTML = this.wrapper[`$${r}`](event);
          } catch (error) {
            console.error(error);
            console.error(`Tried: $${r}`);
          }
        },
      });
    }
  }

  handleChange(event) {
    if (event.target === undefined) {
      return;
    }
    if (event.target.dataset === undefined) {
      return;
    }
    if (event.target.dataset.f !== undefined) {
      event.target.dataset.f.split("|").forEach((f) => {
        try {
          this.wrapper[`_${f}`](event);
        } catch (error) {
          console.log(error);
          console.error(`Tried: _${f}`);
        }
      });
    }
    if (event.target.dataset.s !== undefined) {
      this.sendUpdates(event.target.dataset.s, event);
    }
  }

  init() {
    if (this.dataset.init !== undefined) {
      this.sendUpdates(this.dataset.init, null);
    }
    if (this.dataset.listeners !== undefined) {
      this.#listeners = this.dataset.listeners.split("|");
    }
  }

  sendUpdates(updates, event) {
    updates.split("|").forEach((key) => {
      if (key.startsWith("batch")) {
        this.wrapper.batches[key].forEach((bKey) => {
          this.#receivers.forEach((r) => {
            const strippedKey = bKey.replace(/^\$/, "");
            if (r.key === strippedKey) {
              r.f(event);
            }
          });
        });
      } else {
        this.#receivers.forEach((r) => {
          if (r.key === key) {
            r.f(event);
          }
        });
      }
    });
  }

  loadReceivers() {
    this.#receivers = [];
    const els = this.querySelectorAll(`[data-r]`);
    els.forEach((el) => {
      el.dataset.r.split("|").forEach((r) => {
        if (r.startsWith("batch")) {
          this.wrapper.batches[r].forEach((key) => {
            this.addFunction(key, el);
          });
        } else {
          this.addFunction(r, el);
        }
      });
    });
  }
}

customElements.define("bitty-js", BittyJs);

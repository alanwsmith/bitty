/////////////////////////////////////////////////////
// bitty.js  - Version 0.2.0
/////////////////////////////////////////////////////

class BittyJs extends HTMLElement {
  #listeners = ["click", "input"];
  #receivers = [];

  addEventListeners() {
    this.#listeners.forEach((listener) => {
      this.addEventListener(listener, (event) => {
        this.handleChange(event);
      });
    });
  }

  addReceiver(key, el) {
    this.#receivers.push({
      "key": key,
      "f": (data) => {
        try {
          this.wrapper[`$${key}`](el, data);
        } catch (error) {
          console.error(error);
          console.error(`Tried: $${key}`);
        }
      },
    });
  }

  constructor() {
    super();
  }

  connectedCallback() {
    if (this.dataset.wrapper) {
      import(this.dataset.wrapper).then((mod) => {
        this.wrapper = new mod.Wrapper();
        this.wrapper.bridge = this;
        this.loadReceivers();
        // this.init();
        this.addEventListeners();
      });
    }
  }

  handleChange(event) {
    if (event.target === undefined || event.target.dataset === undefined) {
      return;
    }

    // if (event.target.dataset.f !== undefined) {
    //   event.target.dataset.f.split("|").forEach((f) => {
    //     try {
    //       this.wrapper[`_${f}`](event);
    //     } catch (error) {
    //       console.log(error);
    //       console.error(`Tried: _${f}`);
    //     }
    //   });
    // }

    if (event.target.dataset.s !== undefined) {
      this.sendUpdates(event.target.dataset.s, event);
    }
  }

  loadReceivers() {
    this.#receivers = [];
    const els = this.querySelectorAll(`[data-r]`);
    els.forEach((el) => {
      el.dataset.r.split("|").forEach((key) => {
        // if (key.startsWith("batch")) {
        //   this.wrapper.batches[r].forEach((key) => {
        //     this.addReceiver(key, el);
        //   });
        // } else {
        this.addReceiver(key, el);
        // }
      });
    });
  }

  sendUpdates(updates, data) {
    updates.split("|").forEach((key) => {
      // if (key.startsWith("batch")) {
      //   this.wrapper.batches[key].forEach((bKey) => {
      //     this.#receivers.forEach((r) => {
      //       const strippedKey = bKey.replace(/^\$/, "");
      //       if (r.key === strippedKey) {
      //         r.f(data);
      //       }
      //     });
      //   });
      // } else {
      this.#receivers.forEach((r) => {
        if (r.key === key) {
          r.f(data);
        }
      });
      // }
    });
  }
}

customElements.define("bitty-js", BittyJs);

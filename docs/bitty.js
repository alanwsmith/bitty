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
          this.wires[`$${key}`](el, data);
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
    if (this.dataset.wires) {
      import(this.dataset.wires).then((mod) => {
        this.wires = new mod.Wires();
        this.loadReceivers();
        this.init();
        this.addEventListeners();
      });
    } else {
      console.error("Missing data-wires attribute");
    }
  }

  handleChange(event) {
    if (event.target === undefined || event.target.dataset === undefined) {
      return;
    }
    if (event.target.dataset.f !== undefined) {
      event.target.dataset.f.split("|").forEach((f) => {
        if (this.isIgnored(f) === false) {
          try {
            this.wires[`_${f}`](event);
          } catch (error) {
            console.log(error);
            console.error(`Tried: _${f}`);
          }
        }
      });
    }
    // TODO: Document that batches go first
    if (event.target.dataset.b !== undefined) {
      const batch = this.wires.batches[event.target.dataset.b].join("|");
      this.sendUpdates(batch, event);
    }
    if (event.target.dataset.s !== undefined) {
      this.sendUpdates(event.target.dataset.s, event);
    }
  }

  init() {
    this.wires.bridge = this;
    if (this.wires.init !== undefined) {
      this.wires.init();
    }
    if (this.dataset.init !== undefined) {
      this.sendUpdates(this.dataset.init, null);
    }
    if (this.dataset.batch !== undefined) {
      const batch = this.wires.batches[this.dataset.batch].join("|");
      this.sendUpdates(batch, null);
    }
    if (this.dataset.listeners !== undefined) {
      this.#listeners = this.dataset.listeners.split("|");
    }
  }

  isIgnored(name) {
    if (this.dataset.ignore === undefined) {
      return false;
    }
    return this.dataset.ignore.split("|").includes(name);
  }

  loadReceivers() {
    this.#receivers = [];
    // console.log("loading receivers");
    const els = this.querySelectorAll(`[data-r]`);
    els.forEach((el) => {
      el.dataset.r.split("|").forEach((key) => {
        // if (key.startsWith("batch")) {
        //   this.wires.batches[r].forEach((key) => {
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
      if (this.isIgnored(key) === false) {
        // if (key.startsWith("batch")) {
        //   this.wires.batches[key].forEach((bKey) => {
        //     this.#receivers.forEach((r) => {
        //       const strippedKey = bKey.replace(/^\$/, "");
        //       if (r.key === strippedKey) {
        //         r.f(data);
        //       }
        //     });
        //   });
        // } else {
        this.#receivers.forEach((receiver) => {
          if (receiver.key === key) {
            receiver.f(data);
          }
        });
      }

      // }
    });
  }
}

customElements.define("bitty-js", BittyJs);

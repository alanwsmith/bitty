/////////////////////////////////////////////////////
// bitty.js  - Version 0.2.1
/////////////////////////////////////////////////////

class BittyJs extends HTMLElement {
  #listeners = ["click", "input"];
  #receivers = [];

  addEventListeners() {
    this.#listeners.forEach((listener) => {
      this.addEventListener(listener, (event) => {
        this.requestUpdate.call(this, event);
        //this.handleChange(event);
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
        this.requestUpdate = this.handleChange.bind(this);
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
    if (event.target.dataset.c !== undefined) {
      this.runFunctions(event.target.dataset.c, event);
    }
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
    if (this.dataset.call !== undefined) {
      this.runFunctions(this.dataset.call, null);
    }
    if (this.dataset.send !== undefined) {
      this.sendUpdates(this.dataset.send, null);
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
    const els = this.querySelectorAll(`[data-r]`);
    els.forEach((el) => {
      el.dataset.r.split("|").forEach((key) => {
        this.addReceiver(key, el);
      });
    });
  }

  runFunctions(stringToSplit, event) {
    stringToSplit.split("|").forEach((f) => {
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

  sendUpdates(updates, data) {
    updates.split("|").forEach((key) => {
      if (this.isIgnored(key) === false) {
        this.#receivers.forEach((receiver) => {
          if (receiver.key === key) {
            receiver.f(data);
          }
        });
      }
    });
  }
}

customElements.define("bitty-js", BittyJs);

/* *************************************************
 *
 * MIT License
 * https://bitty-js.alanwsmith.com/
 *
 * Copyright (c) 2025 Alan W. Smith
 *
 * Permission is hereby granted, free of charge, to
 * any person obtaining a copy of this software and
 * associated documentation files (the "Software"),
 * to deal in the Software without restriction,
 * including without limitation the rights to use,
 * copy, modify, merge, publish, distribute,
 * sublicense, and/or sell copies of the Software,
 * and to permit persons to whom the Software is
 * furnished to do so, subject to the following
 * conditions:
 *
 * The above copyright notice and this permission
 * notice shall be included in all copies or
 * substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY
 * OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT
 * LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
 * IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS
 * BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
 * WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE,
 * ARISING FROM, OUT OF OR IN CONNECTION WITH THE
 * SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 * ****************************************************/

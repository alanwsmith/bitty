/////////////////////////////////////////////////////
// bitty.js  - Version 0.2.3
/////////////////////////////////////////////////////

function debug(payload, el = null) {
  if (window && window.location && window.location.search) {
    const params = new URLSearchParams(window.location.search);
    if (params.has("debug")) {
      if (el !== null) {
        console.log(el);
      }
      console.log(payload);
    }
  }
}

/////////////////////////////////////////////////////

class BittyJs extends HTMLElement {
  #hashString = "#######################################";
  #errors = [
    {
      "id": 0,
      "kind": "Not Classified",
      "description": "An unclassified error occurred.",
      "help": `Detailed help isn't available since this error is unclassified. 

Use the line numbers from the error console to locate the source of the error and work from there.

${this.#hashString}

NOTE TO THE DEVELOPER: 

Use an ID from the BittyJS #errors variable to classify this error. 

It's a bug if there's not an approprite classification. Please open an issue if you find an error without a clear mapping.`,
    },
  ];

  #listeners = ["click", "input"];
  #receivers = [];

  addEventListeners() {
    this.#listeners.forEach((listener) => {
      this.addEventListener(listener, (event) => {
        this.requestUpdate.call(this, event);
      });
    });
  }

  addIds() {
    debug("Adding IDs");
    if (this.dataset.uuid === undefined) {
      this.dataset.uuid = self.crypto.randomUUID();
    }
    const els = this.querySelectorAll(`[data-r], [data-s], [data-c]`);
    els.forEach((el) => {
      if (el.dataset.uuid === undefined) {
        el.dataset.uuid = self.crypto.randomUUID();
      }
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
    this.setId();
    this.setIds();
    this.error("this is the error message", 0, this);

    /*
    if (this.dataset.bridge) {
      import(this.dataset.bridge).then((mod) => {
        // this.wires = new mod.Wires();
        // this.requestUpdate = this.handleChange.bind(this);
        // Reminder: loadReceivers has to be in front of init
        // because inits can use data-send
        // this.loadReceivers();
        // this.init();
        // this.addIds();
        // this.addEventListeners();
      });
    } else {
      console.error("Missing data-wires attribute");
    }
    */
  }

  error(details, id = 0, el = null) {
    const err = this.#errors.find((err) => {
      return err.id === id;
    });
    if (el === null) {
      err.elementKind = "No element was passed to the error function.";
      err.elementId = "No element was passed to the error function.";
    } else if (
      el !== null && el.dataset !== undefined && el.dataset.uuid !== undefined
    ) {
      err.elementTagName = el.tagName;
      err.elementId = el.dataset.uuid;
    } else {
      err.elementTagName = el.tagName;
      err.elementId =
        "An element was passed to the error function but it does not have a 'data-uuid' attribute.";
    }
    if (el !== null) {
      err.dumpMessage =
        "Dumps of the bitty-js element and the element passed to the error function are below.";
    } else {
      err.dumpMessage = "A dump of the bitty-js element is below.";
    }

    const output = `${this.#hashString}

BITTY ERROR

${this.#hashString}

ERROR KIND:

${err.kind} [${id}]

${this.#hashString}

COMPONENT <bitty-js> UUID:

${this.dataset.uuid}

${this.#hashString}

ERROR ELEMENT TAG NAME:

${err.elementTagName}

${this.#hashString}

ERROR ELEMENT UUID:

${err.elementId}

${this.#hashString}

ERROR DESCRIPTION:

${err.description}

${this.#hashString}

ERROR DETAILS:

${details}

${this.#hashString}

FINDING THE ERROR:

Error consoles generally report lines numbers that an error occured on. The first number is the line where the 'console.error()' call that produced this message is. It's not usefule since it alwasy fires from the BittyJS class 'error()' method. 

Expand the error message in the console to see the extended error trace and associated line numbers. 

${this.#hashString}

HELP:

${err.help}

${this.#hashString}

ELEMENT OUTPUT:

${err.dumpMessage}`;

    console.error(output);
    console.error(this);
    if (el !== null) {
      console.error(el);
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
    if (this.wires.template !== undefined) {
      const skeleton = document.createElement("template");
      skeleton.innerHTML = this.wires.template();
      this.append(skeleton.content.cloneNode(true));
      this.loadReceivers();
    }
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
    debug("loading receivers");
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

  setId() {
    const uuid = self.crypto.randomUUID();
    debug(`Setting bitty-js ID to: ${uuid}`);
    this.dataset.uuid = uuid;
  }

  setIds() {
    const selector = ["r", "c", "s", "call", "send", "b", "batch"]
      .map((key) => {
        return `[data-${key}]`;
      })
      .join(",");
    const els = this.querySelectorAll(selector);
    els.forEach((el) => {
      if (el.dataset.uuid === undefined) {
        const uuid = self.crypto.randomUUID();
        debug(`Setting ID to: ${uuid}`, el);
        el.dataset.uuid = uuid;
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
 * The above copyright notice, this permission
 * notice, and this ID (2y1pBoEREr3eWA1ubCCOXdmRCdn)
 * shall be included in all copies or
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

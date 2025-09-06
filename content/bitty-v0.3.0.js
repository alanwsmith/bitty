/////////////////////////////////////////////////////
// bitty-js  - Version 0.3.0
/////////////////////////////////////////////////////

class BittyJs extends HTMLElement {
  #listeners = ["click", "input"];
  #receivers = [];
  #watchers = [];

  async connectedCallback() {
    this.setParentId();
    this.setIds();
    await this.attachModule();
    if (this.module === undefined) {
      this.error(0);
    } else {
      this.requestUpdate = this.handleChange.bind(this);
      this.watchMutations = this.handleMutations.bind(this);
      this.updateWatchers = this.handleWatchers.bind(this);
      this.loadReceivers();
      this.loadWatchers();
      this.addEventListeners();
      this.initBitty();
      if (typeof this.module.init === "function") {
        this.module.init();
      }
    }
  }

  addEventListeners() {
    this.#listeners.forEach((listener) => {
      this.addEventListener(listener, (event) => {
        this.requestUpdate.call(this, event);
      });
    });

    this.addEventListener("bittysignal", (payload) => {
      this.updateWatchers.call(this, payload);
    });
  }

  addReceiver(key, el) {
    debug(
      `Adding receiver for: ${el.constructor.name} ${el.dataset.uuid} with data-receive="${key}" to: bitty-js ${this.dataset.uuid}`,
    );
    this.#receivers.push({
      key: key,
      f: (data) => {
        try {
          this.module[`${key}`](el, data);
        } catch (error) {
          console.error(`Tried: ${key} - got ${error}`);
        }
      },
    });
  }

  addWatcher(key, el) {
    debug(
      `Adding watcher for: ${el.constructor.name} ${el.dataset.uuid} with data-watch="${key}" to: bitty-js ${this.dataset.uuid}`,
    );
    this.#watchers.push({
      key: key,
      f: (data) => {
        try {
          this.module[`${key}`](el, data);
        } catch (error) {
          console.error(`Tried: ${key} - got ${error}`);
        }
      },
    });
  }

  assembleErrorHelpText(err) {
    const out = [];
    err.help.forEach((options, index) => {
      if (err.help.length === 1) {
        if (index === 0) {
          out.push("POSSIBLE SOLUTION:");
        }
        out.push(this.assembleErrorText(options));
      } else {
        if (index === 0) {
          out.push("POSSIBLE SOLUTIONS:");
        }
        options.forEach((option, optionIndex) => {
          if (optionIndex === 0) {
            out.push(`${index + 1}. ${option}`);
          } else {
            out.push(option);
          }
        });
      }
    });
    const text = this.assembleErrorReplacedText(err, out.join("\n\n"));
    err.output.push(text);
  }

  assemlbeErrorAdditionalDetails(err) {
    if (err.additionalDetails !== null) {
      const out = [];
      out.push("ADDITIONAL DETAILS:");
      out.push(err.additionalDetails);
      const text = this.assembleErrorReplacedText(err, out.join("\n\n"));
      err.output.push(text);
    }
  }

  assembleErrorComponent(err) {
    const out = [];
    out.push(`COMPONENT:`);
    out.push(
      `This error was caught by the <bitty-js> element with a 'data-uuid' of:`,
    );
    out.push(this.dataset.uuid);
    out.push(
      `A copy of the element is in a follow up message below. ('data-uuid' attributes are added dynamically. They should be visible in the 'Elements' view in your browser's developer console.)`,
    );
    const text = this.assembleErrorReplacedText(err, out.join("\n\n"));
    err.output.push(text);
  }

  assemlbeErrorDescription(err) {
    const out = [];
    out.push("DESCRIPTION:");
    out.push(this.assembleErrorText(err.description));
    const text = this.assembleErrorReplacedText(err, out.join("\n\n"));
    err.output.push(text);
  }

  assembleErrorElementDetails(err) {
    if (err.el !== null) {
      const out = [];
      out.push("ERROR ELEMENT DETAILS");
      out.push(
        `The element with the error is a ${err.el.tagName} tag with a 'data-uuid' attribute of:`,
      );
      out.push(err.el.dataset.uuid);
      const text = this.assembleErrorReplacedText(err, out.join("\n\n"));
      err.output.push(text);
    }
  }

  assembleErrorId(err) {
    const out = [];
    out.push("#######################################");
    out.push(`A BITTY ERROR OCCURRED [ID: ${err.id}]`);
    out.push(this.assembleErrorText(err.kind));
    const text = this.assembleErrorReplacedText(err, out.join("\n\n"));
    err.output.push(text);
  }

  assembleErrorReplacedText(err, content) {
    return content
      .replaceAll("__UUID__", this.dataset.uuid)
      .replaceAll("__ERROR_ID__", err.id)
      .trim();
  }

  assembleErrorText(content) {
    return content.join("\n\n");
  }

  constructor() {
    super();
  }

  async attachModule() {
    if (this.dataset.module) {
      let validModulePath = this.dataset.module;
      if (
        validModulePath.substring(0, 2) !== "./" &&
        validModulePath.substring(0, 1) !== "/"
      ) {
        validModulePath = `./${validModulePath}`;
      }
      const mod = await import(validModulePath);
      if (this.dataset.use === undefined) {
        this.module = new mod.default();
      } else {
        this.module = new mod[this.dataset.use]();
      }
    } else {
      this.error(2);
    }
  }

  // TODO: wire this up
  doCall(key, el) {
    console.log("TODO: wire up doCall()");
  }

  // This is used from modules via:
  // this.api.send("functionName")
  // TODO: Make doCall(key) as well
  doSend(key, event) {
    // TODO Stub an event if one isn't available
    this.sendUpdates(key, {});
  }

  error(id = 0, el = null, additionalDetails = null) {
    this.classList.add("bitty-component-error");
    if (el !== null) {
      this.classList.add("bitty-element-error");
    }
    let err = this.#errors.find((err) => {
      return err.id === id;
    });
    if (err === undefined) {
      err = this.#errors.find((err) => {
        return err.id === 1;
      });
    }
    err.el = el;
    err.additionalDetails = additionalDetails;
    err.output = [];
    // this.assembleErrorPrelude(err)
    this.assembleErrorId(err);
    // this.assembleErrorDumpMessage(err)
    this.assemlbeErrorDescription(err);
    this.assemlbeErrorAdditionalDetails(err);
    this.assembleErrorHelpText(err);
    this.assembleErrorComponent(err);
    this.assembleErrorElementDetails(err);
    // TODO: Add developerNote
    // TODO: Pull the source error message if there is one
    console.error(
      err.output.join(`\n\n#######################################\n\n`),
    );
    console.error(this);
    if (el !== null) {
      console.error(el);
    }
  }

  handleChange(event) {
    if (event.target === undefined || event.target.dataset === undefined) {
      return;
    }
    if (event.target.nodeName !== "BITTY-JS") {
      if (event.target.dataset.call !== undefined) {
        this.runFunctions(event.target.dataset.call, event);
      }
      if (event.target.dataset.send !== undefined) {
        this.sendUpdates(event.target.dataset.send, event);
      }
    }
    event.stopPropagation();
  }

  handleMutations(mutationList, _observer) {
    for (const mutation of mutationList) {
      if (mutation.type === "childList") {
        // TODO: Verify this remove receivers and watchers properly
        for (const removedNode of mutation.removedNodes) {
          if (removedNode.dataset) {
            if (
              removedNode.dataset.call || removedNode.dataset.receive ||
              removedNode.dataset.send || removedNode.dataset.watch
            ) {
              debug(
                "Caught removed node through mutation observer. Updating IDs, receivers, and watchers",
              );
              this.setIds();
              this.loadReceivers();
              this.loadWatchers();
              return; // only need one so return
            }
          }
        }
        for (const addedNode of mutation.addedNodes) {
          if (addedNode.dataset) {
            if (
              addedNode.dataset.call || addedNode.dataset.receive ||
              addedNode.dataset.send || addedNode.dataset.watch
            ) {
              debug(
                "Caught new node through mutation observer. Updating IDs, receivers, and watchers",
              );
              this.setIds();
              this.loadReceivers();
              this.loadWatchers();
              return; // only need one so return
            }
          }
        }
      }
    }
  }

  handleWatchers(payload) {
    if (
      payload.detail === undefined || payload.detail.name === undefined ||
      payload.detail.event === undefined
    ) {
      debug("Missing even from handleWatchers payload");
      return;
    }
    this.updateWatcher(payload.detail.name, payload.detail.event);
  }

  initBitty() {
    this.module.api = this;
    this.observerConfig = { childList: true, subtree: true };
    this.observer = new MutationObserver(this.watchMutations);
    this.observer.observe(this, this.observerConfig);
    if (this.dataset.call !== undefined) {
      this.runFunctions(this.dataset.call, {
        target: this, // stubbed even structure for init
      });
    }
    if (this.dataset.send !== undefined) {
      this.sendUpdates(this.dataset.send, {
        target: this, // stubbed even structure for init
      });
    }
    if (this.dataset.listeners !== undefined) {
      this.#listeners = this.dataset.listeners.split("|");
    }
  }

  loadReceivers() {
    debug("loading receivers");
    this.#receivers = [];
    const els = this.querySelectorAll(`[data-receive]`);
    els.forEach((el) => {
      el.dataset.receive.split("|").forEach((key) => {
        this.addReceiver(key, el);
      });
    });
  }

  loadWatchers() {
    debug("loading watchers");
    this.#watchers = [];
    const els = this.querySelectorAll(`[data-watch]`);
    els.forEach((el) => {
      el.dataset.watch.split("|").forEach((key) => {
        this.addWatcher(key, el);
      });
    });
  }

  runFunctions(stringToSplit, event) {
    stringToSplit.split("|").forEach((f) => {
      try {
        this.module[`${f}`](event);
      } catch (error) {
        console.log(error);
        console.error(`Tried: ${f}`);
      }
    });
  }

  sendUpdates(signals, event) {
    signals.split("|").forEach((signal) => {
      const signalForwarder = new CustomEvent("bittysignal", {
        bubbles: true,
        detail: {
          name: signal,
          event: event,
        },
      });
      this.parentElement.dispatchEvent(signalForwarder);
      let numberOfReceivers = 0;
      this.#receivers.forEach((receiver) => {
        if (receiver.key === signal) {
          numberOfReceivers += 1;
          receiver.f(event);
        }
      });
      // use the calling element if no
      // receivers were found
      if (numberOfReceivers === 0) {
        this.module[signal](event.target, event);
      }
    });
  }

  setIds() {
    const selector = ["call", "receive", "send", "watch"]
      .map((key) => {
        return `[data-${key}]`;
      })
      .join(",");
    const els = this.querySelectorAll(selector);
    els.forEach((el) => {
      if (el.dataset.uuid === undefined) {
        const uuid = self.crypto.randomUUID();
        debug(`Setting ${el.tagName} ID to: ${uuid} in: ${this.dataset.uuid}`);
        el.dataset.uuid = uuid;
      }
    });
  }

  setParentId() {
    const uuid = self.crypto.randomUUID();
    debug(`Setting bitty-js ID to: ${uuid}`);
    this.dataset.uuid = uuid;
  }

  updateWatcher(key, event) {
    this.#watchers.forEach((watcher) => {
      if (watcher.key === key) {
        watcher.f(event);
      }
    });
  }

  #errors = [
    {
      id: 0,
      kind: ["Not Classified"],
      description: ["An unclassified error occurred."],
      help: [
        [
          `Detailed help isn't available since this error is unclassified.`,
          `Use the line numbers from the error console to locate the source of the error and work from there.`,
        ],
      ],
      developerNote: [
        ` Use an ID from the BittyJS #errors variable to classify this error.`,
        `It's a bug if there's not an approprite classification. Please open an issue if you find an error without a clear mapping.`,
      ],
    },
    {
      id: 1,
      kind: ["Invalid Error ID"],
      description: [
        `An attempt to call an error with an ID of '__ERROR_ID__' was made. That ID does not exist in '#errors'.`,
      ],
      help: [
        [`Change the ID to one that's avaialble in the '#errors' variable.`],
        [
          `Create a custom error with the ID you're attempting to use.`,
          `NOTE: Custom error IDs should be above 9000 by convention.`,
        ],
      ],
      developerNote: [],
    },
    {
      id: 2,
      kind: [
        "A <bitty-js></bitty-js> element is missing its 'data-module' attribute",
      ],
      description: [
        `Every <bitty-js></bitty-js> element requires a 'data-module' attribute that connects it to a '.js' file that powers its functionality.`,
        `The 'data-module' attribute is missing from the <bitty-js></bitty-js> element with the 'data-uuid' attribute:`,
        `__UUID__`,
      ],
      help: [
        [
          `Add a 'data-module' attribute to the <bitty-js></bitty-js> tag with the path to its supporting '.js' module file. For example:`,
          `<bitty-js data-module="./path/to/module.js"></bitty-js>`,
        ],
      ],
      developerNote: [],
    },
    {
      id: 3,
      kind: [`Could not load default class from:`, `__MODULE_PATH__`],
      description: [
        `The <bitty-js> element with 'data-uuid':`,
        `__BITTY_UUID__ [TODO: find/replace uuid here]`,
        `does not have a 'data-app' attribute. Therefore, it attempted to load the default class exported from:`,
        `__MODULE_PATH__ [TODO: find/replace .js path here]`,
        `that attempt failed.`,
      ],
      help: [
        [
          `Make sure the __MODULE_PATH__ file has either a:`,
          `export default class {}`,
          `or:`,
          `export default class SOME_NAME {}`,
        ],
        [
          `If the file has a 'export default class', something went wrong with it. Examine it further to trace the issue.`,
        ],
        [
          `Add a 'data-app' attribute to the <bitty-js> element with the name of a class exported from __MODULE_PATH__.`,
        ],
      ],
      developerNote: [],
    },
  ];
}

/////////////////////////////////////////////////////
// Helpers
/////////////////////////////////////////////////////

function debug(payload, el = null) {
  if (window && window.location && window.location.search) {
    const params = new URLSearchParams(window.location.search);
    if (params.has("debug")) {
      console.log(payload);
      if (el !== null) {
        console.log(el);
      }
    }
  }
}

// solo is for quick debugging of individual items
// instead of running the full debug
function solo(payload, el = null) {
  if (window && window.location && window.location.search) {
    const params = new URLSearchParams(window.location.search);
    if (params.has("solo") || params.has("debug")) {
      console.log(payload);
      if (el !== null) {
        console.log(el);
      }
    }
  }
}

/////////////////////////////////////////////////////
// Export
/////////////////////////////////////////////////////

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

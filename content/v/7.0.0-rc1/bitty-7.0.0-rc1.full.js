/** @internal */
const version = [7, 0, 0];

/** @internal */
const tagName = `bitty-${version[0]}-${version[1]}`;

/**
 * An Expanded Event
 * @typedef {Object} ExpandedEvent
 * @property {String} stringValue - The .value for the event.target if it exists.
 * @property {Int} intValue - The .value for the event.target if it exists as an int
 * @property {Float} floatValue - The .value for the event.target if it exists as a float
 */

function expandEvent(ev) {
  if (ev.target.value !== undefined) {
    ev.value = ev.target.value;
    ev.valueInt = parseInt(ev.target.value, 10);
    ev.valueFloat = parseFloat(event.target.value);
  }

  ev.data = (x) => {
    return findDataKey.call(null, ev.target, x);
  };

  ev.dataInt = (x) => {
    return parseInt(findDataKey.call(null, ev.target, x));
  };

  ev.dataFloat = (x) => {
    return parseFloat(findDataKey.call(null, ev.target, x));
  };
}

/**
 * An Expanded Element
 * @typedef {Object} ExpandedElement
 * @property {boolean} isTarget - The element is also the target of the ev
 * @property {boolean} isSender - The element is also the sender of the ev
 * x@property {String} id - The element's data-bittyid
 * @property {Element} bittyParent- The bitty parent element
 * @property {String} bittyParentBittyId- The bitty parent element's data-bittyid
 * x@property {String} targetId- The bitty parent element's data-bittyid
 * x@property {String} senderId- The target element's data-bittyid
 * x@property {Element} sender - The sending element
 * @method {String} stringData(KEY) - Gets the data-KEY from the element as a string. If the element doesn't have a data-KEY, then the value from the first ancestor `data-KEY` is used. If there is no ancestor, returns null.
 * @method {Int} intData(KEY) - Gets the data-KEY from the element as an int. If the element doesn't have a data-KEY, then the value from the first ancestor `data-KEY` is used. If there is no ancestor, returns null.
 * @method {Float} floatData(KEY) - Gets the data-KEY from the element as a float. If the element doesn't have a data-KEY, then the value from the first ancestor `data-KEY` is used. If there is no ancestor, returns null.
 * x@method {String} targetStringData(KEY)
 * x@method {Int} targetIntData(KEY)
 * x@method {Float} targetFloatData(KEY)
 * x@method {String} senderStringData(KEY)
 * x@method {Int} senderIntData(KEY)
 * x@method {Float} senderFloatData(KEY)
 * x@method {boolean} matchTargetData(KEY) - Return's true if the element and the target have the same `data-KEY` attribute and if they match. Otherwise, returns false
 * x@method {boolean} matchSenderData(KEY) - Return's true if the element and the sender have the same `data-KEY` attribute and if they match. Otherwise, returns false
 * x@method {String} stringValue
 * x@method {Int} intValue
 * x@method {Float} floatValue
 * @method {String} targetStringValue
 * @method {Int} targetIntValue
 * @method {Float} targetFloatValue
 * @method {String} senderStringValue
 * @method {Int} senderIntValue
 * @method {Float} senderFloatValue
 */

function expandElement(ev, el) {
  if (ev !== null) {
    el.isTarget = ev.target.dataset.bittyid === el.dataset.bittyid;
    el.isSender = el.sender.dataset.bittyid === el.dataset.bittyid;
  }

  el.bittyParent = getBittyParent(el);
  el.bittyParentBittyId = el.bittyParent.dataset.bittyid;
  el.bittyId = el.dataset.bittyid;

  el.data = (x) => {
    return findDataKey.call(null, el, x);
  };

  el.dataInt = (x) => {
    return parseInt(findDataKey.call(null, el, x));
  };

  el.dataFloat = (x) => {
    return parseFloat(findDataKey.call(null, el, x));
  };

  if (ev !== null) {
    el.targetBittyId = ev.target.dataset.bittyid;
  }

  el.targetData = (x) => {
    return findDataKey.call(null, ev.target, x);
  };

  el.targetDataInt = (x) => {
    return parseInt(findDataKey.call(null, ev.target, x));
  };

  el.targetDataFloat = (x) => {
    return parseFloat(findDataKey.call(null, ev.target, x));
  };

  if (ev !== null) {
    el.senderBittyId = el.sender.dataset.bittyid;
  }

  el.senderData = (x) => {
    return findDataKey.call(null, el.sender, x);
  };

  el.senderDataInt = (x) => {
    return parseInt(findDataKey.call(null, el.sender, x));
  };

  el.senderDataFloat = (x) => {
    return parseFloat(findDataKey.call(null, el.sender, x));
  };

  if (el.value) {
    el.value = el.value;
    el.valueInt = parseInt(el.value, 10);
    el.valueFloat = parseFloat(el.value);
  }

  if (ev !== null) {
    if (ev.target.value) {
      el.targetValue = ev.target.value;
      el.targetValueInt = parseInt(ev.target.value, 10);
      el.targetValueFloat = parseFloat(ev.target.value);
    }
  }

  if (ev !== null) {
    if (el.sender.value) {
      el.senderValue = el.sender.value;
      el.senderValueInt = parseInt(el.sender.value, 10);
      el.senderValueFloat = parseFloat(el.sender.value);
    }
  }

  el.matchTargetData = (x) => {
    const evKey = findDataKey.call(null, ev.target, x);
    const elKey = findDataKey.call(null, el, x);
    if (evKey === undefined || elKey === undefined) {
      return false;
    }
    return evKey === elKey;
  };

  el.matchSenderData = (x) => {
    const evKey = findDataKey.call(null, el.sender, x);
    const elKey = findDataKey.call(null, el, x);
    if (evKey === undefined || elKey === undefined) {
      return false;
    }
    return evKey === elKey;
  };
}

function findSender(evTarget) {
  if (evTarget.dataset && evTarget.dataset.send) {
    return evTarget;
  } else if (evTarget.dataset && evTarget.dataset.use) {
    return evTarget;
  } else if (evTarget.parentNode) {
    return findSender(evTarget.parentNode);
  }
}

/** @internal */
function getBittyParent(el) {
  if (el.localName.toLowerCase() === tagName) {
    return el;
  } else if (el.parentNode) {
    return getBittyParent(el.parentNode);
  } else {
    // TODO test returning null if no
    // bitty parent is found. (need to
    // load an element via a document
    // query selector that's outside
    // a bitty element to do the test.
    return null;
  }
}
/** @internal */
class BittyError extends Error {
  constructor(payload) {
    super();
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, BittyError);
    }
    this.name = "BittyError";
    for (let [key, value] of Object.entries(payload)) {
      this[key] = value;
    }
  }
}

/** @internal */
class ForwardEvent extends Event {
  constructor(ev, signal) {
    super("bittyforward", { bubbles: true });
    this.forwardedEvent = ev;
    this.forwardedSignal = signal;
  }
}

/** @internal */
class LocalTriggerEvent extends Event {
  constructor(signal) {
    super("bittylocaltrigger", { bubbles: true });
    this.signal = signal;
  }
}

/** @internal */
class TriggerEvent extends Event {
  constructor(signal) {
    super("bittytrigger", { bubbles: true });
    this.signal = signal;
  }
}

function findDataKey(el, key) {
  if (el.dataset === undefined) {
    return undefined;
  }
  if (el.dataset[key] !== undefined) {
    return el.dataset[key];
  } else if (
    el.parentNode
  ) {
    return findDataKey(el.parentNode, key);
  } else {
    return undefined;
  }
}

/**
 * @attribute {string} data-connect
 * @attribute {string} data-init
 * @attribute {string} data-listeners
 * @attribute {string} data-receive
 * @attribute {string} data-send
 */

class BittyJs extends HTMLElement {
  constructor() {
    super();
    /** @internal */
    this.config = {
      listeners: ["click", "input"],
      license: "CC0",
      version: version,
    };
  }

  /** @internal */
  async connectedCallback() {
    this.dataset.bittyid = self.crypto.randomUUID();
    await this.makeConnection();
    if (this.conn) {
      this.conn.api = this;
      this.handleEventBridge = this.handleEvent.bind(this);
      this.setIds(this);
      this.addEventListeners();
      await this.runBittyInit();
      await this.runDataInits();
      await this.runBittyReady();
    }
  }

  /** @internal */
  addEventListeners() {
    const listeners = [
      "bittyforward",
      "bittylocaltrigger",
      "bittytrigger",
    ];
    if (this.dataset.listeners) {
      this.trimInput(this.dataset.listeners).forEach((listener) => {
        listeners.push(listener);
      });
    } else {
      listeners.push("click");
      listeners.push("input");
    }
    listeners.forEach(
      (listener) => {
        window.addEventListener(listener, (ev) => {
          this.handleEventBridge.call(this, ev);
        });
      },
    );
  }
  /** @internal */
  connectedMoveCallback() {
    // this prevs connectedCallback() from firing
    // if a bitty component is moved.
  }

  /** @internal */
  doSubs(content, subs) {
    subs.forEach((sub) => {
      const outerBaseType = typeof sub[1];
      const outerDetailType = Object.prototype.toString.call(sub[1]);
      if (
        outerBaseType === "object" && outerDetailType === "[object Array]"
      ) {
        const newContent = sub[1].map((el) => {
          const innerBaseType = typeof el;
          const innerDetailType = Object.prototype.toString.call(el);
          if (
            innerBaseType === "object" &&
            innerDetailType === "[object DocumentFragment]"
          ) {
            return [...el.childNodes].map((child) => {
              if (
                Object.prototype.toString.call(child) === "[object Text]"
              ) {
                return child.wholeText;
              } else {
                return child.outerHTML;
              }
            }).join("");
          } else if (innerBaseType === "object") {
            return el.outerHTML;
          } else {
            return el;
          }
        }).join("");
        content = content.replaceAll(sub[0], newContent);
      } else if (
        outerBaseType === "object" &&
        outerDetailType === "[object DocumentFragment]"
      ) {
        const subContent = [];
        [...sub[1].childNodes].forEach((child) => {
          if (
            Object.prototype.toString.call(child) === "[object Text]"
          ) {
            subContent.push(child.wholeText);
          } else {
            subContent.push(child.outerHTML);
          }
        });
        content = content.replaceAll(sub[0], subContent.join(""));
      } else if (typeof sub[1] === "object") {
        content = content.replaceAll(sub[0], sub[1].outerHTML);
      } else {
        content = content.replaceAll(sub[0], sub[1]);
      }
    });
    return content;
  }

  forward(ev, signal) {
    const forwardEvent = new ForwardEvent(ev, signal);
    this.dispatchEvent(forwardEvent);
  }

  /** @internal */
  // TODO: Deprecate in favor of top level function
  getBittyParent(el) {
    if (el.localName.toLowerCase() === tagName) {
      return el;
    } else if (el.parentNode) {
      return this.getBittyParent(el.parentNode);
    } else {
      // TODO test returning null if no
      // bitty parent is found. (need to
      // load an element via a document
      // query selector that's outside
      // a bitty element to do the test.
      return null;
    }
  }

  async getElement(url, subs = [], options = {}) {
    const response = await this.getHTML(url, subs, options, "getElement");
    if (response.value) {
      const el = response.value.firstChild;
      const payload = { value: el };
      return payload;
    } else {
      return response;
    }
  }

  async getHTML(url, subs = [], options = {}) {
    const response = await this.getTXT(url, subs, options, "getHTML");
    if (response.error) {
      return response;
    } else {
      return { value: this.makeHTML(response.value, subs) };
    }
  }

  async getJSON(url, subs = [], options = {}) {
    const response = await this.getTXT(url, subs, options, "getJSON");
    if (response.error) {
      return response;
    } else {
      try {
        const data = JSON.parse(response.value);
        const payload = { value: data };
        return payload;
      } catch (error) {
        let payloadError = new BittyError({ type: "parsing" });
        const payload = { error: payloadError };
        return payload;
      }
    }
  }

  async getSVG(url, subs = [], options = {}) {
    const response = await this.getTXT(url, subs, options, "getSVG");
    if (response.error) {
      return response;
    } else {
      const tmpl = document.createElement("template");
      tmpl.innerHTML = response.value;
      const wrapper = tmpl.content.cloneNode(true);
      const svg = wrapper.querySelector("svg");
      const payload = { value: svg };
      return payload;
    }
  }

  async getTXT(url, subs = [], options = {}, incomingMethod = "getTXT") {
    let response = await fetch(url, options);
    try {
      if (!response.ok) {
        throw new BittyError({
          type: "fetching",
          message:
            `${incomingMethod}() returned ${response.status} [${response.statusText}] in:\n${incomingMethod}(${response.url}, ${
              JSON.stringify(subs)
            }, ${JSON.stringify(options)})`,
          statusText: response.statusText,
          status: response.status,
          url: response.url,
          incomingMethod: incomingMethod,
          subs: subs,
          options: options,
        });
      } else {
        const content = this.doSubs(await response.text(), subs);
        return { value: content };
      }
    } catch (error) {
      console.error(`BittyError: ${error.message}`);
      return { error: error };
    }
  }

  /** @internal */
  async handleEvent(ev) {
    expandEvent(ev);
    if (
      ev.type === "bittylocaltrigger"
    ) {
      // TODO: Handle async
      const signals = this.trimInput(ev.signal);
      const receivers = this.querySelectorAll("[data-receive]");
      for (let signal of signals) {
        let doAwait = false;
        const iSigParts = signal.split(":");
        if (iSigParts.length === 2 && iSigParts[0] === "await") {
          doAwait = true;
          signal = iSigParts[1];
        }
        if (this.conn[signal]) {
          const bittyTargetParent = getBittyParent(ev.target);
          let foundReceiver = false;
          for (let receiver of receivers) {
            receiver.sender = ev.target;
            const bittyReceiverParent = getBittyParent(receiver);
            if (
              bittyTargetParent.dataset.bittyid ===
                bittyReceiverParent.dataset.bittyid
            ) {
              const receptors = this.trimInput(receiver.dataset.receive);
              for (let receptor of receptors) {
                const rSigParts = receptor.split(":");
                if (rSigParts.length === 2 && rSigParts[0] === "await") {
                  doAwait = true;
                  receptor = rSigParts[1];
                }
                if (receptor === signal) {
                  foundReceiver = true;
                  expandElement(ev, receiver);
                  if (doAwait) {
                    await this.conn[signal](ev, receiver);
                  } else {
                    this.conn[signal](ev, receiver);
                  }
                }
              }
            }
          }
          if (foundReceiver === false) {
            if (
              bittyTargetParent.dataset.bittyid ===
                this.dataset.bittyid
            ) {
              if (doAwait) {
                await this.conn[signal](ev, null);
              } else {
                this.conn[signal](ev, null);
              }
            }
          }
        }
      }
    } else if (
      ev.type === "bittytrigger"
    ) {
      // TODO: Handle async
      const signals = this.trimInput(ev.signal);
      const receivers = this.querySelectorAll("[data-receive]");
      for (let signal of signals) {
        let doAwait = false;
        const iSigParts = signal.split(":");
        if (iSigParts.length === 2 && iSigParts[0] === "await") {
          doAwait = true;
          signal = iSigParts[1];
        }
        if (this.conn[signal]) {
          let foundReceiver = false;
          for (let receiver of receivers) {
            receiver.sender = ev.target;
            const receptors = this.trimInput(receiver.dataset.receive);
            for (let receptor of receptors) {
              const rSigParts = receptor.split(":");
              if (rSigParts.length === 2 && rSigParts[0] === "await") {
                doAwait = true;
                receptor = rSigParts[1];
              }
              if (receptor === signal) {
                foundReceiver = true;
                expandElement(ev, receiver);
                if (doAwait) {
                  await this.conn[signal](ev, receiver);
                } else {
                  this.conn[signal](ev, receiver);
                }
              }
            }
          }
          if (foundReceiver === false) {
            if (doAwait) {
              await this.conn[signal](ev, null);
            } else {
              this.conn[signal](ev, null);
            }
          }
        }
      }
    } else if (
      ev.type === "bittyforward"
    ) {
      // TODO: Handle async
      const signals = this.trimInput(ev.forwardedSignal);
      ev = ev.forwardedEvent;
      const receivers = this.querySelectorAll("[data-receive]");
      for (let receiver of receivers) {
        receiver.sender = ev.target;
        expandElement(ev, receiver);
        const receptors = this.trimInput(receiver.dataset.receive);
        for (let receptor of receptors) {
          if (
            signals.includes(receptor) && this.conn[receptor]
          ) {
            this.conn[receptor](ev, receiver);
          }
        }
      }
    } else {
      const sender = findSender(ev.target);
      if (sender) {
        // Process data-use element if there is one
        const receivers = this.querySelectorAll("[data-use]");
        if (sender.dataset.use) {
          const signals = this.trimInput(sender.dataset.use);
          if (receivers.length > 0) {
            for (let signal of signals) {
              let doAwait = false;
              const iSigParts = signal.split(":");
              if (iSigParts.length === 2 && iSigParts[0] === "await") {
                doAwait = true;
                signal = iSigParts[1];
              }
              if (this.conn[signal]) {
                for (let receiver of receivers) {
                  receiver.sender = sender;
                  expandElement(ev, receiver);
                  if (receiver.bittyId === receiver.senderBittyId) {
                    if (doAwait) {
                      await this.conn[signal](ev, receiver);
                    } else {
                      this.conn[signal](ev, receiver);
                    }
                  }
                }
              }
            }
          }
        }
        if (sender.dataset.send) {
          // Process data-receive elements
          const signals = this.trimInput(sender.dataset.send);
          const receivers = this.querySelectorAll("[data-receive]");
          for (let signal of signals) {
            let doAwait = false;
            const iSigParts = signal.split(":");
            if (iSigParts.length === 2 && iSigParts[0] === "await") {
              doAwait = true;
              signal = iSigParts[1];
            }
            if (this.conn[signal]) {
              let foundReceiver = false;
              for (let receiver of receivers) {
                receiver.sender = sender;
                const receptors = this.trimInput(receiver.dataset.receive);
                for (const receptor of receptors) {
                  const rSignalParts = receptor.split(":");
                  if (
                    rSignalParts.length === 2 && rSignalParts[0] === "await"
                  ) {
                    receptor = rSignalParts[1];
                    doAwait == true;
                  }
                  if (receptor === signal) {
                    foundReceiver = true;
                    expandElement(ev, receiver);
                    if (doAwait) {
                      await this.conn[signal](ev, receiver);
                    } else {
                      this.conn[signal](ev, receiver);
                    }
                  }
                }
              }
              if (foundReceiver === false) {
                if (doAwait) {
                  await this.conn[signal](ev, null);
                } else {
                  this.conn[signal](ev, null);
                }
              }
            }
          }
        }
      }
    }
  }

  localTrigger(signal) {
    const ev = new LocalTriggerEvent(signal);
    this.dispatchEvent(ev);
  }

  async loadCSS(url, subs, options) {
    const response = await this.getTXT(url, subs, options, "loadCSS");
    if (response.error) {
      return response;
    } else {
      const newStylesheet = new CSSStyleSheet();
      newStylesheet.replaceSync(response.value);
      document.adoptedStyleSheets.push(newStylesheet);
      return { value: response.value };
    }
  }

  /** @internal */
  async makeConnection() {
    try {
      if (!this.dataset.connect) {
        if (window.BittyClass) {
          this.conn = new window.BittyClass();
        } else {
          console.error(`${tagName} error: No class to connect to.`);
        }
      } else {
        let connParts = this.trimInput(this.dataset.connect);
        if (typeof window[connParts[0]] !== "undefined") {
          this.conn = new window[connParts[0]]();
        } else {
          if (connParts[0].substring(0, 1) === "/") {
            const windowURL = new URL(window.location.href);
            connParts[0] = new URL(connParts[0], windowURL.origin).toString();
          }
          if (connParts[0].substring(0, 4) === "http") {
            const mod = await import(connParts[0]);
            if (connParts[1] === undefined) {
              this.conn = new mod.default();
            } else {
              this.conn = new mod[connParts[1]]();
            }
          } else {
            console.error(
              "The value of 'data-connect' must start with 'http' or '/'. Other URLs are not currently supported",
            );
          }
        }
      }
    } catch (error) {
      console.error(`${tagName} error: ${error} - ${this.dataset.connect}`);
    }
  }

  makeElement(template, subs = []) {
    const el = this.makeHTML(template, subs).firstChild;
    return el;
  }

  makeHTML(template, subs = []) {
    const skeleton = document.createElement("template");
    skeleton.innerHTML = this.makeTXT(template, subs).trim();
    const el = skeleton.content.cloneNode(true);
    this.setIds(el);
    return el;
  }

  makeSVG(template, subs = []) {
    const tmpl = document.createElement("template");
    tmpl.innerHTML = this.makeTXT(template, subs).trim();
    const wrapper = tmpl.content.cloneNode(true);
    const svg = wrapper.querySelector("svg");
    return svg;
  }

  makeTXT(template, subs = []) {
    return this.doSubs(template, subs);
  }

  /** @internal */
  async runBittyInit() {
    if (typeof this.conn.bittyInit === "function") {
      if (this.conn.bittyInit[Symbol.toStringTag] === "AsyncFunction") {
        await this.conn.bittyInit();
      } else {
        this.conn.bittyInit();
      }
    }
  }

  /** @internal */
  async runBittyReady() {
    if (typeof this.conn.bittyReady === "function") {
      if (this.conn.bittyReady[Symbol.toStringTag] === "AsyncFunction") {
        await this.conn.bittyReady();
      } else {
        this.conn.bittyReady();
      }
    }
  }

  /** @internal */
  async runDataInits() {
    if (this.dataset.init) {
      const signals = this.trimInput(this.dataset.init);
      for (let signal of signals) {
        if (typeof this.conn[signal] === "function") {
          if (this.conn[signal][Symbol.toStringTag] === "AsyncFunction") {
            await this.conn[signal](null, this);
          } else {
            this.conn[signal](null, this);
          }
        }
      }
    }

    for (let el of this.querySelectorAll("[data-init]")) {
      if (el.dataset.init) {
        expandElement(null, el);
        const signals = this.trimInput(el.dataset.init);
        for (let signal of signals) {
          if (typeof this.conn[signal] === "function") {
            if (this.conn[signal][Symbol.toStringTag] === "AsyncFunction") {
              await this.conn[signal](null, el);
            } else {
              this.conn[signal](null, el);
            }
          }
        }
      }
    }
  }

  setProp(key, value) {
    document.documentElement.style.setProperty(key, value);
  }

  /** @internal */
  setIds(input) {
    input.querySelectorAll("*").forEach((el) => {
      if (!el.dataset.bittyid) {
        el.dataset.bittyid = self.crypto.randomUUID();
      }
    });
  }

  trigger(signal) {
    const ev = new TriggerEvent(signal);
    this.dispatchEvent(ev);
  }

  /** @internal */
  trimInput(input) {
    return input
      .trim()
      .split(/\s+/m)
      .map((l) => l.trim());
  }
}

customElements.define(tagName, BittyJs);

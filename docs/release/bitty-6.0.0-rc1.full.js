/** @internal */
const version = [6, 0, 0];

/** @internal */
const tagName = `bitty-${version[0]}-${version[1]}`;

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
class BittyInitEvent extends Event {
  constructor() {
    super("bittybittyinit", { bubbles: true });
  }
}

/** @internal */
class BittyReadyEvent extends Event {
  constructor() {
    super("bittybittyready", { bubbles: true });
  }
}

/** @internal */
class DataInitEvent extends Event {
  constructor(signal, el) {
    super("bittydatainit", { bubbles: true });
    this.signal = signal;
    this.el = el;
  }
}

/** @internal */
class ForwardEvent extends Event {
  constructor(event, signal) {
    super("bittyforward", { bubbles: true });
    this.forwardedEvent = event;
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
  if (el.dataset[key] !== undefined) {
    return el.dataset[key];
  } else if (
    el.parentNode
  ) {
    return findDataKey(el.parentNode, key);
  } else {
    return null;
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
    this.style.display = "block";
    await this.makeConnection();
    if (this.conn) {
      this.conn.api = this;
      this.handleEventBridge = this.handleEvent.bind(this);
      this.setIds(this);
      this.addEventListeners();
      await this.runBittyInit();
      this.runDataInits();
      await this.runBittyReady();
    }
  }

  /** @internal */
  addEventListeners() {
    const listeners = [
      "bittybittyinit",
      "bittybittyready",
      "bittydatainit",
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
        window.addEventListener(listener, (event) => {
          this.handleEventBridge.call(this, event);
        });
      },
    );
  }
  /** @internal */
  connectedMoveCallback() {
    // this prevents connectedCallback() from firing
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

  forward(event, signal) {
    const forwardEvent = new ForwardEvent(event, signal);
    this.dispatchEvent(forwardEvent);
  }

  /** @internal */
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
  findSender(event, checkElement) {
    if (checkElement.dataset && checkElement.dataset.send) {
      event.sender = checkElement;
    } else if (checkElement.parentNode) {
      this.findSender(event, checkElement.parentNode);
    }
  }

  /** @internal */
  async handleEvent(event) {
    if (event.type === "bittybittyinit") {
      if (this.dataset.bittyid === event.target.dataset.bittyid) {
        if (typeof this.conn.bittyInit === "function") {
          if (this.conn.bittyInit[Symbol.toStringTag] === "AsyncFunction") {
            await this.conn.bittyInit();
          } else {
            this.conn.bittyInit();
          }
        }
      }
    } else if (event.type === "bittybittyready") {
      if (this.dataset.bittyid === event.target.dataset.bittyid) {
        if (typeof this.conn.bittyReady === "function") {
          if (this.conn.bittyReady[Symbol.toStringTag] === "AsyncFunction") {
            await this.conn.bittyReady();
          } else {
            this.conn.bittyReady();
          }
        }
      }
    } else if (
      event.type === "bittylocaltrigger"
    ) {
      // TODO: Handle async
      event.sender = event.target;
      // console.log("TODO: Fix repated calls that are here");
      const signals = this.trimInput(event.signal);
      const receivers = this.querySelectorAll("[data-receive]");
      for (let signal of signals) {
        let doAwait = false;
        const iSigParts = signal.split(":");
        if (iSigParts.length === 2 && iSigParts[0] === "await") {
          doAwait = true;
          signal = iSigParts[1];
        }
        if (this.conn[signal]) {
          const bittyTargetParent = this.getBittyParent(event.target);
          let foundReceiver = false;
          for (let receiver of receivers) {
            const bittyReceiverParent = this.getBittyParent(receiver);
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
                  this.prepElements(event, receiver);
                  if (doAwait) {
                    await this.conn[signal](event, receiver);
                  } else {
                    this.conn[signal](event, receiver);
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
                await this.conn[signal](event, null);
              } else {
                this.conn[signal](event, null);
              }
            }
          }
        }
      }
    } else if (
      event.type === "bittytrigger"
    ) {
      // TODO: Handle async
      event.sender = event.target;
      // console.log("TODO: Fix the repeated call here");
      //console.log(event.target.dataset.bittyid);
      const signals = this.trimInput(event.signal);
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
            const receptors = this.trimInput(receiver.dataset.receive);
            for (let receptor of receptors) {
              const rSigParts = receptor.split(":");
              if (rSigParts.length === 2 && rSigParts[0] === "await") {
                doAwait = true;
                receptor = rSigParts[1];
              }
              if (receptor === signal) {
                foundReceiver = true;
                this.prepElements(event, receiver);
                if (doAwait) {
                  await this.conn[signal](event, receiver);
                } else {
                  this.conn[signal](event, receiver);
                }
              }
            }
          }
          if (foundReceiver === false) {
            if (doAwait) {
              await this.conn[signal](event, null);
            } else {
              this.conn[signal](event, null);
            }
          }
        }
      }
    } else if (
      event.type === "bittydatainit"
    ) {
      // TODO: Handle async
      event.sender = event.target;
      this.prepElements(event, event.el);
      if (this.dataset.bittyid === event.el.bittyParentId) {
        const signals = this.trimInput(event.signal);
        for (const signal of signals) {
          if (this.conn[signal]) {
            this.conn[signal](event, event.el);
          }
        }
      }
    } else if (
      event.type === "bittyforward"
    ) {
      // TODO: Handle async
      const signals = this.trimInput(event.forwardedSignal);
      event = event.forwardedEvent;
      const receivers = this.querySelectorAll("[data-receive]");
      for (let receiver of receivers) {
        const receptors = this.trimInput(receiver.dataset.receive);
        for (let receptor of receptors) {
          if (
            signals.includes(receptor) && this.conn[receptor]
          ) {
            this.conn[receptor](event, receiver);
          }
        }
      }
    } else {
      this.findSender(event, event.target);
      if (event.sender) {
        const signals = this.trimInput(event.sender.dataset.send);
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
              const receptors = this.trimInput(receiver.dataset.receive);
              for (const receptor of receptors) {
                const rSignalParts = receptor.split(":");
                if (rSignalParts.length === 2 && rSignalParts[0] === "await") {
                  receptor = rSignalParts[1];
                  doAwait == true;
                }
                if (receptor === signal) {
                  foundReceiver = true;
                  this.prepElements(event, receiver);
                  if (doAwait) {
                    await this.conn[signal](event, receiver);
                  } else {
                    this.conn[signal](event, receiver);
                  }
                }
              }
            }
            if (foundReceiver === false) {
              if (doAwait) {
                await this.conn[signal](event, null);
              } else {
                this.conn[signal](event, null);
              }
            }
          }
        }
      }
    }
  }

  localTrigger(signal) {
    const event = new LocalTriggerEvent(signal);
    this.dispatchEvent(event);
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
        const connParts = this.trimInput(this.dataset.connect);
        if (typeof window[connParts[0]] !== "undefined") {
          this.conn = new window[connParts[0]]();
        } else {
          const mod = await import(connParts[0]);
          if (connParts[1] === undefined) {
            this.conn = new mod.default();
          } else {
            this.conn = new mod[connParts[1]]();
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

  makeTXT(template, subs = []) {
    return this.doSubs(template, subs);
  }

  /** @internal */
  prepElements(event, el) {
    el.isTarget = event.target.dataset.bittyid === el.dataset.bittyid;
    el.isSender = event.sender.dataset.bittyid === el.dataset.bittyid;
    el.bittyParent = this.getBittyParent(el);
    el.bittyParentId = el.bittyParent.dataset.bittyid;
    el.bittyId = el.dataset.bittyid;
    el.getString = (x) => {
      return findDataKey.call(null, el, x);
    };
    el.getInt = (x) => {
      return parseInt(findDataKey.call(null, el, x), 10);
    };
    el.getFloat = (x) => {
      return parseFloat(findDataKey.call(null, el, x));
    };
  }

  /** @internal */
  async runBittyInit() {
    // TODO check async nature here. It might
    // not only be needed in the handler
    if (typeof this.conn.bittyInit === "function") {
      const event = new BittyInitEvent();
      this.dispatchEvent(event);
    }
  }

  /** @internal */
  async runBittyReady() {
    // TODO check async nature here. It might
    // not only be needed in the handler
    if (typeof this.conn.bittyReady === "function") {
      const event = new BittyReadyEvent();
      this.dispatchEvent(event);
    }
  }

  /** @internal */
  runDataInits() {
    if (this.dataset.init) {
      const event = new DataInitEvent(this.dataset.init, this);
      this.dispatchEvent(event);
    } else {
      this.querySelectorAll("[data-init]").forEach((el) => {
        const event = new DataInitEvent(el.dataset.init, el);
        this.dispatchEvent(event);
      });
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
    const event = new TriggerEvent(signal);
    this.dispatchEvent(event);
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

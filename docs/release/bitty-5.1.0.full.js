/** @ignore */
const version = [5, 1, 0];

/** @ignore */
const tagName = `bitty-${version[0]}-${version[1]}`;

/** @ignore */
const blockStylesheet = new CSSStyleSheet();
blockStylesheet.replaceSync(`${tagName} { display: block; }`);
document.adoptedStyleSheets.push(blockStylesheet);

/** @ignore */
function getUUID() {
  return self.crypto.randomUUID();
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

/**
 * @attribute {string} data-connect
 * @attribute {string} data-listeners
 * @attribute {string} data-r
 * @attribute {string} data-receive
 * @attribute {string} data-s
 * @attribute {string} data-send
 */

class BittyJs extends HTMLElement {
  constructor() {
    super();
    /** @internal */
    this.config = {
      listeners: ["click", "input"],
      license: "MIT",
      version: version,
    };
    /** @internal */
    this.receivers = [];
  }

  /** @internal */
  async connectedCallback() {
    this.dataset.bittyid = getUUID();
    await this.makeConnection();
    if (this.conn) {
      this.setIds();
      this.conn.api = this;
      this.handleCatchBridge = this.handleCatch.bind(this);
      this.handleEventBridge = this.handleEvent.bind(this);
      this.watchMutations = this.handleMutations.bind(this);
      this.loadReceivers();
      this.addObserver();
      this.addEventListeners();
      await this.callBittyInit();
      this.runSendFromComponent();
      await this.callBittyReady();
    }
  }

  /** @internal */
  addEventListeners() {
    if (this.dataset.listeners) {
      this.config.listeners = this.dataset.listeners
        .split(/\s+/m)
        .map((l) => l.trim());
    }
    this.config.listeners.forEach((listener) => {
      window.addEventListener(listener, (event) => {
        event.bittyid = getUUID();
        if (
          event.target &&
          event.target.nodeName &&
          event.target.nodeName.toLowerCase() !== tagName &&
          event.target.dataset &&
          (event.target.dataset.send || event.target.dataset.s)
        ) {
          this.handleEventBridge.call(this, event);
        } else {
          this.handleCatchBridge.call(this, event);
        }
      });
    });
  }

  /** @internal */
  addObserver() {
    this.observerConfig = { childList: true, subtree: true };
    this.observer = new MutationObserver(this.watchMutations);
    this.observer.observe(this, this.observerConfig);
  }

  /** @internal */
  addReceiver(signal, el) {
    if (this.conn[signal]) {
      this.receivers.push({
        key: signal,
        f: async (event) => {
          await this.conn[signal](event, el);
        },
      });
    }
  }

  /** @internal */
  async callBittyInit() {
    if (typeof this.conn.bittyInit === "function") {
      if (this.conn.bittyInit[Symbol.toStringTag] === "AsyncFunction") {
        await this.conn.bittyInit();
      } else {
        this.conn.bittyInit();
      }
    }
  }

  /** @internal */
  async callBittyReady() {
    if (typeof this.conn.bittyReady === "function") {
      if (this.conn.bittyReady[Symbol.toStringTag] === "AsyncFunction") {
        await this.conn.bittyReady();
      } else {
        this.conn.bittyReady();
      }
    }
  }

  /** @internal */
  connectedMoveCallback() {
    // this method exist solely to prevent
    // connectedCallback() from firing if
    // a bitty component is moved. 
  }

  forward(event, signal) {
    event.bitty = {
      forward: signal
    };
    this.handleEvent(event);
  }

  trigger(signal) {
    this.handleEvent(
      {
        type: "bittytrigger",
        bittyid: getUUID(),
        bitty: {
          forward: signal 
        }
      }
    );
  }

  async getElement(url, subs = [], options = {}) {
    let response = await this.getTXT(url, subs, options, "getElement");
    if (response.error) {
      return response;
    } else {
      const template = document.createElement("template");
      template.innerHTML = response.value;
      const fragment = template.content.cloneNode(true);
      const payload = { value: fragment.firstChild };
      return payload;
    }
  }

  async getHTML(url, subs = [], options = {}) {
    const response = await this.getTXT(url, subs, options, "getHTML");
    if (response.error) {
      return response;
    } else {
      const template = document.createElement("template");
      template.innerHTML = response.value;
      const fragment = template.content.cloneNode(true);
      const payload = { value: fragment };
      return payload;
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
      } catch(error) {
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
          message: `${incomingMethod}() returned ${response.status} [${response.statusText}] in:\n${incomingMethod}(${response.url}, ${JSON.stringify(subs)}, ${JSON.stringify(options)})`,
          statusText: response.statusText, 
          status: response.status, 
          url: response.url, 
          incomingMethod: incomingMethod, 
          subs: subs, 
          options: options });
      } else {
        let content = await response.text();
        subs.forEach((sub) => {
          content = content.replaceAll(sub[0], sub[1]);
        });
        const payload = { value: content };
        return payload;
      }
    } catch (error) {
      console.error(`BittyError: ${error.message}`);
      return { error: error };
    }
  }

  /** @internal */
  async handleCatch(event) {
    if (typeof this.conn.bittyCatch === "function") {
      await this.conn.bittyCatch(event);
    }
  }

  /** @internal */
  async handleEvent(event) {
    let signals = "";
    if (event.bitty && event.bitty.forward) {
      signals = event.bitty.forward;
      delete event.bitty.forward;
    } else {
      if (event.target.dataset.send) {
        signals += `${event.target.dataset.send} `;
      }
      if (event.target.dataset.s) {
        signals += `${event.target.dataset.s} `;
      }
    }
    await this.processSignals(event, signals);
  }

  /** @internal */
  handleMutations(mutationList, _observer) {
    for (const mutation of mutationList) {
      if (mutation.type === "childList") {
        if (
          mutation.addedNodes.length > 0 ||
          mutation.removedNodes.length > 0
        ) {
          this.setIds();
          this.loadReceivers();
        }
      }
    }
  }

  async loadCSS(url, subs, options) {
    const response = await this.getTXT(url, subs, options, "loadCSS");
    if (response.error) {
      return response;
    } else {
      const newStylesheet = new CSSStyleSheet();
      newStylesheet.replaceSync(response.value);
      document.adoptedStyleSheets.push(newStylesheet);
      const payload = { value: response.value };
      return payload;
    }
  }

  /** @internal */
  loadReceivers() {
    this.receivers = [];
    this.querySelectorAll(`[data-receive]`).forEach((el) => {
      el.dataset.receive
        .split(/\s+/m)
        .map((signal) => signal.trim())
        .forEach((signal) => {
          this.addReceiver(signal, el);
        });
    });
    this.querySelectorAll(`[data-r]`).forEach((el) => {
      el.dataset.r
        .split(/\s+/m)
        .map((signal) => signal.trim())
        .forEach((signal) => {
          this.addReceiver(signal, el);
        });
    });
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
        const connParts = this.dataset.connect.split(/\s+/m).map((x) => x.trim());
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
    return this.makeHTML(template, subs).firstChild;
  }

  makeHTML(template, subs = []) {
    const skeleton = document.createElement("template");
    skeleton.innerHTML = this.makeTXT(template, subs).trim();
    return skeleton.content.cloneNode(true);
  }

  makeTXT(template, subs = []) {
    subs.forEach((sub) => {
      template = template.replaceAll(sub[0], sub[1]);
    });
    return template;
  }

  match(event, el, key = "bittyid") {
    if (
      event.target.dataset[key] === undefined ||
      el.dataset[key] === undefined
    ) {
      return false;
    }
    return event.target.dataset[key] === el.dataset[key];
  }

  /** @internal */
  async processSignals(event, signals) {
    const signalParts = signals.split(/\s+/m).map((signalBase) => signalBase.trim());
    for (let signalString of signalParts) {
      const signalParts = signalString.split(":");
      const signal = signalParts.length === 1 ? signalParts[0] : signalParts[1];
      const preface = signalParts.length >= 2 ? signalParts[0] : "";
      const doAwait = preface === "await" ? true : false;
      let receiverCount = 0;
      for (const receiver of this.receivers) {
        if (receiver.key === signal) {
          receiverCount += 1;
          if (doAwait === true) {
            await receiver.f(event);
          } else {
            receiver.f(event);
          }
        }
      }
      if (receiverCount === 0) {
        if (this.conn[signal]) {
          if (doAwait === true) {
            await this.conn[signal](event, null);
          } else {
            this.conn[signal](event, null);
          }
        }
      }
    }
  }

  /** @internal */
  runSendFromComponent() {
    if (this.dataset.send) {
      this.handleEvent({
        type: "bittytagdatasend",
        bittyid: getUUID(),
        target: this,
      });
    } 
    if (this.dataset.s) {
      this.handleEvent({
        type: "bittytagdatasend",
        bittyid: getUUID(),
        target: this,
      });
    } 
  }

  setProp(key, value) {
    document.documentElement.style.setProperty(key, value);
  }

  /** @internal */
  setIds() {
    this.querySelectorAll("*").forEach((el) => {
      if (!el.dataset.bittyid) {
        el.dataset.bittyid = getUUID();
      }
    });
  }
}

customElements.define(tagName, BittyJs);

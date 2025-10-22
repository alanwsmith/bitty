/** @ignore */
const version = [3, 0, 0, "rc1"];

/** @ignore */
const tagName = `bitty-${version[0]}-${version[1]}`;

/** @ignore */
const blockStylesheet = new CSSStyleSheet();
blockStylesheet.replaceSync(`${tagName} { display: block; }`);
document.adoptedStyleSheets.push(blockStylesheet);

const functions = {};

/** @ignore */
function getUUID() {
  return self.crypto.randomUUID();
}

/**
 * @attribute {string} data-connect
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
      copyright: "Copyright 2025 - Alan W. Smith",
      license:
        "License at: htttp://bitty.alanwsmith.com/ - 2y1pBoEREr3eWA1ubCCOXdmRCdn",
      version: version,
    };
    this.receivers = [];
  }

  /** @internal */
  async connectedCallback() {
    this.dataset.uuid = getUUID();
    await this.makeConnection();
    if (this.conn) {
      this.loadFunctions();
      this.setIds();
      this.conn.api = this;
      this.handleEventBridge = this.handleEvent.bind(this);
      this.watchMutations = this.handleMutations.bind(this);
      this.loadReceivers();
      this.addObserver();
      this.addEventListeners();
      await this.callBittyInit();
      this.runSendFromComponent();
    }
  }

  /** @internal */
  addEventListeners() {
    if (this.dataset.listeners) {
      this.config.listeners = this.dataset.listeners
        .split("|")
        .map((l) => l.trim());
    }
    this.config.listeners.forEach((listener) => {
      document.addEventListener(listener, (event) => {
        if (
          event.target &&
          event.target.nodeName.toLowerCase() !== tagName &&
          event.target.dataset &&
          event.target.dataset.send
        ) {
          event.uuid = getUUID();
          this.handleEventBridge.call(this, event);
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
        f: (event) => {
          this.conn[signal](event, el);
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
  connectedMoveCallback() {
    // this method exist soley to prevent
    // connectedCallback() from firing if
    // a bitty component is moved. 
  }

  forward(event, signal) {
    if (!event || !event.target || !event.target.dataset) {
      event = {
        type: "bittyforward",
        target: { dataset: { forward: signal } },
      };
    }
    event.target.dataset.forward = signal;
    this.handleEvent(event);
  }

  // TODO: Pull from getFragment
  async getElement(url, subs = [], options = {}) {

  }

  async getFragment(url, subs = [], options = {}) {
    const content = await this.getTXT(url, subs, options);
    if (content === undefined) {
      return undefined;
    } else {
      const el = document.createElement("template");
      el.innerHTML = content;
      return el.content.cloneNode(true);
    }
  }

  async getJSON(url, subs = [], options = {}) {
    const content = await this.getTXT(url, subs, options);
    if (content === undefined) {
      return undefined;
    } else {
      return JSON.parse(content);
    }
  }

  async getSVG(url, subs = [], options = {}) {
    const content =  await this.getTXT(url, subs, options);
    if (content === undefined) {
      return undefined;
    } else {
      const tmpl = document.createElement("template");
      tmpl.innerHTML = content;
      const wrapper = tmpl.content.cloneNode(true);
      const svg = wrapper.querySelector("svg");
      return svg;
    }
  }

  async getTXT(url, subs = [], options = {}) {
    let response = await fetch(url, options);
    try {
      if (!response.ok) {
        throw new Error(`${response.status} [${response.statusText}] - ${url}`);
      } else {
        let content = await response.text();
        subs.forEach((sub) => {
          content = content.replaceAll(sub[0], sub[1]);
        });
        return content;
      }
    } catch (error) {
      console.error(`getTXT Error [${url}] - ${error}`);
      return undefined;
    }
  }

  /** @internal */
  handleEvent(event) {
    let signals = null;
    if (event.target.dataset.forward) {
      signals = event.target.dataset.forward;
      delete event.target.dataset.forward;
    } else {
      signals = event.target.dataset.send;
    }
    this.processSignals(event, signals);
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

  /** @internal */
  loadFunctions() {
    this.fn = {};
    if (functions) {
      for (let [key, fn] of Object.entries(functions)) {
        this.fn[key] = fn.bind(this);
      }
    }
    if (window.bittyFunctions) {
      for (let [key, fn] of Object.entries(window.bittyFunctions)) {
        this.fn[key] = fn.bind(this);
      }
    }
  }

  /** @internal */
  loadReceivers() {
    this.receivers = [];
    this.querySelectorAll(`[data-receive]`).forEach((el) => {
      el.dataset.receive
        .split("|")
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
        const connParts = this.dataset.connect.split("|").map((x) => x.trim());
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

  // TODO: Refactor to pull from make Fragment
  makeElement(content, subs = []) {
    subs.forEach((sub) => {
      content = content.replaceAll(sub[0], sub[1]);
    });
    const template = document.createElement("template");
    template.innerHTML = content.trim();
    const el = template.content.cloneNode(true);
    return el.firstChild;
  }

  makeFragment(content, subs = []) {
    subs.forEach((sub) => {
      content = content.replaceAll(sub[0], sub[1]);
    });
    const template = document.createElement("template");
    template.innerHTML = content;
    return template.content.cloneNode(true);
  }

  match(event, el, key = null) {
    if (key === null) {
      key = "uuid";
    }
    if (
      event.target.dataset[key] === undefined ||
      el.dataset[key] === undefined
    ) {
      return false;
    }
    return event.target.dataset[key] === el.dataset[key];
  }

  /** @internal */
  processSignals(event, signals) {
    signals
      .split("|")
      .map((signal) => signal.trim())
      .forEach((signal) => {
        let receiverCount = 0;
        this.receivers.forEach((receiver) => {
          if (receiver.key === signal) {
            receiverCount += 1;
            receiver.f(event);
          }
        });
        if (receiverCount === 0) {
          if (this.conn[signal]) {
            this.conn[signal](event, null);
          }
        }
      });
  }

  /** @internal */
  runSendFromComponent() {
    if (this.dataset.send) {
      this.handleEvent({
        type: "bittytagdatasend",
        uuid: getUUID(),
        target: this,
      });
    }
  }

  /** @internal */
  setIds() {
    this.querySelectorAll("*").forEach((el) => {
      if (!el.dataset.uuid) {
        el.dataset.uuid = getUUID();
      }
    });
  }
}

customElements.define(tagName, BittyJs);
function getUUID() {
  return self.crypto.randomUUID();
}

const version = [2, 0, 0, "rc1"];
const tagName = `bitty-${version[0]}-${version[1]}`;

class BittyJs extends HTMLElement {
  constructor() {
    super();
    this.config = {
      listeners: ["click", "input"],
    };
    this.metadata = {
      copyright: "Copyright 2025 - Alan W. Smith",
      license:
        "License at: htttp://bitty.alanwsmith.com/ - 2y1pBoEREr3eWA1ubCCOXdmRCdn",
      version: version,
    };
  }

  async connectedCallback() {
    this.dataset.uuid = getUUID();
    this.receivers = [];
    this.setIds();
    await this.makeConnection();
    if (this.conn) {
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

  addEventListeners() {
    if (this.dataset.listeners) {
      this.config.listeners = this.dataset.listeners.split("|").map((l) =>
        l.trim()
      );
    }
    this.config.listeners.forEach((listener) => {
      document.addEventListener(listener, (event) => {
        if (
          event.target &&
          event.target.nodeName.toLowerCase() !== tagName &&
          event.target.dataset && event.target.dataset.send
        ) {
          event.uuid = getUUID();
          this.handleEventBridge.call(this, event);
        }
      });
    });
  }

  addObserver() {
    this.observerConfig = { childList: true, subtree: true };
    this.observer = new MutationObserver(this.watchMutations);
    this.observer.observe(this, this.observerConfig);
  }

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

  async callBittyInit() {
    if (typeof this.conn.bittyInit === "function") {
      if (this.conn.bittyInit[Symbol.toStringTag] === "AsyncFunction") {
        await this.conn.bittyInit();
      } else {
        this.conn.bittyInit();
      }
    }
  }

  // TODO: Rename to upper case.
  // pass array of arrays for find replacements on the string?
  async fetchHTML(url, replacements = []) {
    let response = await fetch(url);
    try {
      if (!response.ok) {
        throw new Error(`${response.status} [${response.statusText}] - ${url}`);
      } else {
        let content = await response.text();
        replacements.forEach((replacement) => {
          content = content.replaceAll(replacement[0], replacement[1]);
        });
        const el = document.createElement("template");
        el.innerHTML = content;
        return el.content.cloneNode(true);
      }
    } catch (error) {
      console.error(`fetchHTML Error [${url}] - ${error}`);
      return undefined;
    }
  }

  // TODO: Rename to upper case.
  // pass array of arrays for find replacements on the string?
  async fetchJSON(url) {
    let response = await fetch(url);
    try {
      if (!response.ok) {
        throw new Error(`${response.status} [${response.statusText}] - ${url}`);
      } else {
        return await response.json();
      }
    } catch (error) {
      console.error(`fetchJson Error [${url}] - ${error}`);
      return undefined;
    }
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

  handleMutations(mutationList, _observer) {
    for (const mutation of mutationList) {
      if (mutation.type === "childList") {
        if (
          mutation.addedNodes.length > 0 || mutation.removedNodes.length > 0
        ) {
          this.setIds();
          this.loadReceivers();
        }
      }
    }
  }

  loadReceivers() {
    this.receivers = [];
    this.querySelectorAll(`[data-receive]`).forEach((el) => {
      el.dataset.receive.split("|").forEach((signal) => {
        this.addReceiver(signal, el);
      });
    });
  }

  async makeConnection() {
    try {
      if (!this.dataset.connect) {
        if (window.BittyClass) {
          this.conn = new window.BittyClass();
        } else {
          console.error(`${tagName} error: No class to connect to.`);
        }
      } else {
        const connParts = this.dataset.connect.split("|");
        if (
          typeof window[connParts[0]] !== "undefined"
        ) {
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

  processSignals(event, signals) {
    signals.split("|").forEach((signal) => {
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

  runSendFromComponent() {
    if (this.dataset.send) {
      this.handleEvent(
        { type: "bittytagdatasend", uuid: getUUID(), target: this },
      );
    }
  }

  setIds() {
    this.querySelectorAll("*").forEach((el) => {
      if (!el.dataset.uuid) {
        el.dataset.uuid = getUUID();
      }
    });
  }

  useTemplate(content, replacements) {
    for (let key of Object.keys(replacements)) {
      content = content.replaceAll(key, replacements[key]);
    }
    const el = document.createElement("template");
    el.innerHTML = content;
    return el.content.cloneNode(true);
  }
}

customElements.define(tagName, BittyJs);

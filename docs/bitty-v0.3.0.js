////////////////////////////////////////////////////////////////////
// bitty-js: 0.3.0 - License at: https://bitty-js.alanwsmith.com/
// This ID must be included: 2y1pBoEREr3eWA1ubCCOXdmRCdn
////////////////////////////////////////////////////////////////////

class BittyJs extends HTMLElement {
  constructor() {
    super();
  }

  #listeners = ["click", "input"];
  #receivers = [];
  #watchers = [];

  async connectedCallback() {
    this.setParentId();
    this.setIds();
    await this.makeConnection();
    if (this.connection !== undefined) {
      this.requestUpdate = this.handleChange.bind(this);
      this.watchMutations = this.handleMutations.bind(this);
      this.updateWatchers = this.handleWatchers.bind(this);
      this.loadReceivers();
      this.loadWatchers();
      this.initBitty();
      this.addEventListeners(); // TODO: Move below init? does it matter?
      if (typeof this.connection.init === "function") {
        this.connection.init();
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
    if (this.connection[`${key}`] !== undefined) {
      this.#receivers.push({
        key: key,
        f: (data) => {
          this.connection[`${key}`](el, data);
        },
      });
    }
  }

  addWatcher(key, el) {
    if (this.connection[`${key}`] !== undefined) {
      this.#watchers.push({
        key: key,
        f: (data) => {
          this.connection[`${key}`](el, data);
        },
      });
    }
  }

  async makeConnection() {
    try {
      if (
        typeof this.dataset === "undefined" ||
        typeof this.dataset.connection === "undefined"
      ) {
        this.error("Missing data-connection attribute");
        return;
      }
      if (
        typeof bittyClasses !== "undefined" &&
        typeof window.bittyClasses[this.dataset.connection] !== "undefined"
      ) {
        this.connectionPath = null;
        this.connectionClass = this.dataset.connection;
        this.connection = new bittyClasses[this.connectionClass]();
      } else {
        const connectionParts = this.dataset.connection.split("|");
        if (
          connectionParts[0].substring(0, 2) === "./" ||
          connectionParts[0].substring(0, 1) === "/"
        ) {
          this.connectionPath = connectionParts[0];
        } else {
          this.connectionPath = `./${connectionParts[0]}`;
        }
        const mod = await import(this.connectionPath);
        if (connectionParts[1] === undefined) {
          this.connectionClass = "default";
          this.connection = new mod.default();
        } else {
          this.connectionClass = connectionParts[1];
          this.connection = new mod[this.connectionClass]();
        }
      }
    } catch (error) {
      this.error(error);
    }
  }

  doSend(key, event = {}) {
    this.sendUpdates(key, event);
  }

  error(message) {
    console.error(`bitty-js error: ${message} on element ${this.dataset.uuid}`);
    this.innerHTML = `<div class="bitty-js-error">
<div class="bitty-js-error-header">bitty-js Error</div>
<div class="bitty-js-error-message">${message}</div>
<div class="bitty-js-error-uuid">UUID: ${this.dataset.uuid}</div>
<div class="bitty-js-error-connection-path">Connection Path: ${this.connectionPath}</div>
<div class="bitty-js-error-connection-class">Connection Class: ${this.connectionClass}</div>
</div>`;
  }

  handleChange(event) {
    if (event.target === undefined || event.target.dataset === undefined) {
      return;
    }
    if (
      event.target.nodeName !== "BITTY-JS" &&
      event.target.dataset.send !== undefined
    ) {
      this.sendUpdates(event.target.dataset.send, event);
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
              removedNode.dataset.receive ||
              removedNode.dataset.send || removedNode.dataset.watch
            ) {
              this.setIds();
              this.loadReceivers();
              this.loadWatchers();
              return;
            }
          }
        }
        for (const addedNode of mutation.addedNodes) {
          if (addedNode.dataset) {
            if (
              addedNode.dataset.receive ||
              addedNode.dataset.send || addedNode.dataset.watch
            ) {
              this.setIds();
              this.loadReceivers();
              this.loadWatchers();
              return;
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
      return;
    }
    this.updateWatcher(payload.detail.name, payload.detail.event);
  }

  initBitty() {
    this.connection.api = this;
    this.observerConfig = { childList: true, subtree: true };
    this.observer = new MutationObserver(this.watchMutations);
    this.observer.observe(this, this.observerConfig);
    if (this.dataset.send !== undefined) {
      this.sendUpdates(this.dataset.send, {
        target: this, // stubbed event structure for init
      });
    }
    if (this.dataset.listeners !== undefined) {
      this.#listeners = this.dataset.listeners.split("|");
    }
  }

  loadReceivers() {
    this.#receivers = [];
    const els = this.querySelectorAll(`[data-receive]`);
    els.forEach((el) => {
      el.dataset.receive.split("|").forEach((key) => {
        this.addReceiver(key, el);
      });
    });
  }

  loadWatchers() {
    this.#watchers = [];
    const els = this.querySelectorAll(`[data-watch]`);
    els.forEach((el) => {
      el.dataset.watch.split("|").forEach((key) => {
        this.addWatcher(key, el);
      });
    });
  }

  sendUpdates(signals, event) {
    signals.split("|").forEach((signal) => {
      // TODO Rename to bittysignal to just hoist
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
      if (numberOfReceivers === 0) {
        if (this.connection[signal] !== undefined) {
          this.connection[signal](event.target, event);
        }
      }
    });
  }

  setIds() {
    // const selector = ["receive", "send", "watch"]
    //   .map((key) => {
    //     return `[data-${key}]`;
    //   })
    //   .join(",");

    const els = this.querySelectorAll("*");
    els.forEach((el) => {
      if (el.dataset.uuid === undefined) {
        const uuid = self.crypto.randomUUID();
        el.dataset.uuid = uuid;
      }
    });
  }

  setParentId() {
    const uuid = self.crypto.randomUUID();
    this.dataset.uuid = uuid;
  }

  updateWatcher(key, event) {
    this.#watchers.forEach((watcher) => {
      if (watcher.key === key) {
        watcher.f(event);
      }
    });
  }
}

customElements.define("bitty-js", BittyJs);

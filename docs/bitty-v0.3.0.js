////////////////////////////////////////////////////////////////////
// bitty-js: 0.3.0 - License at: https://bitty-js.alanwsmith.com/
// This ID must be included: 2y1pBoEREr3eWA1ubCCOXdmRCdn
////////////////////////////////////////////////////////////////////

class BittyJs extends HTMLElement {
  #listeners = ["click", "input"];
  #receivers = [];
  #watchers = [];

  async connectedCallback() {
    this.setParentId();
    this.setIds();
    await this.attachModule();
    if (this.module === undefined) {
      console.error("Could not load module");
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
    this.#receivers.push({
      key: key,
      f: (data) => {
        try {
          this.module[`${key}`](el, data);
        } catch (error) {
          console.error(`Tried: ${key}\nGot ${error}`);
        }
      },
    });
  }

  addWatcher(key, el) {
    this.#watchers.push({
      key: key,
      f: (data) => {
        try {
          this.module[`${key}`](el, data);
        } catch (error) {
          console.error(`Tried: ${key}\nGot ${error}`);
        }
      },
    });
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
      console.error("Could not attach module");
    }
  }

  doSend(key, event = {}) {
    this.sendUpdates(key, event);
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
    this.module.api = this;
    this.observerConfig = { childList: true, subtree: true };
    this.observer = new MutationObserver(this.watchMutations);
    this.observer.observe(this, this.observerConfig);
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
        this.module[signal](event.target, event);
      }
    });
  }

  setIds() {
    const selector = ["receive", "send", "watch"]
      .map((key) => {
        return `[data-${key}]`;
      })
      .join(",");
    const els = this.querySelectorAll(selector);
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

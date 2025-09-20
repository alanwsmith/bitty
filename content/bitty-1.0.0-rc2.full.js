function getUUID() {
  return self.crypto.randomUUID();
}

class BittyJs extends HTMLElement {
  constructor() {
    super();
    this.version = [1, 0, 0, "rc2"];
    this.metadata = [
      "Copyright 2025 - Alan W. Smith",
      "MIT Based License at: htttp://bitty-js.alanwsmith.com/",
      "License Hash: 2y1pBoEREr3eWA1ubCCOXdmRCdn",
    ];
  }

  #listeners = ["click", "input"];
  #receivers = [];
  #watchSignals = [];

  async connectedCallback() {
    this.setParentId();
    this.setIds();
    await this.makeConnection();
    if (this.connection) {
      // TODO: Rename to handleEvent = updateReceiver
      this.requestUpdate = this.handleEvent.bind(this);
      this.watchMutations = this.handleMutations.bind(this);
      this.catchWatchEventBrdige = this.catchWatchEvent.bind(this);
      this.loadReceivers();
      this.loadWatchSignals();
      this.initBitty();
      this.addEventListeners();
      if (typeof this.connection.bittyInit === "function") {
        this.connection.bittyInit();
      }
    }
  }

  addEventListeners() {
    this.#listeners.forEach((listener) => {
      this.addEventListener(listener, (event) => {
        event.uuid = getUUID();
        this.requestUpdate.call(this, event);
      });
    });
    this.addEventListener("bittyhoist", (payload_with_event) => {
      if (
        payload_with_event.detail &&
        payload_with_event.detail.event
      ) {
        this.catchWatchEvent.call(this, payload_with_event.detail.event);
      }
    });
  }

  addReceiver(signal, el) {
    if (this.connection[signal]) {
      this.#receivers.push({
        key: signal,
        f: (event) => {
          this.connection[signal](event, el);
        },
      });
    }
  }

  async makeConnection() {
    try {
      if (!this.dataset || !this.dataset.connect) {
        this.error("Missing data-connect attribute");
        return;
      }
      if (bittyClasses && window.bittyClasses[this.dataset.connect]) {
        this.connectionPath = null;
        this.connectionClass = this.dataset.connect;
        this.connection = new bittyClasses[this.connectionClass]();
      } else {
        const connectionParts = this.dataset.connect.split("|");
        this.connectionPath = connectionParts[0];
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

  send(event, signal) {
    if (event.target && event.target.dataset) {
      event.target.dataset.send = signal;
    }
    this.handleEvent(event);
  }

  error(message) {
    console.error(`bitty-js error: ${message} on element ${this.dataset.uuid}`);
  }

  handleEvent(event) {
    // TODO: Review whey bittyconnect is allowed to
    // propagate?
    if (event.type !== "bittyconnect") {
      event.stopPropagation();
    }

    const signalForwarder = new CustomEvent("bittyhoist", {
      bubbles: true,
      detail: {
        event: event,
      },
    });
    this.parentElement.dispatchEvent(signalForwarder);

    if (
      event.target &&
      event.target.dataset &&
      event.target.dataset.send
    ) {
      event.target.dataset.send.split("|").forEach((signal) => {
        let numberOfReceivers = 0;
        this.#receivers.forEach((receiver) => {
          if (receiver.key === signal) {
            numberOfReceivers += 1;
            receiver.f(event);
          }
        });
        if (numberOfReceivers === 0) {
          if (this.connection[signal]) {
            this.connection[signal](event, null);
          }
        }
      });
    }
  }

  handleMutations(mutationList, _observer) {
    for (const mutation of mutationList) {
      if (mutation.type === "childList") {
        for (const removedNode of mutation.removedNodes) {
          if (removedNode.dataset) {
            if (
              removedNode.dataset.receive ||
              removedNode.dataset.send || removedNode.dataset.watch
            ) {
              this.setIds();
              this.loadReceivers();
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
              return;
            }
          }
        }
      }
    }
  }

  initBitty() {
    this.connection.api = this;
    this.observerConfig = { childList: true, subtree: true };
    this.observer = new MutationObserver(this.watchMutations);
    this.observer.observe(this, this.observerConfig);
    if (this.dataset.send) {
      this.handleEvent(
        // simulate an event
        { type: "bittyconnect", target: this },
      );
    }
    if (this.dataset.listeners) {
      this.#listeners = this.dataset.listeners.split("|");
    }
  }

  loadReceivers() {
    this.#receivers = [];
    const els = this.querySelectorAll(`[data-receive]`);
    els.forEach((el) => {
      el.dataset.receive.split("|").forEach((signal) => {
        // TODO: trim whitespace
        this.addReceiver(signal, el);
      });
    });
  }

  loadWatchSignals() {
    if (this.dataset.watch) {
      this.dataset.watch.split("|").forEach((signal) => {
        // TODO: trim whitespace
        this.#watchSignals.push(signal);
      });
    }
  }

  setIds() {
    const els = this.querySelectorAll("*");
    els.forEach((el) => {
      if (el.dataset.uuid === undefined) {
        el.dataset.uuid = getUUID();
      }
    });
  }

  setParentId() {
    const uuid = getUUID();
    this.dataset.uuid = uuid;
  }

  catchWatchEvent(event) {
    if (event.target && event.target.dataset && event.target.dataset.send) {
      event.target.dataset.send.split("|").forEach((signal) => {
        if (this.#watchSignals.includes(signal)) {
          let numberOfReceivers = 0;
          this.#receivers.forEach((receiver) => {
            if (receiver.key === signal) {
              numberOfReceivers += 1;
              receiver.f(event);
            }
          });
          if (numberOfReceivers === 0) {
            if (this.connection[signal] !== undefined) {
              this.connection[signal](event, null);
            }
          }
        }
      });
    }
  }
}

customElements.define("bitty-js", BittyJs);

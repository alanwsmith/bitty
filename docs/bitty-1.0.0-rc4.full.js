function getUUID() {
  return self.crypto.randomUUID();
}

class BittyJs extends HTMLElement {
  constructor() {
    super();
    this.version = [1, 0, 0, "rc4"];
    this.metadata = [
      "Copyright 2025 - Alan W. Smith",
      "License at: htttp://bitty.alanwsmith.com/ - 2y1pBoEREr3eWA1ubCCOXdmRCdn",
    ];
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
    let listeners = ["click", "input"];
    if (this.dataset.listeners) {
      listeners = this.dataset.listeners.split("|").map((l) => l.trim());
    }
    listeners.forEach((listener) => {
      document.addEventListener(listener, (event) => {
        if (
          event.target &&
          event.target.nodeName.toLowerCase() !== "bitty-js" &&
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

  async makeConnection() {
    try {
      if (!this.dataset || !this.dataset.connect) {
        this.error("Missing data-connect attribute");
        return;
      }
      if (
        typeof bittyClasses !== "undefined" &&
        typeof window.bittyClasses[this.dataset.connect] !== "undefined"
      ) {
        this.connPath = null;
        this.connClass = this.dataset.connect;
        this.conn = new bittyClasses[this.connClass]();
      } else {
        const connectionParts = this.dataset.connect.split("|");
        this.connPath = connectionParts[0];
        const mod = await import(this.connPath);
        if (connectionParts[1] === undefined) {
          this.connClass = "default";
          this.conn = new mod.default();
        } else {
          this.connClass = connectionParts[1];
          this.conn = new mod[this.connClass]();
        }
      }
    } catch (error) {
      this.error(error);
    }
  }

  forward(event, signal) {
    if (!event) {
      this.handleEvent({ target: { dataset: { forward: signal } } });
    } else if (event.target && event.target.dataset) {
      event.target.dataset.forward = signal;
      this.handleEvent(event);
    }
  }

  error(message) {
    console.error(`bitty-js error: ${message} on element ${this.dataset.uuid}`);
  }

  handleEvent(event) {
    if (event.target.dataset.forward) {
      this.processSignals(event.target.dataset.forward);
      delete event.target.dataset.forward;
    } else if (event.target.dataset.send) {
      this.processSignals(event.target.dataset.send);
    }
  }

  handleMutations(mutationList, _observer) {
    for (const mutation of mutationList) {
      if (mutation.type === "childList") {
        for (const removedNode of mutation.removedNodes) {
          if (removedNode.dataset && removedNode.dataset.receive) {
            this.loadReceivers();
            return;
          }
        }
        for (const addedNode of mutation.addedNodes) {
          if (addedNode.dataset) {
            if (
              addedNode.dataset.receive ||
              addedNode.dataset.send
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

  runSendFromComponent() {
    if (this.dataset.send) {
      this.handleEvent(
        { uuid: getUUID(), target: this },
      );
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

  processSignals(signals) {
    signals.split("|").forEach((signal) => {
      let numberOfReceivers = 0;
      this.receivers.forEach((receiver) => {
        if (receiver.key === signal) {
          numberOfReceivers += 1;
          receiver.f(event);
        }
      });
      if (numberOfReceivers === 0) {
        if (this.conn[signal]) {
          this.conn[signal](event, null);
        }
      }
    });
  }

  setIds() {
    const els = this.querySelectorAll("*");
    els.forEach((el) => {
      if (el.dataset.uuid === undefined) {
        el.dataset.uuid = getUUID();
      }
    });
  }
}

customElements.define("bitty-js", BittyJs);

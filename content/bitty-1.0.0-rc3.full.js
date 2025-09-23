function getUUID() {
  return self.crypto.randomUUID();
}

class BittyJs extends HTMLElement {
  constructor() {
    super();
    this.version = [1, 0, 0, "rc3"];
    this.metadata = [
      "Copyright 2025 - Alan W. Smith",
      "MIT Based License at: htttp://bitty-js.alanwsmith.com/",
      "License Hash: 2y1pBoEREr3eWA1ubCCOXdmRCdn",
    ];
  }

  #listeners = ["click", "input"];
  #receivers = [];

  async connectedCallback() {
    this.setParentId();
    this.setIds();
    await this.makeConnection();
    if (this.conn) {
      this.handleEventBridge = this.handleEvent.bind(this);
      this.watchMutations = this.handleMutations.bind(this);
      this.loadReceivers();
      this.initBitty();
      this.addEventListeners();
      if (typeof this.conn.bittyInit === "function") {
        this.conn.bittyInit();
      }
    }
  }

  addEventListeners() {
    this.#listeners.forEach((listener) => {
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

  addReceiver(signal, el) {
    if (this.conn[signal]) {
      this.#receivers.push({
        key: signal,
        f: (event) => {
          this.conn[signal](event, el);
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
    if (event.target && event.target.dataset) {
      event.target.dataset.forward = signal;
    }
    this.handleEvent(event);
  }

  error(message) {
    console.error(`bitty-js error: ${message} on element ${this.dataset.uuid}`);
  }

  handleEvent(event) {
    if (event.target.dataset.forward) {
      event.target.dataset.forward.split("|").forEach((signal) => {
        // TODO: Remove this duplication with processSignal()
        let numberOfReceivers = 0;
        this.#receivers.forEach((receiver) => {
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
      delete event.target.dataset.forward;
    } else if (event.target.dataset.send) {
      event.target.dataset.send.split("|").forEach((signal) => {
        // TODO: Remove this duplication with processSignal()
        let numberOfReceivers = 0;
        this.#receivers.forEach((receiver) => {
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
    this.conn.api = this;
    this.observerConfig = { childList: true, subtree: true };
    this.observer = new MutationObserver(this.watchMutations);
    this.observer.observe(this, this.observerConfig);
    if (this.dataset.send) {
      this.handleEvent(
        {
          bittyScope: "receive",
          uuid: getUUID(),
          type: "bittyconnected",
          target: this,
        },
      );
    }
    if (this.dataset.listeners) {
      this.#listeners = this.dataset.listeners.split("|");
    }
  }

  loadReceivers() {
    this.#receivers = [];
    const receiverEls = this.querySelectorAll(`[data-receive]`);
    receiverEls.forEach((el) => {
      el.dataset.receive.split("|").forEach((signal) => {
        this.addReceiver(signal, el);
      });
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

  setParentId() {
    const uuid = getUUID();
    this.dataset.uuid = uuid;
  }
}

customElements.define("bitty-js", BittyJs);

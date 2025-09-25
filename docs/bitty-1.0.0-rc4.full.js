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

  error(message) {
    console.error(`bitty-js error: ${message} on element ${this.dataset.uuid}`);
  }

  forward(event, signal) {
    if (!event) {
      this.handleEvent({ target: { dataset: { forward: signal } } });
    } else if (event.target && event.target.dataset) {
      event.target.dataset.forward = signal;
      this.handleEvent(event);
    }
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
    this.missingAttrs();
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

  missingAttrs() {
    // This fires for every bitty-element that
    // gets an update. Multiple copies of the
    // same error will show up as a result.
    const loneAttrs = [];
    const sendAttrs = [];
    // NOTE: This can be collapsed into a single
    // list across both types by checking the
    // type the comparing for the other.
    // Probably do that at some point not as
    // much for the code optimization but
    // to reduce the duplication for
    // less mental overhead
    document.querySelectorAll(`[data-send]`).forEach((el) => {
      el.dataset.send.split("|").forEach((signal) => {
        sendAttrs.push([signal, el]);
      });
    });
    const receiveAttrs = [];
    document.querySelectorAll(`[data-receive]`).forEach((el) => {
      el.dataset.receive.split("|").forEach((signal) => {
        receiveAttrs.push([signal, el]);
      });
    });
    sendAttrs.forEach((sendAttr) => {
      if (
        ![...receiveAttrs].map((rec) => {
          return rec[0];
        }).includes(sendAttr[0])
      ) {
        loneAttrs.push({ key: sendAttr[0], type: "send", el: sendAttr[1] });
      }
    });
    if (loneAttrs.length === 1) {
      console.log(loneAttrs);
    }
    receiveAttrs.forEach((receiveAttr) => {
      if (
        ![...sendAttrs].map((snd) => {
          return snd[0];
        }).includes(receiveAttr[0])
      ) {
        loneAttrs.push({
          key: receiveAttr[0],
          type: "receive",
          el: receiveAttr[1],
        });
      }
    });
    loneAttrs.forEach((loneAttr) => {
      console.log(loneAttr);
    });
    return loneAttrs;
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

  runSendFromComponent() {
    if (this.dataset.send) {
      this.handleEvent(
        { uuid: getUUID(), target: this },
      );
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
}

customElements.define("bitty-js", BittyJs);

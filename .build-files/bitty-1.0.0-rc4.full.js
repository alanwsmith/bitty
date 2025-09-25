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
    this.config = {
      logMissingAttributes: true,
      logMissingFunctions: true,
    };
  }

  async connectedCallback() {
    this.dataset.uuid = getUUID();
    this.loadWindowConfig();
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
      this.handleEvent({
        type: "bittyforward",
        target: { dataset: { forward: signal } },
      });
    } else if (event.target && event.target.dataset) {
      event.target.dataset.forward = signal;
      this.handleEvent(event);
    }
  }

  handleEvent(event) {
    if (event.type !== "bittyforward" && event.type !== "bittysend") {
      event.stopPropagation();
    }
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
    this.missingAttributes();
    this.missingFunctions();
  }

  loadWindowConfig() {
    if (window.bittyConfig) {
      Object.keys(window.bittyConfig).forEach((option) => {
        this.config[option] = window.bittyConfig[option];
      });
    }
  }

  async makeConnection() {
    // TODO: Just pull this from `window.bittyClasses`
    // so you don't have to do the check for the
    // non-prefixed version of `bittyClasses`


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

  missingAttributes() {
    // This fires for every bitty-element that
    // gets an update. Multiple copies of the
    // same error will show up as a result.
    // Output can be turned off vie logMissingAttributeWarnings
    const loneAttrs = [];
    const sendAttrs = [];
    // NOTE: This can be collapsed into a single
    // list across both types by checking the
    // type the comparing for the other.
    // Probably do that at some point not as
    // much for the code optimization but
    // to reduce the duplication for
    // less mental overhead
    this.querySelectorAll(`[data-send]`).forEach((el) => {
      el.dataset.send.split("|").forEach((signal) => {
        sendAttrs.push([signal, el]);
      });
    });
    const receiveAttrs = [];
    this.querySelectorAll(`[data-receive]`).forEach((el) => {
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
        loneAttrs.push({
          level: "WARN",
          bittyUUID: this.dataset.uuid,
          targetEl: sendAttr[1],
          type: "no-send-attribute",
          payload: { signal: sendAttr[0] },
        });
      }
    });
    receiveAttrs.forEach((receiveAttr) => {
      if (
        ![...sendAttrs].map((snd) => {
          return snd[0];
        }).includes(receiveAttr[0])
      ) {
        loneAttrs.push({
          level: "WARN",
          bittyUUID: this.dataset.uuid,
          targetEl: receiveAttr[1],
          type: "no-receive-attribute",
          payload: { signal: receiveAttr[0] },
        });
      }
    });
    if (this.config.logMissingAttributes === true) {
      loneAttrs.forEach((loneAttr) => {
        // TODO: Send this to an error handler
        console.log(loneAttr);
      });
    }
    return loneAttrs;
  }

  missingFunctions() {
    const list = [];
    const sendCalls = [];
    this.querySelectorAll(`[data-send]`).forEach((el) => {
      el.dataset.send.split("|").forEach((signal) => {
        if (
          !sendCalls.map((c) => {
            return c[0];
          }).includes(signal)
        ) {
        }
        sendCalls.push([signal, el]);
      });
    });
    sendCalls.forEach((c) => {
      if (typeof this.conn[c[0]] !== "function") {
        list.push({
          level: "WARN",
          bittyUUID: this.dataset.uuid,
          targetEl: c[1],
          type: "missing-function-for-send",
          payload: { signal: c[0] },
        });
      }
    });
    if (this.config.logMissingFunctions === true) {
      list.forEach((item) => {
        // TODO: Send this to an error handler
        console.log(item);
      });
    }
    return list;
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
        { type: "bittysend", uuid: getUUID(), target: this },
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

customElements.define("bitty-v1-rc4", BittyJs);

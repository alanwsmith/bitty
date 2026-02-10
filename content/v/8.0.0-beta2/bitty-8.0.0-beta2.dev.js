const version = [8, 0, 0];
const tagName = `bitty-${version[0]}-${version[1]}`;

/** internal */
function splitSignalString(input) {
  return input
    .trim()
    .split(/\s+/m)
    .map((l) => l.trim());
}

class BittyJs extends HTMLElement {
  constructor() {
    super();
    console.log("Connected to script file");
  }

  /** internal */
  addEventListeners() {
    const internalEvents = [
      "bittyapitrigger",
    ];
    internalEvents.forEach(
      (listener) => {
        window.addEventListener(listener, (ev) => {
          this.handleEventBridge.call(this, ev);
        });
      },
    );
  }

  /** internal */
  async connectedCallback() {
    await this.makeConnection();
    if (this.conn) {
      this.conn.api = this;
      this.handleEventBridge = this.processEvent.bind(this);
      this.addEventListeners();
      // this.loadPageData();
      // this.loadPageTemplates();
      await this.runBittyReady();
    }
  }

  /** internal */
  makeConnection() {
    // just working with call on the window for now
    this.conn = new window.BittyClass();
  }

  /** internal */
  async runBittyReady() {
    if (typeof this.conn.bittyReady === "function") {
      if (this.conn.bittyReady[Symbol.toStringTag] === "AsyncFunction") {
        await this.conn.bittyReady();
      } else {
        this.conn.bittyReady();
      }
    }
  }

  /** internal */
  async processEvent(ev) {
    for (let signal of splitSignalString(ev.dataset.send)) {
      if (this.conn[signal]) {
        document.querySelectorAll(
          `[data-receive~='${signal}']`,
        ).forEach((receiver) => {
          this.conn[signal](ev, receiver);
        });
      }
    }
  }

  trigger(signal) {
    const ev = new TriggerEvent(signal);
    this.dispatchEvent(ev);
  }
}

/** internal */
class TriggerEvent extends Event {
  constructor(signals) {
    super("bittyapitrigger", { bubbles: true });
    this.dataset = { send: signals };
  }
}

customElements.define(tagName, BittyJs);

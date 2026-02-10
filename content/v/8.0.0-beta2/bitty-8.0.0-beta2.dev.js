const version = [8, 0, 0];

const tagName = `bitty-${version[0]}-${version[1]}`;

class BittyJs extends HTMLElement {
  constructor() {
    super();
    console.log("Connected to script file");
  }

  /** internal */
  async connectedCallback() {
    await this.makeConnection();
    if (this.conn) {
      this.conn.api = this;
      // this.handleEventBridge = this.handleEvent.bind(this);
      //this.addEventListeners();
      // this.loadPageData();
      // this.loadPageTemplates();
      await this.runBittyReady();
    }
  }

  async handleEvent(ev) {
  }

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

  trigger(signal) {
    const ev = new TriggerEvent(signal);
    this.dispatchEvent(ev);
  }
}

class TriggerEvent extends Event {
  constructor(signal) {
    super("bittytrigger", { bubbles: true });
    this.signal = signal;
  }
}

customElements.define(tagName, BittyJs);

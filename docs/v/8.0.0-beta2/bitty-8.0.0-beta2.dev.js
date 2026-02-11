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
    const defaultListeners = ["click", "input"];
    defaultListeners.forEach((listener) => {
      window.addEventListener(listener, (ev) => {
        if (ev.target.dataset.send) {
          this.handleEventBridge.call(this, ev);
        }
      });
    });

    // find custom listeners
    const customListeners = [
      ...new Set(
        [...document.querySelectorAll("[data-listeners]")]
          .map((el) => {
            return el.dataset.listeners;
          }),
      ),
    ];

    // [...new Set(customLis)];
    //   customListeners.forEach((listener) => {
    //       window k
    //     });

    console.log(customListeners);
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
      // TODO: Document running bittyReady()
      // since it's not picked up automatically by
      // jsdoc.
      await this.runBittyReady();
    }
  }

  getStorageOr(key, alt) {
    const storage = localStorage.getItem(key);
    if (storage === null) {
      return alt;
    } else {
      return JSON.parse(storage);
    }
  }

  /** internal */
  async makeConnection() {
    if (!this.dataset.connect) {
      this.conn = new window.BittyClass();
    } else {
      const connString = this.dataset.connect.trim();
      if (window[connString]) {
        this.conn = new window[connString]();
      } else {
        // TODO: Handle `http...` URLS
        // TODO: Handle `./...` URLS
        const connParts = connString.split(":");
        if (connParts[0].substring(0, 1) === "/") {
          const windowURL = new URL(window.location.href);
          const moduleURL = new URL(connParts[0], windowURL.origin).toString();
          const mod = await import(moduleURL);
          if (connParts[1] !== undefined) {
            this.conn = new mod[connParts[1]]();
          } else {
            this.conn = new mod.default();
          }
        }
      }
    }
    // TODO: Log error if no connection is made
  }

  /** internal */
  async runBittyReady() {
    // TODO: Add tests for sync and async runs.
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
    // handle trigger signals
    if (ev.type === "bittyapitrigger") {
      ev = ev.bittyPayload;
    }

    for (let signal of splitSignalString(ev.target.dataset.send)) {
      if (this.conn[signal]) {
        document.querySelectorAll(
          `[data-receive~='${signal}']`,
        ).forEach((receiver) => {
          this.conn[signal](ev, receiver);
        });
      }
    }
  }

  setStorage(key, data) {
    localStorage.setItem(key, JSON.stringify(data));
  }

  async sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
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
    this.bittyPayload = { target: { dataset: { send: signals } } };
  }
}

customElements.define(tagName, BittyJs);

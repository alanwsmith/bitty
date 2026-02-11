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
  #_data = {};
  #_templates = {};

  constructor() {
    super();
  }

  /** internal */
  addEventListeners() {
    // Internal bitty listeners
    ["bittyapitrigger"].forEach(
      (listener) => {
        window.addEventListener(listener, (ev) => {
          this.handleEventBridge.call(this, ev);
        });
      },
    );
    if (this.dataset.listeners !== undefined) {
      this.dataset.listeners.trim().split(/\s+/m).forEach((listener) => {
        window.addEventListener(listener, (ev) => {
          if (ev.target.dataset.send) {
            this.handleEventBridge.call(this, ev);
          }
        });
      });
    } else {
      ["click", "input"].forEach((listener) => {
        window.addEventListener(listener, (ev) => {
          if (
            ev.target.dataset.send && ev.target.dataset.listeners === undefined
          ) {
            this.handleEventBridge.call(this, ev);
          }
        });
      });
    }
    const customListeners = [
      ...new Set(
        [...document.querySelectorAll("[data-listeners]")]
          .map((el) => {
            return el.dataset.listeners.trim().split(/\s+/m).map((signal) => {
              return signal.trim();
            });
          }),
      ),
    ];
    customListeners.flat().forEach((listener) => {
      window.addEventListener(listener, (ev) => {
        if (
          ev.target.dataset.send !== undefined &&
          ev.target.dataset.listeners !== undefined
        ) {
          if (
            splitSignalString(ev.target.dataset.listeners).includes(listener)
          ) {
            this.handleEventBridge.call(this, ev);
          }
        }
      });
    });
  }

  /** internal */
  async connectedCallback() {
    await this.makeConnection();
    if (this.conn) {
      this.conn.api = this;
      this.handleEventBridge = this.processEvent.bind(this);
      this.addEventListeners();
      this.loadPageData();
      this.loadPageTemplates();
      // TODO: Document running bittyReady()
      // since it's not picked up automatically by
      // jsdoc.
      await this.runBittyReady();
    }
  }

  data(key) {
    return this.#_data[key];
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
  loadPageData() {
    document.querySelectorAll("script").forEach((el) => {
      if (el.type === "application/json" && el.id !== undefined) {
        try {
          this.#_data[el.id] = JSON.parse(el.text);
        } catch (error) {
          // TODO: make test for error state
          // in test unit-tests test suite.
          console.log(error);
        }
      }
    });
  }

  /** internal */
  loadPageTemplates() {
    document.querySelectorAll("script").forEach((el) => {
      if (
        (el.type === "text/html" || el.type === "text/plain") &&
        el.id !== undefined
      ) {
        try {
          this.#_templates[el.id] = el.text;
        } catch (error) {
          // TODO: make test for error state
          // in test unit-tests test suite.
          console.log(error);
        }
      }
    });
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

  template(key) {
    return this.#_templates[key];
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

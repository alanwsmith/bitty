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
  #_collectionLogLevel = 2;
  #_collectionLogFunctions;
  #_outputLogLevel = 2;
  #_outputLogFunctions;
  #_logLevels = ["trace", "debug", "log", "warn", "error", "none"];
  #_logs = [];
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

  addCSS(styles) {
    const newStylesheet = new CSSStyleSheet();
    newStylesheet.replaceSync(styles);
    document.adoptedStyleSheets.push(newStylesheet);
    return newStylesheet;
  }

  /** internal */
  addLog(level, payload) {
    const log = this.#_collectionLogFunctions[level](payload);
    this.#_logs.push(log);
    if (this.#_outputLogLevel <= level) {
      this.#_outputLogFunctions[level](log);
    }
  }

  collectionLogLevel() {
    return this.#_logLevels[this.#_collectionLogLevel];
  }

  /** internal */
  async connectedCallback() {
    this.initLogFunctions();
    await this.makeConnection();
    if (this.conn) {
      this.conn.api = this;
      this.handleEventBridge = this.processEvent.bind(this);
      this.addEventListeners();
      this.loadPageData();
      this.loadPageTemplates();
      await this.runBittyReady();
    }
  }

  async copyTEXT(selector) {
    const el = document.querySelector(selector);
    const text = el.value !== undefined ? el.value : el.innerHTML;
    try {
      await navigator.clipboard.writeText(text);
    } catch (error) {
      // TODO: Add this to the global bitty errors
      // when those come online.
      console.error("Could not copy text to clipboard");
    }
  }

  data(key) {
    return this.#_data[key];
  }

  debug(payload) {
    this.addLog(1, payload);
  }

  error(payload) {
    this.addLog(4, payload);
  }

  getStorageOr(key, alt) {
    const storage = localStorage.getItem(key);
    if (storage === null) {
      return alt;
    } else {
      return JSON.parse(storage);
    }
  }

  getLogLevelIndex(key) {
    switch (key.toLowerCase()) {
      case "trace":
        return 0;
      case "debug":
        return 1;
      case "log":
        return 2;
      case "warn":
        return 3;
      case "error":
        return 4;
      case "none":
        return 5;
      default:
        return 2;
    }
  }

  log(payload) {
    this.addLog(2, payload);
  }

  logs() {
    return this.#_logs;
  }

  initLogFunctions() {
    this.#_outputLogFunctions = [];
    this.#_collectionLogFunctions = [];
    [0, 1, 2, 3, 4].forEach((
      index,
    ) => {
      this.#_collectionLogFunctions[index] = (payload) => {
        return new BittyLog(index, payload);
        //this.#_logs.push(log);
        // if (this.#_outputLogLevel <= index) {
        //   this.#_outputLogFunctions[index](log);
        // }
      };

      const key = this.#_logLevels[index].toUpperCase();
      this.#_outputLogFunctions[index] = (log) => {
        if (log.timestamp !== undefined) {
          if (typeof log.payload === "string") {
            console.log(
              `[${key}|${log.timestamp.toISOString()}] ${log.payload}`,
            );
          } else {
            console.log(
              `[${key}|${log.timestamp.toISOString()}|See object below]`,
            );
            console.log(log.payload);
          }
        } else {
          const localTimestamp = new Date();
          if (typeof log.payload === "string") {
            console.log(
              `[${key}|${localTimestamp.toISOString()}] ${log.payload}`,
            );
          } else {
            console.log(
              `[${key}|${localTimestamp.toISOString()}|See object below]`,
            );
            console.log(log.payload);
          }
        }
      };
    });
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
      if (el.type === "text/plain" && el.id !== undefined) {
        try {
          this.#_data[el.id] = el.text;
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

  makeTEXT(template, subs = []) {
    if (subs.length % 2 === 1) {
      return undefined;
    }
    while (subs.length > 0) {
      const find = subs.shift();
      const replace = subs.shift();
      template = template.replaceAll(find, replace);
    }
    return template;
  }

  outputLogLevel() {
    return this.#_logLevels[this.#_outputLogLevel];
  }

  /** internal */
  async processEvent(ev) {
    // handle trigger signals
    if (ev.type === "bittyapitrigger") {
      ev = ev.bittyPayload;
    }
    for (let signal of splitSignalString(ev.target.dataset.send)) {
      if (this.conn[signal]) {
        const receivers = document.querySelectorAll(
          `[data-receive~='${signal}']`,
        );
        if (receivers.length === 0) {
          this.conn[signal](ev, null);
        } else {
          receivers.forEach((receiver) => {
            this.conn[signal](ev, receiver);
          });
        }
      }
    }
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

  setCollectionLogFunction(key, fn) {
    const logLevelIndex = this.getLogLevelIndex(key);
    this.#_collectionLogFunctions[logLevelIndex] = fn;
  }

  setCollectionLogLevel(key) {
    this.#_collectionLogLevel = this.getLogLevelIndex(key);
  }

  setCSSProperty(key, value) {
    document.documentElement.style.setProperty(key, value);
  }

  setOutputLogFunction(key, fn) {
    const logLevelIndex = this.getLogLevelIndex(key);
    this.#_outputLogFunctions[logLevelIndex] = fn;
  }

  setOutputLogLevel(key) {
    this.#_outputLogLevel = this.getLogLevelIndex(key);
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

  textFromTemplate(key, subs = []) {
    return this.makeTEXT(this.template(key), subs);
  }

  trace(payload) {
    this.addLog(0, payload);
  }

  trigger(signal) {
    const ev = new TriggerEvent(signal);
    this.dispatchEvent(ev);
  }

  warn(payload) {
    this.addLog(3, payload);
  }
}

class BittyLog {
  constructor(level, payload) {
    this.level = level;
    this.payload = payload;
    this.timestamp = new Date();
    this.performanceTime = performance.now();
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

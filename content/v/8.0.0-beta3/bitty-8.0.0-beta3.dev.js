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

  #_logLevels = ["none", "error", "warn", "info", "debug", "trace"];
  #_logLevel = "warn";

  async connectedCallback() {
    await this.makeConnection();
    if (this.conn) {
      this.createBridges();
      this.ingestJSON();
      this.addEventListeners();
      await this.runBittyReady();
    }
  }

  async _fetchJSON(key, url, options = {}) {
    let response = await fetch(url, options);
    try {
      if (response.ok === true) {
        const json = await response.json();
        if (this.conn.json[key] !== undefined) {
          this.conn.json[key] = json;
          return this.conn.addLog(
            "warn",
            "fetchJSON",
            true,
            `Overwrote existing key '${key}' with JSON fetched from '${url}'`,
            null,
          );
        } else {
          this.conn.json[key] = json;
          return this.conn.addLog(
            "info",
            "fetchJSON",
            true,
            `fetched JSON from '${url}' and stored in key '${key}'`,
            null,
          );
        }
      } else {
        console.error(response);
        return this.conn.addLog(
          "error",
          "fetchJSON",
          false,
          `Error fetching JSON from '${url}' for key '${key}'`,
          {
            redirect: response.redirect,
            status: response.status,
            statusText: response.statusText,
            type: response.type,
            url: response.url,
          },
        );
      }
    } catch (error) {
      return this.conn.addLog(
        "error",
        "fetchJSON",
        false,
        `Error fetching JSON from '${url}' for key '${key}'`,
        error.toString(),
      );
    }
  }

  _getLogLevel() {
    return this.#_logLevel;
  }

  _removeJSON(key) {
    // TODO: Improve messaging if value
    // was in localstorage but not in
    // the current this.conn.json set.
    localStorage.removeItem(key);
    if (this.conn.json[key] === undefined) {
      return this.conn.addLog(
        "warn",
        "removeJSON",
        true,
        `JSON with key '${key}' already does not exist.`,
        null,
      );
    } else {
      delete this.conn.json[key];
      return this.conn.addLog(
        "info",
        "removeJSON",
        true,
        `Removed JSON with key: ${key}`,
        null,
      );
    }
  }

  _renderJSON(key, subs = {}, pretty = true) {
    // TODO at some point for a consistent API:
    // handle arrays of strings, elements/arrays-of-elements,
    // fragments/arrays-of-fragments, svgs/arrays-of-svgs,
    // and other jsons.

    let jsonString = pretty
      ? JSON.stringify(this.conn.json[key], null, 2)
      : JSON.stringify(this.conn.json[key]);
    if (subs !== null) {
      for (const needle of Object.keys(subs)) {
        jsonString = jsonString.replaceAll(needle, subs[needle]);
      }
    }
    if (jsonString === undefined) {
      this.addLogBridge(
        "error",
        "renderJSON",
        false,
        `Attempted to render non-existing json with key '${key}'`,
      );
    }
    return jsonString;
  }

  _send(payload, signal) {
    const ev = new BittySendEvent(payload, signal);
    this.dispatchEvent(ev);
  }

  _setLogLevel(level) {
    if (this.getLogLevelIndex(level) === -1) {
      this.#_logLevel = "warn";
      this.addLogBridge(
        "warn",
        "setLogLevel",
        false,
        `Attempted to setLogLevel(level) to an invalid level: '${level}'. Resetting log level to 'warn'`,
      );
    } else {
      this.#_logLevel = level;
    }
  }

  /** internal */
  addEventListeners() {
    // Internal bitty listeners
    ["bittysendevent", "bittytriggerevent"].forEach(
      (listener) => {
        window.addEventListener(listener, (ev) => {
          this.processEventBridge.call(this, ev);
        });
      },
    );
    if (this.dataset.listeners !== undefined) {
      this.dataset.listeners.trim().split(/\s+/m).forEach((listener) => {
        window.addEventListener(listener, (ev) => {
          if (ev.target.dataset.send) {
            this.processEventBridge.call(this, ev);
          }
        });
      });
    } else {
      ["click", "input"].forEach((listener) => {
        window.addEventListener(listener, (ev) => {
          if (
            ev.target.dataset.send && ev.target.dataset.listeners === undefined
          ) {
            this.processEventBridge.call(this, ev);
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
            this.processEventBridge.call(this, ev);
          }
        }
      });
    });
  }

  addJSONBridge(key, json) {
    if (json === undefined) {
      return this.conn.addLog(
        "error",
        "addJSON",
        false,
        `No value passed in for key '${key}'`,
        null,
      );
    } else if (typeof json === "string") {
      try {
        this.conn.json[key] = JSON.parse(json);
        localStorage.setItem(
          key,
          JSON.stringify({ data: this.conn.json[key] }),
        );
        return this.conn.addLog(
          "info",
          "addJSON",
          true,
          `Added JSON with key: ${key}`,
          null,
        );
      } catch (error) {
        return this.conn.addLog(
          "error",
          "addJSON",
          false,
          `Could not parse JSON for key: ${key}`,
          null,
        );
      }
    } else {
      this.conn.json[key] = JSON.parse(JSON.stringify(json));
      localStorage.setItem(
        key,
        JSON.stringify({ data: this.conn.json[key] }),
      );
      return this.conn.addLog(
        "info",
        "addJSON",
        true,
        `Added JSON with key: ${key}`,
        null,
      );
    }
  }

  // TODO: Add stacktrace
  addLogBridge(level, type, ok, message, extraInfo = null) {
    const log = new BittyLog(level, type, ok, message, extraInfo);
    this.conn.logs.push(log);
    //    console.log(`${level} - ${this.#_logLevel}`);

    if (
      this.getLogLevelIndex(level) <= this.getLogLevelIndex(this.#_logLevel)
    ) {
      //  console.log(this.getLogLevelIndex(level));
      if (this.getLogLevelIndex(level) === 1) {
        console.error(log);
      } else if (this.getLogLevelIndex(level) === 2) {
        console.warn(log);
      } else {
        console.log(log);
      }
    }
    return log;
  }

  createBridges() {
    this.conn.logLevel = 2;
    this.conn.logs = [];
    this.conn.json = {};
    this.conn.fetchJSON = this._fetchJSON.bind(this);
    this.conn.getLogLevel = this._getLogLevel.bind(this);
    this.conn.removeJSON = this._removeJSON.bind(this);
    this.conn.renderJSON = this._renderJSON.bind(this);
    this.conn.setLogLevel = this._setLogLevel.bind(this);
    this.conn.send = this._send.bind(this);
    this.conn.addJSON = this.addJSONBridge.bind(this);
    this.conn.addLog = this.addLogBridge.bind(this);
    this.conn.loadJSON = this.loadJSONBridge.bind(this);
    this.conn.saveJSON = this.saveJSONBridge.bind(this);
    this.conn.sleep = this.sleepBridge.bind(this);
    this.conn.trigger = this.triggerBridge.bind(this);
    this.processEventBridge = this.processEvent.bind(this);
  }

  getLogLevelIndex(level) {
    return this.#_logLevels.indexOf(level.toLowerCase());
  }

  ingestJSON() {
    document.querySelectorAll("script").forEach((el) => {
      if (el.type === "application/json" && el.dataset.key !== undefined) {
        try {
          this.conn.json[el.dataset.key] = JSON.parse(el.text.trim());
        } catch (error) {
          return this.conn.addLog(
            "error",
            "ingestjson",
            `Failed to parse JSON from a script tag on the page.`,
            false,
            error,
          );
        }
      }
    });
  }

  // TODO: throw error if parsing fails
  loadJSONBridge(key, fallback = null) {
    const storage = localStorage.getItem(key);
    try {
      if (storage !== null) {
        const json = JSON.parse(storage);
        if (json.data === undefined) {
          return this.conn.addLog(
            "error",
            "loadJSON",
            false,
            `Attempted to load storage without a top level 'data' in key: ${key}`,
            null,
          );
        } else {
          this.conn.json[key] = JSON.parse(storage).data;
          return this.conn.addLog(
            "info",
            "loadJSON",
            true,
            `Loaded JSON for key: ${key}`,
            null,
          );
        }
      }
      if (fallback !== null) {
        if (typeof fallback === "string") {
          this.conn.json[key] = JSON.parse(fallback);
          localStorage.setItem(key, `{ "data": ${fallback} }`);
          return this.conn.addLog(
            "info",
            "loadJSON",
            true,
            `Loaded fallback JSON for key: ${key}`,
            null,
          );
        } else if (typeof fallback === "object") {
          this.conn.json[key] = fallback;
          localStorage.setItem(key, JSON.stringify({ data: fallback }));
          return this.conn.addLog(
            "info",
            "loadJSON",
            true,
            `Loaded fallback JSON for key: ${key}`,
            null,
          );
        }
      }
      return this.conn.addLog(
        "error",
        "loadJSON",
        false,
        `No JSON in storage or fallback for key: ${key}`,
        null,
      );
    } catch (error) {
      return this.conn.addLog(
        "error",
        "loadJSON",
        false,
        `Could not parse fallback JSON for key: ${key}`,
        null,
      );
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
  async processEvent(ev) {
    let inputSignalString;
    if (ev.type === "bittytriggerevent" || ev.type === "bittysendevent") {
      inputSignalString = ev.bittyPayload.target.dataset.send;
      ev = ev.bittyPayload.content;
    } else {
      inputSignalString = ev.target.dataset.send;
    }
    for (let rawSignalString of splitSignalString(inputSignalString)) {
      const signalParts = rawSignalString.split(":");
      signalParts.reverse();
      const signal = signalParts[0];
      const doAwait = signalParts[1] === "await" ? true : false;
      if (typeof this.conn[signal] === "function") {
        const receivers = document.querySelectorAll(
          `[data-receive~='${signal}']`,
        );
        if (doAwait === true) {
          if (receivers.length === 0) {
            await this.conn[signal](ev, null);
          } else {
            for (const receiver of receivers) {
              await this.conn[signal](ev, receiver);
            }
          }
        } else {
          if (receivers.length === 0) {
            this.conn[signal](ev, null);
          } else {
            for (const receiver of receivers) {
              this.conn[signal](ev, receiver);
            }
          }
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

  saveJSONBridge(key) {
    if (this.conn.json[key] !== undefined) {
      if (typeof this.conn.json[key] === "object") {
        const payload = JSON.stringify({ data: this.conn.json[key] });
        localStorage.setItem(key, payload);
        return this.conn.addLog(
          "info",
          "savejson",
          true,
          `Saved JSON for key: ${key}`,
          null,
        );
      } else {
        return this.conn.addLog(
          "error",
          "savejson",
          false,
          `Tried to saveJSON on something that's not an object: ${key}`,
          null,
        );
      }
    } else {
      return this.conn.addLog(
        "error",
        "savejson",
        false,
        `No JSON available to save with key: ${key}`,
        null,
      );
    }
  }

  async sleepBridge(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  triggerBridge(signal) {
    const ev = new BittyTriggerEvent(signal);
    this.dispatchEvent(ev);
  }
}

// Used both for logging and for
// returned responses from methods
/** internal */
class BittyLog {
  constructor(
    level = "error",
    type = "unknown",
    ok = null,
    message = null,
    extraInfo = null,
  ) {
    this.level = level;
    this.type = type;
    this.ok = ok;
    this.message = message;
    this.extraInfo = extraInfo;
    this.timestamp = new Date();
    this.performanceTime = performance.now();
  }
}

/** internal */
class BittySendEvent extends Event {
  constructor(payload, signals) {
    super("bittysendevent", { bubbles: true });
    this.bittyPayload = {
      content: payload,
      target: { dataset: { send: signals } },
    };
  }
}

/** internal */
class BittyTriggerEvent extends Event {
  constructor(signals) {
    super("bittytriggerevent", { bubbles: true });
    this.bittyPayload = {
      content: null,
      //type: "bittytriggerevent",
      target: { dataset: { send: signals } },
    };
  }
}

customElements.define(tagName, BittyJs);

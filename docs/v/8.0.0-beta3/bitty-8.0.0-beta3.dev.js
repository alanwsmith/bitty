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
        this.conn.json[key] = await response.json();

        //this.conn.text[key] = await response.text();
        //return new BittyFetchResponse(true, null);
      } else {
        // const log = this.addLog(4, {
        //   type: "fetchError",
        //   url: response.url,
        //   status: response.status,
        //   statusText: response.statusText,
        // });
        // return new BittyFetchResponse(false, log);
      }
    } catch (error) {
      // const log = this.addLog(4, {});
      // return new BittyFetchResponse(false, log);
    }
  }

  _removeJSON(key) {
    if (this.conn.json[key] === undefined) {
      return this.conn.addLog(
        2,
        "removeJSON",
        `JSON with key '${key}' already does not exist.`,
        true,
        null,
      );
    } else {
      delete this.conn.json[key];
      return this.conn.addLog(
        3,
        "removeJSON",
        `Removed JSON with key: ${key}`,
        true,
        null,
      );
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
    if (typeof json === "string") {
      try {
        this.conn.json[key] = JSON.parse(json);
        localStorage.setItem(
          key,
          JSON.stringify({ data: this.conn.json[key] }),
        );
        return this.conn.addLog(
          3,
          "addJSON",
          `Added JSON with key: ${key}`,
          true,
          null,
        );
      } catch (error) {
        return this.conn.addLog(
          1,
          "addJSON",
          `Could not parse JSON for key: ${key}`,
          false,
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
        3,
        "addJSON",
        `Added JSON with key: ${key}`,
        true,
        null,
      );
    }
  }

  // TODO: Add stacktrace
  addLogBridge(level, type, message, ok, extraInfo = null) {
    const log = new BittyLog(level, type, message, ok, extraInfo);
    this.conn.logs.push(log);
    if (level <= this.conn.logLevel) {
      if (level === 1) {
        console.error(log);
      } else if (level === 2) {
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
    this.conn.removeJSON = this._removeJSON.bind(this);
    this.conn.addJSON = this.addJSONBridge.bind(this);
    this.conn.addLog = this.addLogBridge.bind(this);
    this.conn.loadJSON = this.loadJSONBridge.bind(this);
    this.conn.saveJSON = this.saveJSONBridge.bind(this);
    this.conn.sleep = this.sleepBridge.bind(this);
    this.conn.trigger = this.triggerBridge.bind(this);
    this.processEventBridge = this.processEvent.bind(this);
  }

  ingestJSON() {
    document.querySelectorAll("script").forEach((el) => {
      if (el.type === "application/json" && el.dataset.key !== undefined) {
        try {
          this.conn.json[el.dataset.key] = JSON.parse(el.text.trim());
        } catch (error) {
          return this.conn.addLog(
            1,
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
            1,
            "loadJSON",
            `Attempted to load storage without a top level 'data' in key: ${key}`,
            false,
            null,
          );
        } else {
          this.conn.json[key] = JSON.parse(storage).data;
          return this.conn.addLog(
            3,
            "loadJSON",
            `Loaded JSON for key: ${key}`,
            true,
            null,
          );
        }
      }
      if (fallback !== null) {
        if (typeof fallback === "string") {
          this.conn.json[key] = JSON.parse(fallback);
          localStorage.setItem(key, `{ "data": ${fallback} }`);
          return this.conn.addLog(
            3,
            "loadJSON",
            `Loaded fallback JSON for key: ${key}`,
            true,
            null,
          );
        } else if (typeof fallback === "object") {
          this.conn.json[key] = fallback;
          localStorage.setItem(key, JSON.stringify({ data: fallback }));
          return this.conn.addLog(
            3,
            "loadJSON",
            `Loaded fallback JSON for key: ${key}`,
            true,
            null,
          );
        }
      }
      return this.conn.addLog(
        1,
        "loadJSON",
        `No JSON in storage or fallback for key: ${key}`,
        false,
        null,
      );
    } catch (error) {
      return this.conn.addLog(
        1,
        "loadJSON",
        `Could not parse fallback JSON for key: ${key}`,
        false,
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
    if (ev.type === "bittytriggerevent" || ev.type === "bittysendevent") {
      ev = ev.bittyPayload;
    }
    for (let rawSignalString of splitSignalString(ev.target.dataset.send)) {
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
          3,
          "savejson",
          `Saved JSON for key: ${key}`,
          true,
          null,
        );
      } else {
        return this.conn.addLog(
          1,
          "savejson",
          `Tried to saveJSON on something that's not an object: ${key}`,
          false,
          null,
        );
      }
    } else {
      return this.conn.addLog(
        1,
        "savejson",
        `No JSON available to save with key: ${key}`,
        false,
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
class BittyLog {
  constructor(level, type, message, ok, extraInfo = null) {
    this.level = level;
    this.type = type;
    this.message = message;
    this.ok = ok;
    this.extraInfo = extraInfo;
    this.timestamp = new Date();
    this.performanceTime = performance.now();
  }
}

/** internal */
class BittyTriggerEvent extends Event {
  constructor(signals) {
    super("bittytriggerevent", { bubbles: true });
    this.bittyPayload = {
      type: "bittytriggerevent",
      target: { dataset: { send: signals } },
    };
  }
}

customElements.define(tagName, BittyJs);

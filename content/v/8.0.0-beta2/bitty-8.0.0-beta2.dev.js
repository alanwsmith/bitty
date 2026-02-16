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
  #_collectionLogLevel = 2;
  #_collectionLogFunctions;
  #_elements = {};
  #_html = {};
  #_json = {};
  #_outputLogLevel = 2;
  #_outputLogFunctions;
  #_logLevels = ["trace", "debug", "log", "warn", "error", "none"];
  #_logs = [];
  #_svgs = {};
  #_text = {};

  constructor() {
    super();
  }

  // addElement(id, content) {
  //   if (typeof content === "string") {
  //     this.conn.element[id] = content;
  //     // TODO: accept html element.
  //     // TODO: If you pass in a document frag, pull
  //     // the first element and throw a warning.
  //     // Should be able to pull stuff from addHTML
  //   } else {
  //     // TODO: Convert this to a bitty error.
  //     console.error("Unknown type of input sent to `addHTML`");
  //   }
  // }

  /** internal */
  addEventListeners() {
    // Internal bitty listeners
    ["bittysendapi", "bittytriggerapi"].forEach(
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

  addHTML(id, content) {
    if (typeof content === "string") {
      this.#_html[id] = content;
    } else if (
      content instanceof DocumentFragment
    ) {
      const copier = document.createElement("div");
      copier.appendChild(content.cloneNode(true));
      this.#_html[id] = copier.innerHTML;
    } else if (
      content instanceof HTMLElement
    ) {
      this.#_html[id] = content.outerHTML;
    } else {
      // TODO: Convert this to a bitty error.
      console.error("Unknown type of input sent to `addHTML`");
    }
  }

  addJSON(id, content) {
    // TODO: Add error if JSON doesn't parse
    if (typeof content === "string") {
      this.conn.json[id] = content;
    } else {
      this.conn.json[id] = JSON.stringify(content);
    }
  }

  /** internal */
  addLog(level, payload) {
    const log = this.#_collectionLogFunctions[level](payload);
    this.#_logs.push(log);
    if (this.#_outputLogLevel <= level) {
      this.#_outputLogFunctions[level](log);
    }
    return log;
  }

  addSVG(id, content) {
    this.#_svgs[id] = content;
  }

  addStylesheet(styles) {
    const newStylesheet = new CSSStyleSheet();
    newStylesheet.replaceSync(styles);
    document.adoptedStyleSheets.push(newStylesheet);
    return newStylesheet;
  }

  addTEXT(id, content) {
    this.conn.text[id] = content;
  }

  collectionLogLevel() {
    return this.#_logLevels[this.#_collectionLogLevel];
  }

  /** internal */
  async connectedCallback() {
    this.initLogFunctions();
    await this.makeConnection();
    if (this.conn) {
      this.initElementMethods();
      this.conn.api = this;
      this.conn.element = {};
      this.conn.fragment = {};
      this.conn.json = {};
      this.conn.svg = {};
      this.conn.text = {};
      this.handleEventBridge = this.processEvent.bind(this);
      this.addEventListeners();
      this.ingestJSON();
      this.ingestTEXT();
      this.ingestSVGs();
      await this.runBittyReady();
    }
  }

  initElementMethods() {
    this.conn.element = {};
    this.conn.addElement = this.elementAdd.bind(this);

    // (key, content) => {
    // if (typeof content === "string") {
    //   console.log("HEHREHRHEHRHEHR");
    //   this.conn.element[id] = content;
    // }
    // //     // TODO: accept html element.
    // //     // TODO: If you pass in a document frag, pull
    // //     // the first element and throw a warning.
    // //     // Should be able to pull stuff from addHTML
    // //   } else {
    // //     // TODO: Convert this to a bitty error.
    // //     console.error("Unknown type of input sent to `addHTML`");
    // //   }
    //};
    this.conn.renderElement = (key, subs) => {};
    this.conn.saveElement = (key, content) => {};
    this.conn.updateElement = (key, content) => {};
  }

  elementAdd(key, content) {
    if (content instanceof Element) {
      this.conn.element[key] = content.outerHTML;
      return new BittyResult(true, null);
    } else if (content instanceof DocumentFragment) {
      const error = new DefaultBittyLog(
        4,
        "Attempted to send document fragment to .addElement(key, content)",
      );
      return new BittyResult(false, error);
    } else {
      this.conn.element[key] = content;
      return new BittyResult(true);
    }
  }

  async copy(selector) {
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

  // TODO, if you call this.api.element without
  // an argument, return the list of
  // available IDs sorted alphabetically.
  renderElement(id, subs = {}) {
    const skeleton = document.createElement("template");
    skeleton.innerHTML = this.conn.element[id];
    const tmpEl = skeleton.content.cloneNode(true);
    return tmpEl.firstChild;
  }

  debug(payload) {
    this.addLog(1, payload);
  }

  error(payload) {
    this.addLog(4, payload);
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

  getStorageOr(key, alt) {
    const storage = localStorage.getItem(key);
    if (storage === null) {
      return alt;
    } else {
      return JSON.parse(storage);
    }
  }

  async fetchTEXT(key, url, options = {}) {
    let response = await fetch(url, options);
    try {
      if (response.ok === true) {
        this.conn.text[key] = await response.text();
        return new BittyFetchResponse(true, null);
      } else {
        const log = this.addLog(4, {
          type: "fetchError",
          url: response.url,
          status: response.status,
          statusText: response.statusText,
        });
        return new BittyFetchResponse(false, log);
      }
    } catch (error) {
      const log = this.addLog(4, {});
      return new BittyFetchResponse(false, log);
    }

    // try {
    //   if (!response.ok) {
    //     const bittyError = new BittyFetchError(
    //       response.url,
    //       response.status,
    //       response.statusText,
    //     );
    //     this.addLog(4, bittyError);
    //     // this.level = level;
    //     // this.payload = payload;
    //     // this.timestamp = new Date();
    //     // this.performanceTime = performance.now();
    //     // TODO: Log error with BittyLog
    //     throw bittyError;
    //   } else {
    //     // TODO: Figure out what to do with errors here.
    //     let content = await response.text();
    //     for (let needle of Object.keys(subs)) {
    //       content = content.replaceAll(needle, subs[needle]);
    //     }
    //     return new BittyRequestResponse(content, null);
    //   }
    // } catch (error) {
    //   return new BittyRequestResponse(undefined, error);
    // }
  }

  // TODO, if you call this.api.html without
  // an argument, return the list of
  // available IDs sorted alphabetically.
  html(id, subs = {}) {
    const skeleton = document.createElement("template");
    skeleton.innerHTML = this.#_html[id];
    return skeleton.content.cloneNode(true);
  }

  // TODO, if you call this.api.json without
  // an argument, return the list of
  // available IDs sorted alphabetically.
  json(key, subs = {}) {
    return JSON.parse(this.#_json[key]);
    //return JSON.parse(this.#_json[id]);
  }

  // Things that need to be combined for
  // testing:
  // - No json on the page with the id
  // - There is json on the page with
  // the id
  // - no key in localstorage with
  // no fallback
  // - no key in localstoraeg with
  // a fallback.
  // - data in localstorage
  // - calling fetchJSON to override
  // data
  //
  //

  // Return `loaded`, `initialized`,
  // `missing`, or `error` (for parsing
  // errors), and "fallback" if the data
  // from the page was used. depending on what happens.
  loadJSON(key) {
    const storage = localStorage.getItem(key);
    if (storage !== undefined) {
      this.#_json[key] = JSON.stringify(
        JSON.parse(storage).data,
      );
      // console.log(JSON.parse(storage));
      //this.#_json[key] = JSON.stringify(JSON.parse(storage).data);
    }
    //  console.log(this.#_json);
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
        return new DefaultBittyLog(index, payload);
      };

      const preface = `BITTY_${this.#_logLevels[index].toUpperCase()}`;
      this.#_outputLogFunctions[index] = (log) => {
        if (log.timestamp !== undefined) {
          if (typeof log.payload === "string") {
            if (log.level === undefined || log.level <= 2) {
              console.log(
                `[${preface}|${log.timestamp.toISOString()}] ${log.payload}`,
              );
            } else {
              console.error(
                `[${preface}|${log.timestamp.toISOString()}] ${log.payload}`,
              );
            }
          } else {
            if (log.level === undefined || log.level <= 2) {
              console.log(
                `[${preface}|${log.timestamp.toISOString()}|See object below]`,
              );
            } else {
              console.error(
                `[${preface}|${log.timestamp.toISOString()}|See object below]`,
              );
            }
            console.log(log.payload);
          }
        } else {
          const localTimestamp = new Date();
          if (typeof log.payload === "string") {
            if (log.level === undefined || log.level <= 2) {
              console.log(
                `[${preface}|${localTimestamp.toISOString()}] ${log.payload}`,
              );
            } else {
              console.error(
                `[${preface}|${localTimestamp.toISOString()}] ${log.payload}`,
              );
            }
          } else {
            if (log.level === undefined || log.level <= 2) {
              console.log(
                `[${preface}|${localTimestamp.toISOString()}|See object below]`,
              );
            } else {
              console.error(
                `[${preface}|${localTimestamp.toISOString()}|See object below]`,
              );
            }
            console.log(log.payload);
          }
        }
      };
    });
  }

  /** internal */
  ingestJSON() {
    document.querySelectorAll("script").forEach((el) => {
      if (el.type === "application/json" && el.id !== undefined) {
        try {
          //if (el.text.trim() !== "") {
          this.#_json[el.id] = el.text.trim();
          //}
        } catch (error) {
          // TODO: make test for error state
          // in test unit-tests test suite.
          console.log(error);
        }
      }
    });
  }

  /** internal */
  ingestSVGs() {
    document.querySelectorAll("script").forEach((el) => {
      if (
        (el.type === "image/svg+xml") &&
        el.id !== undefined
      ) {
        try {
          this.#_svgs[el.id] = el.text;
        } catch (error) {
          // TODO: make test for error state
          // in test unit-tests test suite.
          console.log(error);
        }
      }
    });
  }

  /** internal */
  ingestTEXT() {
    this.conn.text = {};
    document.querySelectorAll("script").forEach((el) => {
      if (el.type === "text/plain" && el.id !== undefined) {
        try {
          this.conn.text[el.id] = el.text;
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

  outputLogLevel() {
    return this.#_logLevels[this.#_outputLogLevel];
  }

  /** internal */
  async processEvent(ev) {
    if (ev.type === "bittytriggerapi" || ev.type === "bittysendapi") {
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

  // TODO: log error if the JSON doesn't parse
  // properly before saving the string.
  saveJSON(key) {
    localStorage.setItem(
      key,
      JSON.stringify(JSON.parse(`{ "data": ${this.#_json[key]} }`)),
    );
    return { ok: true };
  }

  // TODO: Add setJSON(key, string|object) that
  // upcerts the data into `this.#_json`
  // and saves it

  send(payload, signal) {
    const ev = new BittySendAPIEvent(payload, signal);
    this.dispatchEvent(ev);
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

  async sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  // TODO: Stort data in `this.conn.svg` and
  // switch this to `renderSVG(key, subs={})`
  // TODO, if you call this.api.svg without
  // an argument, return the list of
  // available IDs sorted alphabetically.
  svg(key, subs = {}) {
    const tmpl = document.createElement("template");
    let content = this.replaceSubs(this.#_svgs[key], subs);
    tmpl.innerHTML = content;
    const wrapper = tmpl.content.cloneNode(true);
    const svg = wrapper.querySelector("svg");
    return svg;
  }

  replaceSubs(content, subs) {
    for (let needle of Object.keys(subs)) {
      if (Array.isArray(subs[needle]) && subs[needle][0] !== undefined) {
        if (subs[needle][0] instanceof HTMLElement) {
          content = content.replaceAll(
            needle,
            subs[needle].map((item) => item.outerHTML).join(""),
          );
        } else if (subs[needle][0] instanceof DocumentFragment) {
          content = content.replaceAll(
            needle,
            subs[needle].map((item) => item.innerHTML).join(""),
          );
        } else if (subs[needle][0] instanceof SVGSVGElement) {
          content = content.replaceAll(
            needle,
            subs[needle].map((item) => item.outerHTML).join(""),
          );
        } else {
          content = content.replaceAll(needle, subs[needle].join(""));
        }
      } else {
        if (subs[needle] instanceof HTMLElement) {
          content = content.replaceAll(needle, subs[needle].outerHTML);
        } else if (subs[needle] instanceof DocumentFragment) {
          content = content.replaceAll(needle, subs[needle].innerHTML);
        } else if (subs[needle] instanceof SVGSVGElement) {
          content = content.replaceAll(needle, subs[needle].outerHTML);
        } else {
          content = content.replaceAll(needle, subs[needle]);
        }
      }
    }
    return content;
  }

  // TODO, if you call this.api.text without
  // an argument, return the list of
  // available IDs sorted alphabetically.
  renderTEXT(key, subs = {}) {
    return this.replaceSubs(this.conn.text[key], subs);
  }

  trace(payload) {
    this.addLog(0, payload);
  }

  trigger(signal) {
    const ev = new BittyTriggerEvent(signal);
    this.dispatchEvent(ev);
  }

  warn(payload) {
    this.addLog(3, payload);
  }
}

class DefaultBittyLog {
  constructor(level, payload) {
    this.level = level;
    this.payload = payload;
    this.timestamp = new Date();
    this.performanceTime = performance.now();
  }
}

class BittyResult {
  constructor(ok, error = null) {
    this.ok = ok;
    this.error = error;
  }
}

// TODO: Transfer into general BittyResult
class BittyFetchResponse {
  constructor(ok, error) {
    this.ok = ok;
    this.error = error;
  }
}

/** internal */
class BittySendAPIEvent extends Event {
  constructor(payload, signals) {
    super("bittysendapi", { bubbles: true });
    this.bittyPayload = payload;
    this.bittyPayload.type = "bittysendapi";
    this.bittyPayload.target = {
      dataset: { send: signals },
    };
  }
}

/** internal */
class BittyTriggerEvent extends Event {
  constructor(signals) {
    super("bittytriggerapi", { bubbles: true });
    this.bittyPayload = {
      type: "bittytriggerapi",
      target: { dataset: { send: signals } },
    };
  }
}

customElements.define(tagName, BittyJs);

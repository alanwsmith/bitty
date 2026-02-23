const version = [8, 0, 0];
const tagName = `bitty-${version[0]}-${version[1]}`;

/** internal */
function splitSignalString(input) {
  return input
    .trim()
    .split(/\s+/m)
    .map((l) => l.trim());
}

/** internal */
function findSenders(el) {
  const senders = [];
  while (el) {
    if (el.matches("[data-send]")) {
      senders.push(el);
    }
    el = el.parentElement;
  }
  return senders;
}

class BittyJs extends HTMLElement {
  static addedEventListeners = false;
  static loadedPageClasses = false;
  static moduleFiles = [];

  constructor() {
    super();
  }

  /** internal */
  #_logLevels = ["none", "error", "warn", "info", "debug", "trace"];
  /** internal */
  #_logLevel = "warn";

  /** internal */
  #bits = [];

  /** internal */
  async connectedCallback() {
    // this.processEventBridge = this.processEvent.bind(this);
    //this.addEventListeners();
    this.loadModuleClasses();
    this.loadWindowClasses();
    // await this.makeConnection();
    // if (this.conn) {
    //   this.createBridges();
    //   this.addEventListeners();
    //   this.ingestScriptTags(document);
    //   await this.runBittyReady();
    // }
  }

  loadWindowClasses() {
    if (this.constructor.loadedPageClasses === false) {
      this.constructor.loadedPageClasses = true;
      if (window.BittyClasses) {
        for (const bittyClassKey of Object.keys(window.BittyClasses)) {
          const bittyClass = new window.BittyClasses[bittyClassKey]();
          this.addBitty(bittyClass);
          this.#bits.push(bittyClass);
          bittyClass._runBittyReady();
        }
      }
    }
  }

  async loadModuleClasses() {
    if (this.dataset.connect) {
      const connString = this.dataset.connect.trim();
      if (
        // TODO: Add tests to verify each path prefix
        connString.substring(0, 4) === "http" ||
        connString.substring(0, 1) === "/" ||
        connString.substring(0, 1) === "."
      ) {
        if (this.constructor.moduleFiles.includes(connString) === false) {
          this.constructor.moduleFiles.push(connString);
          const remoteBits = await import(connString);
          for (const bit of Object.keys(remoteBits)) {
            const bittyClass = new remoteBits[bit]();
            this.addBitty(bittyClass);
            this.#bits.push(bittyClass);
            await bittyClass._runBittyReady();
          }
        }
      }
    }
  }

  addBitty(target) {
    // target.processEvent = this.processEvent.bind(target);
    // target.api = this;

    target.logs = [{ ok: false }, { ok: false }];
    target.json = {};
    target._svg = {};
    target._elemnet = {};
    target._fragment = {};
    target._element = () => {};
    target._runBittyReady = this._runBittyReady.bind(target);
    target._svg = () => {};
    target.addLog = this._addLog.bind(target);
    target.createElement = () => {
      return { ok: false };
    };
    target.createFragment = () => {
      return { ok: false };
    };
    target.createJSON = this._createJSON.bind(this);
    target.createSVG = () => {
      return { ok: false };
    };
    target.deleteElement = () => {
      return { ok: false };
    };
    target.deleteFragment = () => {
      return { ok: false };
    };
    target.deleteJSON = () => {
      return { ok: false };
    };
    target.deleteSVG = () => {
      return { ok: false };
    };
    target.fetchElement = () => {
      return { ok: false };
    };
    target.fetchFragment = () => {
      return { ok: false };
    };
    target.fetchJSON = () => {
      return { ok: false };
    };
    target.fetchSVG = () => {
      return { ok: false };
    };
    target.fetchTemplates = () => {
      return { ok: false };
    };
    target.getLogLevel = this._getLogLevel.bind(target);
    target.loadElement = () => {
      return { ok: false };
    };
    target.loadFragment = () => {
      return { ok: false };
    };
    target.loadJSON = this._loadJSON.bind(target);
    target.saveJSON = this._saveJSON.bind(target);
    target.loadSVG = () => {
      return { ok: false };
    };
    target.renderElement = () => {
      return { ok: false };
    };
    target.renderSVG = () => {
      return { ok: false };
    };
    target.send = this._send.bind(target);
    target.setLogLevel = () => {};
    target.sleep = this._sleep.bind(target);
    target.trigger = this._trigger.bind(target);
    target.updateElement = () => {
      return { ok: false };
    };
    target.updateFragment = () => {
      return { ok: false };
    };
    target.updateSVG = () => {
      return { ok: false };
    };
    target.getDataAsFloat = () => {};
    target.getDataAsInt = () => {};
    target.processEvent = this._processEvent.bind(target);
    target.processTrigger = this._processTrigger.bind(target);
    target.setCSS = () => {
      return { ok: false };
    };
    target.renderFragment = this._renderFragment.bind(target);
    target.renderElement = () => {
      return { ok: false };
    };
    target.renderSVG = () => {
      return { ok: false };
    };
    target.updateEventV4 = this._updateEventV4.bind(target);
    target.updateReceiverV4 = this._updateReceiverV4.bind(target);
    target.qs = this._qs.bind(target);
    target.qsa = this._qsa.bind(target);
    //
    target.addListeners = this._addListeners.bind(target);
    target.addListeners();
  }

  async _runBittyReady() {
    if (typeof this.bittyReady === "function") {
      this.bittyReady();
    }
  }

  async _copy(selector) {
    const el = document.querySelector(selector);
    const text = el.value !== undefined ? el.value : el.innerHTML;
    try {
      await navigator.clipboard.writeText(text);
    } catch (error) {
      // TODO: Switch this to logging an error.
      console.error("Could not copy text to clipboard");
    }
  }

  _createElement(key, content = null, options = {}) {
    const storageKey = `bittyElement_${key}`;
    const details = {
      level: "info",
      key: "createElement",
      ok: true,
      messages: [],
      extraInfo: null,
    };
    if (options.update === undefined || options.update === false) {
      if (key !== null && this.conn._element[key] !== undefined) {
        details.level = "warn";
        details.messages.push(
          `Warning: createElement overwrite an existing element with key '${key}'`,
        );
      }
    }
    if (typeof content === "string") {
      this.conn._element[key] = content;
    } else if (content instanceof Element) {
      this.conn._element[key] = content.outerHTML;
    } else if (content instanceof DocumentFragment) {
      this.conn._element[key] = content.firstChild.outerHTML;
      if (content.childElementCount > 1) {
        details.level = "warn";
        details.messages.push(
          "Warning: A document fragment with more than one child element was used to create an element with .createElement. Only the first element was used. The rest were ignored",
        );
      }
    } else {
      details.level = "error";
      details.ok = false;
      details.messages.push(
        `Tried to create an element for key '${key}' from something other than a string, element, or document fragment which is not supported.`,
      );
    }
    if (details.ok === true) {
      localStorage.setItem(
        storageKey,
        JSON.stringify({ data: this.conn._element[key] }),
      );
    }
    return this.conn.addLog(
      details.level,
      details.key,
      details.ok,
      details.messages.join(" "),
      details.extraInfo,
    );
  }

  _createFragment(key, content = null, options = {}) {
    const storageKey = `bittyFragment_${key}`;
    const details = {
      level: "info",
      key: "createFragment",
      ok: true,
      messages: [],
      extraInfo: null,
    };
    if (
      key !== null & this.conn._fragment[key] !== undefined
    ) {
      if (options.update === undefined || options.update === false) {
        details.level = "warn";
        details.messages.push(`Warning overwriting an existing key: '${key}'`);
      }
    }
    if (key === null) {
      details.ok = false;
      details.level = "error";
      details.messages.push(
        `this.createFragment(key, content) was called without 'key' and 'content' arguments.`,
      );
    } else if (content === null) {
      details.ok = false;
      details.level = "error";
      details.messages.push(
        `this.createFragment(key, content) was called without either a 'content' argument.`,
      );
    } else if (typeof content === "string") {
      this.conn._fragment[key] = content;
    } else if (content instanceof Element) {
      this.conn._fragment[key] = content.outerHTML;
    } else if (content instanceof DocumentFragment) {
      this.conn._fragment[key] = [...content.children].map((el) => el.outerHTML)
        .join("");
    } else {
      details.level = "error";
      details.ok = false;
      details.messages.push(
        `Attempted to make a frament for key '${key}' out of something other than a String, Element, or Document Fragment`,
      );
    }
    if (details.ok === true) {
      localStorage.setItem(
        storageKey,
        JSON.stringify({ data: this.conn._fragment[key] }),
      );
    }
    return this.conn.addLog(
      details.level,
      details.key,
      details.ok,
      details.messages.join(" "),
      details.extraInfo,
    );
  }

  _createJSON(key, json) {
    // this is a hack to cleanr the console
    // not sure why it's needed.
    // that needs to be figured out.
    // if (this.json === undefined) {
    //   this.json = {};
    // }
    const storageKey = `bittyJSON_${key}`;
    // TODO: Update the result of the method
    // to update details and then just
    // return it at the end.
    const details = {
      level: "info",
      key: "createJSON",
      ok: true,
      messages: [],
      extraInfo: null,
    };
    if (
      json !== undefined && this.json !== undefined &&
      this.json[key] !== undefined
    ) {
      details.level = "warn";
      details.messages.push(
        `Warning: createJSON overwrote an existing JSON with key '${key}'.`,
      );
    }
    if (json === undefined) {
    } else if (typeof json === "string") {
      try {
        this.json[key] = JSON.parse(json);
        localStorage.setItem(
          storageKey,
          JSON.stringify({ data: this.json[key] }),
        );
        details.messages.push(`Added JSON with key: ${key}`);
      } catch (error) {
      }
    } else {
      if (this.json !== undefined && this.json[key] !== undefined) {
        this.json[key] = JSON.parse(JSON.stringify(json));
        localStorage.setItem(
          storageKey,
          JSON.stringify({ data: this.json[key] }),
        );
        details.messages.push(`Added JSON with key: ${key}`);
      }
    }

    // tmp hack to clear console before testing

    return { ok: false };
  }

  // _createJSON(key, json) {
  //   const storageKey = `bittyJSON_${key}`;
  //   // TODO: Update the result of the method
  //   // to update details and then just
  //   // return it at the end.
  //   const details = {
  //     level: "info",
  //     key: "createJSON",
  //     ok: true,
  //     messages: [],
  //     extraInfo: null,
  //   };
  //   if (json !== undefined && this.json[key] !== undefined) {
  //     details.level = "warn";
  //     details.messages.push(
  //       `Warning: createJSON overwrote an existing JSON with key '${key}'.`,
  //     );
  //   }
  //   if (json === undefined) {
  //     return this.addLog(
  //       "error",
  //       "addJSON",
  //       false,
  //       `No value passed in for key '${key}'`,
  //       null,
  //     );
  //   } else if (typeof json === "string") {
  //     try {
  //       this.json[key] = JSON.parse(json);
  //       localStorage.setItem(
  //         storageKey,
  //         JSON.stringify({ data: this.json[key] }),
  //       );
  //       details.messages.push(`Added JSON with key: ${key}`);
  //     } catch (error) {
  //       return this.addLog(
  //         "error",
  //         "addJSON",
  //         false,
  //         `Could not parse JSON for key: ${key}`,
  //         null,
  //       );
  //     }
  //   } else {
  //     this.json[key] = JSON.parse(JSON.stringify(json));
  //     localStorage.setItem(
  //       storageKey,
  //       JSON.stringify({ data: this.json[key] }),
  //     );
  //     details.messages.push(`Added JSON with key: ${key}`);
  //   }
  //   return this.addLog(
  //     details.level,
  //     details.key,
  //     details.ok,
  //     details.messages.join(""),
  //     details.extraInfo,
  //   );
  // }

  _createSVG(key, content = null, options = {}) {
    const storageKey = `bittySVG_${key}`;
    const details = {
      level: "info",
      key: "createSVG",
      ok: true,
      messages: [],
      extraInfo: null,
    };
    if (
      key !== null & this.conn._svg[key] !== undefined
    ) {
      if (options.update === undefined || options.update === false) {
        details.level = "warn";
        details.messages.push(`Warning overwriting an existing key: '${key}'`);
      }
    }
    if (key === null) {
      details.ok = false;
      details.level = "error";
      details.messages.push(
        `this.createSVG(key, content) was called without 'key' and 'content' arguments.`,
      );
    } else if (content === null) {
      details.ok = false;
      details.level = "error";
      details.messages.push(
        `this.createSVG(key, content) was called without either a 'content' argument.`,
      );
    } else if (typeof content === "string") {
      this.conn._svg[key] = content;
    } else if (content instanceof SVGSVGElement) {
      this.conn._svg[key] = content.outerHTML;
    } else {
      details.level = "error";
      details.ok = false;
      details.messages.push(
        `Attempted to make a frament for key '${key}' out of something other than a String or an SVG.`,
      );
    }
    if (details.ok === true) {
      localStorage.setItem(
        storageKey,
        JSON.stringify({ data: this.conn._svg[key] }),
      );
    }
    return this.conn.addLog(
      details.level,
      details.key,
      details.ok,
      details.messages.join(" "),
      details.extraInfo,
    );
  }

  async _fetchElement(key, url, fallback = null, options = {}) {
    const storageKey = `bittyElement_${key}`;
    const details = {
      level: "info",
      key: "fetchElement",
      ok: true,
      messages: [],
      extraInfo: null,
    };
    try {
      const fetchOptions = options.fetchOptions !== undefined
        ? options.fetchOptions
        : {};
      let response = await fetch(url, fetchOptions);
      if (response.ok === true) {
        const text = await response.text();
        if (this.conn._element[key] !== undefined) {
          details.level = "warn";
          details.messages.push(
            `Warning: fetch of ${url} overwrote existing element with key '${key}'`,
          );
        }
        const template = document.createElement("template");
        template.innerHTML = text;
        if (template.content.childElementCount > 1) {
          details.level = "warn";
          details.messages.push(
            `Warning: The got a document fragment with more than one element from ${url} while creating element with key ${key}. Only the first element was used. The others were dropped`,
          );
        }
        this.conn._element[key] = template.content.firstChild.outerHTML;
      } else {
        if (typeof fallback === "string") {
          this.conn._element[key] = fallback;
          details.level = "warn";
          details.messages.push(
            `Used fallback for '${key}' because fetching '${url}' failed.`,
          );
          details.extraInfo = response;
        } else if (fallback instanceof Element) {
          this.conn._element[key] = fallback.outerHTML;
          details.level = "warn";
          details.messages.push(
            `Used fallback for '${key}' because fetching '${url}' failed.`,
          );
          details.extraInfo = response;
        } else if (fallback instanceof DocumentFragment) {
          this.conn._element[key] = [...fallback.children].map((el) => {
            return el.outerHTML;
          }).join("");
          details.level = "warn";
          details.messages.push(
            `Used fallback for '${key}' because fetching '${url}' failed.`,
          );
          details.extraInfo = response;
        } else {
          details.level = "error";
          details.ok = false;
          details.messages.push(
            `Fetching returned status ${response.status}. See 'extraInfo' for details.`,
          );
          details.extraInfo = response;
        }
      }
    } catch (error) {
      details.level = "error";
      details.ok = false;
      details.messages.push(
        `An unidentified error occurred while tyring to fetch ${url} for key '${key}'`,
      );
    }
    if (details.ok === true) {
      localStorage.setItem(
        storageKey,
        JSON.stringify({ data: this.conn._element[key] }),
      );
    }
    return this.conn.addLog(
      details.level,
      details.key,
      details.ok,
      details.messages.join(" "),
      details.extraInfo,
    );
  }

  async _fetchFragment(key, url, fallback = null, options = {}) {
    const storageKey = `bittyFragment_${key}`;
    const details = {
      level: "info",
      key: "fetchFragment",
      ok: true,
      messages: [],
      extraInfo: null,
    };
    try {
      const fetchOptions = options.fetchOptions !== undefined
        ? options.fetchOptions
        : {};
      let response = await fetch(url, fetchOptions);
      if (response.ok === true) {
        const text = await response.text();
        if (this.conn._fragment[key] !== undefined) {
          details.level = "warn";
          details.messages.push(
            `Warning: fetch of ${url} overwrote existing fragment with key '${key}'`,
          );
        }
        this.conn._fragment[key] = text;
      } else {
        if (typeof fallback === "string") {
          this.conn._fragment[key] = fallback;
          details.level = "warn";
          details.messages.push(
            `Used fallback for '${key}' because fetching '${url}' failed.`,
          );
          details.extraInfo = response;
        } else if (fallback instanceof Element) {
          this.conn._fragment[key] = fallback.outerHTML;
          details.level = "warn";
          details.messages.push(
            `Used fallback for '${key}' because fetching '${url}' failed.`,
          );
          details.extraInfo = response;
        } else if (fallback instanceof DocumentFragment) {
          this.conn._fragment[key] = [...fallback.children].map((el) => {
            return el.outerHTML;
          }).join("");
          details.level = "warn";
          details.messages.push(
            `Used fallback for '${key}' because fetching '${url}' failed.`,
          );
          details.extraInfo = response;
        } else {
          details.level = "error";
          details.ok = false;
          details.messages.push(
            `Fetching returned status ${response.status}. See 'extraInfo' for details.`,
          );
          details.extraInfo = response;
        }
      }
    } catch (error) {
      details.level = "error";
      details.ok = false;
      details.messages.push(
        `An unidentified error occurred while tyring to fetch ${url} for key '${key}'`,
      );
    }
    if (details.ok === true) {
      localStorage.setItem(
        storageKey,
        JSON.stringify({ data: this.conn._fragment[key] }),
      );
    }
    return this.conn.addLog(
      details.level,
      details.key,
      details.ok,
      details.messages.join(" "),
      details.extraInfo,
    );
  }

  async _fetchJSON(key, url, fallback = null, options = {}) {
    const storageKey = `bittyJSON_${key}`;
    // TODO: Update this methods so everything
    // uses `details`
    const details = {
      level: "info",
      key: "fetchJSON",
      ok: true,
      messages: [],
      extraInfo: null,
    };
    let response = await fetch(url, options);
    try {
      if (response.ok === true) {
        try {
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
            details.messages.push(
              `fetched JSON from '${url}' and stored in key '${key}'`,
            );
          }
        } catch (parseError) {
          if (fallback !== null) {
            details.level = "warn";
            details.messages.push(
              `Warning: Could not parse JSON from URL ${url}`,
            );
            if (typeof fallback === "string") {
              this.conn.json[key] = JSON.parse(fallback);
            } else if (fallback instanceof Object) {
              this.conn.json[key] = fallback;
            }
          } else {
            details.level = "error";
            details.ok = false;
            details.messages(`Could not parse fallback for key '${key}'.`);
          }
        }
      } else {
        if (fallback !== null) {
          details.level = "warn";
          details.messages.push(
            `Warning: Could not parse JSON from URL ${url}`,
          );
          if (typeof fallback === "string") {
            this.conn.json[key] = JSON.parse(fallback);
          } else if (fallback instanceof Object) {
            this.conn.json[key] = fallback;
          } else {
            details.level = "error";
            details.ok = false;
            details.messages(`Could not parse fallback for key '${key}'.`);
          }
        } else {
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
    if (details.ok === true) {
      localStorage.setItem(
        storageKey,
        JSON.stringify({ data: this.conn.json[key] }),
      );
    }
    return this.conn.addLog(
      details.level,
      details.key,
      details.ok,
      details.messages.join(" "),
      details.extraInfo,
    );
  }

  async _fetchSVG(key, url, fallback = null, options = {}) {
    const storageKey = `bittySVG_${key}`;
    const details = {
      level: "info",
      key: "fetchSVG",
      ok: true,
      messages: [],
      extraInfo: null,
    };
    try {
      const fetchOptions = options.fetchOptions !== undefined
        ? options.fetchOptions
        : {};
      let response = await fetch(url, fetchOptions);
      if (response.ok === true) {
        const text = await response.text();
        if (this.conn._svg[key] !== undefined) {
          details.level = "warn";
          details.messages.push(
            `Warning: fetch of ${url} overwrote existing SVG with key '${key}'`,
          );
        }
        this.conn._svg[key] = text;
      } else {
        if (typeof fallback === "string") {
          this.conn._svg[key] = fallback;
          details.level = "warn";
          details.messages.push(
            `Used fallback for '${key}' because fetching '${url}' failed.`,
          );
          details.extraInfo = response;
        } else if (content instanceof SVGSVGElement) {
          this.conn._svg[key] = content.outerHTML;
          details.level = "warn";
          details.messages.push(
            `Used fallback for '${key}' because fetching '${url}' failed.`,
          );
          details.extraInfo = response;
        } else {
          details.level = "error";
          details.ok = false;
          details.messages.push(
            `Fetching returned status ${response.status}. See 'extraInfo' for details.`,
          );
          details.extraInfo = response;
        }
      }
    } catch (error) {
      details.level = "error";
      details.ok = false;
      details.messages.push(
        `An unidentified error occurred while tyring to fetch ${url} for key '${key}'`,
      );
    }
    if (details.ok === true) {
      localStorage.setItem(
        storageKey,
        JSON.stringify({ data: this.conn._svg[key] }),
      );
    }
    return this.conn.addLog(
      details.level,
      details.key,
      details.ok,
      details.messages.join(" "),
      details.extraInfo,
    );
  }

  async _fetchTemplates(url, options = {}) {
    const details = {
      level: "info",
      key: "fetchTemplates",
      ok: true,
      messages: [],
      extraInfo: null,
    };
    try {
      const fetchOptions = options.fetchOptions !== undefined
        ? options.fetchOptions
        : {};
      let response = await fetch(url, fetchOptions);
      if (response.ok === true) {
        try {
          const text = await response.text();
          const template = document.createElement("template");
          template.innerHTML = text;
          this.ingestScriptTags(template.content);
        } catch (e2) {
          // todo
        }
      }
    } catch (error) {
      // todo
    }
    return this.conn.addLog(
      details.level,
      details.key,
      details.ok,
      details.messages.join(" "),
      details.extraInfo,
    );
  }

  _getLogLevel() {
    return "warn";
    // return this.#_logLevel;
  }

  _loadElement(key, fallback = null) {
    const storageKey = `bittyElement_${key}`;
    const details = {
      level: "info",
      key: "loadElement",
      ok: true,
      messages: [],
      extraInfo: null,
    };
    const storage = localStorage.getItem(storageKey);
    if (key !== null && this.conn._element[key] !== undefined) {
      details.level = "warn";
      details.messages.push(
        `Warning: loadElement() replaced an existing key: ${key}`,
      );
    }
    if (key === null) {
      details.level = "error";
      details.ok = false;
      details.messages.push(
        `No key provided for 'this.loadElement(key [,fallback])'`,
      );
    } else if (
      storage === null && fallback === null
    ) {
      details.level = "error";
      details.ok = false;
      details.messages.push(
        `No storage found for '${key}' and not fallback provided.`,
      );
    } else if (storage !== null) {
      this.conn._element[key] = JSON.parse(storage).data;
    } else if (typeof fallback === "string") {
      this.conn._element[key] = fallback;
    } else if (fallback instanceof Element) {
      this.conn._element[key] = fallback.outerHTML;
    } else if (fallback instanceof DocumentFragment) {
      this.conn._element[key] = fallback.firstChild.outerHTML;
      if (fallback.children.length > 1) {
        details.level = "warn";
        details.messages.push(
          `Warning. The fallback documnet fragment used to loadElement with key '${key}' contained more than one element at its root. The first one was used. The rest were dropped.`,
        );
      }
    } else {
      details.level = "error";
      details.ok = false;
      details.messages.push(
        `loadElement() attempted to use an invalid fallback for key '${key}'. Valid values must be a String, Element, or DocumentFragment.`,
      );
    }
    if (details.ok === true) {
      localStorage.setItem(
        storageKey,
        JSON.stringify({ data: this.conn._element[key] }),
      );
    }
    return this.conn.addLog(
      details.level,
      details.key,
      details.ok,
      details.messages.join(" "),
      details.extraInfo,
    );
  }

  _loadFragment(key, fallback = null) {
    const storageKey = `bittyFragment_${key}`;
    const details = {
      level: "info",
      ok: true,
      messages: [],
    };
    const storage = localStorage.getItem(storageKey);
    if (key !== null && this.conn._fragment[key] !== undefined) {
      details.level = "warn";
      details.messages.push(
        `Warning: loadFragment() replaced an existing key: ${key}`,
      );
    }
    if (key === null) {
      details.level = "error";
      details.ok = false;
      details.messages.push(
        `No key provided for 'this.loadFragment(key [,fallback])'`,
      );
    } else if (
      storage === null && fallback === null
    ) {
      details.level = "error";
      details.ok = false;
      details.messages.push(
        `No storage found for '${key}' and not fallback provided.`,
      );
    } else if (storage !== null) {
      this.conn._fragment[key] = JSON.parse(storage).data;
    } else if (typeof fallback === "string") {
      this.conn._fragment[key] = fallback;
    } else if (fallback instanceof Element) {
      this.conn._fragment[key] = fallback.outerHTML;
    } else if (fallback instanceof DocumentFragment) {
      this.conn._fragment[key] = [...fallback.children].map((el) =>
        el.outerHTML
      ).join("");
    } else {
      details.level = "error";
      details.ok = false;
      details.messages.push(
        `loadFragment() attempted to use an invalid fallback for key '${key}'. Valid values must be a String, Element, or DocumentFragment.`,
      );
    }
    if (details.ok === true) {
      localStorage.setItem(
        storageKey,
        JSON.stringify({ data: this.conn._fragment[key] }),
      );
    }
    return this.conn.addLog(
      details.level,
      "loadFragment",
      details.ok,
      details.messages.join(" "),
      null,
    );
  }

  _loadSVG(key, fallback = null) {
    const storageKey = `bittySVG_${key}`;
    const details = {
      level: "info",
      ok: true,
      messages: [],
    };
    const storage = localStorage.getItem(storageKey);
    if (key !== null && this.conn._svg[key] !== undefined) {
      details.level = "warn";
      details.messages.push(
        `Warning: loadSVG() replaced an existing key: ${key}`,
      );
    }
    if (key === null) {
      details.level = "error";
      details.ok = false;
      details.messages.push(
        `No key provided for 'this.loadSVG(key [,fallback])'`,
      );
    } else if (
      storage === null && fallback === null
    ) {
      details.level = "error";
      details.ok = false;
      details.messages.push(
        `No storage found for '${key}' and not fallback provided.`,
      );
    } else if (storage !== null) {
      this.conn._svg[key] = JSON.parse(storage).data;
    } else if (typeof fallback === "string") {
      this.conn._svg[key] = fallback;
    } else if (fallback instanceof SVGSVGElement) {
      this.conn._svg[key] = fallback.outerHTML;
    } else {
      details.level = "error";
      details.ok = false;
      details.messages.push(
        `loadSVG() attempted to use an invalid fallback for key '${key}'. Valid values must be a String or an SVG.`,
      );
    }
    if (details.ok === true) {
      localStorage.setItem(
        storageKey,
        JSON.stringify({ data: this.conn._svg[key] }),
      );
    }
    return this.conn.addLog(
      details.level,
      "loadSVG",
      details.ok,
      details.messages.join(" "),
      null,
    );
  }

  _deleteElement(key) {
    const storageKey = `bittyElement_${key}`;
    if (
      localStorage.getItem(storageKey) === null &&
      this.conn._element[key] === undefined
    ) {
      return this.conn.addLog(
        "warn",
        "deleteElement",
        true,
        `No existing element with '${key}' available to remove.`,
        null,
      );
    } else {
      localStorage.removeItem(storageKey);
      delete this.conn._element[key];
      return this.conn.addLog(
        "info",
        "deleteElement",
        true,
        `Removed element with key '${key}'`,
        null,
      );
    }
  }

  _deleteSVG(key) {
    const storageKey = `bittySVG_${key}`;
    if (
      localStorage.getItem(storageKey) === null &&
      this.conn._svg[key] === undefined
    ) {
      return this.conn.addLog(
        "warn",
        "deleteSVG",
        true,
        `No existing SVG with '${key}' available to remove.`,
        null,
      );
    } else {
      localStorage.removeItem(storageKey);
      delete this.conn._svg[key];
      return this.conn.addLog(
        "info",
        "deleteSVG",
        true,
        `Removed SVG with key '${key}'`,
        null,
      );
    }
  }

  // This is just a stub to help
  // make loadFragment tests.
  // TODO: Cover this with tests.
  _deleteFragment(key) {
    const storageKey = `bittyFragment_${key}`;
    const details = {
      level: "info",
      ok: true,
      key: "removeFragment",
      messages: [],
    };
    if (
      localStorage.getItem(storageKey) === null &&
      this.conn._fragment[key] === undefined
    ) {
      details.level = "warn",
        details.messages.push(
          `No fragment with key '${key}' exists. Nothing to remove.`,
        );
    } else {
      delete this.conn._fragment[key];
      localStorage.removeItem(storageKey);
      details.messages.push(
        `Fragment with key '${key}' was removed`,
      );
    }
    return this.conn.addLog(
      details.level,
      details.key,
      details.ok,
      details.messages.join(" "),
      null,
    );
  }

  _deleteJSON(key) {
    const storageKey = `bittyJSON_${key}`;
    localStorage.removeItem(storageKey);
    if (this.conn.json[key] === undefined) {
      return this.conn.addLog(
        "warn",
        "deleteJSON",
        true,
        `JSON with key '${key}' already does not exist.`,
        null,
      );
    } else {
      delete this.conn.json[key];
      return this.conn.addLog(
        "info",
        "deleteJSON",
        true,
        `Removed JSON with key: ${key}`,
        null,
      );
    }
  }

  _renderElement(key, subs = {}) {
    if (this.conn._element[key] === undefined) {
      this.conn.addLog(
        "error",
        "renderElement",
        false,
        `Attempted to render non-existing element using key '${key}'`,
      );
      return undefined;
    } else {
      let content = this.conn._element[key];
      for (const needle of Object.keys(subs)) {
        if (subs[needle] instanceof Array === false) {
          subs[needle] = [subs[needle]];
        }
        if (typeof subs[needle][0] === "string") {
          content = content.replaceAll(needle, subs[needle].join(""));
        } else if (
          subs[needle][0] instanceof Element
        ) {
          content = content.replaceAll(
            needle,
            subs[needle].map((el) => el.outerHTML).join(""),
          );
        } else if (
          subs[needle][0] instanceof DocumentFragment
        ) {
          content = content.replaceAll(
            needle,
            subs[needle].map((fragment) => {
              return [...fragment.children].map((el) => {
                return el.outerHTML;
              }).join("");
            }).join(""),
          );
        }
      }
      const template = document.createElement("template");
      template.innerHTML = content;
      return template.content.firstChild;
    }
  }

  _renderFragment(key, subs = {}) {
    const df = document.createElement("template");
    df.innerHTML = "<div>tktkt</div><div>tktktk</div>";
    return df.content;
  }

  // _renderFragment_original(key, subs = {}) {
  //   if (this.conn._fragment[key] === undefined) {
  //     this.conn.addLog(
  //       "error",
  //       "renderFragment",
  //       false,
  //       `Attempted to render non-existing fragment using key '${key}'`,
  //     );
  //     return undefined;
  //   } else {
  //     let content = this.conn._fragment[key];
  //     for (const needle of Object.keys(subs)) {
  //       if (subs[needle] instanceof Array === false) {
  //         subs[needle] = [subs[needle]];
  //       }
  //       if (typeof subs[needle][0] === "string") {
  //         content = content.replaceAll(needle, subs[needle].join(""));
  //       } else if (
  //         subs[needle][0] instanceof Element
  //       ) {
  //         content = content.replaceAll(
  //           needle,
  //           subs[needle].map((el) => el.outerHTML).join(""),
  //         );
  //       } else if (
  //         subs[needle][0] instanceof DocumentFragment
  //       ) {
  //         content = content.replaceAll(
  //           needle,
  //           subs[needle].map((fragment) => {
  //             return [...fragment.children].map((el) => {
  //               return el.outerHTML;
  //             }).join("");
  //           }).join(""),
  //         );
  //       }
  //     }
  //     const template = document.createElement("template");
  //     template.innerHTML = content;
  //     return template.content;
  //   }
  // }

  _renderSVG(key, subs = {}) {
    if (this.conn._svg[key] === undefined) {
      this.conn.addLog(
        "error",
        "renderSVG",
        false,
        `Attempted to render non-existing SVG using key '${key}'`,
      );
      return undefined;
    } else {
      let content = this.conn._svg[key];
      for (const needle of Object.keys(subs)) {
        if (subs[needle] instanceof Array === false) {
          subs[needle] = [subs[needle]];
        }
        if (typeof subs[needle][0] === "string") {
          content = content.replaceAll(needle, subs[needle].join(""));
        } else if (
          subs[needle][0] instanceof Element
        ) {
          content = content.replaceAll(
            needle,
            subs[needle].map((el) => el.outerHTML).join(""),
          );
        } else if (
          subs[needle][0] instanceof SVGElement
        ) {
          content = content.replaceAll(
            needle,
            subs[needle].map((item) => {
              return item.outerHTML;
            }).join(""),
          );
        } else if (
          subs[needle][0] instanceof DocumentFragment
        ) {
          content = content.replaceAll(
            needle,
            subs[needle].map((fragment) => {
              return [...fragment.children].map((el) => {
                return el.outerHTML;
              }).join("");
            }).join(""),
          );
        }
      }
      const template = document.createElement("template");
      template.innerHTML = content.trim();
      return template.content.querySelector("svg");
    }
  }

  _saveElement(key) {
    if (this.conn.element[key] === undefined) {
      return this.conn.addLog(
        "error",
        "saveElement",
        false,
        `Tried to save an element with key '${key}', but it does not exist.`,
      );
    }
    const storageKey = `bittyElement_${key}`;
    const payload = JSON.stringify({
      data: this.conn.element[key].outerHTML,
    });
    localStorage.setItem(storageKey, payload);
    return this.conn.addLog(
      "info",
      "saveElement",
      true,
      `Saved element with key '${key}'`,
    );
  }

  _send(payload, signal) {
    // const ev = new BittySendEvent(payload, signal);
    // this.dispatchEvent(ev);
  }

  _setCSS(key, value) {
    document.documentElement.style.setProperty(key, value);
  }

  _setLogLevel(level) {
    if (this.getLogLevelIndex(level) === -1) {
      this.#_logLevel = "warn";
      this.conn.addLog(
        "warn",
        "setLogLevel",
        false,
        `Attempted to setLogLevel(level) to an invalid level: '${level}'. Resetting log level to 'warn'`,
      );
    } else {
      this.#_logLevel = level;
    }
  }

  _updateElement(key, content) {
    return this._createElement(key, content, { update: true });
  }

  _updateFragment(key, content) {
    return this._createFragment(key, content, { update: true });
  }

  _updateSVG(key, content) {
    return this._createSVG(key, content, { update: true });
  }

  _addListeners() {
    //  if (this.constructor.addedEventListeners === false) {
    //    this.constructor.addedEventListeners = true;
    let listenerArray = [
      "click",
      "input",
      "bittysendevent",
      "bittytriggerevent",
    ];
    [...document.querySelectorAll("[data-listeners]")].forEach(
      (el) => {
        splitSignalString(el.dataset.listeners).forEach((listener) => {
          listenerArray.push(listener);
        });
      },
    );
    [...new Set(listenerArray)].forEach((listener) => {
      window.addEventListener(listener, (ev) => {
        this.processEvent.call(this, ev);
      });
    });
    // }
  }

  // /** internal */
  // addEventListeners_Original() {
  //   if (this.constructor.addedEventListeners === false) {
  //     this.constructor.addedEventListeners = true;
  //     let listenerArray = [
  //       "click",
  //       "input",
  //       "bittysendevent",
  //       "bittytriggerevent",
  //     ];
  //     [...document.querySelectorAll("[data-listeners]")].forEach(
  //       (el) => {
  //         splitSignalString(el.dataset.listeners).forEach((listener) => {
  //           listenerArray.push(listener);
  //         });
  //       },
  //     );
  //     [...new Set(listenerArray)].forEach((listener) => {
  //       window.addEventListener(listener, (ev) => {
  //         this.processEventBridge.call(this, ev);
  //       });
  //     });
  //   }
  // }

  // ["bittysendevent", "bittytriggerevent"].forEach(
  //   (listener) => {
  //     window.addEventListener(listener, (ev) => {
  //       this.processEventBridge.call(this, ev);
  //     });
  //   },
  // );
  // ["click", "input"].forEach((listener) => {
  //   window.addEventListener(listener, (ev) => {
  //     this.processEventBridge.call(this, ev);
  //   });
  // });
  // const customListeners = [
  //   ...new Set(
  //     [...document.querySelectorAll("[data-listeners]")]
  //       .map((el) => {
  //         return el.dataset.listeners.trim().split(/\s+/m).map((signal) => {
  //           window.addEventListener(signal.trim(), (ev) => {
  //             this.processEventBridge.call(this, ev);
  //           });
  //         });
  //       }),
  //   ),
  // ];
  //

  // TODO: Deprecate and remove in favor of
  // _createJSON(key, data)
  _addJSON(key, json) {
    const storageKey = `bittyJSON_${key}`;
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
          storageKey,
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
        storageKey,
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

  _addLog(details) {
    this.logs.push(details);
    // TODO: set up to use `this.getLogLevel()`
    // to determine what to output.
    if (details.level === "error") {
      //    console.error(details);
    } else if (details.level === "warn") {
      //   console.warn(details);
    } else {
      //  console.log(details);
    }
    return details;
  }

  // TODO: Add stacktrace
  _addLog_Original(level, type, ok, message, extraInfo = null) {
    const log = new BittyLog(level, type, ok, message, extraInfo);
    this.logs.push(log);
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

  // createBridges() {
  //   this.conn._element = {};
  //   this.conn._fragment = {};
  //   this.conn._svg = {};
  //   this.conn.json = {};
  //   this.conn.logLevel = 2;
  //   this.conn.logs = [];
  //   this.conn.addJSON = this._addJSON.bind(this);
  //   this.conn.addLog = this._addLog.bind(this);
  //   this.conn.copy = this._copy.bind(this);
  //   this.conn.createElement = this._createElement.bind(this);
  //   this.conn.createFragment = this._createFragment.bind(this);
  //   this.conn.createJSON = this._createJSON.bind(this);
  //   this.conn.createSVG = this._createSVG.bind(this);
  //   this.conn.deleteElement = this._deleteElement.bind(this);
  //   this.conn.deleteFragment = this._deleteFragment.bind(this);
  //   this.conn.deleteJSON = this._deleteJSON.bind(this);
  //   this.conn.deleteSVG = this._deleteSVG.bind(this);
  //   this.conn.fetchElement = this._fetchElement.bind(this);
  //   this.conn.fetchFragment = this._fetchFragment.bind(this);
  //   this.conn.fetchJSON = this._fetchJSON.bind(this);
  //   this.conn.fetchSVG = this._fetchSVG.bind(this);
  //   this.conn.fetchTemplates = this._fetchTemplates.bind(this);
  //   this.conn.getLogLevel = this._getLogLevel.bind(this);
  //   this.conn.loadElement = this._loadElement.bind(this);
  //   this.conn.loadFragment = this._loadFragment.bind(this);
  //   this.conn.loadJSON = this._loadJSON.bind(this);
  //   this.conn.loadSVG = this._loadSVG.bind(this);
  //   this.conn.renderElement = this._renderElement.bind(this);
  //   this.conn.renderFragment = this._renderFragment.bind(this);
  //   this.conn.renderSVG = this._renderSVG.bind(this);
  //   this.conn.saveElement = this._saveElement.bind(this);
  //   this.conn.saveJSON = this._saveJSON.bind(this);
  //   this.conn.send = this._send.bind(this);
  //   this.conn.setCSS = this._setCSS.bind(this);
  //   this.conn.setLogLevel = this._setLogLevel.bind(this);
  //   this.conn.sleep = this._sleep.bind(this);
  //   this.conn.trigger = this._trigger.bind(this);
  //   this.conn.updateElement = this._updateElement.bind(this);
  //   this.conn.updateFragment = this._updateFragment.bind(this);
  //   this.conn.updateSVG = this._updateSVG.bind(this);
  //   this.processEventBridge = this.processEvent.bind(this);
  // }

  getLogLevelIndex(level) {
    return this.#_logLevels.indexOf(level.toLowerCase());
  }

  ingestScriptTags(root) {
    root.querySelectorAll("script").forEach((el) => {
      if (el.type === "application/json" && el.dataset.key !== undefined) {
        try {
          this.conn.json[el.dataset.key] = JSON.parse(el.text.trim());
        } catch (error) {
          return this.conn.addLog(
            "error",
            "ingestJSON",
            false,
            `Failed to parse JSON from a script tag.`,
            error,
          );
        }
      }
      if (el.type === "text/html" && el.dataset.key !== undefined) {
        const template = document.createElement("template");
        template.innerHTML = el.text.trim();
        if (template.content.childElementCount > 1) {
          this.conn.createFragment(el.dataset.key, el.text.trim());
        } else {
          this.conn.createElement(el.dataset.key, el.text.trim());
        }
      }
      if (el.type === "image/svg" && el.dataset.key !== undefined) {
        this.conn.createSVG(el.dataset.key, el.text.trim());
      }
    });
  }

  _loadJSON(key, fallback = null) {
    this.json[key] = {};
    return { ok: false };
  }

  // _loadJSON_original(key, fallback = null) {
  //   const storageKey = `bittyJSON_${key}`;
  //   const details = {
  //     level: "info",
  //     key: "loadJSON",
  //     ok: true,
  //     messages: [],
  //     moreDetails: null,
  //   };
  //   const keyAlreadyExists = this.json[key] === undefined ? false : true;
  //   try {
  //     const storage = localStorage.getItem(storageKey);
  //     if (storage !== null) {
  //       const json = JSON.parse(storage).data;
  //       this.json[key] = json;
  //       details.messages.push(`Loaded json from storage with key: ${key}`);
  //     } else if (typeof fallback === "string") {
  //       this.json[key] = JSON.parse(fallback);
  //       localStorage.setItem(key, `{ "data": ${fallback} }`);
  //       details.messages.push(`Loaded json from fallback with key: ${key}`);
  //     } else if (typeof fallback === "object") {
  //       localStorage.setItem(key, JSON.stringify({ data: fallback }));
  //       this.json[key] = fallback;
  //       details.messages.push(`Loaded json from fallback with key: ${key}`);
  //     } else {
  //       details.level = "error", details.ok = false;
  //       details.messages.push(
  //         `Could not load JSON from either storage or fallbak with key: ${key}`,
  //       );
  //     }
  //   } catch (loadingError) {
  //     details.level = "error";
  //     details.ok = false;
  //     details.messages.push(
  //       "Could not load JSON. See 'moreDetails' for additional information",
  //     );
  //     details.moreInfo = loadingError;
  //   }
  //   return this.addLog(details);
  // }

  // TODO: throw error if parsing fails
  _loadJSON_Original(key, fallback = null) {
    const storageKey = `bittyJSON_${key}`;
    const storage = localStorage.getItem(storageKey);
    // TODO: Update so details has everything
    // for the log then update everything in the
    // method to use it.
    const details = { level: "info", extraText: "" };
    if (this.conn.json[key] !== undefined) {
      details.level = "warn";
      details.extraText = " Warning - overwrote exsiting key";
    }
    try {
      if (storage !== null) {
        const json = JSON.parse(storage);
        if (json.data === undefined) {
          return this.conn.addLog(
            "error",
            "loadJSON",
            false,
            `Attempted to load storage without a top level 'data' in key: ${key}${details.extraText}`,
            null,
          );
        } else {
          this.conn.json[key] = JSON.parse(storage).data;
          return this.conn.addLog(
            details.level,
            "loadJSON",
            true,
            `Loaded JSON for key: ${key}${details.extraText}`,
            null,
          );
        }
      }
      if (fallback !== null) {
        if (typeof fallback === "string") {
          this.conn.json[key] = JSON.parse(fallback);
          localStorage.setItem(key, `{ "data": ${fallback} }`);
          return this.conn.addLog(
            details.level,
            "loadJSON",
            true,
            `Loaded fallback JSON for key: ${key}${details.extraText}`,
            null,
          );
        } else if (typeof fallback === "object") {
          this.conn.json[key] = fallback;
          localStorage.setItem(key, JSON.stringify({ data: fallback }));
          return this.conn.addLog(
            details.level,
            "loadJSON",
            true,
            `Loaded fallback JSON for key: ${key}${details.extraText}`,
            null,
          );
        }
      }
      return this.conn.addLog(
        "error",
        "loadJSON",
        false,
        `No JSON in storage or fallback for key: ${key}${details.extraText}`,
        null,
      );
    } catch (error) {
      return this.conn.addLog(
        "error",
        "loadJSON",
        false,
        `Could not parse fallback JSON for key: ${key}${details.extraText}`,
        null,
      );
    }
  }

  /** internal */
  async makeConnection() {
    if (!this.dataset.connect) {
      // TODO: Throw error if there's no connect
      // TODO: Remove docs for window.BittyClass();
      // as it's no longer a thing.
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

  _updateReceiverV4(ev, receiver) {
    receiver.isSender = () => {
      return false;
    };
    receiver.isTarget = () => {
      return false;
    };
    receiver.copyText = async function () {
      if (receiver.value) {
        try {
          await navigator.clipboard.writeText(receiver.value);
        } catch (error) {
          // TODO: Switch this to logging an error.
          console.error("Could not copy text to clipboard");
        }
      }
    };
    receiver.getData = function (key, closest = true) {
      // TODO: Handle closest
      return receiver.dataset[key];
    };
    receiver.getDataAsFloat = function (key, closest = true) {
      // TODO: Handle closest
      return parseFloat(receiver.dataset[key]);
    };
    receiver.getDataAsInt = function (key, closest = true) {
      // TODO: Handle closest
      return parseInt(receiver.dataset[key], 10);
    };
    receiver.getValue = function (key) {
      return receiver.value;
    };
    receiver.getValueAsFloat = function (key) {
      return parseFloat(receiver.value);
    };
    receiver.getValueAsInt = function (key) {
      return parseInt(receiver.value, 10);
    };
    receiver.setData = function (key, value) {
      receiver.dataset[key] = value;
    };
  }

  _updateEventV4(ev) {
    ev.copyText = async function () {
      if (ev.sender.value) {
        try {
          await navigator.clipboard.writeText(ev.target.value);
        } catch (error) {
          // TODO: Switch this to logging an error.
          console.error("Could not copy text to clipboard");
        }
      }
    };
    ev.getData = function (key, closest = true) {
      return ev.sender.dataset[key];
    };
    ev.getDataAsFloat = function (key, closest = true) {
      return parseFloat(ev.sender.dataset[key]);
    };
    ev.getDataAsInt = function (key, closest = true) {
      return parseInt(ev.sender.dataset[key], 10);
    };
    ev.getValue = function (key) {
      return ev.sender.value;
    };
    ev.getValueAsFloat = function (key) {
      return parseFloat(ev.sender.value);
    };
    ev.getValueAsInt = function (key) {
      return parseInt(ev.sender.value, 10);
    };
    //////////////////////////////////////////
    ev.copyTargetText = async function () {
      if (ev.target.value) {
        try {
          await navigator.clipboard.writeText(ev.target.value);
        } catch (error) {
          // TODO: Switch this to logging an error.
          console.error("Could not copy text to clipboard");
        }
      }
    };
    ev.getTargetData = function (key, closest = true) {
      return ev.target.dataset[key];
    };
    ev.getTargetDataAsFloat = function (key, closest = true) {
      return parseFloat(ev.target.dataset[key]);
    };
    ev.getTargetDataAsInt = function (key, closest = true) {
      return parseInt(ev.target.dataset[key], 10);
    };
    ev.getTargetValue = function (key) {
      return ev.target.value;
    };
    ev.getTargetValueAsFloat = function (key) {
      return parseFloat(ev.target.value);
    };
    ev.getTargetValueAsInt = function (key) {
      return parseInt(ev.target.value, 10);
    };
  }

  // updateEvent_original(ev) {
  //   // TODO: Update so that is the sender is
  //   // different from the target it's reflected
  //   // in the sender property.
  //   //  ev.sender = ev.target;
  //   // NOTE These are current set to target.
  //   // They need to be set to use the sending
  //   // element if it's different from the
  //   // target.
  //   ev.copyText = async function () {
  //     if (ev.sender.value) {
  //       try {
  //         await navigator.clipboard.writeText(ev.target.value);
  //       } catch (error) {
  //         // TODO: Switch this to logging an error.
  //         console.error("Could not copy text to clipboard");
  //       }
  //     }
  //   };
  //   ev.getData = function (key, closest = true) {
  //     return ev.sender.dataset[key];
  //   };
  //   ev.getDataAsFloat = function (key, closest = true) {
  //     return parseFloat(ev.sender.dataset[key]);
  //   };
  //   ev.getDataAsInt = function (key, closest = true) {
  //     return parseInt(ev.sender.dataset[key], 10);
  //   };
  //   ev.getValue = function (key) {
  //     return ev.sender.value;
  //   };
  //   ev.getValueAsFloat = function (key) {
  //     return parseFloat(ev.sender.value);
  //   };
  //   ev.getValueAsInt = function (key) {
  //     return parseInt(ev.sender.value, 10);
  //   };
  //   //////////////////////////////////////////
  //   ev.copyTargetText = async function () {
  //     if (ev.target.value) {
  //       try {
  //         await navigator.clipboard.writeText(ev.target.value);
  //       } catch (error) {
  //         // TODO: Switch this to logging an error.
  //         console.error("Could not copy text to clipboard");
  //       }
  //     }
  //   };
  //   ev.getTargetData = function (key, closest = true) {
  //     return ev.target.dataset[key];
  //   };
  //   ev.getTargetDataAsFloat = function (key, closest = true) {
  //     return parseFloat(ev.target.dataset[key]);
  //   };
  //   ev.getTargetDataAsInt = function (key, closest = true) {
  //     return parseInt(ev.target.dataset[key], 10);
  //   };
  //   ev.getTargetValue = function (key) {
  //     return ev.target.value;
  //   };
  //   ev.getTargetValueAsFloat = function (key) {
  //     return parseFloat(ev.target.value);
  //   };
  //   ev.getTargetValueAsInt = function (key) {
  //     return parseInt(ev.target.value, 10);
  //   };
  // }

  // updateElement(el) {
  //   el.copyText = async function () {
  //     if (el.value) {
  //       try {
  //         await navigator.clipboard.writeText(el.value);
  //       } catch (error) {
  //         // TODO: Switch this to logging an error.
  //         console.error("Could not copy text to clipboard");
  //       }
  //     }
  //   };
  //   el.getData = function (key, closest = true) {
  //     return el.dataset[key];
  //   };
  //   el.getDataAsFloat = function (key, closest = true) {
  //     return parseFloat(el.dataset[key]);
  //   };
  //   el.getDataAsInt = function (key, closest = true) {
  //     return parseInt(el.dataset[key], 10);
  //   };
  //   el.getValue = function (key) {
  //     return el.value;
  //   };
  //   el.getValueAsFloat = function (key) {
  //     return parseFloat(el.value);
  //   };
  //   el.getValueAsInt = function (key) {
  //     return parseInt(el.value, 10);
  //   };
  //   el.setData = function (key, value) {
  //     el.dataset[key] = value;
  //   };
  // }

  // async processSignal(ev, sender, signal) {
  //   ev.sender = sender;
  //   if (ev.sender.dataset.listeners) {
  //     const listeners = splitSignalString(ev.sender.dataset.listeners);
  //     if (!listeners.includes(ev.type)) {
  //       return;
  //     }
  //   }
  //   this.updateEvent(ev);
  //   const receivers = document.querySelectorAll(
  //     `[data-receive~='${signal}']`,
  //   );
  //   if (receivers.length > 0) {
  //     for (const receiver of receivers) {
  //       this.updateReceiverV2(ev, sender, receiver);
  //       this.conn[signal](ev, receiver);
  //     }
  //   } else {
  //     this.conn[signal](ev, null);
  //   }
  // }

  // async processBittySendSignal(payload, signal) {
  //   const receivers = document.querySelectorAll(
  //     `[data-receive~='${signal}']`,
  //   );
  //   if (receivers.length > 0) {
  //     for (const receiver of receivers) {
  //       this.updateReceiverForBittySignal(receiver);
  //       this.conn[signal](payload, receiver);
  //     }
  //   } else {
  //     this.conn[signal](payload, null);
  //   }
  // }

  // async processBittyTriggerSignal(signal) {
  //   const receivers = document.querySelectorAll(
  //     `[data-receive~='${signal}']`,
  //   );
  //   if (receivers.length > 0) {
  //     for (const receiver of receivers) {
  //       this.updateReceiverForBittySignal(receiver);
  //       this.conn[signal](null, receiver);
  //     }
  //   } else {
  //     this.conn[signal](null, null);
  //   }
  // }

  // updateReceiverV2(ev, sender, receiver) {
  //   receiver.isSender = () => receiver.isSameNode(sender);
  //   receiver.isTarget = () => receiver.isSameNode(ev.target);
  //   this.updateReceiverData(receiver);
  // }

  updateReceiver_V3(ev, receiver) {
    receiver.isSender = () => receiver.isSameNode(ev.sender);
    receiver.isTarget = () => receiver.isSameNode(ev.target);
    this.updateReceiverData(receiver);
  }

  updateReceiverForBittySignal(receiver) {
    // TODO: Add test for docs
    receiver.isSender = () => false;
    receiver.isTarget = () => false;
    this.updateReceiverData(receiver);
  }

  updateReceiverData(receiver) {
    receiver.copyText = async function () {
      if (receiver.value) {
        try {
          await navigator.clipboard.writeText(receiver.value);
        } catch (error) {
          // TODO: Switch this to logging an error.
          console.error("Could not copy text to clipboard");
        }
      }
    };
    receiver.getData = function (key, closest = true) {
      // TODO: Handle closest
      return receiver.dataset[key];
    };
    receiver.getDataAsFloat = function (key, closest = true) {
      // TODO: Handle closest
      return parseFloat(receiver.dataset[key]);
    };
    receiver.getDataAsInt = function (key, closest = true) {
      // TODO: Handle closest
      return parseInt(receiver.dataset[key], 10);
    };
    receiver.getValue = function (key) {
      return receiver.value;
    };
    receiver.getValueAsFloat = function (key) {
      return parseFloat(receiver.value);
    };
    receiver.getValueAsInt = function (key) {
      return parseInt(receiver.value, 10);
    };
    receiver.setData = function (key, value) {
      receiver.dataset[key] = value;
    };
  }

  _processTrigger(signal) {
    const receivers = document.querySelectorAll(
      `[data-receive~='${signal}']`,
    );
    if (receivers.length > 0) {
      for (const receiver of receivers) {
        this.updateReceiverV4(null, receiver);
        this[signal](null, receiver);
      }
    } else {
      this[signal](null, null);
    }
  }

  async _processEvent(ev) {
    if (ev.type === "bittytriggerevent") {
      const signals = splitSignalString(ev.signals);
      for (const signal of signals) {
        if (this[signal] !== undefined) {
          this.processTrigger(signal);
        }
      }
    } else if (ev.type === "bittysendevent") {
    } else {
      const senders = findSenders(ev.target);
      for (const sender of senders) {
        const signals = splitSignalString(sender.dataset.send);
        for (const signal of signals) {
          if (this[signal] !== undefined) {
            ev.sender = sender;
            if (ev.sender.dataset.listeners === undefined) {
              if (
                ["click", "input", "bittytriggerevent", "bittysendevent"]
                  .includes(
                    ev.type,
                  ) === false
              ) {
                return;
              }
            } else {
              const listeners = splitSignalString(ev.sender.dataset.listeners);
              if (!listeners.includes(ev.type)) {
                return;
              }
            }
            this.updateEventV4(ev);
            const receivers = document.querySelectorAll(
              `[data-receive~='${signal}']`,
            );
            if (receivers.length > 0) {
              for (const receiver of receivers) {
                this.updateReceiverV4(ev, receiver);
                this[signal](ev, receiver);
              }
            } else {
              this[signal](ev, null);
            }
          }
        }
      }
      // ev.sender = sender;
      // this.processSignal_V3(bit, ev, signal);
    }
  }

  //async _processEvent_holding(ev) {
  //  console.log(ev.type);
  //  if (ev.type === "bittytriggerevent") {
  //    const signals = splitSignalString(ev.signals);
  //    console.log(`SIGNALS: ${signals}`);
  //    for (const signal of signals) {
  //      for (const bit of this.#bits) {
  //        // console.log(`FUNCTION: ${typeof bit[signal]}`);
  //        // console.log(bit);
  //        if (typeof bit[signal] === "function") {
  //          console.log(`IN: processsEvent - ${signal}`);
  //          this.processTriggerSignal_V3(bit, signal);
  //        }
  //      }
  //    }
  //  } else if (ev.type === "bittysendevent") {
  //    //console.log("TODO: bittysendevent");
  //  } else {
  //    const senders = findSenders(ev.target);
  //    for (const sender of senders) {
  //      const signals = splitSignalString(sender.dataset.send);
  //      for (const signal of signals) {
  //        for (const bit of this.#bits) {
  //          if (typeof bit[signal] === "function") {
  //            //console.log(`FUNCTION: ${typeof bit[signal]}`);
  //            ev.sender = sender;
  //            this.processSignal_V3(bit, ev, signal);
  //          }
  //        }
  //      }
  //    }
  //  }
  //}
  //

  // async processSignalV4(bit, ev, signal) {
  //   console.log(`IN processSignal_V3: ${signal}`);
  //   if (ev.sender.dataset.listeners === undefined) {
  //     if (
  //       ["click", "input", "bittytriggerevent", "bittysendevent"].includes(
  //         ev.type,
  //       ) === false
  //     ) {
  //       return;
  //     }
  //   } else {
  //     const listeners = splitSignalString(ev.sender.dataset.listeners);
  //     if (!listeners.includes(ev.type)) {
  //       return;
  //     }
  //   }
  //   this.updateEvent(ev);
  //   const receivers = document.querySelectorAll(
  //     `[data-receive~='${signal}']`,
  //   );
  //   if (receivers.length > 0) {
  //     for (const receiver of receivers) {
  //       this.updateReceiver_V3(ev, receiver);
  //       bit[signal](ev, receiver);
  //     }
  //   } else {
  //     bit[signal](ev, null);
  //   }
  // }

  // async processSignal_V3(bit, ev, signal) {
  //   console.log(`IN processSignal_V3: ${signal}`);
  //   if (ev.sender.dataset.listeners === undefined) {
  //     if (
  //       ["click", "input", "bittytriggerevent", "bittysendevent"].includes(
  //         ev.type,
  //       ) === false
  //     ) {
  //       return;
  //     }
  //   } else {
  //     const listeners = splitSignalString(ev.sender.dataset.listeners);
  //     if (!listeners.includes(ev.type)) {
  //       return;
  //     }
  //   }
  //   this.updateEvent(ev);
  //   const receivers = document.querySelectorAll(
  //     `[data-receive~='${signal}']`,
  //   );
  //   if (receivers.length > 0) {
  //     for (const receiver of receivers) {
  //       this.updateReceiver_V3(ev, receiver);
  //       bit[signal](ev, receiver);
  //     }
  //   } else {
  //     bit[signal](ev, null);
  //   }
  // }

  //processTriggerSignal_V3(bit, signal) {
  //  console.log(`IN procesTriggerSignal_V3: ${signal}`);
  //  const receivers = document.querySelectorAll(
  //    `[data-receive~='${signal}']`,
  //  );
  //  if (receivers.length > 0) {
  //    for (const receiver of receivers) {
  //      //this.updateReceiver_V3(null, receiver);
  //      bit[signal](null, receiver);
  //    }
  //  } else {
  //    bit[signal](null, null);
  //  }
  //}

  async processEvent_original(ev) {
    let senders = [];
    if (ev.type === "bittytriggerevent") {
      const signals = splitSignalString(ev.bittyPayload.target.dataset.send);
      for (const signal of signals) {
        if (typeof this.conn[signal] === "function") {
          this.processBittyTriggerSignal(signal);
        }
      }
    } else if (ev.type === "bittysendevent") {
      const signals = splitSignalString(ev.bittyPayload.target.dataset.send);
      for (const signal of signals) {
        if (typeof this.conn[signal] === "function") {
          this.processBittySendSignal(ev.bittyPayload.content, signal);
        }
      }
    } else {
      senders = findSenders(ev.target);
      for (const sender of senders) {
        const signals = splitSignalString(sender.dataset.send);
        for (const signal of signals) {
          if (typeof this.conn[signal] === "function") {
            if (sender.dataset.listeners !== undefined) {
              const listeners = splitSignalString(sender.dataset.listeners);
              if (listeners.includes(ev.type)) {
                this.processSignal(ev, sender, signal);
              }
            } else {
              this.processSignal(ev, sender, signal);
            }
          }
        }
      }
    }
  }

  _qs(selector) {
    return document.querySelector(selector);
  }

  _qsa(selector) {
    return document.querySelectorAll(selector);
  }

  /** internal */
  async runBittyReady() {
    // TODO: Add tests for sync and async runs.
    // TODO: Note in docs that bittyReady will
    // be run with await if its async.
    if (typeof this.conn.bittyReady === "function") {
      if (this.conn.bittyReady[Symbol.toStringTag] === "AsyncFunction") {
        await this.conn.bittyReady();
      } else {
        this.conn.bittyReady();
      }
    }
  }

  _saveJSON(key) {
    this.json[key] = {};
    return { ok: false };
  }

  // _saveJSON_original(key) {
  //   const storageKey = `bittyJSON_${key}`;
  //   const details = {
  //     level: "info",
  //     key: "saveJSON",
  //     ok: true,
  //     messages: [],
  //     moreDetails: null,
  //   };
  //   if (this.json[key] === undefined) {
  //     details.level = "error";
  //     details.ok = false;
  //     details.messages.push(
  //       `Tried to save JSON with '${key}' but it does not exist in the collection.`,
  //     );
  //     return this.addLog(details);
  //   }
  //   if (typeof this.json[key] === "object") {
  //     try {
  //       const payload = JSON.stringify({ data: this.json[key] });
  //       localStorage.setItem(storageKey, payload);
  //       details.messages.push(`Saved JSON with key: ${key}`);
  //     } catch (saveError) {
  //       details.level = "error";
  //       details.ok = false;
  //       details.messages.push(
  //         `Could not save JSON with key '${key}' because it couldn't be stringified.`,
  //       );
  //     }
  //     return this.addLog(details);
  //   }
  // }

  _saveJSON_original(key) {
    const storageKey = `bittyJSON_${key}`;
    if (this.conn.json[key] !== undefined) {
      if (typeof this.conn.json[key] === "object") {
        const payload = JSON.stringify({ data: this.conn.json[key] });
        localStorage.setItem(storageKey, payload);
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

  async _sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  _trigger(signals) {
    // console.log(`in _trigger: ${signals}`);
    const ev = new BittyTriggerEvent(signals);
    dispatchEvent(ev);
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
class BittyTriggerEvent_Original extends Event {
  constructor(signals) {
    super("bittytriggerevent", { bubbles: true });
    this.bittyPayload = {
      content: null,
      target: { dataset: { send: signals } },
    };
  }
}

class BittyTriggerEvent extends Event {
  constructor(signals) {
    //console.log(`In BittyTriggerEvent: ${signals}`);
    super("bittytriggerevent", { bubbles: true });
    this.signals = signals;
  }
}

customElements.define(tagName, BittyJs);

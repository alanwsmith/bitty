const version = [8, 0, 0];
const tagName = `bitty-${version[0]}-${version[1]}`;

class BittyJs extends HTMLElement {
  static addedEventListeners = false;
  static loadedPageClasses = false;
  static moduleFiles = [];

  constructor() {
    super();
  }

  #bits = [];
  #_logLevels = ["none", "error", "warn", "info", "debug", "trace"];
  #_globalLogLevelIndex = 2;
  #_logs = [];

  async connectedCallback() {
    this.loadModuleClasses();
    this.loadWindowClasses();
  }

  addBittyClasses(target) {
    // TODO: Rename `target.addLog()` to `target._addLog()`
    // since it should be considered private.
    target.addLog = this.addLog.bind(this, target);
    target.addSignalListener = this._addSignalListener.bind(target);
    target.createElement = this._createElement.bind(target);
    target.createFragment = this._createFragment.bind(target);
    target.createJSON = this._createJSON.bind(target);
    target.createSVG = this._createSVG.bind(target);
    target.deleteElement = this._deleteElement.bind(target);
    target.deleteFragment = this._deleteFragment.bind(target);
    target.deleteJSON = () => {
      return { ok: false };
    };
    target.deleteSVG = () => {
      return { ok: false };
    };
    target.error = this._error.bind(target);
    target.fetchElement = this._fetchElement.bind(target);
    target.fetchFragment = this._fetchFragment.bind(target);
    target.fetchJSON = this._fetchJSON.bind(target);
    target.fetchSVG = this._fetchSVG.bind(target);
    target.fetchTemplates = this._fetchTemplates.bind(target);
    target.getDataAsFloat = () => {};
    target.getDataAsInt = () => {};
    target.getGlobalLogLevel = this.getGlobalLogLevel.bind(this);
    target.getLocalLogLevel = this.getLocalLogLevel.bind(
      this,
      target,
    );
    target.info = this._info.bind(target);
    target.ingestScriptTags = this._ingestScriptTags.bind(target);
    target.loadElement = this._loadElement.bind(target);
    target.loadFragment = this._loadFragment.bind(target);
    target.loadJSON = this._loadJSON.bind(target);
    target.loadSVG = this._loadSVG.bind(target);
    target.sleep = this._sleep.bind(target);
    target.trigger = this._trigger.bind(target);
    target.updateElement = () => {
      return { ok: false };
    };
    target.updateFragment = () => {
      return { ok: false };
    };
    target.updateSVG = this._updateSVG.bind(target);
    target.processEvent = this._processEvent.bind(target);
    target.processSignal = this._processSignal.bind(target);
    target.renderElement = this._renderElement.bind(target);
    target.renderFragment = this._renderFragment.bind(target);
    target.renderSVG = this._renderSVG.bind(target);
    target._runBittyReady = this._runBittyReady.bind(target);
    target.saveJSON = this._saveJSON.bind(target);
    target.send = this._send.bind(target);
    target.setGlobalLogLevel = this.setGlobalLogLevel.bind(this);
    target.setLocalLogLevel = this._setLocalLogLevel.bind(
      target,
      this.#_logLevels,
    );
    target.setCSS = () => {
      return { ok: false };
    };
    target.updateEventV4 = this._updateEventV4.bind(target);
    target.updateReceiverV4 = this._updateReceiverV4.bind(target);
    target.qs = this._qs.bind(target);
    target.qsa = this._qsa.bind(target);
    target.warn = this._warn.bind(target);
  }

  addBittyListeners(target) {
    target._addListeners = this.__addListeners.bind(target);
    target._addListeners();
  }

  addBittyVars(target) {
    target._localLogLevelIndex = 2;
    target._svg = {};
    target._element = {};
    target._fragment = {};
    target.json = {};
    // TODO: Deprecate and remove `target.logs`.
    // Everything will use the logs on the
    // bitty component from its static
    // property.
    target.logs = [];
    target._signalListeners = {};
  }

  _addSignalListener(type, signals) {
    window.addEventListener(type, (ev) => {
      this.processEvent.call(this, ev);
    });
    this._signalListeners[type] = signals;
  }

  __addListeners() {
    let listenerArray = [
      "click",
      "input",
      "bittysend",
      "bittytrigger",
    ];
    [...document.querySelectorAll("[data-listeners]")].forEach(
      (el) => {
        splitSignalString(el.dataset.listeners).forEach((listener) => {
          listenerArray.push(listener);
        });
      },
    );
    [...new Set(listenerArray)].forEach((listener) => {
      // TODO: Add this when this.debug() is set up.
      // this.debug(`Added listener for '${listener}' event.`);
      window.addEventListener(listener, (ev) => {
        this.processEvent.call(this, ev);
      });
    });
  }

  addLog(target, payload) {
    payload.bitClass = target.bitClass;
    payload.timestamp = new Date();
    payload.performanceTime = performance.now();
    this.#_logs.push(payload);
    const checkIndex = this.#_logLevels.indexOf(payload.level);
    if (
      this.#_globalLogLevelIndex >= checkIndex ||
      target._localLogLevelIndex >= checkIndex
    ) {
      if (checkIndex === 1) {
        console.error(
          `[${this.timestamp(payload.timestamp)}] ${
            payload.text.join("\n")
          } [Source: ${payload.bitClass}]`,
          "\n",
          payload,
          "\n",
          new Error("Stack Trace"),
        );
      } else if (checkIndex === 2) {
        console.warn(
          `[${this.timestamp(payload.timestamp)}] ${
            payload.text.join("\n")
          } [Source: ${payload.bitClass}]`,
        );
      } else if (checkIndex === 3) {
        console.info(
          `[${this.timestamp(payload.timestamp)}] ${
            payload.text.join("\n")
          } [Source: ${payload.bitClass}]`,
        );
      } else if (checkIndex === 4) {
        console.debug(
          `[${this.timestamp(payload.timestamp)}] ${
            payload.text.join("\n")
          } [Source: ${payload.bitClass}]`,
        );
      } else if (checkIndex === 5) {
        console.trace(
          `[${this.timestamp(payload.timestamp)}] $.messages.join("\n")
          } [Source: ${payload.bitClass}]`,
        );
      } else {
        console.log(
          `[${this.timestamp(payload.timestamp)}] ${
            payload.text.join("\n")
          } [Source: ${payload.bitClass}]`,
        );
      }
    }
    return payload;
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
      from: "createElement",
      ok: true,
      text: [],
      extraInfo: null,
    };
    if (options.update === undefined || options.update === false) {
      if (key !== null && this._element[key] !== undefined) {
        details.level = "warn";
        details.text.push(
          `Warning: createElement overwrite an existing element with key '${key}'`,
        );
      }
    }
    if (typeof content === "string") {
      this._element[key] = content;
    } else if (content instanceof Element) {
      this._element[key] = content.outerHTML;
    } else if (content instanceof DocumentFragment) {
      this._element[key] = content.firstChild.outerHTML;
      if (content.childElementCount > 1) {
        details.level = "warn";
        details.text.push(
          "Warning: A document fragment with more than one child element was used to create an element with .createElement. Only the first element was used. The rest were ignored",
        );
      }
    } else {
      details.level = "error";
      details.ok = false;
      details.text.push(
        `Tried to create an element for key '${key}' from something other than a string, element, or document fragment which is not supported.`,
      );
    }
    if (details.ok === true) {
      localStorage.setItem(
        storageKey,
        JSON.stringify({ data: this._element[key] }),
      );
    }
    return this.addLog(details);
  }

  _createFragment(key, content = null, options = {}) {
    const storageKey = `bittyFragment_${key}`;
    const details = {
      level: "info",
      from: "createFragment",
      ok: true,
      text: [],
      extraInfo: null,
    };
    if (
      key !== null & this._fragment[key] !== undefined
    ) {
      if (options.update === undefined || options.update === false) {
        details.level = "warn";
        details.text.push(`Warning overwriting an existing from: '${key}'`);
      }
    }
    if (key === null) {
      details.ok = false;
      details.level = "error";
      details.text.push(
        `this.createFragment(key, content) was called without 'key' and 'content' arguments.`,
      );
    } else if (content === null) {
      details.ok = false;
      details.level = "error";
      details.text.push(
        `this.createFragment(key, content) was called without either a 'content' argument.`,
      );
    } else if (typeof content === "string") {
      this._fragment[key] = content;
    } else if (content instanceof Element) {
      this._fragment[key] = content.outerHTML;
    } else if (content instanceof DocumentFragment) {
      this._fragment[key] = [...content.children].map((el) => el.outerHTML)
        .join("");
    } else {
      details.level = "error";
      details.ok = false;
      details.text.push(
        `Attempted to make a frament for key '${key}' out of something other than a String, Element, or Document Fragment`,
      );
    }
    if (details.ok === true) {
      localStorage.setItem(
        storageKey,
        JSON.stringify({ data: this._fragment[key] }),
      );
    }
    return this.addLog(details);
  }

  // _createJSON(key, json) {
  //   const storageKey = `bittyJSON_${key}`;
  //   const details = {
  //     level: "info",
  //     from: "createJSON",
  //     ok: true,
  //     text: [],
  //     extraInfo: null,
  //   };
  //   if (
  //     json !== undefined && this.json !== undefined &&
  //     this.json[key] !== undefined
  //   ) {
  //     details.level = "warn";
  //     details.text.push(
  //       `createJSON found an existin JSON with key '${key}'.`,
  //     );
  //   }
  //   if (json === undefined) {
  //   } else if (typeof json === "string") {
  //     try {
  //       this.json[key] = JSON.parse(json);
  //       localStorage.setItem(
  //         storageKey,
  //         JSON.stringify({ data: this.json[key] }),
  //       );
  //       details.text.push(`Added JSON with from: ${key}`);
  //     } catch (error) {
  //     }
  //   } else {
  //     if (this.json !== undefined && this.json[key] !== undefined) {
  //       this.json[key] = JSON.parse(JSON.stringify(json));
  //       localStorage.setItem(
  //         storageKey,
  //         JSON.stringify({ data: this.json[key] }),
  //       );
  //       details.text.push(`Added JSON with from: ${key}`);
  //     }
  //   }
  // }

  _createJSON(key, json) {
    const storageKey = `bittyJSON_${key}`;
    // TODO: Update the result of the method
    // to update details and then just
    // return it at the end.
    const details = {
      level: "info",
      from: "createJSON",
      ok: true,
      text: [],
      extraInfo: null,
    };
    if (json !== undefined && this.json[key] !== undefined) {
      details.level = "warn";
      details.text.push(
        `Warning: createJSON overwrote an existing JSON with key '${key}'.`,
      );
    }
    if (json === undefined) {
      details.level = "error";
      details.ok = false;
      details.text.push(
        `No value passed in for key '${key}'`,
      );
    } else if (typeof json === "string") {
      try {
        this.json[key] = JSON.parse(json);
        localStorage.setItem(
          storageKey,
          JSON.stringify({ data: this.json[key] }),
        );
        details.text.push(`Added JSON with from: ${key}`);
      } catch (error) {
        details.level = "error";
        details.ok = false;
        details.text.push(
          `Could not parse JSON for from: ${key}`,
        );
      }
    } else {
      this.json[key] = JSON.parse(JSON.stringify(json));
      localStorage.setItem(
        storageKey,
        JSON.stringify({ data: this.json[key] }),
      );
      details.text.push(`Added JSON with from: ${key}`);
    }
    return this.addLog(details);
  }

  _createSVG(key, content = null, options = {}) {
    const storageKey = `bittySVG_${key}`;
    const details = {
      level: "info",
      from: "createSVG",
      ok: true,
      text: [],
      extraInfo: null,
    };
    if (
      key !== null & this._svg[key] !== undefined
    ) {
      if (options.update === undefined || options.update === false) {
        details.level = "warn";
        details.text.push(`Warning overwriting an existing from: '${key}'`);
      }
    }
    if (key === null) {
      details.ok = false;
      details.level = "error";
      details.text.push(
        `this.createSVG(key, content) was called without 'key' and 'content' arguments.`,
      );
    } else if (content === null) {
      details.ok = false;
      details.level = "error";
      details.text.push(
        `this.createSVG(key, content) was called without either a 'content' argument.`,
      );
    } else if (typeof content === "string") {
      this._svg[key] = content;
    } else if (content instanceof SVGSVGElement) {
      this._svg[key] = content.outerHTML;
    } else {
      details.level = "error";
      details.ok = false;
      details.text.push(
        `Attempted to make a frament for key '${key}' out of something other than a String or an SVG.`,
      );
    }
    if (details.ok === true) {
      localStorage.setItem(
        storageKey,
        JSON.stringify({ data: this._svg[key] }),
      );
    }
    return this.addLog(details);
  }

  _deleteElement(key) {
    const storageKey = `bittyElement_${key}`;
    const details = {
      level: "info",
      from: "deleteElement",
      ok: true,
      text: [],
    };
    if (
      localStorage.getItem(storageKey) === null &&
      this._element[key] === undefined
    ) {
      details.level = "warn";
      details.text.push(
        `No existing element with '${key}' available to remove.`,
      );
      return this.addLog(details);
    } else {
      localStorage.removeItem(storageKey);
      delete this._element[key];
      details.text.push(
        `Removed element with key '${key}'`,
      );
      return this.addLog(details);
    }
  }

  _deleteFragment(key) {
    const storageKey = `bittyFragment_${key}`;
    const details = {
      level: "info",
      ok: true,
      from: "removeFragment",
      text: [],
    };
    if (
      localStorage.getItem(storageKey) === null &&
      this._fragment[key] === undefined
    ) {
      details.level = "warn",
        details.text.push(
          `No fragment with key '${key}' exists. Nothing to remove.`,
        );
    } else {
      delete this._fragment[key];
      localStorage.removeItem(storageKey);
      details.text.push(
        `Fragment with key '${key}' was removed`,
      );
    }
    return this.addLog(details);
  }

  _deleteJSON(key) {
    const storageKey = `bittyJSON_${key}`;
    localStorage.removeItem(storageKey);
    if (this.json[key] === undefined) {
      return this.addLog(
        "warn",
        "deleteJSON",
        true,
        `JSON with key '${key}' already does not exist.`,
        null,
      );
    } else {
      delete this.json[key];
      return this.addLog(
        "info",
        "deleteJSON",
        true,
        `Removed JSON with from: ${key}`,
        null,
      );
    }
  }

  _deleteSVG(key) {
    const storageKey = `bittySVG_${key}`;
    if (
      localStorage.getItem(storageKey) === null &&
      this._svg[key] === undefined
    ) {
      return this.addLog(
        "warn",
        "deleteSVG",
        true,
        `No existing SVG with '${key}' available to remove.`,
        null,
      );
    } else {
      localStorage.removeItem(storageKey);
      delete this._svg[key];
      return this.addLog(
        "info",
        "deleteSVG",
        true,
        `Removed SVG with key '${key}'`,
        null,
      );
    }
  }

  _error(payload) {
    if (typeof payload === "string") {
      this.addLog({
        level: "error",
        ok: true,
        messages: [payload],
      });
    } else {
      this.addLog(payload);
    }
  }

  async _fetchElement(key, url, fallback = null, options = {}) {
    const storageKey = `bittyElement_${key}`;
    const details = {
      level: "info",
      from: "fetchElement",
      ok: true,
      text: [],
      extraInfo: null,
    };
    try {
      const fetchOptions = options.fetchOptions !== undefined
        ? options.fetchOptions
        : {};
      let response = await fetch(url, fetchOptions);
      if (response.ok === true) {
        const text = await response.text();
        if (this._element[key] !== undefined) {
          details.level = "warn";
          details.text.push(
            `Warning: fetch of ${url} overwrote existing element with key '${key}'`,
          );
        }
        const template = document.createElement("template");
        template.innerHTML = text;
        if (template.content.childElementCount > 1) {
          details.level = "warn";
          details.text.push(
            `Warning: The got a document fragment with more than one element from ${url} while creating element with key ${key}. Only the first element was used. The others were dropped`,
          );
        }
        this._element[key] = template.content.firstChild.outerHTML;
      } else {
        if (typeof fallback === "string") {
          this._element[key] = fallback;
          details.level = "warn";
          details.text.push(
            `Used fallback for '${key}' because fetching '${url}' failed.`,
          );
          details.extraInfo = response;
        } else if (fallback instanceof Element) {
          this._element[key] = fallback.outerHTML;
          details.level = "warn";
          details.text.push(
            `Used fallback for '${key}' because fetching '${url}' failed.`,
          );
          details.extraInfo = response;
        } else if (fallback instanceof DocumentFragment) {
          this._element[key] = [...fallback.children].map((el) => {
            return el.outerHTML;
          }).join("");
          details.level = "warn";
          details.text.push(
            `Used fallback for '${key}' because fetching '${url}' failed.`,
          );
          details.extraInfo = response;
        } else {
          details.level = "error";
          details.ok = false;
          details.text.push(
            `Fetching returned status ${response.status}. See 'extraInfo' for details.`,
          );
          details.extraInfo = response;
        }
      }
    } catch (error) {
      details.level = "error";
      details.ok = false;
      details.text.push(
        `An unidentified error occurred while tyring to fetch ${url} for key '${key}'`,
      );
    }
    if (details.ok === true) {
      localStorage.setItem(
        storageKey,
        JSON.stringify({ data: this._element[key] }),
      );
    }
    return this.addLog(details);
  }

  async _fetchFragment(key, url, fallback = null, options = {}) {
    const storageKey = `bittyFragment_${key}`;
    const details = {
      level: "info",
      from: "fetchFragment",
      ok: true,
      text: [],
      extraInfo: null,
    };
    try {
      const fetchOptions = options.fetchOptions !== undefined
        ? options.fetchOptions
        : {};
      let response = await fetch(url, fetchOptions);
      if (response.ok === true) {
        const text = await response.text();
        if (this._fragment[key] !== undefined) {
          details.level = "warn";
          details.text.push(
            `Warning: fetch of ${url} overwrote existing fragment with key '${key}'`,
          );
        }
        this._fragment[key] = text;
      } else {
        if (typeof fallback === "string") {
          this._fragment[key] = fallback;
          details.level = "warn";
          details.text.push(
            `Used fallback for '${key}' because fetching '${url}' failed.`,
          );
          details.extraInfo = response;
        } else if (fallback instanceof Element) {
          this._fragment[key] = fallback.outerHTML;
          details.level = "warn";
          details.text.push(
            `Used fallback for '${key}' because fetching '${url}' failed.`,
          );
          details.extraInfo = response;
        } else if (fallback instanceof DocumentFragment) {
          this._fragment[key] = [...fallback.children].map((el) => {
            return el.outerHTML;
          }).join("");
          details.level = "warn";
          details.text.push(
            `Used fallback for '${key}' because fetching '${url}' failed.`,
          );
          details.extraInfo = response;
        } else {
          details.level = "error";
          details.ok = false;
          details.text.push(
            `Fetching returned status ${response.status}. See 'extraInfo' for details.`,
          );
          details.extraInfo = response;
        }
      }
    } catch (error) {
      details.level = "error";
      details.ok = false;
      details.text.push(
        `An unidentified error occurred while tyring to fetch ${url} for key '${key}'`,
      );
    }
    if (details.ok === true) {
      localStorage.setItem(
        storageKey,
        JSON.stringify({ data: this._fragment[key] }),
      );
    }
    return this.addLog(details);
  }

  async _fetchJSON(key, url, fallback = null, options = {}) {
    const storageKey = `bittyJSON_${key}`;
    const details = {
      level: "info",
      from: "fetchJSON",
      ok: true,
      text: [],
    };
    let response = await fetch(url, options);
    try {
      if (response.ok === true) {
        try {
          const json = await response.json();
          if (this.json[key] !== undefined) {
            this.json[key] = json;
            details.level = "warn";
            details.text.push(
              `Overwrote existing key '${key}' with JSON fetched from '${url}'`,
            );
          } else {
            this.json[key] = json;
            details.text.push(
              `fetched JSON from '${url}' and stored in key '${key}'`,
            );
          }
        } catch (parseError) {
          if (fallback !== null) {
            details.level = "warn";
            details.text.push(
              `Warning: Could not parse JSON from URL ${url}`,
            );
            if (typeof fallback === "string") {
              this.json[key] = JSON.parse(fallback);
            } else if (fallback instanceof Object) {
              this.json[key] = fallback;
            }
          } else {
            details.level = "error";
            details.ok = false;
            details.text(`Could not parse fallback for key '${key}'.`);
          }
        }
      } else {
        if (fallback !== null) {
          details.level = "warn";
          details.text.push(
            `Warning: Could not parse JSON from URL ${url}`,
          );
          if (typeof fallback === "string") {
            this.json[key] = JSON.parse(fallback);
          } else if (fallback instanceof Object) {
            this.json[key] = fallback;
          } else {
            details.level = "error";
            details.ok = false;
            details.text(`Could not parse fallback for key '${key}'.`);
          }
        } else {
          details.level = "error";
          details.ok = false;
          details.extraInfo = response;
          details.text.push(
            `Error fetching JSON from '${url}' for key '${key}'`,
          );
          return this.addLog(details);
        }
      }
    } catch (error) {
      details.level = "error";
      details.ok = false;
      details.text.push(
        `Error fetching JSON from '${url}' for key '${key}'`,
      );
      details.extraInfo = error;
    }
    if (details.ok === true) {
      localStorage.setItem(
        storageKey,
        JSON.stringify({ data: this.json[key] }),
      );
    }
    return this.addLog(details);
  }

  async _fetchSVG(key, url, fallback = null, options = {}) {
    const storageKey = `bittySVG_${key}`;
    const details = {
      level: "info",
      from: "fetchSVG",
      ok: true,
      text: [],
      extraInfo: null,
    };
    try {
      const fetchOptions = options.fetchOptions !== undefined
        ? options.fetchOptions
        : {};
      let response = await fetch(url, fetchOptions);
      if (response.ok === true) {
        const text = await response.text();
        if (this._svg[key] !== undefined) {
          details.level = "warn";
          details.text.push(
            `Warning: fetch of ${url} overwrote existing SVG with key '${key}'`,
          );
        }
        this._svg[key] = text;
      } else {
        if (typeof fallback === "string") {
          this._svg[key] = fallback;
          details.level = "warn";
          details.text.push(
            `Used fallback for '${key}' because fetching '${url}' failed.`,
          );
          details.extraInfo = response;
        } else if (content instanceof SVGSVGElement) {
          this._svg[key] = content.outerHTML;
          details.level = "warn";
          details.text.push(
            `Used fallback for '${key}' because fetching '${url}' failed.`,
          );
          details.extraInfo = response;
        } else {
          details.level = "error";
          details.ok = false;
          details.text.push(
            `Fetching returned status ${response.status}. See 'extraInfo' for details.`,
          );
          details.extraInfo = response;
        }
      }
    } catch (error) {
      details.level = "error";
      details.ok = false;
      details.text.push(
        `An unidentified error occurred while tyring to fetch ${url} for key '${key}'`,
      );
    }
    if (details.ok === true) {
      localStorage.setItem(
        storageKey,
        JSON.stringify({ data: this._svg[key] }),
      );
    }
    return this.addLog(details);
  }

  async _fetchTemplates(url, options = {}) {
    const details = {
      level: "info",
      from: "fetchTemplates",
      ok: true,
      text: [],
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
    return this.addLog(details);
  }

  getGlobalLogLevel() {
    return this.#_logLevels[this.#_globalLogLevelIndex];
  }

  getGlobalLogLevelIndex() {
    return this.#_globalLogLevelIndex;
  }

  getLocalLogLevel(target) {
    if (target._localLogLevelIndex !== undefined) {
      return this.#_logLevels[target._localLogLevelIndex];
    } else {
      return this.#_logLevels[this.#_globalLogLevelIndex];
    }
  }

  _info(payload) {
    this.addLog(
      { level: "info", ok: true, messages: [payload] },
    );
  }

  _ingestScriptTags(root) {
    root.querySelectorAll("script").forEach((el) => {
      if (el.type === "application/json" && el.dataset.key !== undefined) {
        try {
          this.json[el.dataset.key] = JSON.parse(el.text.trim());
        } catch (error) {
          return this.addLog(
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
          this.createFragment(el.dataset.key, el.text.trim());
        } else {
          this.createElement(el.dataset.key, el.text.trim());
        }
      }
      if (el.type === "image/svg" && el.dataset.key !== undefined) {
        this.createSVG(el.dataset.key, el.text.trim());
      }
    });
  }

  _loadElement(key, fallback = null) {
    const storageKey = `bittyElement_${key}`;
    const details = {
      level: "info",
      from: "loadElement",
      ok: true,
      text: [],
      extraInfo: null,
    };
    const storage = localStorage.getItem(storageKey);
    if (key !== null && this._element[key] !== undefined) {
      details.level = "warn";
      details.text.push(
        `Warning: loadElement() replaced an existing from: ${key}`,
      );
    }
    if (key === null) {
      details.level = "error";
      details.ok = false;
      details.text.push(
        `No key provided for 'this.loadElement(key [,fallback])'`,
      );
    } else if (
      storage === null && fallback === null
    ) {
      details.level = "error";
      details.ok = false;
      details.text.push(
        `No storage found for '${key}' and not fallback provided.`,
      );
    } else if (storage !== null) {
      this._element[key] = JSON.parse(storage).data;
    } else if (typeof fallback === "string") {
      this._element[key] = fallback;
    } else if (fallback instanceof Element) {
      this._element[key] = fallback.outerHTML;
    } else if (fallback instanceof DocumentFragment) {
      this._element[key] = fallback.firstChild.outerHTML;
      if (fallback.children.length > 1) {
        details.level = "warn";
        details.text.push(
          `Warning. The fallback documnet fragment used to loadElement with key '${key}' contained more than one element at its root. The first one was used. The rest were dropped.`,
        );
      }
    } else {
      details.level = "error";
      details.ok = false;
      details.text.push(
        `loadElement() attempted to use an invalid fallback for key '${key}'. Valid values must be a String, Element, or DocumentFragment.`,
      );
    }
    if (details.ok === true) {
      localStorage.setItem(
        storageKey,
        JSON.stringify({ data: this._element[key] }),
      );
    }
    return this.addLog(details);
  }

  _loadFragment(key, fallback = null) {
    const storageKey = `bittyFragment_${key}`;
    const details = {
      level: "info",
      ok: true,
      text: [],
    };
    const storage = localStorage.getItem(storageKey);
    if (key !== null && this._fragment[key] !== undefined) {
      details.level = "warn";
      details.text.push(
        `Warning: loadFragment() replaced an existing from: ${key}`,
      );
    }
    if (key === null) {
      details.level = "error";
      details.ok = false;
      details.text.push(
        `No key provided for 'this.loadFragment(key [,fallback])'`,
      );
    } else if (
      storage === null && fallback === null
    ) {
      details.level = "error";
      details.ok = false;
      details.text.push(
        `No storage found for '${key}' and not fallback provided.`,
      );
    } else if (storage !== null) {
      this._fragment[key] = JSON.parse(storage).data;
    } else if (typeof fallback === "string") {
      this._fragment[key] = fallback;
    } else if (fallback instanceof Element) {
      this._fragment[key] = fallback.outerHTML;
    } else if (fallback instanceof DocumentFragment) {
      this._fragment[key] = [...fallback.children].map((el) => el.outerHTML)
        .join("");
    } else {
      details.level = "error";
      details.ok = false;
      details.text.push(
        `loadFragment() attempted to use an invalid fallback for key '${key}'. Valid values must be a String, Element, or DocumentFragment.`,
      );
    }
    if (details.ok === true) {
      localStorage.setItem(
        storageKey,
        JSON.stringify({ data: this._fragment[key] }),
      );
    }
    return this.addLog(details);
  }

  _loadJSON(key, fallback) {
    const storageKey = `bittyJSON_${key}`;
    const details = {
      level: "info",
      from: "loadJSON",
      ok: true,
      text: [],
      extraInfo: null,
    };
    const keyAlreadyExists = this.json[key] === undefined ? false : true;
    try {
      const storage = localStorage.getItem(storageKey);
      if (storage !== null) {
        const json = JSON.parse(storage).data;
        this.json[key] = json;
        details.text.push(`Loaded json from storage with from: ${key}`);
      } else if (typeof fallback === "string") {
        this.json[key] = JSON.parse(fallback);
        localStorage.setItem(key, `{ "data": ${fallback} }`);
        details.text.push(
          `Loaded json from fallback string with from: ${key}`,
        );
      } else if (typeof fallback === "object") {
        localStorage.setItem(key, JSON.stringify({ data: fallback }));
        this.json[key] = fallback;
        details.text.push(
          `Loaded json from fallback object with from: ${key}`,
        );
      } else {
        details.level = "error", details.ok = false;
        details.text.push(
          `Could not load JSON from either storage or fallbak with from: ${key}`,
        );
      }
    } catch (loadingError) {
      details.level = "error";
      details.ok = false;
      details.text.push(
        "Could not load JSON. See 'moreDetails' for additional information",
      );
      details.moreInfo = loadingError;
    }
    return this.addLog(details);
  }

  // _loadJSON_original(key, fallback = null) {
  //   const storageKey = `bittyJSON_${key}`;
  //   const details = {
  //     level: "info",
  //     from: "loadJSON",
  //     ok: true,
  //     text: [],
  //     moreDetails: null,
  //   };
  //   const keyAlreadyExists = this.json[key] === undefined ? false : true;
  //   try {
  //     const storage = localStorage.getItem(storageKey);
  //     if (storage !== null) {
  //       const json = JSON.parse(storage).data;
  //       this.json[key] = json;
  //       details.text.push(`Loaded json from storage with from: ${key}`);
  //     } else if (typeof fallback === "string") {
  //       this.json[key] = JSON.parse(fallback);
  //       localStorage.setItem(key, `{ "data": ${fallback} }`);
  //       details.text.push(`Loaded json from fallback with from: ${key}`);
  //     } else if (typeof fallback === "object") {
  //       localStorage.setItem(key, JSON.stringify({ data: fallback }));
  //       this.json[key] = fallback;
  //       details.text.push(`Loaded json from fallback with from: ${key}`);
  //     } else {
  //       details.level = "error", details.ok = false;
  //       details.text.push(
  //         `Could not load JSON from either storage or fallbak with from: ${key}`,
  //       );
  //     }
  //   } catch (loadingError) {
  //     details.level = "error";
  //     details.ok = false;
  //     details.text.push(
  //       "Could not load JSON. See 'moreDetails' for additional information",
  //     );
  //     details.moreInfo = loadingError;
  //   }
  //   return this.addLog(details);
  // }

  // // TODO: throw error if parsing fails
  // _loadJSON_Original(key, fallback = null) {
  //   const storageKey = `bittyJSON_${key}`;
  //   const storage = localStorage.getItem(storageKey);
  //   // TODO: Update so details has everything
  //   // for the log then update everything in the
  //   // method to use it.
  //   const details = { level: "info", extraText: "" };
  //   if (this.json[key] !== undefined) {
  //     details.level = "warn";
  //     details.extraText = " Warning - overwrote exsiting key";
  //   }
  //   try {
  //     if (storage !== null) {
  //       const json = JSON.parse(storage);
  //       if (json.data === undefined) {
  //         return this.addLog(
  //           "error",
  //           "loadJSON",
  //           false,
  //           `Attempted to load storage without a top level 'data' in from: ${key}${details.extraText}`,
  //           null,
  //         );
  //       } else {
  //         this.json[key] = JSON.parse(storage).data;
  //         return this.addLog(
  //           details.level,
  //           "loadJSON",
  //           true,
  //           `Loaded JSON for from: ${key}${details.extraText}`,
  //           null,
  //         );
  //       }
  //     }
  //     if (fallback !== null) {
  //       if (typeof fallback === "string") {
  //         this.json[key] = JSON.parse(fallback);
  //         localStorage.setItem(key, `{ "data": ${fallback} }`);
  //         return this.addLog(
  //           details.level,
  //           "loadJSON",
  //           true,
  //           `Loaded fallback JSON for from: ${key}${details.extraText}`,
  //           null,
  //         );
  //       } else if (typeof fallback === "object") {
  //         this.json[key] = fallback;
  //         localStorage.setItem(key, JSON.stringify({ data: fallback }));
  //         return this.addLog(
  //           details.level,
  //           "loadJSON",
  //           true,
  //           `Loaded fallback JSON for from: ${key}${details.extraText}`,
  //           null,
  //         );
  //       }
  //     }
  //     return this.addLog(
  //       "error",
  //       "loadJSON",
  //       false,
  //       `No JSON in storage or fallback for from: ${key}${details.extraText}`,
  //       null,
  //     );
  //   } catch (error) {
  //     return this.addLog(
  //       "error",
  //       "loadJSON",
  //       false,
  //       `Could not parse fallback JSON for from: ${key}${details.extraText}`,
  //       null,
  //     );
  //   }
  // }

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
            bittyClass.bitClass = bit;
            this.addBittyVars(bittyClass);
            this.addBittyClasses(bittyClass);
            this.addBittyListeners(bittyClass);
            this.#bits.push(bittyClass);
            await bittyClass._runBittyReady();
          }
        }
      }
    }
  }

  _loadSVG(key, fallback = null) {
    const storageKey = `bittySVG_${key}`;
    const details = {
      level: "info",
      ok: true,
      text: [],
    };
    const storage = localStorage.getItem(storageKey);
    if (key !== null && this._svg[key] !== undefined) {
      details.level = "warn";
      details.text.push(
        `Warning: loadSVG() replaced an existing from: ${key}`,
      );
    }
    if (key === null) {
      details.level = "error";
      details.ok = false;
      details.text.push(
        `No key provided for 'this.loadSVG(key [,fallback])'`,
      );
    } else if (
      storage === null && fallback === null
    ) {
      details.level = "error";
      details.ok = false;
      details.text.push(
        `No storage found for '${key}' and not fallback provided.`,
      );
    } else if (storage !== null) {
      this._svg[key] = JSON.parse(storage).data;
    } else if (typeof fallback === "string") {
      this._svg[key] = fallback;
    } else if (fallback instanceof SVGSVGElement) {
      this._svg[key] = fallback.outerHTML;
    } else {
      details.level = "error";
      details.ok = false;
      details.text.push(
        `loadSVG() attempted to use an invalid fallback for key '${key}'. Valid values must be a String or an SVG.`,
      );
    }
    if (details.ok === true) {
      localStorage.setItem(
        storageKey,
        JSON.stringify({ data: this._svg[key] }),
      );
    }
    return this.addLog(details);
  }

  loadWindowClasses() {
    if (this.constructor.loadedPageClasses === false) {
      this.constructor.loadedPageClasses = true;
      if (window.BittyClasses) {
        for (const bittyClassKey of Object.keys(window.BittyClasses)) {
          const bittyClass = new window.BittyClasses[bittyClassKey]();
          bittyClass.bitClass = bittyClassKey;
          this.addBittyVars(bittyClass);
          this.addBittyClasses(bittyClass);
          this.addBittyListeners(bittyClass);
          this.#bits.push(bittyClass);
          bittyClass._runBittyReady();
        }
      }
    }
  }

  _renderElement(key, subs = {}) {
    const details = {
      level: "info",
      from: "renderElement",
      ok: true,
      text: [],
    };

    if (this._element[key] === undefined) {
      details.level = "error";
      details.ok = false;
      details.text.push(
        `Attempted to render non-existing element using key '${key}'`,
      );
      this.addLog(details);
      return undefined;
    } else {
      let content = this._element[key];
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
    if (this._fragment[key] === undefined) {
      console.log("TODO: Log missing key for renderFragment");
      return undefined;
    } else {
      let content = this._fragment[key];
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
      return template.content;
    }
  }

  _renderSVG(key, subs = {}) {
    const details = {
      level: "info",
      from: "renderSVG",
      ok: true,
      text: [],
    };
    if (this._svg[key] === undefined) {
      details.level = "error";
      details.ok = false;
      details.text.push(
        `Attempted to render non-existing SVG using key '${key}'`,
      );
      return undefined;
    } else {
      let content = this._svg[key];
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

  async _runBittyReady() {
    if (typeof this.bittyReady === "function") {
      this.bittyReady();
    }
  }

  _saveElement(key) {
    if (this.element[key] === undefined) {
      console.log("TODO: Add log for _saveElement having no key");
      // return this.addLog(
      //   "error",
      //   "saveElement",
      //   false,
      //   `Tried to save an element with key '${key}', but it does not exist.`,
      // );
    }
    const storageKey = `bittyElement_${key}`;
    const payload = JSON.stringify({
      data: this.element[key].outerHTML,
    });
    localStorage.setItem(storageKey, payload);

    // TODO: Return valid log entry
    // return this.addLog(
    //   "info",
    //   "saveElement",
    //   true,
    //   `Saved element with key '${key}'`,
    // );
  }

  _send(payload, signal) {
    const ev = new BittySend(payload, signal);
    dispatchEvent(ev);
  }

  _setCSS(key, value) {
    document.documentElement.style.setProperty(key, value);
  }

  setGlobalLogLevel(level) {
    const levelIndex = this.#_logLevels.indexOf(level.toLowerCase());
    if (levelIndex >= 0) {
      this.#_globalLogLevelIndex = levelIndex;
    } else {
      // TODO: Add log saying an invalid level was attempted.
      this.#_globalLogLevelIndex = 2;
    }
  }

  _setLocalLogLevel(levels, level) {
    if (level === "global") {
      this._localLogLevelIndex = -1;
    } else {
      const levelIndex = levels.indexOf(level.toLowerCase());
      if (levelIndex >= 0) {
        this._localLogLevelIndex = levelIndex;
      } else {
        // TODO: Add log saying an invalid level was attempted.
        this._localLogLevelIndex = 2;
      }
    }
  }

  _updateElement(key, content) {
    return this.createElement(key, content, { update: true });
  }

  _updateFragment(key, content) {
    return this.createFragment(key, content, { update: true });
  }

  _updateSVG(key, content) {
    return this.createSVG(key, content, { update: true });
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
  //       this.signal](ev, receiver);
  //     }
  //   } else {
  //     this.signal](ev, null);
  //   }
  // }

  // async processBittySendSignal(payload, signal) {
  //   const receivers = document.querySelectorAll(
  //     `[data-receive~='${signal}']`,
  //   );
  //   if (receivers.length > 0) {
  //     for (const receiver of receivers) {
  //       this.updateReceiverForBittySignal(receiver);
  //       this.signal](payload, receiver);
  //     }
  //   } else {
  //     this.signal](payload, null);
  //   }
  // }

  // async processBittyTriggerSignal(signal) {
  //   const receivers = document.querySelectorAll(
  //     `[data-receive~='${signal}']`,
  //   );
  //   if (receivers.length > 0) {
  //     for (const receiver of receivers) {
  //       this.updateReceiverForBittySignal(receiver);
  //       this.signal](null, receiver);
  //     }
  //   } else {
  //     this.signal](null, null);
  //   }
  // }

  // updateReceiverV2(ev, sender, receiver) {
  //   receiver.isSender = () => receiver.isSameNode(sender);
  //   receiver.isTarget = () => receiver.isSameNode(ev.target);
  //   this.updateReceiverData(receiver);
  // }

  // updateReceiver_V3(ev, receiver) {
  //   receiver.isSender = () => receiver.isSameNode(ev.sender);
  //   receiver.isTarget = () => receiver.isSameNode(ev.target);
  //   this.updateReceiverData(receiver);
  // }

  // updateReceiverForBittySignal(receiver) {
  //   // TODO: Add test for docs
  //   receiver.isSender = () => false;
  //   receiver.isTarget = () => false;
  //   this.updateReceiverData(receiver);
  // }

  // updateReceiverData(receiver) {
  //   receiver.copyText = async function () {
  //     if (receiver.value) {
  //       try {
  //         await navigator.clipboard.writeText(receiver.value);
  //       } catch (error) {
  //         // TODO: Switch this to logging an error.
  //         console.error("Could not copy text to clipboard");
  //       }
  //     }
  //   };
  //   receiver.getData = function (key, closest = true) {
  //     // TODO: Handle closest
  //     return receiver.dataset[key];
  //   };
  //   receiver.getDataAsFloat = function (key, closest = true) {
  //     // TODO: Handle closest
  //     return parseFloat(receiver.dataset[key]);
  //   };
  //   receiver.getDataAsInt = function (key, closest = true) {
  //     // TODO: Handle closest
  //     return parseInt(receiver.dataset[key], 10);
  //   };
  //   receiver.getValue = function (key) {
  //     return receiver.value;
  //   };
  //   receiver.getValueAsFloat = function (key) {
  //     return parseFloat(receiver.value);
  //   };
  //   receiver.getValueAsInt = function (key) {
  //     return parseInt(receiver.value, 10);
  //   };
  //   receiver.setData = function (key, value) {
  //     receiver.dataset[key] = value;
  //   };
  // }

  async _processEvent(ev) {
    if (this._signalListeners[ev.type] !== undefined) {
      for (const signal of splitSignalString(this._signalListeners[ev.type])) {
        if (this[signal] !== undefined) {
          this.processSignal(ev, signal);
        }
      }
    } else if (ev.type === "bittytrigger") {
      const signals = splitSignalString(ev.bitty.signals);
      for (const signal of signals) {
        if (this[signal] !== undefined) {
          this.processSignal(ev, signal);
        }
      }
    } else if (ev.type === "bittysend") {
      const signals = splitSignalString(ev.bitty.signals);
      for (const signal of signals) {
        if (this[signal] !== undefined) {
          this.processSignal(ev, signal);
        }
      }
    } else {
      const senders = findSenders(ev.target);
      for (const sender of senders) {
        if (ev.type.substring(0, 1) === "b") {
          console.log(ev.type);
        }
        const signals = splitSignalString(sender.dataset.send);
        for (const signal of signals) {
          if (this[signal] !== undefined) {
            ev.sender = sender;
            if (ev.sender.dataset.listeners === undefined) {
              if (
                ["click", "input", "bittytrigger", "bittysend"]
                  .includes(
                    ev.type,
                  ) === false
              ) {
                return;
              }
            } else {
              const listeners = splitSignalString(ev.sender.dataset.listeners);
              if (listeners.includes(ev.type) === false) {
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
    }
  }

  _processSignal(ev, signal) {
    const receivers = document.querySelectorAll(
      `[data-receive~='${signal}']`,
    );
    if (receivers.length > 0) {
      for (const receiver of receivers) {
        // TODO: Split updateRecieverV4 out so you can go piece
        // by piece a little more (e.g. with
        // figureing out if the element is
        // the target or sender.
        this.updateReceiverV4(null, receiver);
        this[signal](ev, receiver);
      }
    } else {
      //this[signal](ev, null);
    }
  }

  // // TODO: Deprecate _processTrigger in favor
  // // of _processBittySignal.
  // _processTrigger(signal) {
  //   const receivers = document.querySelectorAll(
  //     `[data-receive~='${signal}']`,
  //   );
  //   if (receivers.length > 0) {
  //     for (const receiver of receivers) {
  //       this.updateReceiverV4(null, receiver);
  //       this[signal](null, receiver);
  //     }
  //   } else {
  //     this[signal](null, null);
  //   }
  // }

  //async _processEvent_holding(ev) {
  //  console.log(ev.type);
  //  if (ev.type === "bittytrigger") {
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
  //  } else if (ev.type === "bittysend") {
  //    //console.log("TODO: bittysend");
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
  //       ["click", "input", "bittytrigger", "bittysend"].includes(
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
  //       ["click", "input", "bittytrigger", "bittysend"].includes(
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

  // async processEvent_original(ev) {
  //   let senders = [];
  //   if (ev.type === "bittytrigger") {
  //     const signals = splitSignalString(ev.bittyPayload.target.dataset.send);
  //     for (const signal of signals) {
  //       if (typeof this.signal] === "function") {
  //         this.processBittyTriggerSignal(signal);
  //       }
  //     }
  //   } else if (ev.type === "bittysend") {
  //     const signals = splitSignalString(ev.bittyPayload.target.dataset.send);
  //     for (const signal of signals) {
  //       if (typeof this.signal] === "function") {
  //         this.processBittySendSignal(ev.bittyPayload.content, signal);
  //       }
  //     }
  //   } else {
  //     senders = findSenders(ev.target);
  //     for (const sender of senders) {
  //       const signals = splitSignalString(sender.dataset.send);
  //       for (const signal of signals) {
  //         if (typeof this.signal] === "function") {
  //           if (sender.dataset.listeners !== undefined) {
  //             const listeners = splitSignalString(sender.dataset.listeners);
  //             if (listeners.includes(ev.type)) {
  //               this.processSignal(ev, sender, signal);
  //             }
  //           } else {
  //             this.processSignal(ev, sender, signal);
  //           }
  //         }
  //       }
  //     }
  //   }
  // }

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
    if (typeof this.bittyReady === "function") {
      if (this.bittyReady[Symbol.toStringTag] === "AsyncFunction") {
        await this.bittyReady();
      } else {
        this.bittyReady();
      }
    }
  }

  _saveJSON(key) {
    const storageKey = `bittyJSON_${key}`;
    const details = {
      level: "info",
      from: "saveJSON",
      ok: true,
      text: [],
      moreDetails: null,
    };
    if (this.json[key] === undefined) {
      details.level = "error";
      details.ok = false;
      details.text.push(
        `Tried to save JSON with '${key}' but it does not exist in the collection.`,
      );
      return this.addLog(details);
    }
    if (typeof this.json[key] === "object") {
      try {
        const payload = JSON.stringify({ data: this.json[key] });
        localStorage.setItem(storageKey, payload);
        details.text.push(`Saved JSON with from: ${key}`);
      } catch (saveError) {
        details.level = "error";
        details.ok = false;
        details.text.push(
          `Could not save JSON with key '${key}' because it couldn't be stringified.`,
        );
      }
      return this.addLog(details);
    }
  }

  // _saveJSON_original(key) {
  //   const storageKey = `bittyJSON_${key}`;
  //   const details = {
  //     level: "info",
  //     from: "saveJSON",
  //     ok: true,
  //     text: [],
  //     moreDetails: null,
  //   };
  //   if (this.json[key] === undefined) {
  //     details.level = "error";
  //     details.ok = false;
  //     details.text.push(
  //       `Tried to save JSON with '${key}' but it does not exist in the collection.`,
  //     );
  //     return this.addLog(details);
  //   }
  //   if (typeof this.json[key] === "object") {
  //     try {
  //       const payload = JSON.stringify({ data: this.json[key] });
  //       localStorage.setItem(storageKey, payload);
  //       details.text.push(`Saved JSON with from: ${key}`);
  //     } catch (saveError) {
  //       details.level = "error";
  //       details.ok = false;
  //       details.text.push(
  //         `Could not save JSON with key '${key}' because it couldn't be stringified.`,
  //       );
  //     }
  //     return this.addLog(details);
  //   }
  // }

  // _saveJSON_original(key) {
  //   const storageKey = `bittyJSON_${key}`;
  //   if (this.json[key] !== undefined) {
  //     if (typeof this.json[key] === "object") {
  //       const payload = JSON.stringify({ data: this.json[key] });
  //       localStorage.setItem(storageKey, payload);
  //       return this.addLog(
  //         "info",
  //         "savejson",
  //         true,
  //         `Saved JSON for from: ${key}`,
  //         null,
  //       );
  //     } else {
  //       return this.addLog(
  //         "error",
  //         "savejson",
  //         false,
  //         `Tried to saveJSON on something that's not an object: ${key}`,
  //         null,
  //       );
  //     }
  //   } else {
  //     return this.addLog(
  //       "error",
  //       "savejson",
  //       false,
  //       `No JSON available to save with from: ${key}`,
  //       null,
  //     );
  //   }
  // }

  async _sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  timestamp(datetime) {
    const parts = {};
    new Intl.DateTimeFormat(undefined, {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: false,
    })
      .formatToParts(datetime)
      .filter((part) => part.type !== "literal")
      .forEach((part) => parts[part.type] = part.value);
    const date = [parts.year, parts.month, parts.day].join("-");
    const time = [parts.hour, parts.minute, parts.second].join(":");
    return `${date}T${time}`;
  }

  _trigger(signals) {
    const ev = new BittyTrigger(signals);
    dispatchEvent(ev);
  }

  _warn(payload) {
    if (typeof payload === "string") {
      this.addLog({
        level: "warn",
        ok: true,
        text: [payload],
      });
    } else {
      this.addLog(payload);
    }
  }
}

class BittySend extends Event {
  constructor(payload, signals) {
    super("bittytrigger", { bubbles: true });
    this.bitty = {
      payload: payload,
      signals: signals,
    };
  }
}

class BittyTrigger extends Event {
  constructor(signals) {
    super("bittytrigger", { bubbles: true });
    this.bitty = { signals: signals };
  }
}

function splitSignalString(input) {
  return input
    .trim()
    .split(/\s+/m)
    .map((l) => l.trim());
}

function findSenders(el) {
  const senders = [];
  while (el) {
    if (el.dataset !== undefined && el.dataset.send !== undefined) {
      senders.push(el);
    }
    el = el.parentElement;
  }
  return senders;
}

customElements.define(tagName, BittyJs);

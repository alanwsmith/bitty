const version = [8, 0, 0];
const tagName = `bitty-${version[0]}-${version[1]}`;

const changeFormTypes = [
  "checkbox",
  "color",
  "date",
  "datetime-local",
  "file",
  "form",
  "option",
  "radio",
  "search",
  "time",
];

const enterFormTypes = [
  "email",
  "month",
  "number",
  "password",
  "search",
  "tel",
  "text",
  "url",
  "week",
];

const inputFormTypes = [
  "range",
  "search",
  "number",
];

class BittyJs extends HTMLElement {
  static bits = [];

  constructor() {
    super();
  }

  async connectedCallback() {
    if (this.dataset.connect) {
      const connString = this.dataset.connect.trim();
      const incoming = await import(connString);
      if (incoming.b !== undefined) {
        incoming.b._trueValues = ["true", "yes", "on", "1"];
        incoming.b._falseValues = ["false", "no", "off", "0"];
        incoming.b._debouncers = {};
        incoming.b._marks = {};
        incoming.b.svgs = {};
        if (incoming.b.templates === undefined) {
          incoming.b.templates = {};
        }
        if (incoming.b.debugging === undefined) {
          incoming.b.debugging = false;
        }
        this.addToggleSwitchTemplate(incoming);
        incoming.b.data = {};
        this.loadPageAssets(incoming);
        this.addBittyClasses(incoming);
        this.constructor.bits.push(incoming);
        window.addEventListener("bittysend", (ev) => {
          incoming.b._processBittySend(ev);
        });
        window.addEventListener("bittytrigger", (ev) => {
          incoming.b._processBittyTrigger(ev);
        });
        window.addEventListener("click", (ev) => {
          incoming.b._processEvent(ev);
        });
        window.addEventListener("input", (ev) => {
          incoming.b._processInputEvent(ev);
        });
        window.addEventListener("change", (ev) => {
          incoming.b._processChangeEvent(ev);
        });
        document.addEventListener("submit", (ev) => {
          incoming.b._processEvent(ev);
        });
        document.addEventListener("keydown", (ev) => {
          if (
            ev.keyCode === 13 &&
            ev.target &&
            ev.target.tagName &&
            ev.target.tagName.toLowerCase() === "input"
          ) {
            const checkAttr = ev.target.getAttribute("type");
            if (enterFormTypes.includes(checkAttr.toLowerCase())) {
              incoming.b._processInputTextEnter(ev);
            }
          }
        });
        [...document.querySelectorAll("[data-listen]")].forEach(
          (el) => {
            incoming.b._splitSignalString(el.dataset.listen).forEach(
              (listener) => {
                if (
                  [
                    "bittysend",
                    "bittytrigger",
                    "change",
                    "click",
                    "input",
                    "submit",
                  ].includes(
                    listener,
                  ) === false
                ) {
                  window.addEventListener(listener, (ev) => {
                    incoming.b._processEvent(ev);
                  });
                }
              },
            );
          },
        );
        incoming.b._processInit();
      }
    }
  }

  addBittyClasses(target) {
    Object.getOwnPropertyNames(Object.getPrototypeOf(this)).filter((method) =>
      method.substring(0, 1) === "_"
    ).forEach((method) => {
      target.b[method.substring(1)] = this[method].bind(target);
    });
  }

  _addListener(event, signals) {
    window.addEventListener(event, (ev) => {
      this.b._processCustomEvent(ev, signals);
    });
  }

  _addStyles(css) {
    const sheet = new CSSStyleSheet();
    sheet.replaceSync(css);
    document.adoptedStyleSheets.push(sheet);
    return sheet;
  }

  addToggleSwitchTemplate(target) {
    target.b.templates.switch = `
<label for="__ID__" class="__CLASS__">
  __PREPEND__
  <button id="__ID__" role="switch" __SEND_ATTR__ __RECEIVE_ATTR__ __KEY_ATTR__ aria-checked="__STATE__">
    <span></span><span></span>
  </button>
  __APPEND__
</label>`;
  }

  _ce(tag, options = {}) {
    return document.createElement(tag, options);
  }

  async _copy(selector) {
    const el = document.querySelector(selector);
    if (el.value !== undefined) {
      try {
        await navigator.clipboard.writeText(el.value);
      } catch (error) {
        console.error(`Could not copy .value from ${selector}`);
        return false;
      }
    } else {
      try {
        await navigator.clipboard.writeText(el.innerHTML);
      } catch (error) {
        console.error(`Could not copy .innerHTML from ${selector}`);
        return false;
      }
    }
    return true;
  }

  _debounce(key, signals, ms, payload = {}) {
    if (this.b._debouncers[key]) {
      window.clearTimeout(this.b._debouncers[key]);
    }
    this.b._debouncers[key] = setTimeout(() => {
      this.b.send.apply(this, [payload, signals]);
    }, ms);
  }

  _debug(payload) {
    if (this.b.debugging === true) {
      console.log(payload);
    }
  }

  _dedup(array) {
    return [...new Set(array)];
  }

  __findSenders(el) {
    const senders = [];
    while (el) {
      if (el.dataset !== undefined && el.dataset.s !== undefined) {
        senders.push(el);
      }
      el = el.parentElement;
    }
    return senders;
  }

  async _get(url, fallback = null, options = {}) {
    let response = await fetch(url, options);
    try {
      if (response.ok === true) {
        try {
          const json = await response.json();
          return json;
        } catch (parseError) {
          console.error(parseError);
        }
      } else {
        console.error(response);
      }
    } catch (error) {
      console.error(error);
    }
    return undefined;
  }

  _getMarks(key) {
    return this.b._marks[key];
  }

  async _getTemplates(url, options = {}) {
    let response = await fetch(url, options);
    try {
      if (response.ok === true) {
        try {
          const templates = {};
          const content = await response.text();
          const container = document.createElement("div");
          container.innerHTML = content;
          container.querySelectorAll("script").forEach((script) => {
            if (script.type === "text/html" && script.id !== undefined) {
              this.b.templates[script.id] = script.innerHTML.trim();
            }
            if (script.type === "image/svg" && script.id !== undefined) {
              this.b.svgs[script.id] = script.innerHTML.trim();
            }
            if (script.type === "application/json" && script.id !== undefined) {
              this.b.data[script.id] = JSON.parse(script.innerHTML.trim());
            }
          });
          return true;
        } catch (parseError) {
          console.error(parseError);
          return false;
        }
      }
    } catch (error) {
      console.error(error);
      return false;
    }
  }

  __getBool(value) {
    if (value === undefined) {
      return undefined;
    }
    if (value === null) {
      return undefined;
    }
    const checkNum = parseInt(value, 10);
    if (checkNum !== NaN && checkNum > 0) {
      return true;
    }
    if (checkNum !== NaN && checkNum <= 0) {
      return false;
    }
    const lcValue = value.toLowerCase();
    if (this.b._trueValues.includes(lcValue)) {
      return true;
    }
    if (this.b._falseValues.includes(lcValue)) {
      return false;
    }
    return undefined;
  }

  loadPageAssets(target) {
    document.querySelectorAll("script").forEach((script) => {
      if (script.type === "text/html" && script.id !== undefined) {
        target.b.templates[script.id] = script.innerHTML.trim();
      }
      if (script.type === "image/svg" && script.id !== undefined) {
        target.b.svgs[script.id] = script.innerHTML.trim();
      }
      if (script.type === "application/json" && script.id !== undefined) {
        target.b.data[script.id] = JSON.parse(script.innerHTML.trim());
      }
    });
  }

  _mapKey(
    key,
    signals,
    modKeys = [],
    options = {},
  ) {
    const keyCode = typeof key === "string" ? null : key;
    if (modKeys === null) {
      modKeys = [];
    }
    if (options.preventDefault === undefined) {
      options.preventDefault = false;
    }
    if (options.listener === undefined) {
      options.listener = "keydown";
    }
    for (let i = 0; i < modKeys.length; i += 1) {
      if (this.b.modKeyAliases()[modKeys[i].toLowerCase()] !== undefined) {
        modKeys[i] = this.b.modKeyAliases()[modKeys[i].toLowerCase()];
      } else {
        console.error(
          `ERROR: Tried to use invalid modifier key '${
            modKeys[i]
          }' in mapKey()`,
        );
        return;
      }
    }
    if (options.preventDefault === true) {
      window.addEventListener(options.listener, (ev) => {
        if (ev.key === key || ev.keyCode === keyCode) {
          for (const mod of modKeys) {
            if (ev[mod] === false) {
              return;
            }
          }
          ev.preventDefault();
          this.b._processKeypress(ev, signals);
        }
      });
    } else {
      window.addEventListener(options.listener, (ev) => {
        if (ev.key === key || ev.keyCode === keyCode) {
          for (const mod of modKeys) {
            if (ev[mod] === false) {
              return;
            }
          }
          this.b._processKeypress(ev, signals);
        }
      });
    }
  }

  _mark(key) {
    try {
      this.b._marks[key].push(performance.now());
    } catch (_) {
      this.b._marks[key] = [];
      this.b._marks[key].push(performance.now());
    }
  }

  __markEventAsUpdated(ev) {
    ev.bittyUpdated = true;
  }

  _modKeyAliases() {
    return {
      alt: "altKey",
      altkey: "altKey",
      cmd: "metaKey",
      command: "metaKey",
      ctrl: "ctrlKey",
      ctrlkey: "ctrlKey",
      meta: "metaKey",
      metakey: "metaKey",
      option: "altKey",
      optionkey: "altKey",
      shift: "shiftKey",
      shiftkey: "shiftKey",
      win: "metaKey",
      windows: "metaKey",
    };
  }

  __processBittySend(ev) {
    this.b._updateElement(ev.target);
    const signals = this.b._splitSignalString(ev.signals);
    for (const signal of signals) {
      if (typeof this[signal] === "function") {
        const receivers = document.querySelectorAll(
          `[data-r~='${signal}']`,
        );
        if (receivers.length > 0) {
          for (const receiver of receivers) {
            this.b._updateElement(receiver);
            receiver.isSender = () => {
              return false;
            };
            receiver.isTarget = () => {
              return false;
            };
            this[signal](ev.payload, null, receiver);
          }
        } else {
          this[signal](ev.payload, null, null);
        }
      }
    }
  }

  __processBittyTrigger(ev) {
    this.b._updateElement(ev.target);
    const signals = this.b._splitSignalString(ev.signals);
    for (const signal of signals) {
      if (typeof this[signal] === "function") {
        const receivers = document.querySelectorAll(
          `[data-r~='${signal}']`,
        );
        if (receivers.length > 0) {
          for (const receiver of receivers) {
            this.b._updateElement(receiver);
            receiver.isSender = () => {
              return false;
            };
            receiver.isTarget = () => {
              return false;
            };
            this[signal](ev, null, receiver);
          }
        } else {
          this[signal](ev, null, null);
        }
      }
    }
  }

  __processChangeEvent(ev) {
    this.b._updateElement(ev.target);
    const senders = this.b._findSenders(ev.target);
    for (const sender of senders) {
      this.b._updateElement(sender);
      const signals = this.b._splitSignalString(sender.dataset.s);
      const listeners = this.b._splitSignalString(
        sender.dataset.listen,
      );
      if (listeners.length === 0) {
        const checkAttr = sender.getAttribute("type");
        if (checkAttr && enterFormTypes.includes(checkAttr.toLowerCase())) {
          return;
        }
        if (checkAttr && inputFormTypes.includes(checkAttr.toLowerCase())) {
          return;
        }
        if (
          sender.tagName && sender.tagName.toLowerCase() === "form"
        ) {
          return;
        }
        for (const signal of signals) {
          if (typeof this[signal] === "function") {
            const receivers = document.querySelectorAll(
              `[data-r~='${signal}']`,
            );
            if (receivers.length > 0) {
              for (const receiver of receivers) {
                this.b._updateElement(receiver);
                this[signal](ev, sender, receiver);
              }
            } else {
              this[signal](ev, sender, null);
            }
          }
        }
      } else {
        if (listeners.includes(ev.type)) {
          for (const signal of signals) {
            if (typeof this[signal] === "function") {
              const receivers = document.querySelectorAll(
                `[data-r~='${signal}']`,
              );
              if (receivers.length > 0) {
                for (const receiver of receivers) {
                  this.b._updateElement(receiver);
                  this[signal](ev, sender, receiver);
                }
              } else {
                this[signal](ev, sender, null);
              }
            }
          }
        }
      }
    }
  }

  __processCustomEvent(ev, signalsString) {
    this.b._updateElement(ev.target);
    const signals = this.b._splitSignalString(signalsString);
    for (const signal of signals) {
      if (typeof this[signal] === "function") {
        const receivers = document.querySelectorAll(
          `[data-r~='${signal}']`,
        );
        if (receivers.length > 0) {
          for (const receiver of receivers) {
            this.b._updateElement(receiver);
            this.b._updateElement(ev.target);
            this[signal](ev, ev.target, receiver);
          }
        } else {
          this[signal](ev, null, null);
        }
      }
    }
  }

  __processEvent(ev) {
    this.b._updateElement(ev.target);
    const senders = this.b._findSenders(ev.target);
    for (const sender of senders) {
      this.b._updateElement(sender);
      const signals = this.b._splitSignalString(sender.dataset.s);
      const listeners = this.b._splitSignalString(
        sender.dataset.listen,
      );
      if (listeners.length === 0) {
        if (ev.target) {
          const checkAttr = sender.getAttribute("type");
          if (checkAttr && changeFormTypes.includes(checkAttr.toLowerCase())) {
            return;
          }
          if (checkAttr && enterFormTypes.includes(checkAttr.toLowerCase())) {
            return;
          }
          if (checkAttr && inputFormTypes.includes(checkAttr.toLowerCase())) {
            return;
          }
          if (
            sender.tagName && sender.tagName.toLowerCase() === "select"
          ) {
            return;
          }
          if (
            sender.tagName && sender.tagName.toLowerCase() === "textarea"
          ) {
            return;
          }

          // if (checkArg && checkArg.toLowerCase() === "text") {
          //   return;
          // }
          // if (checkArg && checkArg.toLowerCase() === "month") {
          //   return;
          // }
          // if (checkArg && checkArg.toLowerCase() === "password") {
          //   return;
          // }

          // if (
          //   checkArg &&
          //   changeFormTypes.includes(checkArg.toLowerCase())
          // ) {
          //   return;
          // }
        }
        if (sender.isContentEditable === true && ev.type === "click") {
          return;
        }

        // if (
        //   sender.tagName &&
        //   changeFormTypes.includes(sender.tagName.toLowerCase()) &&
        //   ev.type === "click"
        // ) {
        //   return;
        // }

        for (const signal of signals) {
          if (typeof this[signal] === "function") {
            const receivers = document.querySelectorAll(
              `[data-r~='${signal}']`,
            );
            if (receivers.length > 0) {
              for (const receiver of receivers) {
                this.b._updateElement(receiver);
                this[signal](ev, sender, receiver);
              }
            } else {
              this[signal](ev, sender, null);
            }
          }
        }
      } else {
        if (listeners.includes(ev.type)) {
          for (const signal of signals) {
            if (typeof this[signal] === "function") {
              const receivers = document.querySelectorAll(
                `[data-r~='${signal}']`,
              );
              if (receivers.length > 0) {
                for (const receiver of receivers) {
                  this.b._updateElement(receiver);
                  this[signal](ev, sender, receiver);
                }
              } else {
                this[signal](ev, sender, null);
              }
            }
          }
        }
      }
    }
  }

  __processInit() {
    if (this.b.init !== undefined) {
      const signals = this.b._splitSignalString(this.b.init);
      for (const signal of signals) {
        if (typeof this[signal] === "function") {
          const receivers = document.querySelectorAll(
            `[data-r~='${signal}']`,
          );
          if (receivers.length > 0) {
            for (const receiver of receivers) {
              this.b._updateElement(receiver);
              receiver.isSender = () => {
                return false;
              };
              receiver.isTarget = () => {
                return false;
              };
              this[signal]({}, null, receiver);
            }
          } else {
            this[signal]({}, null, null);
          }
        }
      }
    }
  }

  __processInputEvent(ev) {
    this.b._updateElement(ev.target);
    const senders = this.b._findSenders(ev.target);
    for (const sender of senders) {
      this.b._updateElement(sender);
      const signals = this.b._splitSignalString(sender.dataset.s);
      const listeners = this.b._splitSignalString(
        sender.dataset.listen,
      );
      if (listeners.length === 0) {
        const checkAttr = sender.getAttribute("type");
        if (checkAttr && !inputFormTypes.includes(checkAttr.toLowerCase())) {
          return;
        }
        if (
          sender.tagName && sender.tagName.toLowerCase() === "select"
        ) {
          return;
        }

        // if (
        //   sender.tagName &&
        //   changeFormTypes.includes(sender.tagName.toLowerCase())
        // ) {
        //   return;
        // } else if (
        //   sender.type && changeFormTypes.includes(sender.type.toLowerCase())
        // ) {
        //   return;
        // }

        for (const signal of signals) {
          if (typeof this[signal] === "function") {
            const receivers = document.querySelectorAll(
              `[data-r~='${signal}']`,
            );
            if (receivers.length > 0) {
              for (const receiver of receivers) {
                this.b._updateElement(receiver);
                this[signal](ev, sender, receiver);
              }
            } else {
              this[signal](ev, sender, null);
            }
          }
        }
      } else {
        if (listeners.includes(ev.type)) {
          for (const signal of signals) {
            if (typeof this[signal] === "function") {
              const receivers = document.querySelectorAll(
                `[data-r~='${signal}']`,
              );
              if (receivers.length > 0) {
                for (const receiver of receivers) {
                  this.b._updateElement(receiver);
                  this[signal](ev, sender, receiver);
                }
              } else {
                this[signal](ev, sender, null);
              }
            }
          }
        }
      }
    }
  }

  __processInputTextEnter(ev) {
    this.b._updateElement(ev.target);
    const senders = this.b._findSenders(ev.target);
    for (const sender of senders) {
      this.b._updateElement(sender);
      const signals = this.b._splitSignalString(sender.dataset.s);
      const listeners = this.b._splitSignalString(
        sender.dataset.listen,
      );
      if (listeners.length === 0) {
        const checkAttr = sender.getAttribute("type");
        if (checkAttr && !enterFormTypes.includes(checkAttr.toLowerCase())) {
          return;
        }
        for (const signal of signals) {
          if (typeof this[signal] === "function") {
            const receivers = document.querySelectorAll(
              `[data-r~='${signal}']`,
            );
            if (receivers.length > 0) {
              for (const receiver of receivers) {
                this.b._updateElement(receiver);
                this[signal](ev, sender, receiver);
              }
            } else {
              this[signal](ev, sender, null);
            }
          }
        }
      } else {
        if (listeners.includes(ev.type)) {
          for (const signal of signals) {
            if (typeof this[signal] === "function") {
              const receivers = document.querySelectorAll(
                `[data-r~='${signal}']`,
              );
              if (receivers.length > 0) {
                for (const receiver of receivers) {
                  this.b._updateElement(receiver);
                  this[signal](ev, sender, receiver);
                }
              } else {
                this[signal](ev, sender, null);
              }
            }
          }
        }
      }
    }
  }

  __processKeypress(ev, signalString) {
    this.b._updateElement(ev.target);
    const sender = ev.target;
    const signals = this.b._splitSignalString(signalString);
    for (const signal of signals) {
      if (typeof this[signal] === "function") {
        const receivers = document.querySelectorAll(
          `[data-r~='${signal}']`,
        );
        if (receivers.length > 0) {
          for (const receiver of receivers) {
            this.b._updateElement(receiver);
            this[signal](ev, sender, receiver);
          }
        } else {
          this[signal](ev, sender, null);
        }
      }
    }
  }

  _qs(selector, el = null) {
    if (el === null) {
      return document.querySelector(selector);
    } else {
      return el.querySelector(selector);
    }
  }

  _qsa(selector, el = null) {
    if (el === null) {
      return document.querySelectorAll(selector);
    } else {
      return el.querySelectorAll(selector);
    }
  }

  async _quickCopy(el, sender, options = {}) {
    if (options.success === undefined) {
      options.success = "Copied";
    }
    if (options.failed === undefined) {
      options.failed = "Could not copy";
    }
    if (options.ms === undefined) {
      options.ms = 2000;
    }
    if (sender.copyId === undefined) {
      sender.copyId === this.b.uuid();
    }
    if (this.b._debouncers[sender.copyId]) {
      window.clearTimeout(this.b._debouncers[sender.copyId]);
    }
    const copyPayload = el.value !== undefined ? el.value : el.innerHTML;
    try {
      await navigator.clipboard.writeText(copyPayload);
      if (sender.originalInnerHTML === undefined) {
        sender.originalInnerHTML = JSON.stringify({ value: sender.innerHTML });
        sender.innerHTML = options.success;
      }
      this.b._debouncers[sender.copyId] = setTimeout(() => {
        sender.innerHTML = JSON.parse(sender.originalInnerHTML).value;
        delete sender.originalInnerHTML;
      }, options.ms);
      return true;
    } catch (error) {
      if (sender.originalInnerHTML === undefined) {
        sender.originalInnerHTML = JSON.stringify({ value: sender.innerHTML });
        sender.innerHTML = options.failed;
      }
      this.b._debouncers[sender.copyId] = setTimeout(() => {
        sender.innerHTML = JSON.parse(sender.originalInnerHTML).value;
        delete sender.originalInnerHTML;
      }, options.ms);
      return false;
    }
  }

  _randomFloat(min, max) {
    const seeker = new Uint32Array(1);
    crypto.getRandomValues(seeker);
    const base = seeker[0] / (0xFFFFFFFF + 1);
    const distance = Math.abs(max - min);
    let result = (base * distance) + Math.min(min, max);
    return result;
  }

  _randomInt(min, max) {
    const seeker = new Uint32Array(1);
    crypto.getRandomValues(seeker);
    const base = seeker[0];
    const modder = Math.abs(max - min) + 1;
    let result = (base % modder) + Math.min(min, max);
    return result;
  }

  _render(input, subs = {}) {
    if (input instanceof Array === false) {
      input = [input];
    }
    if (typeof input[0] === "string" && this.b.svgs[input[0]] !== undefined) {
      let content = this.b.svgs[input[0]];
      for (const needle of Object.keys(subs)) {
        const updates = subs[needle] instanceof Array === true
          ? subs[needle]
          : [subs[needle]];
        const replacement = updates.map((update) => {
          if (typeof update === "string") {
            return update;
          } else {
            const tmpWrapper = document.createElement("div");
            tmpWrapper.appendChild(update);
            return tmpWrapper.innerHTML;
          }
        }).join("");
        content = content.replaceAll(needle, replacement);
      }
      const tmpWrapper = document.createElement("div");
      tmpWrapper.innerHTML = content;
      return tmpWrapper.firstChild;
    }
    let content = input.map((item) => {
      if (typeof item === "string") {
        if (this.b.templates[item] !== undefined) {
          return this.b.templates[item];
        } else {
          return item;
        }
      } else {
        const tmpWrapper = document.createElement("div");
        tmpWrapper.appendChild(item);
        return tmpWrapper.innerHTML;
      }
    }).join("");
    for (const needle of Object.keys(subs)) {
      const updates = subs[needle] instanceof Array === true
        ? subs[needle]
        : [subs[needle]];
      const replacement = updates.map((update) => {
        if (update === null) {
          return "null";
        } else if (update instanceof DocumentFragment) {
          const tmpWrapper = document.createElement("div");
          tmpWrapper.appendChild(update);
          return tmpWrapper.innerHTML;
        } else if (update instanceof Element) {
          const tmpWrapper = document.createElement("div");
          tmpWrapper.appendChild(update);
          return tmpWrapper.innerHTML;
        } else {
          return update;
        }
      }).join("");
      content = content.replaceAll(needle, replacement);
    }
    const result = document.createElement("template");
    result.innerHTML = content;
    return result.content;
  }

  _load(key, fallback) {
    const storage = localStorage.getItem(key);
    if (storage !== null) {
      try {
        return JSON.parse(storage);
      } catch (error) {
        return undefined;
      }
    }
    if (fallback !== undefined) {
      return fallback;
    }
    return undefined;
  }

  _loadPage(key, fallback) {
    const url = new URL(window.location.href);
    return this.b.load(`${url.pathname}-${key}`, fallback);
  }

  _switch(subs = {}) {
    // Set the leading/trailing text
    subs.__APPEND__ = subs.__APPEND__ ? subs.__APPEND__ : "";
    subs.__PREPEND__ = subs.__PREPEND__ ? subs.__PREPEND__ : "";
    // There's always a class, id, and state
    subs.__CLASS__ = subs.__CLASS__ ? subs.__CLASS__ : "bitty-switch";
    subs.__ID__ = subs.__ID__ ? subs.__ID__ : `switch_${this.b.uuid(false)}`;
    subs.__STATE__ = subs.__STATE__ ? subs.__STATE__ : "false";
    // These attributes are optional. The input is only the
    // values. They are converted into the full attribute
    // strings here. The prevents outputting empty attributes.
    subs.__RECEIVE_ATTR__ = subs.__RECEIVE__
      ? `data-r="${subs.__RECEIVE__}"`
      : "";
    subs.__SEND_ATTR__ = subs.__SEND__ ? `data-s="${subs.__SEND__}"` : "";
    subs.__KEY_ATTR__ = subs.__KEY__ ? `data-s="${subs.__KEY__}"` : "";
    return this.b.render("switch", subs);
  }

  _save(key, data) {
    localStorage.setItem(key, JSON.stringify(data));
    return true;
  }

  _savePage(key, data) {
    const url = new URL(window.location.href);
    return this.b.save(`${url.pathname}-${key}`, data);
  }

  _send(payload, signals) {
    const ev = new BittySend(payload, signals);
    dispatchEvent(ev);
  }

  _setCSS(key, value) {
    document.documentElement.style.setProperty(key, value);
  }

  _shuffle(array) {
    for (let i = array.length - 1; i >= 1; i--) {
      const r = new Uint32Array(1);
      crypto.getRandomValues(r);
      const j = r[0] % i;
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  async _sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  _sort(a, b) {
    return a.toLowerCase().localeCompare(b.toLowerCase());
  }

  __splitSignalString(input) {
    if (input !== undefined) {
      return input
        .trim()
        .split(/\s+/m)
        .map((l) => l.trim());
    } else {
      return [];
    }
  }

  _tee(input, log = true) {
    if (log !== false && log !== 0) {
      console.log(input);
    }
    return input;
  }

  _time(datetime = new Date(), ms = false) {
    const options = {
      day: "2-digit",
      fractionalSecondDigits: 3,
      hour: "2-digit",
      hour12: false,
      minute: "2-digit",
      month: "2-digit",
      second: "2-digit",
      year: "numeric",
    };
    const parts = {};
    new Intl.DateTimeFormat(undefined, options)
      .formatToParts(datetime)
      .filter((part) => part.type !== "literal")
      .forEach((part) => parts[part.type] = part.value);
    const date = [parts.year, parts.month, parts.day].join("-");
    const time = [parts.hour, parts.minute, parts.second].join(":");
    if (ms === true) {
      return `${date}T${time}.${parts.fractionalSecond}`;
    } else {
      return `${date}T${time}`;
    }
  }

  _timeMs(datetime) {
    return this.b.time(datetime, true);
  }

  _trigger(signals) {
    const ev = new BittyTrigger(signals);
    dispatchEvent(ev);
  }

  __updateElement(el) {
    if (el.bittyUpdated === true) {
      return;
    }
    el.aria = (key) => {
      const ariaEl = el.closest(`[aria-${key}]`);
      if (ariaEl) {
        return ariaEl.getAttribute(`aria-${key}`);
      } else {
        return undefined;
      }
    };
    el.ariaBool = (key) => {
      const ariaEl = el.closest(`[aria-${key}]`);
      if (ariaEl) {
        const value = ariaEl.getAttribute(`aria-${key}`);
        return this.b._getBool(value);
      } else {
        return undefined;
      }
    };
    el.ariaFloat = (key) => {
      const ariaEl = el.closest(`[aria-${key}]`);
      if (ariaEl) {
        return parseFloat(ariaEl.getAttribute(`aria-${key}`));
      } else {
        return undefined;
      }
    };
    el.ariaInt = (key) => {
      const ariaEl = el.closest(`[aria-${key}]`);
      if (ariaEl) {
        return parseInt(ariaEl.getAttribute(`aria-${key}`), 10);
      } else {
        return undefined;
      }
    };
    el.ariaOrNull = (key) => {
      const ariaSearch = el.closest(`[aria-${key}]`);
      if (ariaSearch === null) {
        return undefined;
      }
      const ariaValue = araiSearch.getAttribute(key);
      if (ariaValue.trim() === "") {
        return null;
      }
      return ariaValue;
    };
    el.copy = async function () {
      if (el.value) {
        try {
          await navigator.clipboard.writeText(el.value);
        } catch (error) {
          console.error(`Could not copy .value from el.`);
          return false;
        }
      } else {
        try {
          await navigator.clipboard.writeText(el.innerHTML);
        } catch (error) {
          console.error(`Could not copy .innerHTML from el.`);
          return false;
        }
      }
      return true;
    };
    el.innerHTMLBool = () => {
      if (el.innerHTML === undefined) {
        return undefined;
      }
      return this.b._getBool(el.innerHTML);
    };
    el.innerHTMLFloat = () => {
      return parseFloat(el.innerHTML.trim().replace(",", ""));
    };
    el.innerHTMLInt = () => {
      return parseInt(el.innerHTML.trim().replace(",", ""), 10);
    };
    el.innerHTMLOrNull = () => {
      if (el.innerHTML !== undefined) {
        return undefined;
      }
      if (el.innerHTML.trim() === "") {
        return null;
      }
      return el.innerHTML;
    };
    el.prop = (key) => {
      if (el.dataset && el.dataset[key] !== undefined) {
        return el.dataset[key];
      }
      const propAncestor = el.closest(`[data-${key}]`);
      if (propAncestor !== null) {
        return propAncestor.dataset[key];
      }
      return undefined;
    };
    el.propBool = (key) => {
      if (el.dataset && el.dataset[key] !== undefined) {
        return this.b._getBool(el.dataset[key]);
      }
      const propAncestor = el.closest(`[data-${key}]`);
      if (propAncestor !== null) {
        return this.b._getBool(propAncestor.dataset[key]);
      }
      return undefined;
    };
    el.propFloat = (key) => {
      if (el.dataset && el.dataset[key] !== undefined) {
        return parseFloat(el.dataset[key]);
      }
      const propAncestor = el.closest(`[data-${key}]`);
      if (propAncestor !== null) {
        return parseFloat(propAncestor.dataset[key]);
      }
      return undefined;
    };
    el.propInt = (key) => {
      if (el.dataset && el.dataset[key] !== undefined) {
        return parseInt(el.dataset[key], 10);
      }
      const propAncestor = el.closest(`[data-${key}]`);
      if (propAncestor !== null) {
        return parseInt(propAncestor.dataset[key], 10);
      }
      return undefined;
    };
    el.propOrNull = (key) => {
      const propSearch = el.closest(`[data-${key}]`);
      if (propSearch === null) {
        return undefined;
      }
      if (propSearch.dataset[key].trim() === "") {
        return null;
      }
      return propSearch.dataset[key];
    };
    el.setAria = (key, value) => {
      const ariaEl = el.closest(`[aria-${key}]`);
      if (ariaEl) {
        ariaEl.setAttribute(`aria-${key}`, value);
      } else {
        el.setAttribute(`aria-${key}`, value);
      }
    };
    el.setProp = (key, value) => {
      const propEl = el.closest(`[data-${key}]`);
      if (propEl) {
        propEl.dataset[key] = value;
      } else {
        el.dataset[key] = value;
      }
    };
    el.toggleAria = (key) => {
      const ariaEl = el.closest(`[aria-${key}]`);
      if (ariaEl) {
        let index = this.b._trueValues.indexOf(
          ariaEl.getAttribute(`aria-${key}`).toLowerCase(),
        );
        if (index >= 0) {
          ariaEl.setAttribute(`aria-${key}`, this.b._falseValues[index]);
          return;
        }
        index = this.b._falseValues.indexOf(
          ariaEl.getAttribute(`aria-${key}`).toLowerCase(),
        );
        if (index >= 0) {
          ariaEl.setAttribute(`aria-${key}`, this.b._trueValues[index]);
          return;
        }
      }
    };
    el.toggleProp = (key) => {
      const propEl = el.closest(`[data-${key}]`);
      if (propEl) {
        let index = this.b._trueValues.indexOf(
          propEl.getAttribute(`data-${key}`).toLowerCase(),
        );
        if (index >= 0) {
          propEl.setAttribute(`data-${key}`, this.b._falseValues[index]);
          return;
        }
        index = this.b._falseValues.indexOf(
          propEl.getAttribute(`data-${key}`).toLowerCase(),
        );
        if (index >= 0) {
          propEl.setAttribute(`data-${key}`, this.b._trueValues[index]);
          return;
        }
      }
    };
    el.valueBool = () => {
      return this.b._getBool(el.value);
    };
    el.valueFloat = () => {
      return parseFloat(el.value);
    };
    el.valueInt = () => {
      return parseInt(el.value, 10);
    };
    el.valueOrNull = () => {
      if (el.value && el.value.trim() === "") {
        return null;
      } else {
        return el.value;
      }
    };
    el.bittyUpdated = true;
  }

  _uuid(dashes = true) {
    if (dashes === false) {
      const uuid = self.crypto.randomUUID();
      return uuid.replaceAll("-", "");
    } else {
      return self.crypto.randomUUID();
    }
  }
}

customElements.define(tagName, BittyJs);

class BittyTrigger extends Event {
  constructor(signals) {
    super("bittytrigger", { bubbles: true });
    this.signals = signals;
  }
}

class BittySend extends Event {
  constructor(payload, signals) {
    super("bittysend", { bubbles: true });
    this.payload = payload;
    this.signals = signals;
  }
}

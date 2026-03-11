const version = [8, 0, 0];
const tagName = `bitty-${version[0]}-${version[1]}`;

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
        incoming.b._debouncers = {};
        this.loadPageTemplates(incoming);
        this.loadPageData(incoming);
        this.loadPageSVGs(incoming);
        this.addBittyClasses(incoming);
        this.constructor.bits.push(incoming);
        incoming.b._processInit();
        window.addEventListener("click", (ev) => {
          incoming.b._processEvent(ev);
        });
        window.addEventListener("input", (ev) => {
          incoming.b._processEvent(ev);
        });
        window.addEventListener("bittysend", (ev) => {
          incoming.b._processBittySend(ev);
        });
        window.addEventListener("bittytrigger", (ev) => {
          incoming.b._processBittyTrigger(ev);
        });
        [...document.querySelectorAll("[data-listen]")].forEach(
          (el) => {
            incoming.b._splitSignalString(el.dataset.listen).forEach(
              (listener) => {
                if (
                  ["click", "input", "bittysend", "bittytrigger"].includes(
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
      }
    }
  }

  __updateElement(el) {
    // REMINDER: this innerHTMLAsFloat and innerHTMLAsInt
    // get set every time.
    if (el.innerHTML !== undefined) {
      el.innerHTMLAsFloat = parseFloat(el.innerHTML.trim().replaceAll(",", ""));
      el.innerHTMLAsInt = parseInt(el.innerHTML.trim().replaceAll(",", ""), 10);
    }
    // REMINDER: This is only run once for each element to
    // set up the functions. The `.isSender()` and
    // `.isTarget()` are updated in a different
    // function each time the element becomes a receiver.
    if (el.bittyUpdated === true) {
      return;
    }
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
    el.prop = (key) => {
      if (
        el.dataset && el.dataset[key] !== undefined
      ) {
        return el.dataset[key];
      }
      const propAncestor = el.closest(`[data-${key}]`);
      if (propAncestor !== null) {
        return propAncestor.dataset[key];
      }
      return undefined;
    };
    el.propAsFloat = (key) => {
      if (
        el && el.dataset && el.dataset[key] !== undefined
      ) {
        return parseFloat(el.dataset[key]);
      }
      const propAncestor = el.closest(`[data-${key}]`);
      if (propAncestor !== null) {
        return parseFloat(propAncestor.dataset[key]);
      }
      return undefined;
    };
    el.propAsInt = (key) => {
      if (
        el && el.dataset && el.dataset[key] !== undefined
      ) {
        return parseInt(el.dataset[key], 10);
      }
      const propAncestor = el.closest(`[data-${key}]`);
      if (propAncestor !== null) {
        return parseInt(propAncestor.dataset[key], 10);
      }
      return undefined;
    };
    el.setProp = (key, value) => {
      el.dataset[key] = value;
    };
    el.val = el.value;
    el.valAsFloat = parseFloat(el.value);
    el.valAsInt = parseInt(el.value, 10);
    el.bittyUpdated = true;
  }

  __updateEvent(ev) {
    if (ev.bittyUpdated === true) {
      return;
    }
    ev.copy = async function () {
      if (ev.target.value) {
        try {
          await navigator.clipboard.writeText(ev.target.value);
        } catch (error) {
          console.error(`Could not copy .value from event.`);
          return false;
        }
      } else {
        try {
          await navigator.clipboard.writeText(ev.target.innerHTML);
        } catch (error) {
          console.error(`Could not copy .innerHTML from event.`);
          return false;
        }
      }
      return true;
    };
    ev.prop = (key) => {
      if (
        ev.target && ev.target.dataset && ev.target.dataset[key] !== undefined
      ) {
        return ev.target.dataset[key];
      }
      const propAncestor = ev.target.closest(`[data-${key}]`);
      if (propAncestor !== null) {
        return propAncestor.dataset[key];
      }
      return undefined;
    };
    ev.propAsFloat = (key) => {
      if (
        ev.target && ev.target.dataset && ev.target.dataset[key] !== undefined
      ) {
        return parseFloat(ev.target.dataset[key]);
      }
      const propAncestor = ev.target.closest(`[data-${key}]`);
      if (propAncestor !== null) {
        return parseFloat(propAncestor.dataset[key]);
      }
      return undefined;
    };
    ev.propAsInt = (key) => {
      if (
        ev.target && ev.target.dataset && ev.target.dataset[key] !== undefined
      ) {
        return parseInt(ev.target.dataset[key], 10);
      }
      const propAncestor = ev.target.closest(`[data-${key}]`);
      if (propAncestor !== null) {
        return parseInt(propAncestor.dataset[key], 10);
      }
      return undefined;
    };
    ev.setProp = (key, value) => {
      ev.target.dataset[key] = value;
    };
    if (ev.target === undefined) {
      ev.val = undefined;
      ev.valAsFloat = undefined;
      ev.valAsInt = undefined;
    } else {
      ev.val = ev.target.value;
      ev.valAsFloat = parseFloat(ev.target.value);
      ev.valAsInt = parseInt(ev.target.value, 10);
    }
    ev.bittyUpdated = true;
  }

  __updateSender(sender) {
    if (sender.bittyUpdated === true) {
      return;
    }
    sender.copy = async function () {
      if (sender.value) {
        try {
          await navigator.clipboard.writeText(sender.value);
        } catch (error) {
          console.error(`Could not copy .value from sender.`);
          return false;
        }
      } else {
        try {
          await navigator.clipboard.writeText(sender.innerHTML);
        } catch (error) {
          console.error(`Could not copy .innerHTML from sender.`);
          return false;
        }
      }
      return true;
    };
    sender.prop = (key) => {
      if (
        sender && sender.dataset && sender.dataset[key] !== undefined
      ) {
        return sender.dataset[key];
      }
      const propAncestor = sender.closest(`[data-${key}]`);
      if (propAncestor !== null) {
        return propAncestor.dataset[key];
      }
      return undefined;
    };
    sender.propAsFloat = (key) => {
      if (
        sender && sender.dataset && sender.dataset[key] !== undefined
      ) {
        return parseFloat(sender.dataset[key]);
      }
      const propAncestor = sender.closest(`[data-${key}]`);
      if (propAncestor !== null) {
        return parseFloat(propAncestor.dataset[key]);
      }
      return undefined;
    };
    sender.propAsInt = (key) => {
      if (
        sender && sender.dataset && sender.dataset[key] !== undefined
      ) {
        return parseInt(sender.dataset[key], 10);
      }
      const propAncestor = sender.closest(`[data-${key}]`);
      if (propAncestor !== null) {
        return parseInt(propAncestor.dataset[key], 10);
      }
      return undefined;
    };
    sender.setProp = (key, value) => {
      sender.dataset[key] = value;
    };
    if (sender === undefined) {
      sender.val = undefined;
      sender.valAsFloat = undefined;
      sender.valAsInt = undefined;
    } else {
      sender.val = sender.value;
      sender.valAsFloat = parseFloat(sender.value);
      sender.valAsInt = parseInt(sender.value, 10);
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

  __checkTargetSender(ev, sender, el) {
    if (sender && sender.nodeType !== undefined && sender.isSameNode(el)) {
      el.isSender = true;
    } else {
      el.isSender = false;
    }
    if (
      ev && ev.target && ev.target.nodeType !== undefined &&
      ev.target.isSameNode(el)
    ) {
      el.isTarget = true;
    } else {
      el.isTarget = false;
    }
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

  _dedup(array) {
    return [...new Set(array)];
  }

  // TODO: Set this up to accept an array of
  // URLs that are tried before the optional fallback
  //
  // TODO: Set up to pull <script> tags with
  // `application/json` and an `id` attribute
  // into a `b.json` object.
  async _loadData(url, fallback = null, options = {}) {
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

  // TODO: Set this up to accept an array of
  // URLs that are tried before the optional fallback
  async _loadTemplates(url, options = {}) {
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
              this.b.template[script.id] = script.innerHTML.trim();
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

  // TODO: Set this up to accept an array of
  // URLs that are tried before the optional fallback
  async _fetchSVG(url, options = {}) {
    let response = await fetch(url, options);
    try {
      if (response.ok === true) {
        try {
          const svgs = {};
          const content = await response.text();
          const container = document.createElement("div");
          container.innerHTML = content;
          const input = container.querySelectorAll(
            "div > svg",
          );
          for (const svg of input) {
            if (svg.id !== undefined) {
              svgs[svg.id] = svg;
            }
          }
          return svgs;
        } catch (parseError) {
          console.error(parseError);
          return undefined;
        }
      }
    } catch (error) {
      console.error(error);
      return undefined;
    }
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

  loadPageData(target) {
    target.b.data = {};
    document.querySelectorAll("script").forEach((script) => {
      if (script.type === "application/json" && script.id !== undefined) {
        try {
          target.b.data[script.id] = JSON.parse(script.innerHTML);
        } catch (error) {
          console.error(
            `ERROR: Could not load data from script tag on page with id "${script.id}. Error message: ${error}.`,
          );
        }
      }
    });
  }

  loadPageTemplates(target) {
    target.b.template = {};
    document.querySelectorAll("script").forEach((script) => {
      if (script.type === "text/html" && script.id !== undefined) {
        target.b.template[script.id] = script.innerText.trim();
      }
    });
  }

  loadPageSVGs(target) {
    target.b.svg = {};
    document.querySelectorAll("script").forEach((script) => {
      if (script.type === "image/svg" && script.id !== undefined) {
        target.b.svg[script.id] = script.innerHTML.trim();
      }
    });
  }

  _restore(key, fallback = null) {
    const storage = localStorage.getItem(key);
    if (storage !== null) {
      try {
        return JSON.parse(storage);
      } catch (error) {
        console.error(error);
        return undefined;
      }
    }
    if (fallback !== null) {
      return fallback;
    }
    return undefined;
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
      options.preventDefault = true;
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
    this.b._updateEvent(ev);
    const signals = this.b._splitSignalString(ev.signals);
    for (const signal of signals) {
      if (typeof this[signal] === "function") {
        const receivers = document.querySelectorAll(
          `[data-r~='${signal}']`,
        );
        if (receivers.length > 0) {
          for (const receiver of receivers) {
            this.b._updateElement(receiver);
            receiver.isSender = false;
            receiver.isTarget = false;
            this[signal](ev.payload, null, receiver);
          }
        } else {
          this[signal](ev.payload, null, null);
        }
      }
    }
  }

  __processBittyTrigger(ev) {
    this.b._updateEvent(ev);
    const signals = this.b._splitSignalString(ev.signals);
    for (const signal of signals) {
      if (typeof this[signal] === "function") {
        const receivers = document.querySelectorAll(
          `[data-r~='${signal}']`,
        );
        if (receivers.length > 0) {
          for (const receiver of receivers) {
            this.b._updateElement(receiver);
            receiver.isSender = false;
            receiver.isTarget = false;
            this[signal](ev, null, receiver);
          }
        } else {
          this[signal](ev, null, null);
        }
      }
    }
  }

  __processCustomEvent(ev, signalsString) {
    this.b._updateEvent(ev);
    const signals = this.b._splitSignalString(signalsString);
    for (const signal of signals) {
      if (typeof this[signal] === "function") {
        const receivers = document.querySelectorAll(
          `[data-r~='${signal}']`,
        );
        if (receivers.length > 0) {
          for (const receiver of receivers) {
            this.b._updateElement(receiver);
            this.b._checkTargetSender(ev, ev.target, receiver);
            this.b._updateSender(ev.target);
            this[signal](ev, ev.target, receiver);
          }
        } else {
          this[signal](ev, null, null);
        }
      }
    }
  }

  __processEvent(ev) {
    this.b._updateEvent(ev);
    const senders = this.b._findSenders(ev.target);
    for (const sender of senders) {
      this.b._updateSender(sender);
      const signals = this.b._splitSignalString(sender.dataset.s);
      const listeners = this.b._splitSignalString(
        sender.dataset.listen,
      );
      if (listeners.length === 0) {
        for (const signal of signals) {
          if (typeof this[signal] === "function") {
            const receivers = document.querySelectorAll(
              `[data-r~='${signal}']`,
            );
            if (receivers.length > 0) {
              for (const receiver of receivers) {
                this.b._updateElement(receiver);
                this.b._checkTargetSender(ev, sender, receiver);
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
                  this.b._checkTargetSender(ev, sender, receiver);
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
              receiver.isSender = false;
              receiver.isTarget = false;
              this[signal]({}, null, receiver);
            }
          } else {
            this[signal]({}, null, null);
          }
        }
      }
    }

    // this.b._updateEvent(ev);
    // const senders = this.b._findSenders(ev.target);
    // for (const sender of senders) {
    //   this.b._updateSender(sender);
    //   const signals = this.b._splitSignalString(sender.dataset.s);
    //   const listeners = this.b._splitSignalString(
    //     sender.dataset.listen,
    //   );
    //   if (listeners.length === 0) {
    //     for (const signal of signals) {
    //       if (typeof this[signal] === "function") {
    //         const receivers = document.querySelectorAll(
    //           `[data-r~='${signal}']`,
    //         );
    //         if (receivers.length > 0) {
    //           for (const receiver of receivers) {
    //             this.b._updateElement(receiver);
    //             this.b._checkTargetSender(ev, sender, receiver);
    //             this[signal](ev, sender, receiver);
    //           }
    //         } else {
    //           this[signal](ev, sender, null);
    //         }
    //       }
    //     }
    //   } else {
    //     if (listeners.includes(ev.type)) {
    //       for (const signal of signals) {
    //         if (typeof this[signal] === "function") {
    //           const receivers = document.querySelectorAll(
    //             `[data-r~='${signal}']`,
    //           );
    //           if (receivers.length > 0) {
    //             for (const receiver of receivers) {
    //               this.b._updateElement(receiver);
    //               this.b._checkTargetSender(ev, sender, receiver);
    //               this[signal](ev, sender, receiver);
    //             }
    //           } else {
    //             this[signal](ev, sender, null);
    //           }
    //         }
    //       }
    //     }
    //   }
    // }

    //
  }

  __processKeypress(ev, signalString) {
    this.b._updateEvent(ev);
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
            this.b._checkTargetSender(ev, sender, receiver);
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

  _render(input, subs = {}) {
    if (input instanceof Array === false) {
      input = [input];
    }
    let content = input.map((item) => {
      if (typeof item === "string") {
        if (this.b.template[item] === undefined) {
          return item;
        } else {
          return this.b.template[item];
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
    const result = document.createElement("template");
    result.innerHTML = content;
    return result.content;
  }

  _save(key, data) {
    localStorage.setItem(key, JSON.stringify(data));
    return true;
  }

  _send(payload, signals) {
    const ev = new BittySend(payload, signals);
    dispatchEvent(ev);
  }

  _setCSS(key, value) {
    document.documentElement.style.setProperty(key, value);
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

  _trigger(signals) {
    const ev = new BittyTrigger(signals);
    dispatchEvent(ev);
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

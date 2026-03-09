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
      if (incoming.bitty !== undefined) {
        this.loadPageTemplates(incoming);
        this.loadPageData(incoming);
        this.loadPageSVGs(incoming);
        this.addBittyClasses(incoming);
        this.constructor.bits.push(incoming);
        window.addEventListener("click", (ev) => {
          incoming.bitty._processEvent(ev);
        });
        window.addEventListener("input", (ev) => {
          incoming.bitty._processEvent(ev);
        });
        window.addEventListener("bittysend", (ev) => {
          incoming.bitty._processBittySend(ev);
        });
        window.addEventListener("bittytrigger", (ev) => {
          incoming.bitty._processBittyTrigger(ev);
        });
        [...document.querySelectorAll("[data-listeners]")].forEach(
          (el) => {
            incoming.bitty._splitSignalString(el.dataset.listeners).forEach(
              (listener) => {
                window.addEventListener(listener, (ev) => {
                  incoming.bitty._processListener(ev);
                });
              },
            );
          },
        );
        if (this.dataset.run) {
          const runString = this.dataset.run.trim();
          incoming.bitty.trigger(runString);
        }
      }
    }
  }

  __updateElement(el) {
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
        el && el.dataset && el.dataset[key] !== undefined
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
    el.val = () => {
      if (el === undefined) {
        return undefined;
      }
      return el.value;
    };
    el.valAsFloat = () => {
      if (el === undefined) {
        return undefined;
      }
      return parseFloat(el.value);
    };
    el.valAsInt = () => {
      if (el === undefined) {
        return undefined;
      }
      return parseInt(el.value, 10);
    };
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
    ev.val = () => {
      if (ev.target === undefined) {
        return undefined;
      }
      return ev.target.value;
    };
    ev.valAsFloat = () => {
      if (ev.target === undefined) {
        return undefined;
      }
      return parseFloat(ev.target.value);
    };
    ev.valAsInt = () => {
      if (ev.target === undefined) {
        return undefined;
      }
      return parseInt(ev.target.value, 10);
    };
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
    sender.val = () => {
      if (sender === undefined) {
        return undefined;
      }
      return sender.value;
    };
    sender.valAsFloat = () => {
      if (sender === undefined) {
        return undefined;
      }
      return parseFloat(sender.value);
    };
    sender.valAsInt = () => {
      if (sender === undefined) {
        return undefined;
      }
      return parseInt(sender.value, 10);
    };
    sender.bittyUpdated = true;
  }

  addBittyClasses(target) {
    Object.getOwnPropertyNames(Object.getPrototypeOf(this)).filter((method) =>
      method.substring(0, 1) === "_"
    ).forEach((method) => {
      target.bitty[method.substring(1)] = this[method].bind(target);
    });
  }

  _addListener(event, signals) {
    window.addEventListener(event, (ev) => {
      this.bitty._processCustomEvent(ev, signals);
    });
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

  // TODO: Set this up to accept an array of
  // URLs that are tried before the optional fallback
  //
  // TODO: Set up to pull <script> tags with
  // `application/json` and an `id` attribute
  // into a `bitty.json` object.
  async _fetch(url, fallback = null, options = {}) {
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
  async _fetchHTML(url, options = {}) {
    let response = await fetch(url, options);
    try {
      if (response.ok === true) {
        try {
          const templates = {};
          const content = await response.text();
          const container = document.createElement("div");
          container.innerHTML = content;
          const input = container.querySelectorAll(
            "div > template",
          );
          for (const template of input) {
            if (template.id !== undefined) {
              templates[template.id] = template.content;
            }
          }
          return templates;
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
    target.bitty.data = {};
    document.querySelectorAll("script").forEach((script) => {
      if (script.type === "application/json" && script.id !== undefined) {
        try {
          target.bitty.data[script.id] = JSON.parse(script.innerText);
        } catch (error) {
          console.error(
            `ERROR: Could not load data from script tag on page with id "${script.id}. Error message: ${error}.`,
          );
        }
      }
    });
  }

  loadPageTemplates(target) {
    target.bitty.template = {};
    document.querySelectorAll("template").forEach((template) => {
      if (template.id !== undefined) {
        target.bitty.template[template.id] = template.content;
      }
    });
  }

  loadPageSVGs(target) {
    target.bitty.svg = {};
    document.querySelectorAll("template").forEach((template) => {
      if (template.id !== undefined) {
        const svg = template.content.querySelector("svg");
        if (svg) {
          target.bitty.svg[template.id] = svg;
        }
      }
    });
  }

  _load(key, fallback = null) {
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
    return this.bitty.time(datetime, true);
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
      if (this.bitty.modKeyAliases()[modKeys[i].toLowerCase()] !== undefined) {
        modKeys[i] = this.bitty.modKeyAliases()[modKeys[i].toLowerCase()];
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
          this.bitty._processKeypress(ev, signals);
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
          this.bitty._processKeypress(ev, signals);
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
    const signals = this.bitty._splitSignalString(ev.signals);
    for (const signal of signals) {
      if (typeof this[signal] === "function") {
        const receivers = document.querySelectorAll(
          `[data-r~='${signal}']`,
        );
        if (receivers.length > 0) {
          for (const receiver of receivers) {
            this[signal](ev.payload, null, receiver);
          }
        } else {
          this[signal](ev.payload, null, null);
        }
      }
    }
  }

  __processBittyTrigger(ev) {
    const signals = this.bitty._splitSignalString(ev.signals);
    for (const signal of signals) {
      if (typeof this[signal] === "function") {
        const receivers = document.querySelectorAll(
          `[data-r~='${signal}']`,
        );
        if (receivers.length > 0) {
          for (const receiver of receivers) {
            this[signal](ev, null, receiver);
          }
        } else {
          this[signal](ev, null, null);
        }
      }
    }
  }

  __processCustomEvent(ev, signalsString) {
    const signals = this.bitty._splitSignalString(signalsString);
    for (const signal of signals) {
      if (typeof this[signal] === "function") {
        const receivers = document.querySelectorAll(
          `[data-r~='${signal}']`,
        );
        if (receivers.length > 0) {
          for (const receiver of receivers) {
            this[signal](ev, null, receiver);
          }
        } else {
          this[signal](ev, null, null);
        }
      }
    }
  }

  __processEvent(ev) {
    this.bitty._updateEvent(ev);
    const senders = this.bitty._findSenders(ev.target);
    for (const sender of senders) {
      this.bitty._updateSender(sender);
      const signals = this.bitty._splitSignalString(sender.dataset.s);
      const listeners = this.bitty._splitSignalString(
        sender.dataset.listeners,
      );
      if (listeners.length === 0) {
        for (const signal of signals) {
          if (typeof this[signal] === "function") {
            const receivers = document.querySelectorAll(
              `[data-r~='${signal}']`,
            );
            if (receivers.length > 0) {
              for (const receiver of receivers) {
                this.bitty._updateElement(receiver);
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

  __processKeypress(ev, signalString) {
    const sender = ev.target;
    const signals = this.bitty._splitSignalString(signalString);
    for (const signal of signals) {
      if (typeof this[signal] === "function") {
        const receivers = document.querySelectorAll(
          `[data-r~='${signal}']`,
        );
        if (receivers.length > 0) {
          for (const receiver of receivers) {
            this[signal](ev, sender, receiver);
          }
        } else {
          this[signal](ev, sender, null);
        }
      }
    }
  }

  __processListener(ev) {
    const senders = this.bitty._findSenders(ev.target);
    for (const sender of senders) {
      const signals = this.bitty._splitSignalString(sender.dataset.s);
      const listeners = this.bitty._splitSignalString(
        ev.target.dataset.listeners,
      );
      if (listeners.includes(ev.type)) {
        for (const signal of signals) {
          if (typeof this[signal] === "function") {
            const receivers = document.querySelectorAll(
              `[data-r~='${signal}']`,
            );
            if (receivers.length > 0) {
              for (const receiver of receivers) {
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
    const tmpl = document.createElement("div");
    if (typeof input === "string") {
      tmpl.innerHTML = input;
    } else {
      // TODO: Test to verify this works with both
      // elements and document fragments so the
      // incoming template can be used multiple times.
      tmpl.append(input.cloneNode(true));
    }
    let content = [...tmpl.children].map((child) => child.outerHTML).join("");
    for (const key of Object.keys(subs)) {
      const subsArray = subs[key] instanceof Array === true
        ? subs[key]
        : [subs[key]];
      if (
        subsArray[0] instanceof Element
      ) {
        content = content.replaceAll(
          key,
          subsArray.map((el) => el.outerHTML).join(""),
        );
      } else if (subsArray[0] instanceof DocumentFragment) {
        content = content.replaceAll(
          key,
          subsArray.map((fragment) =>
            [...fragment.children].map((el) => el.outerHTML).join("")
          ).join(""),
        );
      } else {
        content = content.replaceAll(key, subsArray.join(""));
      }
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

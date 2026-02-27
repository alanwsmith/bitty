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
        this.addBittyClasses(incoming);
        this.constructor.bits.push(incoming);
        window.addEventListener("click", (ev) => {
          incoming.bitty._processEvent(ev);
        });
        window.addEventListener("bittytrigger", (ev) => {
          incoming.bitty._processBittyTrigger(ev);
        });
        if (this.dataset.run) {
          const runString = this.dataset.run.trim();
          incoming.bitty.trigger(runString);
        }
      }
    }
  }

  addBittyClasses(target) {
    Object.getOwnPropertyNames(Object.getPrototypeOf(this)).filter((method) =>
      method.substring(0, 1) === "_"
    ).forEach((method) => {
      target.bitty[method.substring(1)] = this[method].bind(target);
    });
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

  _loadJSON(key, fallback = null) {
    const storage = localStorage.getItem(key);
    const json = JSON.parse(storage);
    return new BittyResult("ok", json, null);
  }

  _localTimestamp(datetime = new Date()) {
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

  _localTimestampMs(datetime) {
    const parts = {};
    new Intl.DateTimeFormat(undefined, {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      fractionalSecondDigits: 3,
      hour12: false,
    })
      .formatToParts(datetime)
      .filter((part) => part.type !== "literal")
      .forEach((part) => parts[part.type] = part.value);
    const date = [parts.year, parts.month, parts.day].join("-");
    const time = [parts.hour, parts.minute, parts.second].join(":");
    return `${date}T${time}.${parts.fractionalSecond}`;
  }

  __processBittyTrigger(trigger) {
    const signals = this.bitty._splitSignalString(trigger.signals);
    for (const signal of signals) {
      if (typeof this[signal] === "function") {
        const receivers = document.querySelectorAll(
          `[data-r~='${signal}']`,
        );
        if (receivers.length > 0) {
          for (const receiver of receivers) {
            this[signal](null, null, receiver);
          }
        } else {
          this[signal](null, null, null);
        }
      }
    }
  }

  __processEvent(ev) {
    const senders = this.bitty._findSenders(ev.target);
    for (const sender of senders) {
      const signals = this.bitty._splitSignalString(sender.dataset.s);
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

  _qs(selector) {
    return document.querySelector(selector);
  }

  _qsa(selector) {
    return document.querySelectorAll(selector);
  }

  _saveJSON(key, data) {
    localStorage.setItem(key, JSON.stringify(data));
    return new BittyResult("ok", null, null);
  }

  async _sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  __splitSignalString(input) {
    return input
      .trim()
      .split(/\s+/m)
      .map((l) => l.trim());
  }

  _trigger(signals) {
    const ev = new BittyTrigger(signals);
    dispatchEvent(ev);
  }
}

customElements.define(tagName, BittyJs);

class BittyResult {
  constructor(status, value = null, error = null, messages = []) {
    this.status = status;
    this.value = value;
    this.error = error;
    this.messages = error;
  }
}

class BittyTrigger extends Event {
  constructor(signals) {
    super("bittytrigger", { bubbles: true });
    this.signals = signals;
  }
}

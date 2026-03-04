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
        window.addEventListener("input", (ev) => {
          incoming.bitty._processEvent(ev);
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

  addBittyClasses(target) {
    Object.getOwnPropertyNames(Object.getPrototypeOf(this)).filter((method) =>
      method.substring(0, 1) === "_"
    ).forEach((method) => {
      target.bitty[method.substring(1)] = this[method].bind(target);
    });
  }

  async _fetchJSON(url, fallback = null, options = {}) {
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

  async _fetchTemplates(url, fallback = null, options = {}) {
    const details = {
      status: "ok",
      error: null,
      value: null,
    };
    let response = await fetch(url, options);
    try {
      if (response.ok === true) {
        try {
          const content = await response.text();
          const container = document.createElement("div");
          container.innerHTML = content;
          const templates = container.querySelectorAll(
            "div > template",
          );
          for (const template of templates) {
            console.log(template);
          }
        } catch (parseError) {
          details.status = "error";
          details.error = parseError;
        }
      }
    } catch (error) {
      details.status = "error";
      details.error = parseError;
    }
    return details;
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
    if (storage !== null) {
      return JSON.parse(storage);
    }
    if (fallback !== null) {
      return fallback;
    }
    return undefined;
  }

  _localTimestamp(datetime = new Date(), ms = false) {
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

  _localTimestampMs(datetime) {
    return this.bitty.localTimestamp(datetime, true);
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
      const listeners = this.bitty._splitSignalString(
        ev.target.dataset.listeners,
      );
      if (listeners.length === 0) {
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

  _saveJSON(key, data) {
    localStorage.setItem(key, JSON.stringify(data));
    return true;
  }

  async _sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
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

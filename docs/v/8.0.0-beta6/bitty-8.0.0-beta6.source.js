const version = [8, 0, 0];
const tagName = `bitty-${version[0]}-${version[1]}`;

const changeFormElements = [
  "checkbox",
  "color",
  "date",
  "datetime-local",
  "email",
  "file",
  "form",
  "image",
  "month",
  "number",
  "option",
  "password",
  "radio",
  "search",
  "select",
  "tel",
  "text",
  "textarea",
  "time",
  "url",
  "week",
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
        incoming.b._trueValues = ["true", "yes", "on"];
        incoming.b._falseValues = ["false", "no", "off"];
        incoming.b._debouncers = {};
        incoming.b._marks = {};
        incoming.b.svgs = {};
        if (incoming.b.templates === undefined) {
          incoming.b.templates = {};
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

        [...document.querySelectorAll("[data-listen]")].forEach(
          (el) => {
            incoming.b._splitSignalString(el.dataset.listen).forEach(
              (listener) => {
                if (
                  [
                    "click",
                    "input",
                    "change",
                    "submit",
                    "bittysend",
                    "bittytrigger",
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

        // window.addEventListener("change", (ev) => {
        //   incoming.b._processEvent(ev);
        // });

        // // START: Original listeners
        // window.addEventListener("click", (ev) => {
        //   incoming.b._processEvent(ev);
        // });
        // window.addEventListener("input", (ev) => {
        //   incoming.b._processEvent(ev);
        // });
        // window.addEventListener("bittysend", (ev) => {
        //   incoming.b._processBittySend(ev);
        // });
        // window.addEventListener("bittytrigger", (ev) => {
        //   incoming.b._processBittyTrigger(ev);
        // });
        //
        // [...document.querySelectorAll("[data-listen]")].forEach(
        //   (el) => {
        //     incoming.b._splitSignalString(el.dataset.listen).forEach(
        //       (listener) => {
        //         if (
        //           ["click", "input", "bittysend", "bittytrigger"].includes(
        //             listener,
        //           ) === false
        //         ) {
        //           window.addEventListener(listener, (ev) => {
        //             incoming.b._processEvent(ev);
        //           });
        //         }
        //       },
        //     );
        //   },
        // );
        //
        // // END: Original Listeners

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
<label for="__ID__" class="__CLASS__" data-key="__KEY__" data-r="__RECEIVE__">
  __PREPEND__
  <button id="__ID__" data-s="__SEND__" role="switch" aria-checked="__STATE__">
    <span></span><span></span>
  </button>
  __APPEND__
</label>`;
  }

  _ce(tag, options = {}) {
    return document.createElement(tag, options);
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

  _mark(key, note = null) {
    try {
      this.b._marks[key].push([performance.now(), note]);
    } catch (_) {
      this.b._marks[key] = [];
      this.b._marks[key].push([performance.now(), note]);
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

  __processChangeEvent(ev) {
    this.b._updateEvent(ev);
    const senders = this.b._findSenders(ev.target);
    for (const sender of senders) {
      this.b._updateSender(sender);
      const signals = this.b._splitSignalString(sender.dataset.s);
      const listeners = this.b._splitSignalString(
        sender.dataset.listen,
      );
      if (listeners.length === 0) {
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

  // TODO: Migrate this to `__processClickEvent()`
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
        if (sender.isContentEditable === true && ev.type === "click") {
          return;
        } else if (
          sender.tagName &&
          changeFormElements.includes(sender.tagName.toLowerCase()) &&
          ev.type === "click"
        ) {
          return;
        } else if (
          sender.type && changeFormElements.includes(sender.type.toLowerCase())
        ) {
          return;
        }

        // ev.type === "click"
        // ) {
        // return;
        // } else if (
        // sender.type && sender.type.toLowerCase() === "date" &&
        // ev.type === "click"
        // ) {
        // return;
        // } else if (
        // sender.type && sender.type.toLowerCase() === "datetime-local"
        // ) {
        // return;
        // } else if (
        // sender.type && sender.type.toLowerCase() === "email"
        // ) {
        // return;
        // } else if (
        // sender.type && sender.type.toLowerCase() === "file"
        // ) {
        // return;
        // } else if (
        // sender.type && sender.type.toLowerCase() === "checkbox" &&
        // ev.type === "click"
        // ) {
        // return;

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

  __processInputEvent(ev) {
    this.b._updateEvent(ev);
    const senders = this.b._findSenders(ev.target);
    for (const sender of senders) {
      this.b._updateSender(sender);
      const signals = this.b._splitSignalString(sender.dataset.s);
      const listeners = this.b._splitSignalString(
        sender.dataset.listen,
      );
      if (listeners.length === 0) {
        if (
          sender.tagName &&
          changeFormElements.includes(sender.tagName.toLowerCase())
        ) {
          return;
        } else if (
          sender.type && changeFormElements.includes(sender.type.toLowerCase())
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
    // See if it's an SVG first:
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

  _load(key, fallback) {
    const storage = localStorage.getItem(key);
    if (storage !== null) {
      try {
        return JSON.parse(storage);
      } catch (error) {
        console.error(error);
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
    subs.__APPEND__ = subs.__APPEND__ ? subs.__APPEND__ : "";
    subs.__CLASS__ = subs.__CLASS__ ? subs.__CLASS__ : "bitty-switch";
    subs.__ID__ = subs.__ID__ ? subs.__ID__ : `switch_${this.b.uuid(false)}`;
    subs.__KEY__ = subs.__KEY__ ? subs.__KEY__ : "";
    subs.__PREPEND__ = subs.__PREPEND__ ? subs.__PREPEND__ : "";
    subs.__R__ = subs.__R__ ? subs.__R__ : "";
    subs.__S__ = subs.__S__ ? subs.__S__ : "";
    subs.__STATE__ = subs.__STATE__ ? subs.__STATE__ : "false";
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
    el.aria = (key) => {
      return el.getAttribute(`aria-${key}`);
    };
    el.ariaBool = (key) => {
      const value = el.getAttribute(`aria-${key}`);
      return this.b._getBool(value);
    };
    el.ariaFloat = (key) => {
      return parseFloat(el.getAttribute(`aria-${key}`));
    };
    el.ariaInt = (key) => {
      return parseInt(el.getAttribute(`aria-${key}`), 10);
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
    el.propBool = (key) => {
      if (
        el && el.dataset && el.dataset[key] !== undefined
      ) {
        return this.b._getBool(el.dataset[key]);
      }
      const propAncestor = el.closest(`[data-${key}]`);
      if (propAncestor !== null) {
        return this.b._getBool(propAncestor.dataset[key]);
      }
      return undefined;
    };
    el.propFloat = (key) => {
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
    el.propInt = (key) => {
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
    el.setAria = (key, value) => {
      el.setAttribute(`aria-${key}`, value);
    };
    el.setProp = (key, value) => {
      el.dataset[key] = value;
    };
    el.val = () => {
      return el.value;
    };
    el.valBool = () => {
      return this.b._getBool(el.value);
    };
    el.valFloat = () => {
      return parseFloat(el.value);
    };
    el.valInt = () => {
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
    ev.propFloat = (key) => {
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
    ev.propInt = (key) => {
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
      ev.val = () => {
        return undefined;
      };
      ev.valBool = () => {
        return undefined;
      };
      ev.valFloat = () => {
        return undefined;
      };
      ev.valInt = () => {
        return undefined;
      };
    } else {
      ev.val = () => {
        return ev.target.value;
      };
      ev.valBool = () => {
        return this.b._getBool(ev.target.value);
      };
      ev.valFloat = () => {
        return parseFloat(ev.target.value);
      };
      ev.valInt = () => {
        return parseInt(ev.target.value, 10);
      };
    }
    ev.bittyUpdated = true;
  }

  __updateSender(sender) {
    if (sender.bittyUpdated === true) {
      return;
    }
    sender.aria = (key) => {
      return sender.getAttribute(`aria-${key}`);
    };
    sender.ariaBool = (key) => {
      const value = sender.getAttribute(`aria-${key}`);
      return this.b._getBool(value);
    };
    sender.ariaFloat = (key) => {
      return parseFloat(sender.getAttribute(`aria-${key}`));
    };
    sender.ariaInt = (key) => {
      return parseInt(sender.getAttribute(`aria-${key}`), 10);
    };
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
    sender.propFloat = (key) => {
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
    sender.propInt = (key) => {
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
    sender.setAria = (key, value) => {
      sender.setAttribute(`aria-${key}`, value);
    };
    sender.setProp = (key, value) => {
      sender.dataset[key] = value;
    };
    if (sender === undefined) {
      sender.val = () => {
        return undefined;
      };
      sender.valBool = () => {
        return undefined;
      };
      sender.valFloat = () => {
        return undefined;
      };
      sender.valInt = () => {
        return undefined;
      };
    } else {
      sender.val = () => {
        return sender.value;
      };
      sender.valBool = () => {
        return this.b._getBool(sender.value);
      };
      sender.valFloat = () => {
        return parseFloat(sender.value);
      };
      sender.valInt = () => {
        return parseInt(sender.value, 10);
      };
    }
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

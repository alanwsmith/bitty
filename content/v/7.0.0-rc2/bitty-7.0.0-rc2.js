const version = [7, 0, 0];

const tagName = `bitty-${version[0]}-${version[1]}`;

class BittyError extends Error {
  constructor(payload) {
    super();
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, BittyError);
    }
    this.name = "BittyError";
    for (let [key, value] of Object.entries(payload)) {
      this[key] = value;
    }
  }
}

class ForwardEvent extends Event {
  constructor(ev, signal) {
    super("bittyforward", { bubbles: true });
    this.forwardedEvent = ev;
    this.forwardedSignal = signal;
  }
}

class LocalTriggerEvent extends Event {
  constructor(signal, bittyId) {
    super("bittylocaltrigger", { bubbles: true });
    this.signal = signal;
    this.localId = bittyId;
  }
}

class TriggerEvent extends Event {
  constructor(signal) {
    super("bittytrigger", { bubbles: true });
    this.signal = signal;
  }
}

function findDataKey(el, key) {
  if (el.dataset === undefined) {
    return undefined;
  }
  if (el.dataset[key] !== undefined) {
    return el.dataset[key];
  } else if (
    el.parentNode
  ) {
    return findDataKey(el.parentNode, key);
  } else {
    return undefined;
  }
}

class BittyJs extends HTMLElement {
  constructor() {
    super();
    /** @internal */
    this.config = {
      listeners: ["click", "input"],
      license: "CC0",
      version: version,
    };
  }

  /** internal */
  async connectedCallback() {
    this.setIds(this);
    await this.makeConnection();
    if (this.conn) {
      this.conn.api = this;
      this.handleEventBridge = this.handleEvent.bind(this);
      this.addEventListeners();
      await this.runBittyInit();
      await this.runDataInits();
      await this.runBittyReady();
    }
  }

  /** internal */
  addEventListeners() {
    const listeners = [
      "bittyforward",
      "bittylocaltrigger",
      "bittytrigger",
    ];
    if (this.dataset.listeners) {
      this.trimInput(this.dataset.listeners).forEach((listener) => {
        listeners.push(listener);
      });
    } else {
      listeners.push("click");
      listeners.push("input");
    }
    listeners.forEach(
      (listener) => {
        window.addEventListener(listener, (ev) => {
          this.handleEventBridge.call(this, ev);
        });
      },
    );
  }

  /** internal */
  connectedMoveCallback() {
    // this prevs connectedCallback() from firing
    // if a bitty component is moved.
  }

  /** internal */
  doSubs(content, subs) {
    subs.forEach((sub) => {
      const outerBaseType = typeof sub[1];
      const outerDetailType = Object.prototype.toString.call(sub[1]);
      if (
        outerBaseType === "object" && outerDetailType === "[object Array]"
      ) {
        const newContent = sub[1].map((el) => {
          const innerBaseType = typeof el;
          const innerDetailType = Object.prototype.toString.call(el);
          if (
            innerBaseType === "object" &&
            innerDetailType === "[object DocumentFragment]"
          ) {
            return [...el.childNodes].map((child) => {
              if (
                Object.prototype.toString.call(child) === "[object Text]"
              ) {
                return child.wholeText;
              } else {
                return child.outerHTML;
              }
            }).join("");
          } else if (innerBaseType === "object") {
            return el.outerHTML;
          } else {
            return el;
          }
        }).join("");
        content = content.replaceAll(sub[0], newContent);
      } else if (
        outerBaseType === "object" &&
        outerDetailType === "[object DocumentFragment]"
      ) {
        const subContent = [];
        [...sub[1].childNodes].forEach((child) => {
          if (
            Object.prototype.toString.call(child) === "[object Text]"
          ) {
            subContent.push(child.wholeText);
          } else {
            subContent.push(child.outerHTML);
          }
        });
        content = content.replaceAll(sub[0], subContent.join(""));
      } else if (typeof sub[1] === "object") {
        content = content.replaceAll(sub[0], sub[1].outerHTML);
      } else {
        content = content.replaceAll(sub[0], sub[1]);
      }
    });
    return content;
  }

  /** internal */
  expandElement(ev, el) {
    if (ev !== null) {
      el.isTarget = ev.target.dataset.bittyid === el.dataset.bittyid;
      el.isSender = ev.sender.dataset.bittyid === el.dataset.bittyid;
    }

    el.bittyParent = this.getBittyParent(el);

    el.prop = (x) => {
      return findDataKey.call(null, el, x);
    };

    el.propToInt = (x) => {
      return parseInt(findDataKey.call(null, el, x));
    };

    el.propToFloat = (x) => {
      return parseFloat(findDataKey.call(null, el, x));
    };

    if (el.value) {
      el.valueToInt = parseInt(el.value, 10);
      el.valueToFloat = parseFloat(el.value);
    }

    el.propMatchesTarget = (x) => {
      const evKey = findDataKey.call(null, ev.target, x);
      const elKey = findDataKey.call(null, el, x);
      if (evKey === undefined || elKey === undefined) {
        return false;
      }
      return evKey === elKey;
    };

    el.propMatchesSender = (x) => {
      const evKey = findDataKey.call(null, ev.sender, x);
      const elKey = findDataKey.call(null, el, x);
      if (evKey === undefined || elKey === undefined) {
        return false;
      }
      return evKey === elKey;
    };
  }


  /** internal */
  expandEvent(ev) {
    ev.sender = this.findSender(ev.target);
    if (ev.sender && ev.sender.dataset && ev.sender.dataset.bittyid) {
      ev.sender.bittyId = ev.sender.dataset.bittyid;
    }

    // Move the dataset.send into `sendPayload`
    // so this.api.forward() can change .sendPayload
    // without affecting the original dataset. 
    if (ev.sender.dataset && ev.sender.dataset.send) {
      ev.sendPayload = ev.sender.dataset.send;
    }

    if (ev.sender && ev.sender.value) {
      ev.sender.valueToInt = parseInt(ev.sender.value, 10);
      ev.sender.valueToFloat = parseFloat(ev.sender.value);
    }

    if (ev.sender) {
      ev.sender.prop = (x) => {
        return findDataKey.call(null, ev.sender, x);
      };
      ev.sender.propToInt = (x) => {
        return parseInt(findDataKey.call(null, ev.sender, x), 10);
      };
      ev.sender.propToFloat = (x) => {
        return parseFloat(findDataKey.call(null, ev.sender, x));
      };
    }

    if (ev.target.value !== undefined) {
      ev.value = ev.target.value;
      ev.valueToInt = parseInt(ev.target.value, 10);
      ev.valueToFloat = parseFloat(event.target.value);
    }

    ev.bittyId = ev.target.dataset.bittyid;

    ev.prop = (x) => {
      return findDataKey.call(null, ev.target, x);
    };

    ev.propToInt = (x) => {
      return parseInt(findDataKey.call(null, ev.target, x));
    };

    ev.propToFloat = (x) => {
      return parseFloat(findDataKey.call(null, ev.target, x));
    };
  }

  /** internal */
  findSender(evTarget) {
    if (evTarget.dataset && evTarget.dataset.send) {
      return evTarget;
    } else if (evTarget.dataset && evTarget.dataset.use) {
      return evTarget;
    } else if (evTarget.parentNode) {
      return this.findSender(evTarget.parentNode);
    } else {
      return this;
    }
  }

  forward(ev, signal) {
    const forwardEvent = new ForwardEvent(ev, signal);
    this.dispatchEvent(forwardEvent);
  }

  /** internal */
  getBittyParent(el) {
    if (el.localName.toLowerCase() === tagName) {
      return el;
    } else if (el.parentNode) {
      return this.getBittyParent(el.parentNode);
    } else {
      // TODO: Add test to confirm this 
      // pulls the current element if another
      // one isn't found. 
      // TODO: Check funcionatlity of
      // one bitty element calling
      // this. TBD on if it should return
      // itself or a parent if there's one
      // above it? Probably itself since
      // there isn't guaranteeded to
      // be one above it. 
      return this;
    }
  }


  async getElement(url, subs = [], options = {}) {
    const response = await this.getHTML(url, subs, options, "getElement");
    if (response.value) {
      const el = response.value.firstChild;
      const payload = { value: el };
      return payload;
    } else {
      return response;
    }
  }

  async getHTML(url, subs = [], options = {}) {
    const response = await this.getTXT(url, subs, options, "getHTML");
    if (response.error) {
      return response;
    } else {
      return { value: this.makeHTML(response.value, subs) };
    }
  }

  async getJSON(url, subs = [], options = {}) {
    const response = await this.getTXT(url, subs, options, "getJSON");
    if (response.error) {
      return response;
    } else {
      try {
        const data = JSON.parse(response.value);
        const payload = { value: data };
        return payload;
      } catch (error) {
        let payloadError = new BittyError({ type: "parsing" });
        const payload = { error: payloadError };
        return payload;
      }
    }
  }

  async getSVG(url, subs = [], options = {}) {
    const response = await this.getTXT(url, subs, options, "getSVG");
    if (response.error) {
      return response;
    } else {
      const tmpl = document.createElement("template");
      tmpl.innerHTML = response.value;
      const wrapper = tmpl.content.cloneNode(true);
      const svg = wrapper.querySelector("svg");
      const payload = { value: svg };
      return payload;
    }
  }

  async getTXT(url, subs = [], options = {}, incomingMethod = "getTXT") {
    let response = await fetch(url, options);
    try {
      if (!response.ok) {
        throw new BittyError({
          type: "fetching",
          message:
            `${incomingMethod}() returned ${response.status} [${response.statusText}] in:\n${incomingMethod}(${response.url}, ${JSON.stringify(subs)
            }, ${JSON.stringify(options)})`,
          statusText: response.statusText,
          status: response.status,
          url: response.url,
          incomingMethod: incomingMethod,
          subs: subs,
          options: options,
        });
      } else {
        const content = this.doSubs(await response.text(), subs);
        return { value: content };
      }
    } catch (error) {
      console.error(`BittyError: ${error.message}`);
      return { error: error };
    }
  }

  /** internal */
  async handleEvent(ev) {
    if (
      ev.type === "bittyforward"
    ) {
      const forwardedEv = ev.forwardedEvent;
      forwardedEv.sendPayload = ev.forwardedSignal;
      await this.processEvent(forwardedEv);
    } else {
      this.expandEvent(ev);
      if (
        ev.type === "bittylocaltrigger"
      ) {
        ev.sendPayload = ev.signal;
        await this.processEvent(ev);
      } else if (
        ev.type === "bittytrigger"
      ) {
        ev.sendPayload = ev.signal;
        await this.processEvent(ev);
      } else {

        if (ev.sender.dataset.use) {
          const signals = this.trimInput(ev.sender.dataset.use);
          for (const signal of signals) {
            if (this.conn[signal]) {
              this.conn[signal](ev, ev.sender);
            }
          }
        }

        if (ev.sender.dataset.send) {
          ev.sendPayload = ev.sender.dataset.send;
          await this.processEvent(ev);
        }




        // // Process data-use element if there is one
        // const receivers = this.querySelectorAll("[data-use]");
        // if (ev.sender.dataset.use) {
        //   const signals = this.trimInput(ev.sender.dataset.use);
        //   if (receivers.length > 0) {
        //     for (let signal of signals) {
        //       let doAwait = false;
        //       const iSigParts = signal.split(":");
        //       if (iSigParts.length === 2 && iSigParts[0] === "await") {
        //         doAwait = true;
        //         signal = iSigParts[1];
        //       }
        //       if (this.conn[signal]) {
        //         for (let receiver of receivers) {
        //           // TODO Deprecate this.
        //           // receiver.sender = sender;
        //           this.expandElement(ev, receiver);
        //           if (receiver.bittyId === ev.sender.bittyId) {
        //             if (doAwait) {
        //               await this.conn[signal](ev, receiver);
        //             } else {
        //               this.conn[signal](ev, receiver);
        //             }
        //           }
        //         }
        //       }
        //     }
        //   }
        // }

      }
    }
  }

  async loadCSS(url, subs = [], options = {}) {
    const response = await this.getTXT(url, subs, options, "loadCSS");
    if (response.error) {
      return response;
    } else {
      const newStylesheet = new CSSStyleSheet();
      newStylesheet.replaceSync(response.value);
      document.adoptedStyleSheets.push(newStylesheet);
      return { value: response.value };
    }
  }

  localTrigger(signal) {
    const ev = new LocalTriggerEvent(signal, this.bittyId);
    this.dispatchEvent(ev);
  }

  /** internal */
  async makeConnection() {
    try {
      if (!this.dataset.connect) {
        if (window.BittyClass) {
          this.conn = new window.BittyClass();
        } else {
          console.error(
            `${tagName} error: Could not find "window.BittyClass" on the page to connect to (which is needed because there is no "data-connect" attribute).`,
          );
        }
      } else {
        let connParts = this.trimInput(this.dataset.connect);
        if (typeof window[connParts[0]] !== "undefined") {
          this.conn = new window[connParts[0]]();
        } else {
          if (connParts[0].substring(0, 1) === "/") {
            const windowURL = new URL(window.location.href);
            connParts[0] = new URL(connParts[0], windowURL.origin).toString();
          }
          if (connParts[0].substring(0, 4) === "http") {
            const mod = await import(connParts[0]);
            if (connParts[1] === undefined) {
              try {
                this.conn = new mod.default();
              } catch (error) {
                console.error(
                  `${tagName} error [${error}] - data-connect="${this.dataset.connect}" failed - Check the file "${this.dataset.connect}" to make sure it has an "export default class {}"`,
                );
              }
            } else {
              try {
                this.conn = new mod[connParts[1]]();
              } catch (error) {
                console.error(
                  `${tagName} error [${error}] - data-connect="${this.dataset.connect}" failed - Check the file "${connParts[0]
                  }" to make sure it has an "export class ${connParts[1]} {}"`,
                );
              }
            }
          } else {
            console.error(
              `${tagName} error: Tried to use 'data-connect="${this.dataset.connect}" which did not match a class on the page which means an attempt to use it as a URL was made. It failed becasue the URL version of 'data-connect' must start with 'http' or '/'. Other URLs are not currently supported`,
            );
          }
        }
      }
    } catch (error) {
      console.error(`${tagName} error: [${error}] - ${this.dataset.connect}`);
    }
  }

  makeElement(template, subs = []) {
    const el = this.makeHTML(template, subs).firstChild;
    return el;
  }

  makeHTML(template, subs = []) {
    const skeleton = document.createElement("template");
    skeleton.innerHTML = this.makeTXT(template, subs).trim();
    const el = skeleton.content.cloneNode(true);
    this.setIds(el);
    return el;
  }

  makeSVG(template, subs = []) {
    const tmpl = document.createElement("template");
    tmpl.innerHTML = this.makeTXT(template, subs).trim();
    const wrapper = tmpl.content.cloneNode(true);
    const svg = wrapper.querySelector("svg");
    return svg;
  }

  makeTXT(template, subs = []) {
    return this.doSubs(template, subs);
  }

  /** internal */
  async processEvent(ev) {
    // TODO: move everything into sendPayload so you 
    // can forward stuff without affecting the 
    // original element's dataset

    // skip things flagged as local that aren't
    if (ev.localId && ev.localId !== this.bittyId) {
      return null;
    }

    if (ev.sendPayload) {
      const signals = this.trimInput(ev.sendPayload);
      for (let signal of signals) {
        let doAwait = false;
        const iSigParts = signal.split(":");
        if (iSigParts.length === 2 && iSigParts[0] === "await") {
          doAwait = true;
          signal = iSigParts[1];
        }
        if (this.conn[signal]) {
          let foundReceiver = false;
          const receivers = this.querySelectorAll("[data-receive]");
          for (let receiver of receivers) {
            const receptors = this.trimInput(receiver.dataset.receive);
            for (let receptor of receptors) {
              const rSignalParts = receptor.split(":");
              if (
                rSignalParts.length === 2 && rSignalParts[0] === "await"
              ) {
                receptor = rSignalParts[1];
                doAwait == true;
              }
              if (receptor === signal) {
                foundReceiver = true;
                this.expandElement(ev, receiver);
                if (doAwait) {
                  await this.conn[signal](ev, receiver);
                } else {
                  this.conn[signal](ev, receiver);
                }
              }
            }
          }
          if (foundReceiver === false) {
            if (doAwait) {
              await this.conn[signal](ev, null);
            } else {
              this.conn[signal](ev, null);
            }
          }
        }
      }
    }
  }

  /** internal */
  async runBittyInit() {
    if (typeof this.conn.bittyInit === "function") {
      if (this.conn.bittyInit[Symbol.toStringTag] === "AsyncFunction") {
        await this.conn.bittyInit();
      } else {
        this.conn.bittyInit();
      }
    }
  }

  /** internal */
  async runBittyReady() {
    if (typeof this.conn.bittyReady === "function") {
      if (this.conn.bittyReady[Symbol.toStringTag] === "AsyncFunction") {
        await this.conn.bittyReady();
      } else {
        this.conn.bittyReady();
      }
    }
  }

  /** internal */
  async runDataInits() {
    if (this.dataset.init) {
      const signals = this.trimInput(this.dataset.init);
      for (let signal of signals) {
        if (typeof this.conn[signal] === "function") {
          if (this.conn[signal][Symbol.toStringTag] === "AsyncFunction") {
            await this.conn[signal](null, this);
          } else {
            this.conn[signal](null, this);
          }
        }
      }
    }
    for (let el of this.querySelectorAll("[data-init]")) {
      if (el.dataset.init) {
        this.expandElement(null, el);
        const signals = this.trimInput(el.dataset.init);
        for (let signal of signals) {
          if (typeof this.conn[signal] === "function") {
            if (this.conn[signal][Symbol.toStringTag] === "AsyncFunction") {
              await this.conn[signal](null, el);
            } else {
              this.conn[signal](null, el);
            }
          }
        }
      }
    }
  }

  setProp(key, value) {
    document.documentElement.style.setProperty(key, value);
  }

  /** internal */
  setIds(input) {
    input.querySelectorAll("*").forEach((el) => {
      if (!el.dataset.bittyid) {
        el.dataset.bittyid = self.crypto.randomUUID();
      }
      if (!el.bittyId) {
        el.bittyId = el.dataset.bittyid
      }
    });
  }

  trigger(signal) {
    const ev = new TriggerEvent(signal);
    this.dispatchEvent(ev);
  }

  /** internal */
  trimInput(input) {
    return input
      .trim()
      .split(/\s+/m)
      .map((l) => l.trim());
  }
}

customElements.define(tagName, BittyJs);
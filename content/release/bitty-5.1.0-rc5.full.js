/** @ignore */
const version = [5, 1, 0];

/** @ignore */
const tagName = `bitty-${version[0]}-${version[1]}`;

/** @ignore */
const blockStylesheet = new CSSStyleSheet();
blockStylesheet.replaceSync(`${tagName} { display: block; }`);
document.adoptedStyleSheets.push(blockStylesheet);

/** @internal */
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

/** @internal */
class BittyForwardEvent extends Event {
  constructor(event, signal) {
    super("bittyforward", { bubbles: true });
    this.fEvent = event;
    this.fSignal = signal;
  }
}

/** @internal */
class BittyTriggerEvent extends Event {
  constructor(signal) {
    super("bittytrigger", { bubbles: true });
    this.fSignal = signal;
  }
}

/**
 * @attribute {string} data-connect
 * @attribute {string} data-init
 * @attribute {string} data-listeners
 * @attribute {string} data-receive
 * @attribute {string} data-send
 */

class BittyJs extends HTMLElement {
  constructor() {
    super();
    /** @internal */
    this.config = {
      listeners: ["click", "input"],
      license: "MIT",
      version: version,
    };
  }

  /** @internal */
  async connectedCallback() {
    this.dataset.bittyid = self.crypto.randomUUID();
    await this.makeConnection();
    if (this.conn) {
      this.conn.api = this;
      this.handleCatchBridge = this.handleCatch.bind(this);
      this.handleEventBridge = this.handleEvent.bind(this);
      this.setIds(this);
      this.addEventListeners();
      await this.callBittyInit();
      this.runElementDataInits();
      this.runSendFromComponent();
      await this.callBittyReady();
    }
  }

  /** @internal */
  addEventListeners() {
    ["bittyforward", "bittytrigger"].forEach(
      (bittyEvent) => {
        document.addEventListener(bittyEvent, (event) => {
          this.handleEventBridge.call(this, event);
        });
      },
    );
    if (this.dataset.listeners) {
      this.config.listeners = this.dataset.listeners
        .split(/\s+/m)
        .map((l) => l.trim());
    }
    this.config.listeners.forEach((listener) => {
      document.addEventListener(listener, (event) => {
        if (
          event.target &&
          event.target.nodeName &&
          event.target.nodeName.toLowerCase() !== tagName &&
          event.target.dataset &&
          (event.target.dataset.send || event.target.dataset.s)
        ) {
          this.handleEventBridge.call(this, event);
        } else {
          this.handleCatchBridge.call(this, event);
        }
      });
    });
  }

  /** @internal */
  async callBittyInit() {
    // TODO: Verify async again here.
    if (typeof this.conn.bittyInit === "function") {
      if (this.conn.bittyInit[Symbol.toStringTag] === "AsyncFunction") {
        await this.conn.bittyInit();
      } else {
        this.conn.bittyInit();
      }
    }
  }

  /** @internal */
  async callBittyReady() {
    // TODO: Verify async again here.
    if (typeof this.conn.bittyReady === "function") {
      if (this.conn.bittyReady[Symbol.toStringTag] === "AsyncFunction") {
        await this.conn.bittyReady();
      } else {
        this.conn.bittyReady();
      }
    }
  }

  /** @internal */
  connectedMoveCallback() {
    // this method exist solely to prevent
    // connectedCallback() from firing if
    // a bitty component is moved.
  }

  /** @internal */
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
            return [...el.children].map((child) => {
              return child.outerHTML;
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
        [...sub[1].children].forEach((child) => {
          subContent.push(child.outerHTML);
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

  forward(event, signal) {
    const forwardEvent = new BittyForwardEvent(event, signal);
    this.dispatchEvent(forwardEvent);
  }

  trigger(signal) {
    const triggerEvent = new BittyTriggerEvent(signal);
    this.dispatchEvent(triggerEvent);
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
      const template = document.createElement("template");
      template.innerHTML = response.value;
      const fragment = template.content.cloneNode(true);
      this.setIds(fragment);
      const payload = { value: fragment };
      return payload;
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

  /** @internal */
  async handleCatch(event) {
    if (typeof this.conn.bittyCatch === "function") {
      await this.conn.bittyCatch(event);
    }
  }

  /** @internal */
  async handleEvent(event) {
    const receivers = this.querySelectorAll("[data-receive]");
    let incomingSignals;
    if (event.type === "bittyforward") {
      incomingSignals = event.fSignal;
      event = event.fEvent;
    } else if (event.type === "bittytrigger") {
      incomingSignals = event.fSignal;
    } else {
      incomingSignals = event.target.dataset.send;
    }
    for (const incomingSignal of incomingSignals.split(/\s+/)) {
      let doAwait = false;
      let theSignal = incomingSignal;
      const incomingSignalParts = incomingSignal.split(":");
      if (
        incomingSignalParts.length === 2 && incomingSignalParts[0] === "await"
      ) {
        doAwait = true;
        theSignal = incomingSignalParts[1];
      }
      let foundReceivers = false;
      for (const receiver of receivers) {
        const receivedSignals = receiver.dataset.receive.split(/\s+/m);
        for (const receivedSignal of receivedSignals) {
          let rSignal = receivedSignal;
          const receivedSignalParts = receivedSignal.split(":");
          if (
            receivedSignalParts.length === 2 &&
            receivedSignalParts[0] === "await"
          ) {
            rSignal = receivedSignalParts[1];
            doAwait = true;
          }
          if (rSignal === theSignal && this.conn[theSignal]) {
            if (doAwait) {
              await this.conn[incomingSignal](event, receiver);
            } else {
              this.conn[incomingSignal](event, receiver);
            }
            foundReceivers = true;
          }
        }
      }
      if (!foundReceivers && this.conn[theSignal]) {
        if (doAwait) {
          await this.conn[theSignal](event, null);
        } else {
          this.conn[theSignal](event, null);
        }
      }
    }
  }

  async loadCSS(url, subs, options) {
    const response = await this.getTXT(url, subs, options, "loadCSS");
    if (response.error) {
      return response;
    } else {
      const newStylesheet = new CSSStyleSheet();
      newStylesheet.replaceSync(response.value);
      document.adoptedStyleSheets.push(newStylesheet);
      const payload = { value: response.value };
      return payload;
    }
  }

  /** @internal */
  async makeConnection() {
    try {
      if (!this.dataset.connect) {
        if (window.BittyClass) {
          this.conn = new window.BittyClass();
        } else {
          console.error(`${tagName} error: No class to connect to.`);
        }
      } else {
        const connParts = this.dataset.connect.split(/\s+/m).map((x) =>
          x.trim()
        );
        if (typeof window[connParts[0]] !== "undefined") {
          this.conn = new window[connParts[0]]();
        } else {
          const mod = await import(connParts[0]);
          if (connParts[1] === undefined) {
            this.conn = new mod.default();
          } else {
            this.conn = new mod[connParts[1]]();
          }
        }
      }
    } catch (error) {
      console.error(`${tagName} error: ${error} - ${this.dataset.connect}`);
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

  makeTXT(template, subs = []) {
    return this.doSubs(template, subs);
  }

  match(event, el, key = "bittyid") {
    // TODO: Consider adding `matchData` which would does the match
    // doing up the DOM ancestors. Idea being to make it easy
    // to see when an `event.target` and an `el` have the
    // same ancestor.
    if (
      event.target.dataset[key] === undefined ||
      el.dataset[key] === undefined
    ) {
      return false;
    }
    return event.target.dataset[key] === el.dataset[key];
  }


  /** @internal */
  runElementDataInits() {
    // TODO: Make sure this can handle async/await
    const els = this.querySelectorAll("[data-init]");
    els.forEach((el) => {
      const signals = el.dataset.init.split(/\s+/m);
      signals.forEach((signal) => {
        if (this.conn[signal]) {
          this.conn[signal]({
            type: "bittydatainit",
          }, el);
        }
      });
    });
  }

  /** @internal */
  runSendFromComponent() {
    // TODO: Rename `data-send` on the bitty tag
    // to `data-init` in version 6.x.x
    if (this.dataset.send) {
      this.handleEvent({
        type: "bittytagdatasend",
        target: this,
      });
    }
  }

  setProp(key, value) {
    document.documentElement.style.setProperty(key, value);
  }

  /** @internal */
  setIds(input) {
    input.querySelectorAll("*").forEach((el) => {
      const ds = el.dataset;
      if (
        ds.receive || ds.send ||
        ds.init && !ds.bittyid
      ) {
        ds.bittyid = self.crypto.randomUUID();
      }
    });
  }
}

customElements.define(tagName, BittyJs);

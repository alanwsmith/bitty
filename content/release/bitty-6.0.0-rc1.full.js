/** @internal */
class TriggerEvent extends Event {
  constructor(signal) {
    super("bittytrigger", { bubbles: true });
    this.signal = signal;
  }
}

/** @ignore */
class BittyInitEvent extends Event {
  constructor() {
    super("bittybittyinit", { bubbles: true });
  }
}

/** @ignore */
class BittyReadyEvent extends Event {
  constructor() {
    super("bittybittyready", { bubbles: true });
  }
}

/** @ignore */
class DataInitEvent extends Event {
  constructor(signal, el) {
    super("bittydatainit", { bubbles: true });
    this.signal = signal;
    this.el = el;
  }
}

/** @ignore */
const version = [6, 0, 0];

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
class ForwardEvent extends Event {
  constructor(event, signal) {
    super("bittyforward", { bubbles: true });
    this.forwardedEvent = event;
    this.forwardedSignal = signal;
  }
}

/** @internal */
class BittyChildInitEvent extends Event {
  constructor() {
    super("bittychildinit", { bubbles: true });
  }
}

/** @internal */
class BittySelfInitEvent extends Event {
  constructor() {
    super("bittyselfinit", { bubbles: true });
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
      this.handleEventBridge = this.handleEvent.bind(this);
      // TODO: do everything not just data-* elements
      this.setIds(this);
      this.addEventListeners();
      await this.runBittyInit();
      this.runDataInits();
      await this.runBittyReady();
    }
  }

  /** @internal */
  addEventListeners() {
    [
      "bittybittyinit",
      "bittybittyready",
      "bittytrigger",
      "bittydatainit",
      "bittyforward",
    ]
      .forEach(
        (bittyEvent) => {
          // TODO: Confirm this needs to be on the window
          // to capture message passing stuff
          // between windows
          window.addEventListener(bittyEvent, (event) => {
            this.handleEventBridge.call(this, event);
          });
        },
      );
    if (this.dataset.listeners) {
      this.config.listeners = this.dataset.listeners
        .trim()
        .split(/\s+/m)
        .map((l) => l.trim());
    }
    this.config.listeners.forEach((listener) => {
      // TODO: Confirm this needs to be on the window
      // to capture message passing stuff
      // between windows
      window.addEventListener(listener, (event) => {
        this.handleEventBridge.call(this, event);
      });
    });
  }

  /** @internal */
  async runBittyInit() {
    if (typeof this.conn.bittyInit === "function") {
      const event = new BittyInitEvent();
      this.dispatchEvent(event);
    }

    // // TODO: Verify async again here.
    // if (typeof this.conn.bittyInit !== "function") {
    //   return;
    // }
    // if (this.conn.bittyInit[Symbol.toStringTag] === "AsyncFunction") {
    //   await this.conn.bittyInit();
    // } else {
    //   this.conn.bittyInit();
    // }
  }

  /** @internal */
  async runBittyReady() {
    if (typeof this.conn.bittyReady === "function") {
      const event = new BittyReadyEvent();
      this.dispatchEvent(event);
    }

    // // TODO: Verify async again here.
    // if (typeof this.conn.bittyReady !== "function") {
    //   return;
    // }
    // if (this.conn.bittyReady[Symbol.toStringTag] === "AsyncFunction") {
    //   await this.conn.bittyReady();
    // } else {
    //   this.conn.bittyReady();
    // }
  }

  /** @internal */
  connectedMoveCallback() {
    // this prevents connectedCallback() from firing
    // if a bitty component is moved.
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

  forward(event, signal) {
    const forwardEvent = new ForwardEvent(event, signal);
    this.dispatchEvent(forwardEvent);
  }

  trigger(signal) {
    const event = new TriggerEvent(signal);
    this.dispatchEvent(event);
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
            `${incomingMethod}() returned ${response.status} [${response.statusText}] in:\n${incomingMethod}(${response.url}, ${
              JSON.stringify(subs)
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
  findSender(event, checkElement) {
    if (checkElement.dataset && checkElement.dataset.send) {
      event.sender = checkElement;
    } else if (checkElement.parentNode) {
      this.findSender(event, checkElement.parentNode);
    }
  }

  /** @internal */
  async handleEvent(event) {
    if (event.type === "bittybittyinit") {
      if (this.dataset.bittyid === event.target.dataset.bittyid) {
        if (typeof this.conn.bittyInit === "function") {
          if (this.conn.bittyInit[Symbol.toStringTag] === "AsyncFunction") {
            await this.conn.bittyInit();
          } else {
            this.conn.bittyInit();
          }
        }
      }
    } else if (event.type === "bittybittyready") {
      if (this.dataset.bittyid === event.target.dataset.bittyid) {
        if (typeof this.conn.bittyReady === "function") {
          if (this.conn.bittyReady[Symbol.toStringTag] === "AsyncFunction") {
            await this.conn.bittyReady();
          } else {
            this.conn.bittyReady();
          }
        }
      }
    } else if (
      event.type === "bittytrigger"
    ) {
      // TODO: Handle async
      event.sender = event.target;
      const signals = event.signal.trim().split(/\s+/m).map((signal) =>
        signal.trim()
      );
      const receivers = this.querySelectorAll("[data-receive]");
      for (let signal of signals) {
        let doAwait = false;
        const iSigParts = signal.split(":");
        if (iSigParts.length === 2 && iSigParts[0] === "await") {
          doAwait = true;
          signal = iSigParts[1];
        }
        if (this.conn[signal]) {
          let foundReceiver = false;
          for (let receiver of receivers) {
            const receptors = receiver.dataset.receive.trim().split(/\s+/m)
              .map((x) => x.trim());
            for (let receptor of receptors) {
              const rSigParts = receptor.split(":");
              if (rSigParts.length === 2 && rSigParts[0] === "await") {
                doAwait = true;
                receptor = rSigParts[1];
              }
              if (receptor === signal) {
                foundReceiver = true;
                if (doAwait) {
                  await this.conn[signal](event, receiver);
                } else {
                  this.conn[signal](event, receiver);
                }
              }
            }
          }
          if (foundReceiver === false) {
            if (doAwait) {
              await this.conn[signal](event, null);
            } else {
              this.conn[signal](event, null);
            }
          }
        }

        //
      }

      // for (const signal of signals) {
      //   let doAwait = false;
      //   const iSigParts = signal.split(":").map((x) => x.trim());
      //   const receivers = this.querySelectorAll("[data-receive]");
      //   let foundReceiver = false;
      //   for (let receiver of receivers) {
      //     const receptors = receiver.dataset.receive.trim().split(/\s+/m).map((
      //       text,
      //     ) => text.trim());
      //     for (let receptor of receptors) {
      //       if (receptor === signal) {
      //         if (typeof this.conn[receptor] === "function") {
      //           foundReceiver = true;
      //           this.conn[receptor](event, receiver);
      //         }
      //       }
      //     }
      //   }
      //   if (!foundReceiver) {
      //     // TODO: Handle async
      //     if (typeof this.conn[signal] === "function") {
      //       this.conn[signal](event, null);
      //     }
      //   }
      // }

      //
    } else if (
      event.type === "bittydatainit"
    ) {
      // TODO: Handle async
      event.sender = event.target;
      const signals = event.signal.trim().split(/\s+/m);
      for (const signal of signals) {
        if (this.conn[signal]) {
          this.conn[signal](event, event.el);
        }
      }
    } else if (
      event.type === "bittyforward"
    ) {
      // TODO: Handle async
      const signals = event.forwardedSignal.trim().split(/\s+/m);
      event = event.forwardedEvent;
      const receivers = this.querySelectorAll("[data-receive]");
      for (let receiver of receivers) {
        const receptors = receiver.dataset.receive.trim().split(/\s+/m).map((
          text,
        ) => text.trim());
        for (let receptor of receptors) {
          if (
            signals.includes(receptor) && this.conn[receptor]
          ) {
            this.conn[receptor](event, receiver);
          }
        }
      }
    } else {
      this.findSender(event, event.target);
      if (event.sender) {
        const signals = event.sender.dataset.send.trim().split(/\s+/m);
        const receivers = this.querySelectorAll("[data-receive]");
        for (let signal of signals) {
          let doAwait = false;
          const iSigParts = signal.split(":");
          if (iSigParts.length === 2 && iSigParts[0] === "await") {
            doAwait = true;
            signal = iSigParts[1];
          }
          if (this.conn[signal]) {
            let foundReceiver = false;
            for (let receiver of receivers) {
              const receptors = receiver.dataset.receive.trim().split(/\s+/m)
                .map((x) => x.trim());
              for (const receptor of receptors) {
                const rSignalParts = receptor.split(":");
                if (rSignalParts.length === 2 && rSignalParts[0] === "await") {
                  receptor = rSignalParts[1];
                  doAwait == true;
                }
                if (receptor === signal) {
                  foundReceiver = true;
                  if (doAwait) {
                    await this.conn[signal](event, receiver);
                  } else {
                    this.conn[signal](event, receiver);
                  }
                }
              }
            }
            if (foundReceiver === false) {
              if (doAwait) {
                await this.conn[signal](event, null);
              } else {
                this.conn[signal](event, null);
              }
            }
          }
        }

        // for (let receiver of receivers) {
        //   const receptors = receiver.dataset.receive.trim().split(/\s+/m).map((
        //     text,
        //   ) => text.trim());
        //   for (let receptor of receptors) {
        //     if (
        //       signals.includes(receptor) && this.conn[receptor]
        //     ) {
        //       this.conn[receptor](event, receiver);
        //     }
        //   }
        // }

        //
      }
    }

    //const signals = event.target.dataset.init.split(/\s+/m);
    // console.log(signals);
    //const receivers = this.querySelectorAll("[data-receive]");

    //if (event.type === "bittybittyinit") {
    //} else if (event.type === "bittydatainit") {
    //  console.log("HERE7");
    //  console.log(event);
    //  event.sender = event.target;
    //  const signals = event.target.dataset.init.split(/\s+/m);
    //  console.log(signals);
    //  signals.forEach((signal) => {
    //    if (this.conn[signal]) {
    //      console.log("------------------------ HERE8");
    //      // TODO: check async here and do await.
    //      this.conn[signal](event, event.target);
    //    }
    //  });
    //} else if (event.type === "bittyinitself") {
    //  // event.sender = event.target;
    //  // if (this.dataset.bittyid === event.sender.dataset.bittyid) {
    //  //   // TODO: Verify async again here.
    //  //   if (typeof this.conn.bittyInit !== "function") {
    //  //     return;
    //  //   }
    //  //   if (this.conn.bittyInit[Symbol.toStringTag] === "AsyncFunction") {
    //  //     await this.conn.bittyInit();
    //  //   } else {
    //  //     this.conn.bittyInit();
    //  //   }
    //  // }
    //} else {
    //  this.findSender(event, event.target);
    //  //if (event.sender) {
    //  const receivers = this.querySelectorAll("[data-receive]");
    //  let incomingSignals;
    //  if (event.type === "bittyforward") {
    //    incomingSignals = event.fSignal;
    //    event = event.fEvent;
    //  } else if (event.type === "bittytrigger") {
    //    incomingSignals = event.fSignal;
    //  } else if (event.type === "bittyselfinit") {
    //    incomingSignals = event.target.dataset.init;
    //  } else {
    //    incomingSignals = event.sender.dataset.send;
    //  }

    //  for (const incomingSignal of incomingSignals.split(/\s+/)) {
    //    let doAwait = false;
    //    let theSignal = incomingSignal;
    //    const incomingSignalParts = incomingSignal.split(":");
    //    if (
    //      incomingSignalParts.length === 2 &&
    //      incomingSignalParts[0] === "await"
    //    ) {
    //      doAwait = true;
    //      theSignal = incomingSignalParts[1];
    //    }
    //    let foundReceivers = false;
    //    for (const receiver of receivers) {
    //      const receivedSignals = receiver.dataset.receive.split(/\s+/m);
    //      for (const receivedSignal of receivedSignals) {
    //        let rSignal = receivedSignal;
    //        const receivedSignalParts = receivedSignal.split(":");
    //        if (
    //          receivedSignalParts.length === 2 &&
    //          receivedSignalParts[0] === "await"
    //        ) {
    //          rSignal = receivedSignalParts[1];
    //          doAwait = true;
    //        }
    //        if (rSignal === theSignal && this.conn[theSignal]) {
    //          if (doAwait) {
    //            await this.conn[theSignal](event, receiver);
    //          } else {
    //            this.conn[theSignal](event, receiver);
    //          }
    //          foundReceivers = true;
    //        }
    //      }
    //    }
    //    if (!foundReceivers && this.conn[theSignal]) {
    //      if (doAwait) {
    //        await this.conn[theSignal](event, null);
    //      } else {
    //        this.conn[theSignal](event, null);
    //      }
    //    }
    //    // }
    //  }

    //
    //}
    //
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
        const connParts = this.dataset.connect.trim().split(/\s+/m).map((x) =>
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
  runDataInits() {
    if (this.dataset.init) {
      const event = new DataInitEvent(this.dataset.init, this);
      this.dispatchEvent(event);
    } else {
      const els = this.querySelectorAll("[data-init]");
      els.forEach((el) => {
        const event = new DataInitEvent(el.dataset.init, el);
        this.dispatchEvent(event);
        //   signals.forEach((signal) => {
        //     if (this.conn[signal]) {
        //       this.conn[signal]({
        //         type: "bittydatainit",
        //       }, el);
        //     }
        //   });
      });
    }

    // console.log(els);
    // console.log(this.dataset);

    // els.forEach((el) => {
    //   const signals = el.dataset.init.split(/\s+/m);
    //   signals.forEach((signal) => {
    //     if (this.conn[signal]) {
    //       this.conn[signal]({
    //         type: "bittydatainit",
    //       }, el);
    //     }
    //   });
    // });
  }

  ///** @internal */
  //runSelfInit() {
  //  //const bittyBittyInitEvent = new BittyBittyInitEvent();
  //  // this.dispatchEvent(bittyBittyInitEvent);
  //  // TODO: Rename `data-send` on the bitty tag
  //  // to `data-init` in version 6.x.x
  //  if (this.dataset.init) {
  //    // TODO: See if this can just be run
  //    // with the child elements. So the
  //    // behavior would be the same across
  //    // the board.
  //    this.handleEvent({
  //      type: "bittyinitself",
  //      target: this,
  //    });
  //  }
  //}

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

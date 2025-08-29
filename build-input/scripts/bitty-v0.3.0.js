/////////////////////////////////////////////////////
// bitty.js  - Version 0.3.0
/////////////////////////////////////////////////////

function debug(payload, el = null) {
  // TODO: Figure out how to display the function that called
  // this or its line number
  if (window && window.location && window.location.search) {
    const params = new URLSearchParams(window.location.search);
    if (params.has("debug")) {
      console.log(payload);
      if (el !== null) {
        console.log(el);
      }
    }
  }
}

// solo is for debugging individual items instead of
// the full debug
function solo(payload, el = null) {
  // TODO: Figure out how to display the function that called
  // this or its line number
  if (window && window.location && window.location.search) {
    const params = new URLSearchParams(window.location.search);
    if (params.has("solo") || params.has("debug")) {
      console.log(payload);
      if (el !== null) {
        console.log(el);
      }
    }
  }
}

/////////////////////////////////////////////////////

class BittyJs extends HTMLElement {
  // TODO: Deprecate #hashString in favor of join approach
  #hashString = "#######################################";
  #watchers = [];
  // TODO: Determine if "change" should be added to "click" and "input" as a default
  #listeners = ["click", "input"]; 
  #receivers = [];
  #errors = [
    {
      id: 0,
      kind: ["Not Classified"],
      description: ["An unclassified error occurred."],
      help: [
        [
          `Detailed help isn't available since this error is unclassified.`,
          `Use the line numbers from the error console to locate the source of the error and work from there.`,
        ],
      ],
      developerNote: [
        ` Use an ID from the BittyJS #errors variable to classify this error.`,
        `It's a bug if there's not an approprite classification. Please open an issue if you find an error without a clear mapping.`,
      ],
    },
    {
      id: 1,
      kind: ["Invalid Error ID"],
      description: [
        `An attempt to call an error with an ID of '__ERROR_ID__' was made. That ID does not exist in '#errors'.`,
      ],
      help: [
        [`Change the ID to one that's avaialble in the '#errors' variable.`],
        [
          `Create a custom error with the ID you're attempting to use.`,
          `NOTE: Custom error IDs should be above 9000 by convention.`,
        ],
      ],
      developerNote: [],
    },
    {
      id: 2,
      kind: [
        "A <bitty-js></bitty-js> element is missing its 'data-bridge' attribute",
      ],
      description: [
        `Every <bitty-js></bitty-js> element requires a 'data-bridge' attribute that connects it to a '.js' file that powers its functionality.`,
        `The 'data-bridge' attribute is missing from the <bitty-js></bitty-js> element with the 'data-uuid' attribute:`,
        `__UUID__`,
      ],
      help: [
        [
          `Add a 'data-bridge' attribute to the <bitty-js></bitty-js> tag with the path to its supporting '.js' module file. For example:`,
          `<bitty-js data-bridge="./path/to/module.js"></bitty-js>`,
        ],
      ],
      developerNote: [],
    },
    {
      id: 3,
      kind: [`Could not load default class from:`, `__MODULE_PATH__`],
      description: [
        `The <bitty-js> element with 'data-uuid':`,
        `__BITTY_UUID__ [TODO: find/replace uuid here]`,
        `does not have a 'data-app' attribute. Therefore, it attempted to load the default class exported from:`,
        `__MODULE_PATH__ [TODO: find/replace .js path here]`,
        `that attempt failed.`,
      ],
      help: [
        [
          `Make sure the __MODULE_PATH__ file has either a:`,
          `export default class {}`,
          `or:`,
          `export default class SOME_NAME {}`,
        ],
        [
          `If the file has a 'export default class', something went wrong with it. Examine it further to trace the issue.`,
        ],
        [
          `Add a 'data-app' attribute to the <bitty-js> element with the name of a class exported from __MODULE_PATH__.`,
        ],
      ],
      developerNote: [],
    },
    ,
    {
      id: 4,
      kind: [`Could not load widget`],
      description: [`The widget could not be loaded from the .js module file.`],
      help: [
        [`TODO: Make note here about defauld call to Widget()`],
        [
          `Check to make sure the value of the 'data-widget' attribute in your <bitty-js></bitty-js> element matches a class that's exported from the .js file`,
        ],
        ["Make sure the class in your .js module file is being exported"],
      ],
      developerNote: [],
    },
  ];

  // sample to copy paste for new error message
  // {
  //   id: 2,
  //   kind: [],
  //   description: [],
  //   help: [[`Help option`]],
  //   developerNote: [],
  // },


  async connectedCallback() {
    // TODO: Verify `async` on connectedCallback
    // works across browsers.
    //
    this.setParentId();
    this.setIds();
    await this.attachWidget();
    if (this.widget === undefined) {
      this.error(0);
    } else {
      this.requestUpdate = this.handleChange.bind(this);
      this.watchMutations = this.handleMutations.bind(this);
      this.updateWatchers = this.handleWatchers.bind(this);
      this.loadReceivers();
      this.loadWatchers();
      this.init();
      this.addEventListeners();
    }
  }

  addEventListeners() {
    this.#listeners.forEach((listener) => {
      this.addEventListener(listener, (event) => {
        this.requestUpdate.call(this, event);
      });
    });

    this.addEventListener("bittysignal", (payload) => {
      this.updateWatchers.call(this, payload);
    });
  }

  addReceiver(key, el) {
    debug(`Adding receiver for: ${el.constructor.name} ${el.dataset.uuid} with data-receive="${key}" to: bitty-js ${this.dataset.uuid}`);
    this.#receivers.push({
      key: key,
      f: (data) => {
        try {
          this.widget[`${key}`](el, data);
        } catch (error) {
          // TODO: Add custom error call here
          console.error(error);
          console.error(`Tried: ${key}`);
        }
      },
    });
  }

  addWatcher(key, el) {
    debug(`Adding watcher for: ${el.constructor.name} ${el.dataset.uuid} with data-watch="${key}" to: bitty-js ${this.dataset.uuid}`);
    this.#watchers.push({
      key: key,
      f: (data) => {
        try {
          this.widget[`${key}`](el, data);
        } catch (error) {
          // TODO: Add custom error call here
          console.error(error);
          console.error(`Tried: ${key}`);
        }
      },
    });
  }

  assembleErrorHelpText(err) {
    const out = [];
    err.help.forEach((options, index) => {
      if (err.help.length === 1) {
        if (index === 0) {
          out.push("POSSIBLE SOLUTION:");
        }
        out.push(this.assembleErrorText(options));
      } else {
        if (index === 0) {
          out.push("POSSIBLE SOLUTIONS:");
        }
        options.forEach((option, optionIndex) => {
          if (optionIndex === 0) {
            out.push(`${index + 1}. ${option}`);
          } else {
            out.push(option);
          }
        });
      }
    });
    const text = this.assembleErrorReplacedText(err, out.join("\n\n"));
    err.output.push(text);
  }

  assemlbeErrorAdditionalDetails(err) {
    if (err.additionalDetails !== null) {
      const out = [];
      out.push("ADDITIONAL DETAILS:");
      out.push(err.additionalDetails);
      const text = this.assembleErrorReplacedText(err, out.join("\n\n"));
      err.output.push(text);
    }
  }

  assembleErrorComponent(err) {
    const out = [];
    out.push(`COMPONENT:`);
    out.push(
      `This error was caught by the <bitty-js> element with a 'data-uuid' of:`,
    );
    out.push(this.dataset.uuid);
    out.push(
      `A copy of the element is in a follow up message below. ('data-uuid' attributes are added dynamically. They should be visible in the 'Elements' view in your browser's developer console.)`,
    );
    const text = this.assembleErrorReplacedText(err, out.join("\n\n"));
    err.output.push(text);
  }

  assemlbeErrorDescription(err) {
    const out = [];
    out.push("DESCRIPTION:");
    out.push(this.assembleErrorText(err.description));
    const text = this.assembleErrorReplacedText(err, out.join("\n\n"));
    err.output.push(text);
  }

  assembleErrorElementDetails(err) {
    if (err.el !== null) {
      const out = [];
      out.push("ERROR ELEMENT DETAILS");
      out.push(
        `The element with the error is a ${err.el.tagName} tag with a 'data-uuid' attribute of:`,
      );
      out.push(err.el.dataset.uuid);
      const text = this.assembleErrorReplacedText(err, out.join("\n\n"));
      err.output.push(text);
    }
  }

  assembleErrorId(err) {
    const out = [];
    out.push(this.#hashString);
    out.push(`A BITTY ERROR OCCURRED [ID: ${err.id}]`);
    out.push(this.assembleErrorText(err.kind));
    const text = this.assembleErrorReplacedText(err, out.join("\n\n"));
    err.output.push(text);
  }

  assembleErrorReplacedText(err, content) {
    return content
      .replaceAll("__UUID__", this.dataset.uuid)
      .replaceAll("__ERROR_ID__", err.id)
      .trim();
  }

  assembleErrorText(content) {
    return content.join("\n\n");
  }

  constructor() {
    super();
  }

  async attachWidget() {
    if (this.dataset.bridge) {
      const mod = await import(this.dataset.bridge);
      if (this.dataset.connection === undefined) {
        this.widget = new mod.default();
      } else {
        this.widget = new mod[this.dataset.connection]();
      }
    } else {
      this.error(2);
    }
  }

  error(id = 0, el = null, additionalDetails = null) {
    this.classList.add("bitty-component-error");
    if (el !== null) {
      this.classList.add("bitty-element-error");
    }
    let err = this.#errors.find((err) => {
      return err.id === id;
    });
    if (err === undefined) {
      err = this.#errors.find((err) => {
        return err.id === 1;
      });
    }
    err.el = el;
    err.additionalDetails = additionalDetails;
    err.output = [];
    // this.assembleErrorPrelude(err)
    this.assembleErrorId(err);
    // this.assembleErrorDumpMessage(err)
    this.assemlbeErrorDescription(err);
    this.assemlbeErrorAdditionalDetails(err);
    this.assembleErrorHelpText(err);
    this.assembleErrorComponent(err);
    this.assembleErrorElementDetails(err);
    // TODO: Add developerNote
    // TODO: Pull the source error message if there is on
    console.error(err.output.join(`\n\n${this.#hashString}\n\n`));
    console.error(this);
    if (el !== null) {
      console.error(el);
    }
  }

  handleChange(event) {
    if (event.target === undefined || event.target.dataset === undefined) {
      return;
    }
    if (event.target.dataset.call !== undefined) {
      this.runFunctions(event.target.dataset.call, event);
    }
    if (event.target.dataset.send !== undefined) {
      this.sendUpdates(event.target.dataset.send, event);
    }
    event.stopPropagation();
  }

  // TODO: Verify this mutation observer catches
  // new elements that are added as strings inside
  // .innerHTML calls
  handleMutations(mutationList, _observer) {
    for (const mutation of mutationList) {
      if (mutation.type === "childList") {
        // TODO: Verify this remove node watcher removes
        // receivers and watchers properly.
        for (const removedNode of mutation.removedNodes) {
          if (removedNode.dataset) {
            if (removedNode.dataset.call || removedNode.dataset.receive || removedNode.dataset.send || removedNode.dataset.watch) {
              debug("Caught removed node through mutation observer. Updating IDs, receivers, and watchers");
              this.setIds();
              this.loadReceivers();
              this.loadWatchers();
              // Only need one hit to run the processes
              // so return after seeing the first one
              return;
            }
          }
        }
        for (const addedNode of mutation.addedNodes) {
          if (addedNode.dataset) {
            if (addedNode.dataset.call || addedNode.dataset.receive || addedNode.dataset.send || addedNode.dataset.watch) {
              debug("Caught new node through mutation observer. Updating IDs, receivers, and watchers");
              this.setIds();
              this.loadReceivers();
              this.loadWatchers();
              // Only need one hit to run the processes
              // so return after seeing the first one
              return;
            }
          }
        }
      }
    }
  }

  handleWatchers(payload) { 
    if (payload.detail === undefined || payload.detail.name === undefined || payload.detail.event === undefined) {
      debug("Missing even from handleWatchers payload");
      return;
    }
    this.updateWatcher(payload.detail.name, payload.detail.event);
  }

  init() {
    // TODO: Probably rename this to `this.widget.bitty`
    // so it has that name instead of bridge when
    // addressed from inside modules. 
    // TODO: Also, probably rename `widget` to
    // connection? or maybe something else that's
    // more descriptive?
    this.widget.bridge = this;


    // NOTE: DEPRECATE when v0.3.0 launches
    // TODO: Probably deprecate this template process.
    // The expecation being that the page itself is
    // responsible for setting things up.
    // At a minimum, combine the init() and template()
    // calls into a single thing so there's 
    // less overhead. Also, better to use
    // a template element regardless
    // if (this.widget.template !== undefined) {
    //   const skeleton = document.createElement("template");
    //   skeleton.innerHTML = this.widget.template();
    //   this.append(skeleton.content.cloneNode(true));
    //   this.setIds();
    //   this.loadReceivers();
    //   this.loadWatchers();
    // }


    // NOTE: DEPRECATE when v0.3.0 launches
    // TODO: Probably deprecate this in favor of 
    // issuing a data-call from the bitty-js 
    // element. That's more visible, explicit, 
    // and requires less mental overhead.
    // TODO: Actually, probably remove init()
    // and just use class constrotor methods
    // if (this.widget.init !== undefined) {
    //   this.widget.init();
    // }

    // TODO: Remove this if it's not necessary
    // for watchers at the individual element
    // level (it was originally for a single
    // watcher at the bitty-js elemenet level)
    // GOAL: Identify signals to watch from 
    // child elements to allow sending signals
    // up the tree
    // if (this.dataset.watch) {
    //   this.#watch = this.dataset.watch.split("|");
    // }

    this.observerConfig = { childList: true, subtree: true };
    this.observer = new MutationObserver(this.watchMutations);
    this.observer.observe(this, this.observerConfig);

    if (this.dataset.call !== undefined) {
      this.runFunctions(this.dataset.call, null);
    }
    if (this.dataset.send !== undefined) {
      this.sendUpdates(this.dataset.send, null);
    }
    // TODO: See about moving this up above the
    // this.dataset.call and this.dataset.send 
    // checks. Feels like that's where it should 
    // belong since it's more set up than execution. 
    // Just have to make sure it doesn't cause 
    // a feedback loop on changes (which I think 
    // would already have occurred)
    if (this.dataset.listeners !== undefined) {
      this.#listeners = this.dataset.listeners.split("|");
    }
  }

  loadReceivers() {
    debug("loading receivers");
    this.#receivers = [];
    const els = this.querySelectorAll(`[data-receive]`);
    els.forEach((el) => {
      el.dataset.receive.split("|").forEach((key) => {
        this.addReceiver(key, el);
      });
    });
  }

  loadWatchers() {
    debug("loading watchers");
    this.#watchers = [];
    const els = this.querySelectorAll(`[data-watch]`);
    els.forEach((el) => {
      el.dataset.watch.split("|").forEach((key) => {
        this.addWatcher(key, el);
      });
    });
  }

  runFunctions(stringToSplit, event) {
    stringToSplit.split("|").forEach((f) => {
      try {
        this.widget[`${f}`](event);
      } catch (error) {
        console.log(error);
        console.error(`Tried: ${f}`);
      }
    });
  }

  // TODO: confirm 'data' is really an 'event' and rename it
  sendUpdates(updates, data) {
    updates.split("|").forEach((key) => {
      // Forward the event up the tree as a
      // `bittysignal`. 
      const signalForwarder = new CustomEvent("bittysignal", {
        bubbles: true,
        detail: {
          name: key,
          event: data,
        }
      });
      this.parentElement.dispatchEvent(signalForwarder);
      this.#receivers.forEach((receiver) => {
        if (receiver.key === key) {
          receiver.f(data);
        }
      });
    });
  }

  setIds() {
    const selector = [ "call", "receive", "send", "watch"]
      .map((key) => {
        return `[data-${key}]`;
      })
      .join(",");
    const els = this.querySelectorAll(selector);
    els.forEach((el) => {
      if (el.dataset.uuid === undefined) {
        const uuid = self.crypto.randomUUID();
        debug(`Setting ${el.tagName} ID to: ${uuid} in: ${this.dataset.uuid}`);
        el.dataset.uuid = uuid;
      }
    });
  }

  setParentId() {
    const uuid = self.crypto.randomUUID();
    debug(`Setting bitty-js ID to: ${uuid}`);
    this.dataset.uuid = uuid;
  }

  updateWatcher(key, event) {
    this.#watchers.forEach((watcher) => {
      if (watcher.key === key) {
        watcher.f(event);
      }
    });
  }


  /*
  // TODO: Deprecate after completing 0.3.00
  //
  // addIds() {
  //   debug("Adding IDs");
  //   if (this.dataset.uuid === undefined) {
  //     this.dataset.uuid = self.crypto.randomUUID();
  //   }
  //   const els = this.querySelectorAll(`[data-r], [data-s], [data-c]`);
  //   els.forEach((el) => {
  //     if (el.dataset.uuid === undefined) {
  //       el.dataset.uuid = self.crypto.randomUUID();
  //     }
  //   });
  // }
  */


  // TODO: This is out for now. Probably DEPRECATE, but think
  // about it a little more first.
  // assembleErrorFinding(err) {
  //   const out = []
  //   out.push(`FINDING THE ERROR`)
  //   out.push(
  //     `Error consoles generally report lines numbers that an error occurred on. The first number is the line where the 'console.error()' call that produced this message is. It's not useful since it always fires from the BittyJS class 'error()' method.`
  //   )
  //   out.push(
  //     `Expand the error message in the console to see the extended error trace and associated line numbers.`
  //   )
  //   const text = this.assembleErrorReplacedText(err, out.join('\n\n'))
  //   err.output.push(text)
  // }

  // TODO: Deprecate in favor of moving the messages into COMPONETN UUID and the ELEMENT Section
  // assembleErrorDumpMessage(err) {
  //   const out = []
  //   if (err.el !== null) {
  //     out.push('ELEMENT OUTPUTS')
  //     out.push(
  //       'Dumps of the <bitty-js></bitty-js> element and the element passed to the error function are in follow up console messages below.'
  //     )
  //   } else {
  //     out.push('ELEMENT OUTPUT')
  //     out.push(
  //       'A dump of the <bitty-js></bitty-js> element is in a follow up console message below.'
  //     )
  //   }
  //   const text = this.assembleErrorReplacedText(err, out.join('\n\n'))
  //   err.output.push(text)
  // }


  // TODO: Deprecate after completing 0.3.0
  // assembleErrorPrelude(err) {
  //   const out = []
  //   out.push(this.#hashString)
  //   out.push(`A BITTY ERROR OCCURRED`)
  //   const text = this.assembleErrorReplacedText(err, out.join('\n\n'))
  //   err.output.push(text)
  // }


  // DEPRECATED as of 0.3.0
  // isIgnored(name) {
  //   if (this.dataset.ignore === undefined) {
  //     return false;
  //   }
  //   return this.dataset.ignore.split("|").includes(name);
  // }

}

customElements.define("bitty-js", BittyJs);

/* *************************************************
 *
 * MIT License
 * https://bitty-js.alanwsmith.com/
 *
 * Copyright (c) 2025 Alan W. Smith
 *
 * Permission is hereby granted, free of charge, to
 * any person obtaining a copy of this software and
 * associated documentation files (the "Software"),
 * to deal in the Software without restriction,
 * including without limitation the rights to use,
 * copy, modify, merge, publish, distribute,
 * sublicense, and/or sell copies of the Software,
 * and to permit persons to whom the Software is
 * furnished to do so, subject to the following
 * conditions:
 *
 * The above copyright notice, this permission
 * notice, and this ID (2y1pBoEREr3eWA1ubCCOXdmRCdn)
 * shall be included in all copies or
 * substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY
 * OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT
 * LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
 * IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS
 * BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
 * WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE,
 * ARISING FROM, OUT OF OR IN CONNECTION WITH THE
 * SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 * ****************************************************/

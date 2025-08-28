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

/////////////////////////////////////////////////////

class BittyJs extends HTMLElement {
  // TODO: Deprecate #hashString in favor of join approach
  #hashString = "#######################################";
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

  addEventListeners() {
    this.#listeners.forEach((listener) => {
      this.addEventListener(listener, (event) => {
        this.requestUpdate.call(this, event);
      });
    });
  }

  // TODO: Confirm this is deprecated and can
  // be removed
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

  addReceiver(key, el) {
    debug(`Adding receiver to: ${el.dataset.uuid}`);
    this.#receivers.push({
      key: key,
      f: (data) => {
        try {
          this.widget[`$${key}`](el, data);
        } catch (error) {
          console.error(error);
          console.error(`Tried: $${key}`);
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

  assembleErrorId(err) {
    const out = [];
    out.push(this.#hashString);
    out.push(`A BITTY ERROR OCCURRED [ID: ${err.id}]`);
    out.push(this.assembleErrorText(err.kind));
    const text = this.assembleErrorReplacedText(err, out.join("\n\n"));
    err.output.push(text);
  }

  // assembleErrorPrelude(err) {
  //   const out = []
  //   out.push(this.#hashString)
  //   out.push(`A BITTY ERROR OCCURRED`)
  //   const text = this.assembleErrorReplacedText(err, out.join('\n\n'))
  //   err.output.push(text)
  // }

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
      if (this.dataset.widget === undefined) {
        this.widget = new mod.default();
      } else {
        this.widget = new mod[this.dataset.widget]();
      }
    } else {
      this.error(2);
    }
  }

  async connectedCallback() {
    // TODO: Verify `async` on connectedCallback
    // works across browsers.
    //
    // TODO: Deprecate setId() once everything is
    // in setIds() (the plural)
    this.setIds();
    await this.attachWidget();
    if (this.widget === undefined) {
      this.error(0);
    } else {
      this.requestUpdate = this.handleChange.bind(this);
      this.loadReceivers();
      this.init();
      this.addEventListeners();
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
    if (event.target.dataset.batch !== undefined) {
      const batch = this.widget.batches[event.target.dataset.batch].join("|");
      this.sendUpdates(batch, event);
    }
    if (event.target.dataset.send !== undefined) {
      this.sendUpdates(event.target.dataset.send, event);
    }
  }

  init() {
    this.widget.bridge = this;
    if (this.widget.template !== undefined) {
      const skeleton = document.createElement("template");
      skeleton.innerHTML = this.widget.template();
      this.append(skeleton.content.cloneNode(true));
      this.loadReceivers();
    }
    if (this.widget.init !== undefined) {
      this.widget.init();
    }
    if (this.dataset.call !== undefined) {
      this.runFunctions(this.dataset.call, null);
    }
    if (this.dataset.send !== undefined) {
      this.sendUpdates(this.dataset.send, null);
    }
    if (this.dataset.batch !== undefined) {
      const batch = this.widget.batches[this.dataset.batch].join("|");
      this.sendUpdates(batch, null);
    }
    if (this.dataset.listeners !== undefined) {
      this.#listeners = this.dataset.listeners.split("|");
    }
  }

  isIgnored(name) {
    if (this.dataset.ignore === undefined) {
      return false;
    }
    return this.dataset.ignore.split("|").includes(name);
  }

  loadReceivers() {
    debug("loading receivers");
    this.#receivers = [];
    const els = this.querySelectorAll(`[data-recieve]`);
    els.forEach((el) => {
      el.dataset.recieve.split("|").forEach((key) => {
        this.addReceiver(key, el);
      });
    });
  }

  runFunctions(stringToSplit, event) {
    stringToSplit.split("|").forEach((f) => {
      if (this.isIgnored(f) === false) {
        try {
          this.widget[`_${f}`](event);
        } catch (error) {
          console.log(error);
          console.error(`Tried: _${f}`);
        }
      }
    });
  }

  sendUpdates(updates, data) {
    updates.split("|").forEach((key) => {
      if (this.isIgnored(key) === false) {
        this.#receivers.forEach((receiver) => {
          if (receiver.key === key) {
            receiver.f(data);
          }
        });
      }
    });
  }

  /*
  setId() {
    const uuid = self.crypto.randomUUID();
    debug(`Setting bitty-js ID to: ${uuid}`);
    this.dataset.uuid = uuid;
  }
  */

  setIds() {
    //const selector = ["r", "c", "s", "call", "send", "b", "batch"]
    const selector = ["batch", "call", "receive", "send"]
      .map((key) => {
        return `[data-${key}]`;
      })
      .join(",");
    const els = this.querySelectorAll(selector);
    els.forEach((el) => {
      if (el.dataset.uuid === undefined) {
        const uuid = self.crypto.randomUUID();
        debug(`Setting ${el.tagName} ID to: ${uuid}`);
        el.dataset.uuid = uuid;
      }
    });
  }
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
